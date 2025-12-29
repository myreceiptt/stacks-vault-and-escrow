import { bufferCV, stringAsciiCV } from '@stacks/transactions';
import { CONTRACT_ADDRESS, CONTRACT_NAME } from './stacks';

export async function createProof(fileHash: Uint8Array) {
  const { openContractCall } = await import('@stacks/connect-react');
  await openContractCall({
    contractAddress: CONTRACT_ADDRESS,
    contractName: CONTRACT_NAME,
    functionName: 'create-proof',
    functionArgs: [bufferCV(fileHash), stringAsciiCV('receipt://placeholder')],
    postConditionMode: 1, // Allow
  });
}
