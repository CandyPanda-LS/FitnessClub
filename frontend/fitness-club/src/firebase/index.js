import firebase from "firebase/app";
import "firebase/storage";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB5MBJno0C7hqaf7n7T7wteQHY0A6_s8-8",
  authDomain: "fitnessclub-9d3f8.firebaseapp.com",
  databaseURL: "https://fitnessclub-9d3f8.firebaseio.com",
  projectId: "fitnessclub-9d3f8",
  storageBucket: "fitnessclub-9d3f8.appspot.com",
  messagingSenderId: "235991326817",
  appId: "1:235991326817:web:cca015126bbb0fe2b54a20",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
