type ErrorMessageProps = {
  message: string;
};

export function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className="py-4 text-center">
      <div className="inline-flex items-center rounded bg-red-100 px-4 py-3 text-sm font-bold text-red-800">
        <svg className="mr-2 h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10zm0-15a1 1 0 011 1v6a1 1 0 11-2 0V6a1 1 0 011-1zm0 9a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
        </svg>
        <p className="text-lg">{message}</p>
      </div>
    </div>
  );
}
