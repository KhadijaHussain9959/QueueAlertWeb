import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/database";

import { firebaseConfig } from "./firebaseconfig.js";

firebase.initializeApp(firebaseConfig);
console.log("firebase initialize");
const auth = firebase.auth();
const database = firebase.database();

export { auth, database };
