import React from "react";
import { useState } from "react";
import { Header, Footer, SearchBar, PhotoGrid } from "./index";

const Body = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const perPage = 60;

  const fetchPhotos = async (query, pageNum = 1, append = false) => {
    const apiKey = import.meta.env.VITE_PEXELS_API_KEY;
    const url = `https://api.pexels.com/v1/search?query=${query}&page=${pageNum}&per_page=${perPage}`;

    setLoading(true);
    try {
      const response = await fetch(url, {
        headers: { Authorization: apiKey },
      });
      if (!response.ok) throw new Error(`Error: ${response.status}`);
      const data = await response.json();
      console.log(data); // data print karneki jarurat nhi

      const newPhotos = data.photos || [];
      setPhotos((prev) => (append ? [...prev, ...newPhotos] : newPhotos));
      setHasMore(data.total_results > pageNum * perPage);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching photos:", error);
      setPhotos([]);
      setHasMore(false);
      setLoading(false);
    }
  };
  const handleSearch = () => {
    if (searchQuery.trim()) {
      setPage(1);
      fetchPhotos(searchQuery.trim(), 1);
    }
  };

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchPhotos(searchQuery.trim(), nextPage, true);
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 flex flex-col">
      <main className="flex flex-col items-center flex-1 px-4 py-12">
        <h2 className="text-4xl font-extrabold mb-8 drop-shadow">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 inline-block transform hover:scale-105 transition-transform duration-300">
            Discover Amazing Photos
            <span className="block text-lg font-medium mt-1 text-gray-700">Free high-quality images for every inspiration</span>
          </span>
        </h2>
        <SearchBar
          value={searchQuery}
          onChange={handleInputChange}
          onClick={handleSearch}
        />
        <div className="w-full max-w-6xl mt-10">
          {loading && photos.length === 0 ? (
            <p className="text-center text-gray-600 text-lg">Loading...</p>
          ) : photos.length === 0 ? (
            <p className="text-center text-gray-500 text-lg">
              No photos found. Try a different search term.
            </p>
          ) : (
            <PhotoGrid photos={photos} />
          )}
        </div>
        {hasMore && !loading && photos.length > 0 && (
          <button
            onClick={handleLoadMore}
            className="mt-8 px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg text-lg font-semibold"
          >
            Load More
          </button>
        )}
        {loading && photos.length > 0 && (
          <p className="text-center text-gray-600 mt-4 text-lg">
            Loading more photos...
          </p>
        )}
      </main>
    </div>
  );
};

export default Body;
