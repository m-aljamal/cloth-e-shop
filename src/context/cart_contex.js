import {addItemToCard} from './cart_utils'

import React,{createContext, useReducer} from 'react'
let INITIAL_STATE ={
    hidden: false,
    cartItems: []
}

const ItemsAddReducer = (state, action) =>{
    switch (action.type) {
        case 'ADD_ITEM':
            return addItemToCard(state, action.item)
        default:
            return state
    }
}

const CartReducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE_BUTTON':
            return !state
        default:
            return state
    }
}
export const CartContext = createContext()
export const ItemContext = createContext()
export const AddItemContext = createContext()

export const CartContextProvider = props =>{
    const [isClicked, dispatch] = useReducer(CartReducer, INITIAL_STATE.hidden);
    const [state, addItem] = useReducer(ItemsAddReducer, INITIAL_STATE.cartItems);

    return(
        <AddItemContext.Provider value={addItem}>
        <ItemContext.Provider value={state}>
        <CartContext.Provider value={{isClicked, dispatch}}>
            {props.children}
        </CartContext.Provider>
        </ItemContext.Provider>
        </AddItemContext.Provider>
    )
}