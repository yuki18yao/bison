
import { toast } from "sonner";

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

// Simulate blockchain hash generation
export const generateHash = (file: File): Promise<string> => {
  return new Promise((resolve) => {
    // In a real app, this would use SHA-256 or similar to create a hash
    // For demo purposes, we'll simulate a hash
    setTimeout(() => {
      const fileHash = Array(64)
        .fill(0)
        .map(() => Math.floor(Math.random() * 16).toString(16))
        .join("");
      resolve(fileHash);
    }, 1500);
  });
};

// Simulated database of verified media
let verifiedMediaDb: VerifiedMedia[] = [
  {
    id: "media-001",
    hash: "8f7d56a1c8b9e0d2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6",
    creator: "0x1234567890123456789012345678901234567890",
    timestamp: Date.now() - 86400000 * 2, // 2 days ago
    title: "Official Press Statement",
    description: "Authenticated statement on current events",
    mediaUrl: "https://picsum.photos/seed/picsum/800/450",
    thumbnailUrl: "https://picsum.photos/seed/picsum/200/112",
    verified: true,
  },
  {
    id: "media-002",
    hash: "a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2",
    creator: "0x0987654321098765432109876543210987654321",
    timestamp: Date.now() - 86400000 * 5, // 5 days ago
    title: "Product Launch Announcement",
    description: "Verified product announcement video",
    mediaUrl: "https://picsum.photos/seed/product/800/450",
    thumbnailUrl: "https://picsum.photos/seed/product/200/112",
    verified: true,
  },
];

export const registerMediaOnBlockchain = async (
  file: File,
  title: string,
  description: string,
  creator: string
): Promise<VerifiedMedia> => {
  try {
    // Generate hash for the file
    const hash = await generateHash(file);

    // In a real app, this would interact with a smart contract
    // For demo purposes, we'll simulate the process
    
    // Create object URL for the file to simulate media URL
    const mediaUrl = URL.createObjectURL(file);
    
    // Create a new verified media entry
    const newMedia: VerifiedMedia = {
      id: `media-${Date.now()}`,
      hash,
      creator,
      timestamp: Date.now(),
      title,
      description,
      mediaUrl,
      verified: true,
    };
    
    // Add to our simulated database
    verifiedMediaDb = [...verifiedMediaDb, newMedia];
    
    // Simulate blockchain transaction delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    return newMedia;
  } catch (error) {
    console.error("Failed to register media:", error);
    throw new Error("Failed to register media on blockchain");
  }
};

export const verifyMedia = async (file: File): Promise<VerifiedMedia | null> => {
  try {
    // Generate hash for the uploaded file
    const hash = await generateHash(file);
    
    // Search our simulated database for a matching hash
    const foundMedia = verifiedMediaDb.find(media => media.hash === hash);
    
    // Simulate verification delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    return foundMedia || null;
  } catch (error) {
    console.error("Failed to verify media:", error);
    toast.error("Failed to verify media. Please try again.");
    return null;
  }
};

export const truncateAddress = (address: string): string => {
  if (!address) return '';
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

export const formatTimestamp = (timestamp: number): string => {
  return new Date(timestamp).toLocaleString();
};
