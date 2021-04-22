import React from "react";

function Search(props) {
  return (
    <div id="search">
      <input type="text" onChange={props.search} placeholder="Search recipes" />
    </div>
  );
}

export default Search;
