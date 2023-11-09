import React, { createContext, useContext, useMemo, useState } from 'react';
import { Character } from '../types/Character.ts';
import { Links } from '../types/Pagination.ts';

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
};

const defaultLinks = { current: '', last: '', self: '', next: '', prev: '' };
const CharactersContext = createContext<CharactersContextType | null>(null);

export function CharactersContextProvider({ children }: CharactersContextProviderProps) {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [links, setLinks] = useState<Links>(defaultLinks);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
    }),
    [characters, links, isLoading, error],
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
