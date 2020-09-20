import React, { useState } from "react";

export const UserContext = React.createContext("UserContext");
export const ClientContext = React.createContext("ClientContext");

const Store = (props) => {
  const [User, setUser] = useState({
    name: "khadija",
    email: "hussainkhadija@gmail.com",
  });

  const [Client, setClient] = useState(null);

  return (
    <ClientContext.Provider value={[Client, setClient]}>
      <UserContext.Provider value={[User, setUser]}>
        {/*  this is app.js component */}
        {props.children}
      </UserContext.Provider>
    </ClientContext.Provider>
  );
};

export default Store;
