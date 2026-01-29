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
  // create event handler for onChange
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    const value = event.target.value;
    setTerm(value);
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
          style={{ marginBottom: "10px" }}
          type="text"
          placeholder="Search images..."
          value={term}
          // onChange={handleOnChange}
          onChange={(e) => setTerm(e.target.value)}
        />
      </form>
    </>
  );
}
