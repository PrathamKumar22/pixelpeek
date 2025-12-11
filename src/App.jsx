import React, { useEffect, useState } from 'react';
import ImageCard from './components/ImageCard';
import './index.css';

const ACCESS_KEY = 's7D6vmIoy5OGqw4qxoavZ9LjI20vVhyBk-VicNg1OFY';

const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('nature');

  const fetchImages = async () => {
    const res = await fetch(
      `https://api.unsplash.com/search/photos?query=${query}&per_page=30&client_id=${ACCESS_KEY}`
    );
    const data = await res.json();
    setImages(data.results);
  };

  useEffect(() => {
    fetchImages();
    // eslint-disable-next-line
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchImages();
  };

  return (
    <div className="app">
      <h1>📷 PixelPeek</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search images..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <div className="image-grid">
        {images.map((img) => (
          <ImageCard key={img.id} image={img} />
        ))}
      </div>
    </div>
  );
};

export default App;
