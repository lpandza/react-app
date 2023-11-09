import { Link } from 'react-router-dom';
import { PathConstants } from '../../navigation/routes/PathConstants.ts';

export function NotFoundPage() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="mb-6 text-6xl font-bold text-gray-800">404</h1>
        <p className="mb-4 text-2xl text-gray-600">Page Not Found</p>
        <p className="mb-8 text-lg text-gray-600">Oops! The page you are looking for does not exist.</p>
        <Link
          to={PathConstants.HOMEPAGE}
          className="inline-block rounded bg-blue-600 px-6 py-2.5 text-white transition duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
