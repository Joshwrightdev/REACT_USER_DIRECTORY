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
    API.getUsers("").then((res) => {
      this.setState({
        filteredUsers: res.data.results,
        users: res.data.results,
      });
    });
  }

  handleInputChange = (event) => {
    const filteredUsersArray = this.state.users.filter((user) => {
      if (
        user.name.first.includes(event.target.value) ||
        user.name.last.includes(event.target.value) ||
        user.phone.includes(event.target.value)
      ) {
        return true;
      }
    });
    this.setState({ filteredUsers: filteredUsersArray });
  };

  render() {
    console.log(this.handleInputChange);
    return (
      <div className="container">
        <SearchForm handleInputChange={this.handleInputChange} />
        <Table
         users={this.state.filteredUsers } 
         />
      </div>
    );
  }
}
