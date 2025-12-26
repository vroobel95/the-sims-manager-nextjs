'use client';

import { useEffect, useState } from 'react';
import { Chemistry } from '../definitions';
import { fetchChemistries } from './data';

export function useChemistries() {
  const [chemistries, setChemistries] = useState<Chemistry[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadChemistries = async () => {
      try {
        setIsLoading(true);
        const data = await fetchChemistries();
        setChemistries(data);
      } catch (error) {
        console.error('Failed to load chemistries:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadChemistries();
  }, []);

  return { chemistries, isLoading };
}
