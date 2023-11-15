import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { Character } from '../types/Character.ts';
import { Links } from '../types/Pagination.ts';
import { axios } from '../services/api/potterdb/axios.ts';

type CharactersContextProviderProps = {
  children: React.ReactNode;
};

type CharactersContextType = {
  characters: Character[];
  links: Links;
  isLoading: boolean;
  error: string | null;
  setCharacters: React.Dispatch<React.SetStateAction<Character[]>>;
  setLinks: React.Dispatch<React.SetStateAction<Links>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
  getCharacters: (url: string) => void;
};

const CharactersContext = createContext<CharactersContextType | null>(null);

export function CharactersContextProvider({ children }: CharactersContextProviderProps) {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [links, setLinks] = useState<Links>({} as Links);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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

  const contextValue = useMemo(
    () => ({
      characters,
      links,
      isLoading,
      error,
      setCharacters,
      setLinks,
      setIsLoading,
      setError,
      getCharacters,
    }),
    [characters, links, isLoading, error, getCharacters],
  );

  return <CharactersContext.Provider value={contextValue}>{children}</CharactersContext.Provider>;
}

export function useCharactersContext() {
  const context = useContext(CharactersContext);
  if (!context) {
    throw new Error('CharactersContext must be used within a CharactersContextProvider');
  }
  return context;
}
