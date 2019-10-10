import { addItemToCard, removeItemFromCart } from "./cart_utils";
import React, { createContext, useReducer, useEffect, useState } from "react";
import {
  firestore,
  convertCollectionsSnapShotToMap
} from "../firebase/firebase.utils";

let INITIAL_STATE = {
  hidden: false,
  cartItems: JSON.parse(window.localStorage.getItem("cartItems") || "[]")
};

const ItemsAddReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return addItemToCard(state, action.item);
    case "REMOVE_ITEM":
      return state.filter(item => item.id !== action.id);
    case "INCREASE_ITEM":
      return state.map(item =>
        item.id === action.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    // decrement and remove item when quantity less than 1
    case "DECREMENT_ITEM":
      return removeItemFromCart(state, action.item);

    default:
      return state;
  }
};
const CartReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_BUTTON":
      return !state;
    default:
      return state;
  }
};
export const CartContext = createContext();
export const ItemContext = createContext();
export const AddItemContext = createContext();
export const DataContext = createContext();
export const dataWithObjectType = createContext();

export const CartContextProvider = props => {
  const [isClicked, dispatch] = useReducer(CartReducer, INITIAL_STATE.hidden);
  const [state, dispatchItem] = useReducer(
    ItemsAddReducer,
    INITIAL_STATE.cartItems
  );
  const [DataItems, setDataItems] = useState([]);
  const [objectData, setObjectData] = useState({});

  useEffect(() => {
    // geting data from firebase
    const collectionRef = firestore.collection("collections");
    collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapShotToMap(snapshot);
      // set the data come from firebase to the state
      setObjectData(collectionsMap);
      // add the data to the state after convert them into arrays
      setDataItems(Object.keys(collectionsMap).map(key => collectionsMap[key]));
    });
    window.localStorage.setItem("cartItems", JSON.stringify(state));
  }, [state]);
  return (
    <dataWithObjectType.Provider value={objectData}>
      <DataContext.Provider value={DataItems}>
        <AddItemContext.Provider value={dispatchItem}>
          <ItemContext.Provider value={state}>
            <CartContext.Provider value={{ isClicked, dispatch }}>
              {props.children}
            </CartContext.Provider>
          </ItemContext.Provider>
        </AddItemContext.Provider>
      </DataContext.Provider>
    </dataWithObjectType.Provider>
  );
};
