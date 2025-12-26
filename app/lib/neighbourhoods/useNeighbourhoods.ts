'use client';

import { useEffect, useState } from 'react';
import { Neighbourhood } from '../definitions';
import { fetchNeighbourhoods } from './data';

export function useNeighbourhoods() {
  const [neighbourhoods, setNeighbourhoods] = useState<Neighbourhood[] | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadNeighbourhoods = async () => {
      try {
        setIsLoading(true);
        const data = await fetchNeighbourhoods();
        setNeighbourhoods(data);
      } catch (error) {
        console.error('Failed to load neighbourhoods:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadNeighbourhoods();
  }, []);

  return { neighbourhoods, isLoading };
}
