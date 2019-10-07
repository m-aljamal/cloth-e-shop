import React, { useContext} from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./pages/home-page/homepage_component";
import ShopPage from "./pages/shop-page/shop_component";
import Header from "./components/header-component/Header";
import SignIn from "./pages/singin-and-signup-page/SignIn";
import {UserContext} from './context/user_context'
function App() {
const currentUser = useContext(UserContext)

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
        <Route exacr path="/signin" render={() => currentUser ? (<Redirect to='/'/>) : < SignIn/>} />
      </Switch>
    </div>
  );
}


export default App;
