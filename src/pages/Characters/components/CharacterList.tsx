import { CharacterCard } from './CharacterCard.tsx';
import { SkeletonCard } from './SkeletonCard.tsx';
import { ErrorMessage } from '../../../components/ErrorMessage.tsx';
import { Pagination } from '../../../components/Pagination/Pagination.tsx';
import { useCharactersData } from '../../../hooks/useCharactersData.ts';
import { useCallback } from 'react';

export function CharacterList() {
  const { characters, isLoading, error, links, getCharacters } = useCharactersData();

  const handlePageChange = useCallback(
    (newUrl: string) => {
      getCharacters(newUrl);
    },
    [getCharacters],
  );

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
      <Pagination prev={links?.prev} next={links?.next} current={links?.current} onPageChange={handlePageChange} />
    </div>
  );
}
