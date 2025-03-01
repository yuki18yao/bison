import { PinataSDK } from 'pinata-web3'
const pinata = new PinataSDK({
    pinataJwt: import.meta.env.VITE_PINATA_JWT,
})

export async function uploadJSONToIPFS(jsonMetadata: any): Promise<string> {
    const { IpfsHash } = await pinata.upload.json(jsonMetadata)
    return IpfsHash
}

// Upload files to IPFS
export async function uploadFileToIPFS(file: File): Promise<string> {
    const { IpfsHash } = await pinata.upload.file(file)
    return IpfsHash
}