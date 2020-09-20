import React, { Component, useState, useContext } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import "./Client.scss";
import { ClientContext } from "../../store/store.js";

const Clients = (props) => {
  const [ClientName, setClientName] = useState("");
  const [ClientCompany, setClientCompany] = useState("");
  const [Client, setClient] = useContext(ClientContext);
  const [ClientGender, setClientGender] = useState("female");

  const handleChange = (event) => {
    setClientGender(event.target.value);
  };

  const handleChangeName = (e) => {
    setClientName(e.target.value);
  };

  const handleChangeCompany = (e) => {
    setClientCompany(e.target.value);
  };

  const saveClient = () => {
    let data = {
      name: ClientName,
      company: ClientCompany,
      gender: ClientGender,
    };
    setClient(data);
    props.history.push("/home");
  };

  return (
    <Grid container xs={12} spacing={3}>
      <Grid className="Client-Grid" item xs={12}>
        <TextField
          id="outlined-basic"
          label="Client Name"
          placeholder="Client Name"
          variant="outlined"
          value={ClientName}
          onChange={handleChangeName}
        />
      </Grid>

      <Grid className="Client-Grid" item xs={12}>
        <TextField
          id="outlined-basic"
          label="Company Name"
          placeholder="Company Name"
          variant="outlined"
          value={ClientCompany}
          onChange={handleChangeCompany}
        />
      </Grid>

      <Grid item xs={12}>
        <FormControl component="fieldset">
          <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup
            aria-label="gender"
            name="gender1"
            value={ClientGender}
            onChange={handleChange}
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel
              value="male"
              control={<Radio />}
              label="Male"
              // label="Male"
            />
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={saveClient}>
          Submit
        </Button>
      </Grid>
    </Grid>
  );
};

export default Clients;
