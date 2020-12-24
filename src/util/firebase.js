import firebase from 'firebase';

var firebaseConfig = {
    // apiKey: "AIzaSyBs5UpUyXA8OLCbVhySaN6LqybQn_ZF8jk",
    // authDomain: "tododaily-51cf4.firebaseapp.com",
    // databaseURL: "https://tododaily-51cf4.firebaseio.com",
    // projectId: "tododaily-51cf4",
    // storageBucket: "tododaily-51cf4.appspot.com",
    // messagingSenderId: "648079800116",
    // appId: "1:648079800116:web:d29a96f7563d20d4605761",
    // measurementId: "G-EBCBVZZ65V"


    apiKey: "AIzaSyAwy38U7wF_6D0tNlKIg-Gw2oE0ZbP71Lo",
    authDomain: "example-23a0a.firebaseapp.com",
    projectId: "example-23a0a",
    storageBucket: "example-23a0a.appspot.com",
    messagingSenderId: "698070448221",
    appId: "1:698070448221:web:7f8f3186cc9836a5d675b4",
    measurementId: "G-8TZHJ0YRNE"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



  export default firebase;