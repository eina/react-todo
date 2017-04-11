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

let firebaseRef = firebase.database().ref();
//get reference to database
//set will set values to dabatase
firebaseRef.set({
  app: {
    name: 'To Do App',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Eina',
    age: 26
  }
})

var notesRef = firebaseRef.child('notes');

notesRef.on('child_added', (snapshot) => {
  console.log('child_added', snapshot.key, snapshot.val())
})

notesRef.on('child_changed', (snapshot) => {
  console.log('child_changed', snapshot.key, snapshot.val())
})

notesRef.on('child_removed', (snapshot) => {
  console.log('child_removed', snapshot.key, snapshot.val())
})

var newNoteRef = notesRef.push({
  text: 'Walk the dog!'
})

//challenge
var todoRef = firebaseRef.child('todo');

//listener on
todoRef.on('child_added', (snapshot) => {
  console.log('child_added', snapshot.key, snapshot.val())
})

//add two todos to the array using push
var newTodo = todoRef.push({
  text: 'Shower tonight'
})

var newTodo = todoRef.push({
  text: 'Brush teeth'
})

//specify which .child() you want to change so the whole thing doesn't get wiped, it'll still wipe the object it's contained in if applicable
// firebaseRef.child('user').set({
//   name: 'Mike'
// })

// firebaseRef.update({
//   isRunning: false,
//   'app/name': 'To Do Application', //multipath updates
//   'user/name': 'Fabrienne'
// })

// firebaseRef.child('app').update({
//   name: 'To Do App'
// })

// firebaseRef.child('user').update({
//   name: 'Eina'
// })

//remove data
// firebaseRef.child('app/name').remove();

//use null
// firebaseRef.child('app').update({
//   version: '2.0',
//   name: null
// })

//will fetch entire database
// firebaseRef.once('value').then((snapshot) => {
//   console.log('Got entire database', snapshot.val())
// }, (e)=> {
//   console.log('Unable to fetch value', e)
// })

// firebaseRef.on('value', (snapshot) => {
//   console.log('Got value', snapshot.val())
// }) 

//turn off listener
// firebaseRef.off();

//wouldn't fire anymore
// firebaseRef.update({isRunning: false})

// 1. .on listen to changes to the user object
// 2. update data in user, change name
// 3. update the app's name

// firebaseRef.child('user').on('value', (snapshot)=> {
//     console.log('Got value', snapshot.val());
// })

// firebaseRef.child('user').update({
//   name: 'Fabrienne'
// })

// firebaseRef.child('app').update({
//   name: 'To Do App'
// })