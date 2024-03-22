// Import the functions you need from the SDKs you need
const firebase = require("firebase/app"); 
require("firebase/auth");


// Import only the app module
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmx1Mx1GtqheoDvGCVGn3-zBCkY6hPTWI",
  authDomain: "email-js-1a09b.firebaseapp.com",
  projectId: "email-js-1a09b",
  storageBucket: "email-js-1a09b.appspot.com",
  messagingSenderId: "931663983832",
  appId: "1:931663983832:web:aa98d896008846a2c1d3ad",
  measurementId: "G-4LYKC20TGZ"
};

// Initialize and export the Firebase app
const initializeFirebase = () => {
    firebase.initializeApp(firebaseConfig);
    return firebase;
  };
module.exports = { initializeFirebase };
  
