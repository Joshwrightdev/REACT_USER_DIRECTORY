import React from "react";
import "./Search.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">Search Users</label>
        <input
          value={props.getUsers}
          onChange={props.handleInputChange}
          name="getUsers"
          type="text"
          className="form-control"
          placeholder="Search for User"
          id="search"
        />
       
      </div>
    </form>
  );
}

export default SearchForm;
