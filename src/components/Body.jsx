/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { SearchBar, PhotoGrid } from "./index";
import Spinner from "./Spinner";
import SkeletonGrid from "./SkeletonGrid";

const Body = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [searching, setSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const perPage = 60;

  const fetchPhotos = async (query, pageNum = 1, append = false) => {
    if (!append) setSearching(true);
    setLoading(true);
    
    const apiKey = import.meta.env.VITE_PEXELS_API_KEY;
    const url = `https://api.pexels.com/v1/search?query=${query}&page=${pageNum}&per_page=${perPage}`;
    try {
      const response = await fetch(url, {
        headers: { Authorization: apiKey },
      });
      if (!response.ok) throw new Error(`Error: ${response.status}`);
      const data = await response.json();
      const newPhotos = data.photos || [];
      setPhotos((prev) => (append ? [...prev, ...newPhotos] : newPhotos));
      setHasMore(data.total_results > pageNum * perPage);
      setHasSearched(true);
    } catch (error) {
      console.error("Error fetching photos:", error);
      setPhotos([]);
      setHasMore(false);
    } finally {
      setLoading(false);
      setSearching(false);
    }
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      setPage(1);
      fetchPhotos(searchQuery.trim(), 1);
    }
  };

  const handleLoadMore = () => {
    if (!loading && hasMore) {
      setPage((prevPage) => {
        const nextPage = prevPage + 1;
        fetchPhotos(searchQuery.trim(), nextPage, true);
        return nextPage;
      });
    }
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-950 to-black">
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-blue-900/70 to-gray-900/80 z-0 pointer-events-none" />
      <div className="flex flex-col items-center flex-1 px-4 py-12 relative z-10">
        <h2 className="text-4xl font-extrabold mb-8 drop-shadow-xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-200 to-indigo-200 inline-block transform hover:scale-105 transition-transform duration-300">
            Discover Amazing Photos
            <span className="block text-lg font-medium mt-1 text-gray-200 drop-shadow-lg">
              Free high-quality images for every inspiration
            </span>
          </span>
        </h2>
        <SearchBar
          value={searchQuery}
          onChange={handleInputChange}
          onClick={handleSearch}
        />
        <div className="w-full mt-10">
          {searching ? (
            <SkeletonGrid count={12} />
          ) : hasSearched && photos.length === 0 ? (
            <p className="text-center text-gray-300 text-lg drop-shadow">
              No photos found. Try a different search term.
            </p>
          ) : !hasSearched ? (
            <p className="text-center text-gray-300 text-lg drop-shadow">
              Enter a search term and click the search icon to find photos
            </p>
          ) : (
            <PhotoGrid photos={photos} loading={false} />
          )}
        </div>
        {hasMore && !loading && photos.length > 0 && (
          <button
            onClick={handleLoadMore}
            className="mt-8 px-8 py-3 bg-gradient-to-r from-blue-700 to-indigo-900 text-white rounded-full hover:from-blue-800 hover:to-indigo-950 transition-all shadow-lg text-lg font-semibold"
            disabled={loading}
          >
            Load More
          </button>
        )}
        {loading && photos.length > 0 && <Spinner />}
      </div>
    </div>
  );
};

export default Body;
