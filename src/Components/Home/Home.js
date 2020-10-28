import React, { Component, useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { ClientContext, UserContext } from "../../store/store.js";
import { SignUp, Login, readData } from "../../Firebase/firebasefunctions.js";

const Home = (props) => {
  //const [User, setUser] = useContext(UserContext);
  const [Client, setClient] = useContext(ClientContext);

  const [UserEmail, setUserEmail] = useState("");
  const [Password, setPassword] = useState("");

  const [LoginUserEmail, setLoginUserEmail] = useState("");
  const [LoginPassword, setLoginPassword] = useState("");

  const [LoginMsg, setLoginMsg] = useState("");
  const [SignUpMsg, setSignUpMsg] = useState("");

  const handleUserEmailChange = (e) => {
    setUserEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginUserEmailChange = (e) => {
    setLoginUserEmail(e.target.value);
  };

  const handleLoginPasswordChange = (e) => {
    setLoginPassword(e.target.value);
  };

  const handlereadData = () => {
    readData();
  };
  const handleSignup = async () => {
    setUserEmail("");
    setPassword("");

    let res = await SignUp(UserEmail, Password);
    console.log(res.status);
    if (res.status == true) {
      console.log("Sign up success");
      setSignUpMsg("signup successfull");
    } else {
      console.log("signup fail");
      setSignUpMsg(res.info.message);
    }
  };

  const handleLogin = async () => {
    let res = await Login(LoginUserEmail, LoginPassword);
    console.log(res.status);
    if (res.status == true) {
      console.log("then chala");
      setLoginMsg("Login successfull");
    } else {
      console.log("catch chala");
      setLoginMsg(res.info.message);
    }
    console.log("Home k andar milra response", res);
    props.history.push("/client");
  };

  return (
    <div>
      <div>
        <h4>Sign up </h4>
        <TextField
          id="outlined-basic"
          label=""
          placeholder="UserName"
          variant="outlined"
          value={UserEmail}
          onChange={handleUserEmailChange}
        />
        <TextField
          id="outlined-basic"
          label=""
          placeholder="Password"
          variant="outlined"
          type="password"
          value={Password}
          onChange={handlePasswordChange}
        />
        <Button variant="contained" color="primary" onClick={handleSignup}>
          Submit
        </Button>
      </div>

      <div>{SignUpMsg}</div>

      <div>
        <h4>Login</h4>
        <TextField
          id="outlined-basic"
          label=""
          placeholder="UserName"
          variant="outlined"
          value={LoginUserEmail}
          onChange={handleLoginUserEmailChange}
        />
        <TextField
          id="outlined-basic"
          label=""
          placeholder="Password"
          variant="outlined"
          type="password"
          value={LoginPassword}
          onChange={handleLoginPasswordChange}
        />
        <Button variant="contained" color="primary" onClick={handleLogin}>
          Submit
        </Button>

        <div>{LoginMsg}</div>
      </div>

      <div>
        <h4>Clients Name: {Client ? Client.name : ""} </h4>
        <h4>Clients Company: {Client ? Client.company : ""} </h4>
        <h4>Clients Gender : {Client ? Client.gender : ""} </h4>
      </div>
      <div>
        <Button variant="contained" color="primary" onClick={handlereadData}>
          Show all data
        </Button>
      </div>
    </div>
  );
};
export default Home;
