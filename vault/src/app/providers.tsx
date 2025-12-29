'use client';

import type { ReactNode } from 'react';
import { Connect } from '@stacks/connect-react';

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
