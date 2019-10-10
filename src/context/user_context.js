import React, { createContext, useState, useEffect,  } from "react";
import { auth, createUserProfileDocument, addCollectionsAndDocuments } from "../firebase/firebase.utils";
export const UserContext = createContext();

export const CurentUserProvider = props => {
  const [currentUser, setCurrentUser] = useState(null);

  // onAuthStateChanged is open conection and need to be closed in componentWillUnmount
  let unsubscribeFromAuth = null;
  useEffect(() => {
    // firebase send message if the user update and give if user has change
    unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // check if user exist
      if (userAuth) {
        // if there is a user get the user ref from user document
        const userRef = await createUserProfileDocument(userAuth);
        // here we get the data that is for the user how loged in
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      } else {
        setCurrentUser(userAuth);
        // adding data
        // addCollectionsAndDocuments("collections", dataToArray.map(({title, items}) => ({title, items})));
      }
    });
  }, []);

  // close connection in componentWillUnmount
  useEffect(() => {
    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  return (
    <UserContext.Provider value={currentUser}>
      {props.children}
    </UserContext.Provider>
  );
};
