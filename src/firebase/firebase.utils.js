import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  // copy the code from firebase web site from created app

  apiKey: "AIzaSyDUU9_VyuoQHiiibqeDB9YNp-lMqjKkic4",
  authDomain: "cloth-e-app-db.firebaseapp.com",
  databaseURL: "https://cloth-e-app-db.firebaseio.com",
  projectId: "cloth-e-app-db",
  storageBucket: "",
  messagingSenderId: "910765740331",
  appId: "1:910765740331:web:5535a0f57ab2d286fcf56e",
  measurementId: "G-FZ6ZH9C15B"
};
// save users in database the sign in from google
export const createUserProfileDocument = async (userAuth, additionalData) => {
  // check if there is no user exit form function
  if (!userAuth) return;
  // query the database to check if user in database
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  // if user doesn't exists create new user 
    if(!snapShot.exists){
        const {displayName, email} = userAuth
        const createdAt = new Date()

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error){
            console.log('error creating user', error.message)
        }
    }
    return userRef
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
// set up log in with google
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
