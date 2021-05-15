import React, { Component } from "react";
import SearchForm from "./Search/Search"
import API from "../utils/API";
import Table from "./Table/Table"

export default class Body extends Component {
  state = {
    users: [],
    filteredUsers: [],
  };

  componentDidMount() {
    API.getUsers().then((res) => {
      this.setState({
        users: res.data.results,
      });
      console.log(this.state);
    });
  }
  render() {
    return (
      
      <div className="container">
        <SearchForm/>
        <Table users={this.state.users} />
      </div>
    );
  }
}
