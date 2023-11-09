import { RouteType } from '../../types/RouteType.ts';
import { Homepage } from '../../pages/Homepage/Hompage.tsx';
import { PathConstants } from './PathConstants.ts';
import { Characters } from '../../pages/Characters/Characters.tsx';
import { CharacterDetails } from '../../pages/CharacterDetails/CharacterDetails.tsx';
import { About } from '../../pages/About/About.tsx';
import { NotFoundPage } from '../../pages/NotFoundPage/NotFoundPage.tsx';

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
  {
    path: PathConstants.ABOUT,
    element: <About />,
    title: 'characters',
  },
  {
    path: '*',
    element: <NotFoundPage />,
    title: '404 Not Found',
  },
];
