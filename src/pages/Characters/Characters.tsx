import { useEffect, useState } from 'react';
import { axios } from '../../../services/api/potterdb/axios.ts';
import { apiEndpoints } from '../../../services/api/potterdb/apiEndpoints.ts';
import { Character } from '../../types/Character.ts';
import { CharacterCard } from './components/CharacterCard.tsx';
import { SkeletonCard } from './components/SkeletonCard.tsx';

export function Characters() {
  const [characters, setCharacters] = useState<Character[]>();
  const [isLoading, setIsLoading] = useState(true);

  const loadingSkeletons = new Array(20).fill(0);

  useEffect(() => {
    axios
      .get(apiEndpoints.getCharacters())
      .then((res) => {
        setCharacters(res.data.data);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {!isLoading
          ? characters?.map((character, index) => <CharacterCard key={index} character={character} />)
          : loadingSkeletons.map((_, index) => <SkeletonCard key={index} />)}
      </div>
    </div>
  );
}
