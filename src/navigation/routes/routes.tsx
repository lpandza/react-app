import { RouteType } from '../../types/RouteType.ts';
import { Homepage } from '../../pages/Homepage/Hompage.tsx';
import { PathConstants } from './PathConstants.ts';

export const routes: RouteType[] = [
  {
    path: PathConstants.HOMEPAGE,
    element: <Homepage />,
    title: 'home',
  },
];
