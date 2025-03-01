import { toast } from "sonner";
import { mintNFT } from "./mintNFT";
import { NFTContractAddress, account, client } from "./utils";
import { uploadJSONToIPFS } from "./uploadToIpfs";
import { createHash } from "crypto";

// Utility function to truncate an address
export const truncateAddress = (address: string) => {
  if (!address) return '';
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

// Utility function to format timestamp
export const formatTimestamp = (timestamp: number): string => {
  const date = new Date(timestamp);
  return date.toLocaleString(); // Formats it as a human-readable string based on user's locale
};

export interface VerifiedMedia {
  id: string;
  hash: string;
  creator: string;
  timestamp: number;
  title: string;
  description?: string;
  mediaUrl: string;
  thumbnailUrl?: string;
  verified: boolean;
}

export const registerMediaOnBlockchain = async (
  file: File,
  title: string,
  description: string,
  creator: string
): Promise<VerifiedMedia> => {
  try {
    // Generate file hash
    const fileBuffer = await file.arrayBuffer();
    const fileHash = createHash("sha256").update(Buffer.from(fileBuffer)).digest("hex");

    // Upload metadata to IPFS
    const ipMetadata = {
      title,
      description,
      createdAt: Date.now().toString(),
      creators: [{ name: creator, address: account.address, contributionPercent: 100 }],
      mediaUrl: URL.createObjectURL(file),
      mediaHash: `0x${fileHash}`,
      mediaType: file.type,
    };
    
    const ipIpfsHash = await uploadJSONToIPFS(ipMetadata);
    const ipHash = createHash("sha256").update(JSON.stringify(ipMetadata)).digest("hex");
    
    const nftMetadata = {
      name: title,
      description: `${description} This NFT represents ownership of the IP Asset.`,
      media: [{ name: title, url: URL.createObjectURL(file), mimeType: file.type }],
    };
    
    const nftIpfsHash = await uploadJSONToIPFS(nftMetadata);
    const nftHash = createHash("sha256").update(JSON.stringify(nftMetadata)).digest("hex");
    
    // Mint NFT
    const tokenId = await mintNFT(account.address, `https://ipfs.io/ipfs/${nftIpfsHash}`);
    console.log(`NFT minted with tokenId ${tokenId}`);

    // Register IP Asset on Story blockchain
    const response = await client.ipAsset.register({
      nftContract: NFTContractAddress,
      tokenId: tokenId!,
      ipMetadata: {
        ipMetadataURI: `https://ipfs.io/ipfs/${ipIpfsHash}`,
        ipMetadataHash: `0x${ipHash}`,
        nftMetadataURI: `https://ipfs.io/ipfs/${nftIpfsHash}`,
        nftMetadataHash: `0x${nftHash}`,
      },
      txOptions: { waitForTransaction: true },
    });

    console.log(`Root IPA created at transaction hash ${response.txHash}, IPA ID: ${response.ipId}`);
    console.log(`View on the explorer: https://aeneid.explorer.story.foundation/ipa/${response.ipId}`);

    return {
      id: `media-${Date.now()}`,
      hash: `0x${fileHash}`,
      creator,
      timestamp: Date.now(),
      title,
      description,
      mediaUrl: `https://ipfs.io/ipfs/${nftIpfsHash}`,
      verified: true,
    };
  } catch (error) {
    console.error("Failed to register media:", error);
    toast.error("Failed to register media on blockchain.");
    throw new Error("Blockchain registration failed");
  }
};
