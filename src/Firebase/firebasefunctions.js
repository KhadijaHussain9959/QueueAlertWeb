import { auth } from "./firebase.js";

export const SignUp = (email, password) => {
  auth
    .createUserWithEmailAndPassword(email.trim(), password)
    .then((newUser) => {
      console.log(newUser);
    })
    .catch((err) => {
      console.log(err);
    });
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
