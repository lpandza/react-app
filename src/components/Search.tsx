import React, { useState } from 'react';
import { useCharactersContext } from '../contexts/CharactersContext.tsx';
import { apiEndpoints } from '../services/api/potterdb/apiEndpoints.ts';

type SerachProps = {
  handleSearch?: () => void;
};

export function Search() {
  const { getCharacters } = useCharactersContext();
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    getCharacters(apiEndpoints.getCharactersByName(searchTerm));
  };

  return (
    <div className="my-8 flex justify-center">
      <form className="flex w-full max-w-lg" onSubmit={handleSearch}>
        <input
          type="text"
          className="border-gold-color focus:border-gold-color focus:ring-gold-color flex-1 rounded-l-md border-2 py-2 pl-4 pr-3 transition duration-200 ease-in-out focus:outline-none focus:ring-1"
          placeholder="Search for characters..."
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="border-gold-color bg-gold-color focus:border-gold-color focus:ring-gold-color rounded-r-md border-2 px-6 py-2 text-sm font-semibold text-white transition duration-200 ease-in-out hover:bg-opacity-90 focus:outline-none focus:ring-1"
        >
          Search
        </button>
      </form>
    </div>
  );
}
