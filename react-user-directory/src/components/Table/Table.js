import React from "react";
import { Avatar } from "@material-ui/core";
import "./Table.css"


function Table(props) {
  console.log(props);
  // The data was coming in with the error because I didn't wrap it in JSX.
  const userData = props.users.map((user) => {
    return (
      <div className="Table__Style Table__Uppercase">
        <Avatar src={user.picture.thumbnail}></Avatar>
        {user.name.first + " " + user.name.last + "||"}
        {" " + user.gender + "|| "}
        {" " + user.email + "||"}
        {" " + user.phone }
      </div>
    );
  });
  console.log("This is the userData after returning as a div", userData);
  return <div className="container">{userData}</div>;
}

export default Table;
