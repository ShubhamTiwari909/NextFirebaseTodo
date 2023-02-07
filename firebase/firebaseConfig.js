// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzaEinMuVkWTfIMe0iG53FG9YsaMBn5XU",
  authDomain: "next-todo-b6b97.firebaseapp.com",
  databaseURL: "https://next-todo-b6b97-default-rtdb.firebaseio.com",
  projectId: "next-todo-b6b97",
  storageBucket: "next-todo-b6b97.appspot.com",
  messagingSenderId: "774958381155",
  appId: "1:774958381155:web:45b23c4824fe0200f6a056"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)