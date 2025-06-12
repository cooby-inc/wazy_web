'use client';
import useAmplitude, { ACTIONS } from '@/hooks/useAmplitude';
import { Center, Text } from '@chakra-ui/react';
import { useSearchParams } from 'next/navigation';
import { useEffect, useRef } from 'react';

export default function UninstallPage() {
  const { logEvent } = useAmplitude();
  const searchParams = useSearchParams();
  const isUsed = useRef(false);

  useEffect(() => {
    function checkComplete() {
      if (isUsed.current) return;
      isUsed.current = true;
      logEvent({
        action: ACTIONS.INSTALLED_EXTENSION,
        properties: {
          extensionVersion: searchParams.get('extensionVersion') || 'unknown',
          wawVersion: searchParams.get('wawVersion') || 'unknown',
          wid: searchParams.get('wid') || 'unknown',
          isDev: searchParams.get('isDev') || 'unknown',
        },
      });
    }

    if (document.readyState === 'complete' || document.readyState === 'interactive') {
      checkComplete();
    }
  }, []);

  return (
    <Center h="100svh" w="full" bg="#FFF">
      <Text fontFamily="Sora,sans-serif" fontSize="24px" fontWeight={400} color="#000">
        Say to see you leave. You may close the window now.
      </Text>
    </Center>
  );
}
