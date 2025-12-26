'use client';

import { useEffect, useState } from 'react';
import { fetchResidentialLots } from './data';

export function useResidentialLots() {
  const [lots, setLots] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadLots = async () => {
      try {
        setIsLoading(true);
        const data = await fetchResidentialLots();
        setLots(data);
      } catch (err) {
        console.warn('Failed to load residential lots:', err);
        setLots([]);
      } finally {
        setIsLoading(false);
      }
    };

    loadLots();
  }, []);

  return { lots, isLoading };
}
