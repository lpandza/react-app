type PaginationProps = {
  prev: string | undefined;
  next: string | undefined;
  current: string | undefined;
  onPageChange: (newPageLink: string) => void;
};

export function Pagination({ prev, next, onPageChange }: PaginationProps) {
  return (
    <nav className="mt-4 flex justify-center">
      <ul className="inline-flex -space-x-px">
        {prev && (
          <li>
            <button
              onClick={() => onPageChange(prev)}
              className="„hover:text-blue-600rounded-l-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100"
            >
              Previous
            </button>
          </li>
        )}
        {next && (
          <li>
            <button
              onClick={() => onPageChange(next)}
              className="rounded-r-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100 hover:text-blue-600"
            >
              Next
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}
