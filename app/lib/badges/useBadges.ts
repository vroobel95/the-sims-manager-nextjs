'use client';

import { useEffect, useState } from 'react';
import { Badge } from '../definitions';
import { fetchBadges } from './data';

export function useBadges() {
  const [badges, setBadges] = useState<Badge[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadBadges = async () => {
      try {
        setIsLoading(true);
        const data = await fetchBadges();
        setBadges(data);
      } catch (error) {
        console.error('Failed to load badges:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadBadges();
  }, []);

  return { badges, isLoading };
}
