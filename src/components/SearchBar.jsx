import React from 'react';

function SearchBar({ value, onChange, onClick }) {
  return (
    <div className="flex w-full max-w-xl shadow-lg rounded-lg overflow-hidden bg-white flex-col xs:flex-row">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search for photos..."
        className="flex-1 px-4 py-2 text-base xs:text-lg rounded-t-lg xs:rounded-l-lg xs:rounded-t-none border-none focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50"
      />
      <div className="w-0 xs:w-1 bg-gray-100"></div> {/* Separator for horizontal layout */}
      <button
        onClick={onClick}
        className="w-full xs:w-auto px-6 py-2 xs:px-8 xs:py-3 mt-1 xs:mt-0 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-b-lg xs:rounded-r-lg xs:rounded-b-none hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-[1.03] active:scale-95 shadow-md hover:shadow-xl hover:shadow-blue-500/40 focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 outline-none relative overflow-hidden group"
        aria-label="Search"
      >
        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-400/20 to-indigo-400/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
        <span className="relative inline-flex items-center font-bold">
          Search
          <svg className="w-0 h-0 xs:w-5 xs:h-5 ml-0 xs:ml-2 transition-all duration-300 ease-in-out transform group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </span>
      </button>
    </div>
  );
}

export default SearchBar;
