import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/home-page/homepage_component";
import ShopPage from "./pages/shop-page/shop_component";
import Header from './components/header-component/Header'
import SignIn from './pages/singin-and-signup-page/SignIn'

function App() {
  return (
    <div>
      {/* buting the header here will be shown in all of pages */}
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exacr path='/signin' component={SignIn}/>
      </Switch>
    </div>
  );
}

export default App;
