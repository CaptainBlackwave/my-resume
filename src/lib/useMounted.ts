'use client';

import { useSyncExternalStore } from 'react';

const emptySubscribe = () => () => {};

/**
 * Returns true after the component has mounted on the client.
 * Uses useSyncExternalStore to avoid SSR/hydration mismatches for
 * client-only values (e.g. theme).
 */
export function useMounted(): boolean {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}
