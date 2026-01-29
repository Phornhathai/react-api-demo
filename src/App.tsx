import { useState } from "react";
import SearchBar from "./components/SearchBar";
import searchImages from "./api";
import ImageList from "./components/ImageList";
import type { Image } from "./types";

function App() {
  const [images, setImages] = useState<Image[]>([]);

  const handleSearch = async (query: string) => {
    // TODO: call search API here with the query
    console.log("query", query);
    const res = await searchImages(query);
    console.log("res", res);
    setImages(res);
  };

  return (
    <div>
      <h1>Image Search App</h1>
      <div>
        <SearchBar onSearch={handleSearch} />
        <ImageList images={images} />
      </div>
    </div>
  );
}

export default App;
