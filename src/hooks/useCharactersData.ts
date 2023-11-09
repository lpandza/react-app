import { useCallback, useEffect, useState } from 'react';
import { axios } from '../services/api/potterdb/axios.ts';
import { Character } from '../types/Character.ts';
import { Links } from '../types/Pagination.ts';
import { apiEndpoints } from '../services/api/potterdb/apiEndpoints.ts';

export function useCharactersData() {
  const [characters, setCharacters] = useState<Character[]>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [links, setLinks] = useState<Links>();

  const getCharacters = useCallback((url: string) => {
    axios
      .get(url)
      .then((res) => {
        setCharacters(res.data.data);
        setLinks(res.data.links);
      })
      .catch((err) => setError(err.response.data.errors[0].detail))
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    getCharacters(apiEndpoints.GET_CHARACTERS);
  }, [getCharacters]);

  return {
    characters,
    links,
    isLoading,
    error,
    getCharacters,
  };
}
