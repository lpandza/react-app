export type CharacterAttributes = {
  alias_names: string[];
  animagus: string;
  born: string;
  died: string;
  house: string;
  image: string;
  jobs: string[];
  name: string;
  patronus: string;
  slug: string;
  wands: string[];
  blood_status: string;
  titles: string[];
  species: string;
};

export type Character = {
  attributes: CharacterAttributes;
  id: string;
  type: string;
};
