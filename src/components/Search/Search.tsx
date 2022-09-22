import React from "react";

import SearchLocationForm from "./SearchLocationForm";
import SearchProductForm from "./SearchProductForm";

import "./Search.css";

function Search() {
  return (
    <div className="bgBox">
      <div className="midFrame">
      <div className="container">
        <div className="outline">
          <h2>Search</h2>
          <SearchLocationForm />
          <SearchProductForm />
        </div>
      </div>
      </div>
    </div>
  );
}

export default Search;
