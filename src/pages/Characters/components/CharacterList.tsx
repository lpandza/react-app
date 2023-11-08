import { useEffect, useState } from 'react';
import { Character } from '../../../types/Character.ts';
import { axios } from '../../../services/api/potterdb/axios.ts';
import { apiEndpoints } from '../../../services/api/potterdb/apiEndpoints.ts';
import { CharacterCard } from './CharacterCard.tsx';
import { SkeletonCard } from './SkeletonCard.tsx';
import { ErrorMessage } from '../../../components/ErrorMessage.tsx';

export function CharacterList() {
  const [characters, setCharacters] = useState<Character[]>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get(apiEndpoints.GET_CHARACTERS)
      .then((res) => {
        setCharacters(res.data.data);
      })
      .catch((err) => setError(err.response.data.errors[0].detail))
      .finally(() => setIsLoading(false));
  }, []);

  function renderCharacterCards() {
    if (isLoading) {
      return [...Array(40)].map((_, index) => <SkeletonCard key={index} />);
    }

    if (error) {
      return <ErrorMessage message={error} />;
    }

    return characters?.map((character) => <CharacterCard key={character.id} character={character} />);
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {renderCharacterCards()}
      </div>
    </div>
  );
}
