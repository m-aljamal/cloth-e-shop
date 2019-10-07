import React, { useState, useEffect } from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./pages/home-page/homepage_component";
import ShopPage from "./pages/shop-page/shop_component";
import Header from "./components/header-component/Header";
import SignIn from "./pages/singin-and-signup-page/SignIn";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import {connect} from 'react-redux'
import {setCurrentUser} from './redux/user_reducer/user_actions'
function App(props) {

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
          props.setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      } else {
        props.setCurrentUser(userAuth);
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
    <div>
      {/* puting the header here will be shown in all of pages */}
      {/* this props is to check if user loged in dissplay sign out currentUser={currentUser} 
      this moved to redux
    */}
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        {/* make user cannot go to sign in if curent user is alredy sign in */}
        <Route exacr path="/signin" render={() => props.currentUser ? (<Redirect to='/'/>) : < SignIn/>} />
      </Switch>
    </div>
  );
}
// to make the user go to another page after loged in need Redirect and current user
const mapStateToProps = ({user}) =>({
  currentUser: user.currentUser
})
const mapDispatchToProps = dispatch =>({
setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(
  mapStateToProps,
   mapDispatchToProps ) (App);
