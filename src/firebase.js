import firebase from "firebase"
import "firebase/storage"

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBNo18x41fWdi8axxSlokPMgnGUdaqUPzs",
    authDomain: "teked-12b15.firebaseapp.com",
    projectId: "teked-12b15",
    storageBucket: "teked-12b15.appspot.com",
    messagingSenderId: "630276989956",
    appId: "1:630276989956:web:d64933402ae92004d84151"
})
var db = firebaseApp.firestore()
const storage = firebase.storage()
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {db, storage, timestamp}