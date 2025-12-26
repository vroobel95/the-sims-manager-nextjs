'use client';

import { useEffect, useState } from 'react';
import { LifetimeWant } from '../definitions';
import { fetchLifetimeWants } from './data';

export function useLifetimeWants() {
  const [lifetimeWants, setLifetimeWants] = useState<LifetimeWant[] | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadLifetimeWants = async () => {
      try {
        setIsLoading(true);
        const data = await fetchLifetimeWants();
        setLifetimeWants(data);
      } catch (error) {
        console.error('Failed to load lifetime wants:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadLifetimeWants();
  }, []);

  return { lifetimeWants, isLoading };
}
