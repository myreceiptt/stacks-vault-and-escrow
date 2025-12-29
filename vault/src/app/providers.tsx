'use client';

import type { ReactNode } from 'react';
import dynamic from 'next/dynamic';

const Connect = dynamic(() => import('@stacks/connect-react').then((mod) => mod.Connect), {
  ssr: false,
});

export function Providers({ children }: { children: ReactNode }) {
  return (
    <Connect
      authOptions={{
        appDetails: {
          name: 'Stacks Vault',
          icon: '/favicon.ico',
        },
      }}
    >
      {children}
    </Connect>
  );
}
