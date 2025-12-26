'use client';

import { useEffect, useState } from 'react';
import { Career } from '../definitions';
import { fetchCareers } from './data';

export function useCareers() {
  const [careers, setCareers] = useState<Career[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadCareers = async () => {
      try {
        setIsLoading(true);
        const data = await fetchCareers();
        setCareers(data);
      } catch (error) {
        console.error('Failed to load careers:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadCareers();
  }, []);

  return { careers, isLoading };
}
