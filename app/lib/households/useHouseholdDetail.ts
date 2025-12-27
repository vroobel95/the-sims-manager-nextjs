'use client';

import { useEffect, useState } from 'react';
import { HouseholdDetailResponse } from '../definitions';
import { fetchHouseholdDetail } from './data';

export function useHouseholdDetail(id: string) {
  const [household, setHousehold] = useState<HouseholdDetailResponse | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const loadHouseholdDetail = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await fetchHouseholdDetail(id);
        setHousehold(data);
      } catch (err) {
        const error = err instanceof Error ? err : new Error('Unknown error');
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    loadHouseholdDetail();
  }, [id]);

  return { household, isLoading, error };
}
