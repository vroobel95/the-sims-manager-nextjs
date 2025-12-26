'use client';

import { useEffect, useState } from 'react';
import { ZodiacSign } from '../definitions';
import { fetchZodiacSigns } from './data';

export function useZodiacSigns() {
  const [zodiacSigns, setZodiacSigns] = useState<ZodiacSign[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadZodiacSigns = async () => {
      try {
        setIsLoading(true);
        const data = await fetchZodiacSigns();
        setZodiacSigns(data);
      } catch (error) {
        console.error('Failed to load zodiac signs:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadZodiacSigns();
  }, []);

  return { zodiacSigns, isLoading };
}
