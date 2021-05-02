import React from "react";

const Search = ({ keyword, setKeyword }) => {
  return (
    <div id="search">
      <input
        type="text"
        placeholder="Search recipes"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
    </div>
  );
};

export default Search;
