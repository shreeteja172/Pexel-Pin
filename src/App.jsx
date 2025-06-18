import React, { useState } from "react";
import { Header, Footer, SearchBar, PhotoGrid } from "./components/index";

function App() {
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
      console.log("Fetched photos:", data);

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
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex flex-col items-center flex-1 px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Photo Search</h1>
        <SearchBar
          value={searchQuery}
          onChange={handleInputChange}
          onClick={handleSearch}
        />
        <div className="w-full max-w-6xl mt-8">
          {loading && photos.length === 0 ? (
            <p className="text-center text-gray-600">Loading...</p>
          ) : photos.length === 0 ? (
            <p className="text-center text-gray-600">Search for photos to get started!</p>
          ) : (
            <PhotoGrid photos={photos} />
          )}
        </div>
        {hasMore && !loading && photos.length > 0 && (
          <button
            onClick={handleLoadMore}
            className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
          >
            Load More
          </button>
        )}
        {loading && photos.length > 0 && (
          <p className="text-center text-gray-600 mt-4">Loading more photos...</p>
        )}
      </main>
      <Footer />
    </div>
  );
}
export default App;