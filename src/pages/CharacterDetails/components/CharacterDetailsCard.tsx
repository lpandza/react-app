import defaultAvatar from '../../../assets/default_avatar.svg';
import { Character } from '../../../types/Character.ts';
import { CharacterInfo } from './CharacterInfo.tsx';

type CharacterDetailsCardProps = {
  character: Character;
};

export function CharacterDetailsCard({ character }: CharacterDetailsCardProps) {
  return (
    <div className="container mx-auto max-w-2xl rounded-lg bg-white p-4 shadow-xl">
      <div className="flex flex-col items-center">
        <img
          src={character?.attributes.image || defaultAvatar}
          alt={character?.attributes.name}
          className="mb-6 h-64 w-64 rounded-full object-cover shadow-lg"
        />
        <h1 className="mb-4 text-3xl font-bold">{character?.attributes.name}</h1>
      </div>
      <CharacterInfo characterAttributes={character.attributes} />
    </div>
  );
}
