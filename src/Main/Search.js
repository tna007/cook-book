import React from "react";

const Search = ({ search }) => {
  return (
    <section className="search">
      <input
        type="text"
        placeholder="Search recipes"
        // value={keyword}
        // onChange={(e) => setKeyword(e.target.value)}
        onChange={search}
      />
    </section>
  );
};

export default Search;
