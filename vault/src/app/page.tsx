'use client';

import { useEffect, useState } from 'react';
import { createProof } from '@/lib/createProof';
import { getProof } from '@/lib/proofRegistry';

export const dynamic = 'force-dynamic';

export default function Home() {
  const [proof, setProof] = useState<unknown>(null);

  useEffect(() => {
    let isMounted = true;
    const loadProof = async () => {
      const result = await getProof(1);
      if (isMounted) {
        setProof(result);
      }
    };
    void loadProof();
    return () => {
      isMounted = false;
    };
  }, []);

  const handleCreateProof = async () => {
    const fakeHash = new Uint8Array(32);
    try {
      await createProof(fakeHash);
    } catch (err) {
      console.warn('createProof cancelled/rejected:', err);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <button
          type="button"
          onClick={handleCreateProof}
          className="rounded border border-black/[.08] px-4 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-black/[.04] dark:border-white/[.145] dark:text-zinc-50 dark:hover:bg-[#1a1a1a]"
        >
          Create Proof (Test)
        </button>

        <pre className="text-xs">{JSON.stringify(proof, null, 2)}</pre>
      </main>
    </div>
  );
}
