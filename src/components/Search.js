import { useState } from "react";

function Search({ term, setTerm }) {
  // const [searchTerm, setSearchTerm] = useState("");

  const handleChangeSearchTerm = (event) => {
    setTerm(event.target.value);
  };

  // console.log("searchTerm", searchTerm);

  return (
    <div className="flex items-center justify-center pb-6">
      <h2 className="pr-2">Search by name:</h2>
      <input
        type="text"
        value={term}
        onChange={handleChangeSearchTerm}
        className="border rounded py-1 px-1"
      />
    </div>
  );
}

export default Search;
