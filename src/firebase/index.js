import firebase from 'firebase';

//connect to and initialize firebase
try {
  var config = {
    apiKey: "AIzaSyBpYKI6HDaCpcvYSRj7gwx2CJFiie7qME4",
    authDomain: "to-do-app-643d7.firebaseapp.com",
    databaseURL: "https://to-do-app-643d7.firebaseio.com",
    projectId: "to-do-app-643d7",
    storageBucket: "to-do-app-643d7.appspot.com",
    messagingSenderId: "1002855910615"
  };
firebase.initializeApp(config);
} catch (e) {

}

export let firebaseRef = firebase.database().ref();
export default firebase;