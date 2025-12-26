'use client';

import { useEffect, useState } from 'react';
import { Hobby } from '../definitions';
import { fetchHobbies } from './data';

export function useHobbies() {
  const [hobbies, setHobbies] = useState<Hobby[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadHobbies = async () => {
      try {
        setIsLoading(true);
        const data = await fetchHobbies();
        setHobbies(data);
      } catch (error) {
        console.error('Failed to load hobbies:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadHobbies();
  }, []);

  return { hobbies, isLoading };
}
