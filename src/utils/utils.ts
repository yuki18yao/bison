import { LicenseTerms, StoryClient, StoryConfig, WIP_TOKEN_ADDRESS } from '@story-protocol/core-sdk'
import { http, zeroAddress, zeroHash } from 'viem'
import { privateKeyToAccount, Address, Account } from 'viem/accounts'
// import * as dotenv from 'dotenv'
import { LicensingConfig } from '@story-protocol/core-sdk/dist/declarations/src/types/common'
// dotenv.config()

// Access environment variables using Vite's import.meta.env
const RPC_PROVIDER_URL = import.meta.env.VITE_RPC_PROVIDER_URL

// Export the RPC provider URL from Vite's environment variables
export const RPCProviderUrl = RPC_PROVIDER_URL

// Add your private key to your .env file.
const envPrivateKey = import.meta.env.VITE_WALLET_PRIVATE_KEY || import.meta.env.WALLET_PRIVATE_KEY
const privateKey = envPrivateKey.startsWith('0x') ? envPrivateKey : `0x${envPrivateKey}` as `0x${string}`
export const account: Account = privateKeyToAccount(privateKey)
const config: StoryConfig = {
    account: account,
    transport: http(RPCProviderUrl),
    chainId: 'aeneid',
}
export const client = StoryClient.newClient(config)

// This is a pre-configured PIL Flavor: https://docs.story.foundation/docs/pil-flavors
export const NonCommercialSocialRemixingTermsId = '1'

// A NFT contract address that will be used to represent your IP Assets
export const NFTContractAddress: Address = '0x937bef10ba6fb941ed84b8d249abc76031429a9a'
export const SPGNFTContractAddress: Address ='0xc32A8a0FF3beDDDa58393d022aF433e78739FAbc'

// Docs: https://docs.story.foundation/docs/deployed-smart-contracts
export const RoyaltyPolicyLAP: Address = '0xBe54FB168b3c982b7AaE60dB6CF75Bd8447b390E'

export function createCommercialRemixTerms(terms: { commercialRevShare: number; defaultMintingFee: number }): LicenseTerms {
    return {
        transferable: true,
        royaltyPolicy: RoyaltyPolicyLAP,
        defaultMintingFee: BigInt(terms.defaultMintingFee),
        expiration: BigInt(0),
        commercialUse: true,
        commercialAttribution: true,
        commercializerChecker: zeroAddress,
        commercializerCheckerData: zeroAddress,
        commercialRevShare: terms.commercialRevShare,
        commercialRevCeiling: BigInt(0),
        derivativesAllowed: true,
        derivativesAttribution: true,
        derivativesApproval: false,
        derivativesReciprocal: true,
        derivativeRevCeiling: BigInt(0),
        currency: WIP_TOKEN_ADDRESS,
        uri: '',
    }
}

export const defaultLicensingConfig: LicensingConfig = {
    isSet: false,
    mintingFee: BigInt(0),
    licensingHook: zeroAddress,
    hookData: zeroHash,
    commercialRevShare: 0,
    disabled: false,
    expectMinimumGroupRewardShare: 0,
    expectGroupRewardPool: zeroAddress,
}