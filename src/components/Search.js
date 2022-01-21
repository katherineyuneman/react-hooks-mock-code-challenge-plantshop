import React, { useState } from "react";

function Search({ onSearchFilter }) {

  const [ currentSearch, setCurrentSearch ] = useState()

  function handleSearch (e){
    console.log(currentSearch)
    setCurrentSearch(e.target.value)
    onSearchFilter(currentSearch);
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;
