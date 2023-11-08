import { RouteType } from '../../types/RouteType.ts';
import { Homepage } from '../../pages/Homepage/Hompage.tsx';
import { PathConstants } from './PathConstants.ts';
import { Characters } from '../../pages/Characters/Characters.tsx';
import { CharacterDetails } from '../../pages/CharacterDetails/CharacterDetails.tsx';

export const routes: RouteType[] = [
  {
    path: PathConstants.HOMEPAGE,
    element: <Homepage />,
    title: 'home',
  },
  {
    path: PathConstants.CHARACTERS,
    element: <Characters />,
    title: 'characters',
  },
  {
    path: PathConstants.CHARACTERS_DETAILS,
    element: <CharacterDetails />,
    title: 'characters',
  },
];
