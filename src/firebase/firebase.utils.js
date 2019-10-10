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
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

// adding the data that we have to the firebase
// call this function where we have accecc the shop data in I call it in user_context
export const addCollectionsAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  // get the collection from firebase
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();
  // loop throw objectsToAdd to add them
  objectsToAdd.forEach(obj => {
    // git new object referance and random genreate id
    const newDocRef = collectionRef.doc();
   
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};
 
export const convertCollectionsSnapShotToMap = (collections) => {
    // transorm data from array into pbjects
    const transformCollection= collections.docs.map(doc => {
        const {title, items} = doc.data()
        return{
         roteName: encodeURI(title.toLowerCase()),
         id: doc.id,
         title,
         items
        }
    })
    // transrom data into objects
   return transformCollection.reduce((accumulator, collection) => {
       accumulator[collection.title.toLowerCase()] = collection 
       return accumulator
     }, {})
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
// set up log in with google
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
