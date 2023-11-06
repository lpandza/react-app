import { routes } from './routes/routes.tsx';
import { RouteType } from '../types/RouteType.ts';
import { Route, Routes } from 'react-router-dom';

export function Router() {
  const pageRoutes = routes.map((route: RouteType) => {
    return <Route key={route.title} path={route.path} element={route.element} />;
  });

  return <Routes>{pageRoutes}</Routes>;
}
