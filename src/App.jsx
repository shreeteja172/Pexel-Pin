import React, { useState, useEffect } from "react";
import { Header, Footer, SearchBar, PhotoGrid } from "./components/index";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [photos, setPhotos] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedBtn, setSelectedBtn] = useState("all");
  const [loading, setLoading] = useState(false);

  const fetchPhotos = async (query) => {
    const apiKey = import.meta.env.VITE_PEXELS_API_KEY;
    const url = "https://api.pexels.com/v1/search?query=";

    setLoading(true);
    try {
      const response = await fetch(`${url}${query}`, {
        headers: { Authorization: apiKey },
      });
      if (!response.ok) throw new Error(`Error: ${response.status}`);
      const data = await response.json();
      console.log("Fetched photos:", data);
      setPhotos(data.photos || []);
      setFilteredData(data.photos || []); 
      setLoading(false);
    } catch (error) {
      console.error("Error fetching photos:", error);
      setPhotos([]);
      setFilteredData([]);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPhotos("nature"); 
  }, []);

  const filterPics = (type) => {
    if (type === "all") {
      return photos;
    }
    return photos.filter((photo) => {
      if (!photo.avg_color) return false; 
      if (type === "trending") {
        return true;
      } else if (type === "vibrant") {
        return photo.avg_color && !["#000000", "#FFFFFF"].includes(photo.avg_color);
      } else if (type === "monochrome") {
        const hex = photo.avg_color.slice(1);
        const r = parseInt(hex.slice(0, 2), 16);
        const g = parseInt(hex.slice(2, 4), 16);
        const b = parseInt(hex.slice(4, 6), 16);
        return Math.abs(r - g) < 20 && Math.abs(g - b) < 20 && Math.abs(r - b) < 20;
      } else if (type === "pastel") {
        return photo.avg_color && parseInt(photo.avg_color.slice(1), 16) > 0xaaaaaa;
      } else if (type === "dark") {
        return photo.avg_color && parseInt(photo.avg_color.slice(1), 16) < 0x888888;
      }
      return true;
    });
  };

  const handleFilterClick = (type) => {
    setSelectedBtn(type);
    const filtered = filterPics(type);
    setFilteredData(filtered);
  };

  const filterBtns = [
    { name: "All", type: "all" },
    { name: "Trending", type: "trending" },
    { name: "Vibrant", type: "vibrant" },
    { name: "Monochrome", type: "monochrome" },
    { name: "Pastel", type: "pastel" },
    { name: "Dark", type: "dark" },
  ];

  const handleSearch = () => {
    if (searchQuery) fetchPhotos(searchQuery);
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
        {/* Filter Buttons Section */}
        <div className="w-full max-w-6xl mt-4 mb-6 flex flex-wrap justify-center gap-2">
          {filterBtns.map((btn) => (
            <button
              key={btn.type}
              onClick={() => handleFilterClick(btn.type)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedBtn === btn.type
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              } border border-gray-200`}
            >
              {btn.name}
            </button>
          ))}
        </div>
        {/* Photo Grid */}
        <div className="w-full max-w-6xl mt-8">
          {loading ? (
            <p className="text-center text-gray-600">Loading...</p>
          ) : (
            <PhotoGrid photos={filteredData} />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;