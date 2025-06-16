function SearchBar({ value, onChange, onClick }) {
  return (
    <div className="flex w-full max-w-xl">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search for photos..."
        className="flex-1 px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        onClick={onClick}
        className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-r-md hover:bg-blue-700 transition"
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
