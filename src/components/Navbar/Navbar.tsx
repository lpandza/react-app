import { Link } from 'react-router-dom';
import { PathConstants } from '../../navigation/routes/PathConstants.ts';

export function Navbar() {
  return (
    <nav className="flex w-full items-center justify-between p-4 text-white">
      <div className="navbar-logo text-xl font-bold">Logo</div>
      <div className="flex gap-x-8">
        <Link to={PathConstants.HOMEPAGE} className="navbar-item pointer hover:text-gray-300">
          Home
        </Link>
        <Link to={PathConstants.CHARACTERS} className="navbar-item hover:text-gray-300">
          Characters
        </Link>
        <Link to={PathConstants.ABOUT} className="navbar-item hover:text-gray-300">
          About
        </Link>
      </div>
    </nav>
  );
}
