import React, { useState, useEffect } from 'react';
import { Header, Footer, SearchBar, PhotoGrid } from './components/index';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [photos, setPhotos] = useState([]);

  const fetchPhotos = async (query) => {
    const apiKey = import.meta.env.VITE_PEXELS_API_KEY;
    // console.log(apiKey); 
    const url = 'https://api.pexels.com/v1/search?query=';
    try {
      const response = await fetch(`${url}${query}`, {
        headers: { Authorization: apiKey },
      });
      if (!response.ok) throw new Error(`Error: ${response.status}`);
      const data = await response.json();
      console.log(data);
      setPhotos(data.photos || []);
    } catch (error) {
      console.error('Error fetching photos:', error);
      setPhotos([]);
    }
  };

  useEffect(() => {
    fetchPhotos('nature'); 
  }, []);

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
        <SearchBar value={searchQuery} onChange={handleInputChange} onClick={handleSearch} />
        <div className="w-full max-w-6xl mt-8">
          <PhotoGrid photos={photos} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;