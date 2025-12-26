'use client';

import { useEffect, useState } from 'react';
import { fetchHouseholdDetail } from './data';

export function useHouseholdDetail(id: string) {
  const [household, setHousehold] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const loadHouseholdDetail = async () => {
      try {
        console.log('useHouseholdDetail - loading id:', id);
        setIsLoading(true);
        setError(null);
        const data = await fetchHouseholdDetail(id);
        setHousehold(data);
      } catch (err) {
        const error = err instanceof Error ? err : new Error('Unknown error');
        console.error('Failed to load household detail:', error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    loadHouseholdDetail();
  }, [id]);

  return { household, isLoading, error };
}
