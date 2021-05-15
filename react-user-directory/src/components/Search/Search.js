import React from "react";
import "./Search.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="language">Search Users</label>
        <input
          value={props.users}
          onChange={props.handleInputChange}
          name="search"
          list={props.names}
          type="text"
          className="form-control"
          placeholder="Type in a search term to begin"
          id="search"
        />
      </div>
    </form>
  );
}

export default SearchForm;
