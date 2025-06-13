'use client';

import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import { ReactNode, Suspense } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Suspense fallback={<div></div>}>
      <ChakraProvider value={defaultSystem}>{children}</ChakraProvider>
    </Suspense>
  );
}
