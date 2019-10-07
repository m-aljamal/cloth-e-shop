import React,{createContext, useReducer} from 'react'

const CartReducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE_BUTTON':
            return !state
        default:
            return state
    }
}
export const CartContext = createContext()

export const CartContextProvider = props =>{
    const [isClicked, dispatch] = useReducer(CartReducer, false);

    return(
        <CartContext.Provider value={{isClicked, dispatch}}>
            {props.children}
        </CartContext.Provider>
    )
}