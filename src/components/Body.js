import React, { Component } from "react";
import SearchForm from "./Search/Search";
import API from "../utils/API";
import Table from "./Table/Table";

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
  handleInputChange = (event) => {
    this.setState({ getUsers: event.target.value });
  };

  render() {
    console.log(this.handleInputChange);
    return (
      <div className="container">
        <SearchForm
          handleInputChange={this.handleInputChange}
          users={this.state.users}
        />
        <Table users={this.state.users} />
      </div>
    );
  }
}
