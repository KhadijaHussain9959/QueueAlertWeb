import React, { useEffect, useState } from "react";
import axios from "axios";
import { Typography, Paper } from "@material-ui/core";
import { ThumbUp } from "@material-ui/icons";
import "./apilearn.scss";

function Apilearn() {
  const [showData, setshowData] = useState(null);
  useEffect(() => {
    // component did mount k brabar hota hai useEffect
    // useEffect return k foran baad chalta hai
    // aur api call wala phle chalna chahiye
    apicall();
  }, []);

  //api call is asynchronous = no wait .
  const apicall = async () => {
    //await axios.get(link).then(success).catch(error);
    await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((data) => {
        console.log(data.data);
        //save data in hook and check in inspect and component
        // setshowData(data.data.all);
        // context set kra dena
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      {" "}
      API SEEKH LO
      {showData
        ? showData.map((data, index) => {
            // console.log(data);
            //console.log(index);
            return (
              <>
                <Paper elevation={3} key={data._id} className="apilearn_paper">
                  {data.user ? (
                    <Typography variant="h4">{data.user.name.first}</Typography>
                  ) : null}
                  <Typography variant="h6">{data.text}</Typography>
                  <div className="apilearn_upvotes_div">
                    <ThumbUp fontSize="small" />
                    <Typography variant="subtitle1">
                      {data.upvotes} votes
                    </Typography>
                  </div>
                </Paper>
              </>
            );
          })
        : null}
    </div>
  );
}
//state change hua tw render/return dobara chalta hai

export default Apilearn;
