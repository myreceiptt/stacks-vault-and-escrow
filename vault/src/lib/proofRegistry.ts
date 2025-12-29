import { cvToJSON, fetchCallReadOnlyFunction, uintCV } from '@stacks/transactions';
import { NETWORK, CONTRACT_ADDRESS, CONTRACT_NAME } from './stacks';

export async function getProof(id: number) {
  try {
    const result = await fetchCallReadOnlyFunction({
      contractAddress: CONTRACT_ADDRESS,
      contractName: CONTRACT_NAME,
      functionName: 'get-proof',
      functionArgs: [uintCV(BigInt(id))],
      network: NETWORK,
      senderAddress: CONTRACT_ADDRESS,
    });

    return cvToJSON(result);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return { error: message };
  }
}
