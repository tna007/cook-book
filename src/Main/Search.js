import React from "react";

const Search = ({ search }) => {
  return (
    <div id="search">
      <input
        type="text"
        placeholder="Search recipes"
        // value={keyword}
        // onChange={(e) => setKeyword(e.target.value)}
        onChange={search}
      />
    </div>
  );
};

export default Search;
