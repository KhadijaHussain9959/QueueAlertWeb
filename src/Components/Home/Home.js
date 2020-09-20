import React, { Component, useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { ClientContext, UserContext } from "../../store/store.js";

const Home = (props) => {
  //const [User, setUser] = useContext(UserContext);
  const [Client, setClient] = useContext(ClientContext);

  // const handleChange = (e) => {
  //   //setName(e.target.value);
  // };

  return (
    <div>
      {/* <TextField
        id="outlined-basic"
        label=""
        placeholder="Name"
        variant="outlined"
        // value={Name}
        onChange={handleChange}
      />
      <div>{User.email}</div> */}

      <div>
        <h4>Clients Name: {Client ? Client.name : ""} </h4>
        <h4>Clients Company: {Client ? Client.company : ""} </h4>
        <h4>Clients Gender : {Client ? Client.gender : ""} </h4>
      </div>
    </div>
  );
};
export default Home;
