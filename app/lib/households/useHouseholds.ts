'use client';

import { useEffect, useState } from 'react';
import { Household } from '../definitions';
import { fetchHouseholds } from './data';

export function useHouseholds() {
  const [households, setHouseholds] = useState<Household[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const loadHouseholds = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await fetchHouseholds();
        setHouseholds(data);
      } catch (err) {
        const error = err instanceof Error ? err : new Error('Unknown error');
        console.error('Failed to load households:', error);
        setError(error);
        setHouseholds([]);
      } finally {
        setIsLoading(false);
      }
    };

    loadHouseholds();
  }, []);

  return { households, isLoading, error };
}
