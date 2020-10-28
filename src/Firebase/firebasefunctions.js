import { auth, database } from "./firebase.js";

export const SignUp = async (email, password) => {
  let response = {
    status: null,
    info: null,
  };

  await auth
    .createUserWithEmailAndPassword(email.trim(), password)
    .then((newUser) => {
      response = {
        status: true,
        info: newUser,
      };
    })
    .catch((err) => {
      response = {
        status: false,
        info: err,
      };
    });
  return response;
};

export const Login = async (email, password) => {
  let response = {
    status: null,
    info: null,
  };
  await auth
    .signInWithEmailAndPassword(email.trim(), password)
    .then((SignedinUser) => {
      response = {
        status: true,
        info: SignedinUser,
      };
    })
    .catch((err) => {
      response = {
        status: false,
        info: err,
      };
    });
  return response;
};

export const readData = () => {
  console.log("read data chala");
  var docRef = database.collection("users");

  docRef
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
      });
    })
    .catch(function (error) {
      console.log("Error getting document:", error);
    });
};
