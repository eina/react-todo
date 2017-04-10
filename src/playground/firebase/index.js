import firebase from 'firebase';

//connect to and initialize firebase
var config = {
  apiKey: "AIzaSyBpYKI6HDaCpcvYSRj7gwx2CJFiie7qME4",
  authDomain: "to-do-app-643d7.firebaseapp.com",
  databaseURL: "https://to-do-app-643d7.firebaseio.com",
  projectId: "to-do-app-643d7",
  storageBucket: "to-do-app-643d7.appspot.com",
  messagingSenderId: "1002855910615"
};
firebase.initializeApp(config);

//get reference to database
//set will set values to dabatase
firebase.database().ref().set({
  appName: 'Todo App'
})
