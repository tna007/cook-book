import axios from "axios";
import React, { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const getSearchInput = async () => {
      const resp = await axios.get("http://localhost:3001/recipes");
      const data = resp.data;
      setResults(data);
    };
    if (searchInput) {
      getSearchInput();
    }
    // getSearchInput();
  }, [searchInput]);

  console.log("this is the results", results);
  console.log("this is the input", searchInput);

  const searchFilter = results.filter((result) => {
    return result.name.toLowerCase().includes(searchInput.toLowerCase());
  });

  console.log("this is search filtered ", searchFilter);
  const searchResults = searchFilter.map((result) => {
    return (
      <RecipeCard
        key={result.id}
        name={result.name}
        image={result.image}
        alt={result.name}
        ingredients={result.ingredients}
        directions={result.directions}
      />
    );
  });

  return (
    <div id="search">
      <input
        type="text"
        placeholder="Search recipes"
        value={searchInput}
        onChange={(event) => setSearchInput(event.target.value)}
      />
      <div>{searchResults}</div>
    </div>
  );
};

export default Search;
