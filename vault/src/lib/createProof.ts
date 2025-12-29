import { PostConditionMode, bufferCV, stringAsciiCV } from '@stacks/transactions';
import { CONTRACT_ADDRESS, CONTRACT_NAME, NETWORK } from './stacks';

export async function createProof(fileHash: Uint8Array, receiptUri: string) {
  if (fileHash.length !== 32) {
    throw new Error('fileHash must be 32 bytes');
  }

  if (receiptUri.length > 256) {
    throw new Error('receiptUri must be 256 chars or less');
  }

  const { openContractCall } = await import('@stacks/connect-react');
  await openContractCall({
    contractAddress: CONTRACT_ADDRESS,
    contractName: CONTRACT_NAME,
    functionName: 'create-proof',
    functionArgs: [bufferCV(fileHash), stringAsciiCV(receiptUri)],
    postConditionMode: PostConditionMode.Allow,
    network: NETWORK,
  });
}
