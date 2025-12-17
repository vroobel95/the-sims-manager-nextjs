'use client';

import { useEffect, useState } from 'react';
import { Aspiration } from '../definitions';
import { fetchAspirations } from './data';

export function useAspirations() {
  const [aspirations, setAspirations] = useState<Aspiration[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadAspirations = async () => {
      try {
        setIsLoading(true);
        const data = await fetchAspirations();
        setAspirations(data);
      } catch (error) {
        console.error('Failed to load aspirations:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadAspirations();
  }, []);

  return { aspirations, isLoading };
}
