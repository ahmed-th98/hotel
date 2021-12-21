import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyADKTU-UUNFPRcbUhQ8fmkV7PrqA5xh0Hs",
  authDomain: "hotel-9f540.firebaseapp.com",
  projectId: "hotel-9f540",
  storageBucket: "hotel-9f540.appspot.com",
  messagingSenderId: "1008749356559",
  appId: "1:1008749356559:web:17de9fb576b61f8d53a57a",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();