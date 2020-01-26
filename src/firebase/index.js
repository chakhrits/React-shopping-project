import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyCRMfxa7yUPcrAsOZJ2EtgMtp8bcbL8fNc',
  authDomain: 'react-shopping-project.firebaseapp.com',
  databaseURL: 'https://react-shopping-project.firebaseio.com',
  projectId: 'react-shopping-project',
  storageBucket: 'react-shopping-project.appspot.com',
  messagingSenderId: '941165915203',
  appId: '1:941165915203:web:5997dbbe11c791444fb8f6',
  measurementId: 'G-6EBNZ5T2EM'
} // Replace your firebase project

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

const db = firebase.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

db.settings({
  timestampsInSnapshots: true
})

export default {
  db,
  auth,
  storage
}
