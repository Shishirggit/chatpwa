import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyDhzYBQVFS0TdhhQQQS4q2nxL9l5bfkZIw',
  authDomain: 'chat-d6854.firebaseapp.com',
  databaseURL: 'https://chat-d6854.firebaseio.com',
  projectId: 'chat-d6854',
  storageBucket: 'chat-d6854.appspot.com',
  messagingSenderId: '907984876865'
}

firebase.initializeApp(config)

const database = firebase.database()
const auth = firebase.auth()

export default {
  database,
  auth
}
