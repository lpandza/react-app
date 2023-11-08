import { CharacterAttributes } from '../../../types/Character.ts';
import { CharacterAttribute } from './CharacterAttribute.tsx';
import { characterAttributeLabels } from '../../Characters/characterConstants.ts';

type CharacterInfoProps = {
  characterAttributes: CharacterAttributes;
};

export function CharacterInfo({ characterAttributes }: CharacterInfoProps) {
  return (
    <div className="rounded-lg bg-gray-100 p-6">
      <div className="grid grid-cols-2 gap-4 text-lg">
        {Object.entries(characterAttributeLabels).map(([key, label]) => {
          const value = characterAttributes[key as keyof CharacterAttributes];
          return <CharacterAttribute key={key} label={label} value={value} />;
        })}
      </div>
    </div>
  );
}
