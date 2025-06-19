import React from 'react';

const SkeletonCard = () => (
  <div className="relative w-full aspect-[4/5] rounded-2xl bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 overflow-hidden animate-pulse">
    <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 opacity-60" />
  </div>
);

const SkeletonGrid = ({ count = 12 }) => (
  <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-4 gap-6 w-full max-w-[1800px] mx-auto">
    {Array.from({ length: count }).map((_, i) => (
      <div key={i} className="mb-6 break-inside-avoid">
        <SkeletonCard />
      </div>
    ))}
  </div>
);

export default SkeletonGrid;
