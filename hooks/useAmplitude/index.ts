import { env } from '@/constants';
import * as amplitude from '@amplitude/analytics-browser';
import { useCallback } from 'react';

const isProduction = process.env.NODE_ENV === 'production';

async function initAmplitude() {
  if (!env.NEXT_PUBLIC_AMPLITUDE_API_KEY) {
    console.warn('Amplitude API key is not set');
    return;
  }

  amplitude.init(env.NEXT_PUBLIC_AMPLITUDE_API_KEY, {
    appVersion: env.APP_VERSION,
    defaultTracking: true,
  });
}

export const ACTIONS = {
  INSTALLED_EXTENSION: 'installed_extension',
  UNINSTALLED_EXTENSION: 'uninstalled_extension',
};

type EventKeys = keyof typeof ACTIONS;
type EventValues = (typeof ACTIONS)[EventKeys];

type LogEventFn = (payload: {
  action: EventValues;
  properties?: Record<string, unknown>;
}) => Promise<void>;

let hasInitialized = false;

function useAmplitude() {
  const logEvent: LogEventFn = useCallback(async (payload) => {
    if (!isProduction) {
      console.log('[Event logging]', payload);
      return;
    }

    if (!payload.action) return;

    if (!hasInitialized) {
      await initAmplitude();
      hasInitialized = true;
    }

    const { action, properties = {} } = payload;

    amplitude.logEvent(action, properties);
  }, []);

  return { logEvent };
}

export default useAmplitude;
