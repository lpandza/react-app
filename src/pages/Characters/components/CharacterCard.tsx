import defaultAvatar from '../../../assets/default_avatar.svg';
import { Character } from '../../../types/Character.ts';

type CharacterCardProps = {
  character: Character;
};

export function CharacterCard({ character }: CharacterCardProps) {
  return (
    <div className="transform cursor-pointer overflow-hidden rounded-2xl bg-white shadow-lg transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:shadow-2xl">
      <div className="flex justify-center p-6">
        <img
          src={character.attributes.image || defaultAvatar}
          alt={character.attributes.name}
          className="h-32 w-32 rounded-full border-4 border-gold-color object-cover"
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="text-lg font-bold">{character.attributes.name}</h3>
        <p className="text-gray-600">{character.attributes.house}</p>
      </div>
    </div>
  );
}
