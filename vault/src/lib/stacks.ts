import { createNetwork } from '@stacks/network';

const networkName = process.env.NEXT_PUBLIC_STACKS_NETWORK === 'mainnet' ? 'mainnet' : 'testnet';
export const NETWORK = createNetwork(networkName);

export const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS!;
export const CONTRACT_NAME = 'proof-registry';
