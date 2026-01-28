import { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar(props: SearchBarProps) {
  const [term, setTerm] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Search term submitted:", term);
    props.onSearch(term);
  };
  // if use button with onClick
  // const handleSubmit = () => {
  //   e.preventDefault();
  //   console.log("Search term submitted:", term);
  //   props.onSearch(term);
  // };

  return (
    <>
      {/* <div>
        <input
          type="text"
          placeholder="Search images..."
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button onClick={() => handleSubmit()}>Search</button>
      </div> */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search images..."
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
}
