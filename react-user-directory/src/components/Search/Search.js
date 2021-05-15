import React from "react";
import "./Search.css";

function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="language">Search Users</label>
        <input
          type="text"
          className="form-control"
          placeholder="Type in a search term to begin"
          id=""
        />
      </div>
    </form>
  );
}

export default SearchForm;
