import React from 'react';

function SearchBar({ value, onChange, onClick }) {
  return (
    <div className="flex w-full max-w-xl shadow-lg rounded-lg overflow-hidden bg-white">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search for photos..."
        className="flex-1 px-5 py-3 text-lg rounded-l-lg border-none focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50"
      />
      <button
        onClick={onClick}
        className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-r-lg hover:from-blue-700 hover:to-indigo-700 transition-all shadow"
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
