import React, { Component } from "react";
import API from "../utils/API";

export default class Body extends Component {
  state={
    users:[],
    
  }
  render() {
    return <div className="container">Something</div>;
  }
}
// {
//   API.getUsers().then((res) => {
//     console.log(res.data);
//   });
