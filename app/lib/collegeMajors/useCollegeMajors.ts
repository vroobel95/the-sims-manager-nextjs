'use client';

import { useEffect, useState } from 'react';
import { CollegeMajor } from '../definitions';
import { fetchCollegeMajors } from './data';

export function useCollegeMajors() {
  const [collegeMajors, setCollegeMajors] = useState<CollegeMajor[] | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadCollegeMajors = async () => {
      try {
        setIsLoading(true);
        const data = await fetchCollegeMajors();
        setCollegeMajors(data);
      } catch (error) {
        console.error('Failed to load college majors:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadCollegeMajors();
  }, []);

  return { collegeMajors, isLoading };
}
