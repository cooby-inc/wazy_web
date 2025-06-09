'use client';

import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return <ChakraProvider value={defaultSystem}>{children}</ChakraProvider>;
}
