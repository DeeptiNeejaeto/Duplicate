// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQAfDQUTG3GpN1-19q9QKcfwfCbdPWow8",
  authDomain: "kwitter-96771.firebaseapp.com",
  projectId: "kwitter-96771",
  storageBucket: "kwitter-96771.appspot.com",
  messagingSenderId: "38774538084",
  appId: "1:38774538084:web:464834434474e5b5870471",
  measurementId: "G-63TCN115VG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
