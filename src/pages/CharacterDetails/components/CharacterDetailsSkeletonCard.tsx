import React from 'react';

export function CharacterDetailsSkeletonCard() {
  return (
    <div className="container mx-auto max-w-2xl animate-pulse rounded-lg bg-white p-4 shadow-xl">
      <div className="flex flex-col items-center">
        <div className="mb-6 h-64 w-64 rounded-full bg-gray-300" />
        <div className="mt-4 h-8 w-48 rounded bg-gray-300" />
      </div>
      <div className="mt-6 rounded-lg bg-gray-100 p-6">
        <div className="grid grid-cols-2 gap-4 text-lg">
          {Array.from({ length: 9 }).map((_, index) => (
            <React.Fragment key={index}>
              <div className="col-span-1 h-4 rounded bg-gray-300" />
              <div className="col-span-1 h-4 rounded bg-gray-300" />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
