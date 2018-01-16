import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyCdEGNjaJo8rHxxmDE944rvOLZAkaZrAiI",
    authDomain: "study-jam-b8f53.firebaseapp.com",
    databaseURL: "https://study-jam-b8f53.firebaseio.com",
    projectId: "study-jam-b8f53",
    storageBucket: "",
    messagingSenderId: "655884521462"
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth