import { useEffect, useState } from 'react';
import { Character } from '../../../types/Character.ts';
import { axios } from '../../../services/api/potterdb/axios.ts';
import { apiEndpoints } from '../../../services/api/potterdb/apiEndpoints.ts';
import { CharacterCard } from './CharacterCard.tsx';
import { SkeletonCard } from './SkeletonCard.tsx';

export function CharacterList() {
  const [characters, setCharacters] = useState<Character[]>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(apiEndpoints.GET_CHARACTERS)
      .then((res) => {
        setCharacters(res.data.data);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  function renderCharacterCards() {
    return !isLoading
      ? characters?.map((character) => <CharacterCard key={character.id} character={character} />)
      : [...Array(40)].map((_, index) => <SkeletonCard key={index} />);
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {renderCharacterCards()}
      </div>
    </div>
  );
}
