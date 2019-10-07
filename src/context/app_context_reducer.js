import React, { createContext, useState, useEffect, useReducer } from "react";
import { auth, createUserProfileDocument } from "../firebase/firebase.utils";

// ! Start Actions

const CartReducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE_BUTTON':
            return !state
        default:
            return state
    }
}

// ! End Actions

// Start create Context
export const CartContext = createContext()

export const UserContext = createContext();

// End create Context

// ? Start Provider
export const App_context_Provider = props => {

  const [isClicked, dispatch] = useReducer(CartReducer, false);
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
      <
    <UserContext.Provider value={currentUser}>
      {props.children}
    </UserContext.Provider>
  );
};
// ? End Provider
