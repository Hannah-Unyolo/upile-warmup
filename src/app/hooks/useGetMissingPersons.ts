import { useState, useEffect } from 'react';

interface MissingPerson {
  id: number;
  name: string;
  age: number;
  gender: string;
  last_seen: string;
  description: string;
  image?: string;
}

export const useMissingPersons = () => {
  const [missingPersons, setMissingPersons] = useState<MissingPerson[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMissingPersons = async () => {
      try {
        const response = await fetch('/api/missing_persons');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: MissingPerson[] = await response.json();
        setMissingPersons(data);
        setIsLoading(false);
      } catch (error) {
        setError('Failed to fetch missing persons data');
        setIsLoading(false);
      }
    };

    fetchMissingPersons();
  }, []);

  return { missingPersons, isLoading, error };
}