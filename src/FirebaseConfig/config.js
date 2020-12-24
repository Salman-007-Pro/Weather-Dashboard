import firebase from "firebase";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_ID,
};
// Initialize Firebase
console.log(firebase.apps);
if (firebase.apps.length === 0) {
  console.log("sirf ek dafa chalna chaiye yeh");
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
