import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Character } from '../../../types/Character.ts';
import { axios } from '../../../services/api/potterdb/axios.ts';
import { apiEndpoints } from '../../../services/api/potterdb/apiEndpoints.ts';
import { CharacterDetailsSkeletonCard } from './CharacterDetailsSkeletonCard.tsx';
import { CharacterDetailsCard } from './CharacterDetailsCard.tsx';
import { ErrorMessage } from '../../../components/ErrorMessage.tsx';

export function CharactersDetailsContainer() {
  const { id } = useParams();
  const [character, setCharacter] = useState<Character>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get(apiEndpoints.characterDetails(id))
      .then((res) => setCharacter(res.data.data))
      .catch((err) => setError(err.response.data.errors[0].detail))
      .finally(() => setIsLoading(false));
  }, [id]);

  return isLoading ? (
    <CharacterDetailsSkeletonCard />
  ) : error ? (
    <ErrorMessage message={error} />
  ) : (
    <CharacterDetailsCard character={character!} />
  );
}
