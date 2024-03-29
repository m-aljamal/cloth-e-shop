import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import {CurentUserProvider} from './context/user_context'
import {CartContextProvider} from './context/cart_contex'
ReactDOM.render(
  <CurentUserProvider>
    <CartContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </CartContextProvider>
    </CurentUserProvider>
  ,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
