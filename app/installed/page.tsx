'use client';
import { WHATSAPP_WEB_LINK } from '@/constants';
import useAmplitude, { ACTIONS } from '@/hooks/useAmplitude';
import { Center, HStack, Spinner, Text } from '@chakra-ui/react';
import { useCallback, useEffect } from 'react';

function redirectWithTrackingParams(url: string) {
  const a = document.createElement('a');
  a.href = url;
  document.body.appendChild(a);
  const clickEvent = new MouseEvent('mousedown', {
    bubbles: true,
    cancelable: true,
  });
  a.dispatchEvent(clickEvent);
  a.click();
}

export default function InstallPage() {
  const { logEvent } = useAmplitude();
  const redirectAfterTracking = useCallback(() => {
    redirectWithTrackingParams(WHATSAPP_WEB_LINK);
  }, []);

  useEffect(
    function sendTrackingEvent() {
      const idleTimer = setTimeout(function onIdle() {
        redirectAfterTracking();
      }, 10 * 1000);

      function checkComplete() {
        clearTimeout(idleTimer);
        redirectAfterTracking();
      }

      window?.dataLayer?.push({
        event: ACTIONS.INSTALLED_EXTENSION,
        eventCallback: checkComplete,
        eventTimeout: 10 * 1000,
      });

      logEvent({
        action: ACTIONS.INSTALLED_EXTENSION,
      })?.then(checkComplete);

      return () => {
        clearTimeout(idleTimer);
      };
    },
    [logEvent, redirectAfterTracking],
  );

  return (
    <Center height="100svh" bg="#FFF">
      <HStack gap="4">
        <Spinner size="lg" color="#000" textDecorationThickness="4px" />
        <Text color="#000" fontSize="16px" fontWeight={400} fontFamily="Sora,sans-serif">
          Redirecting...
        </Text>
      </HStack>
    </Center>
  );
}
