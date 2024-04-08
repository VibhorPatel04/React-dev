import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
    name : "cart",
    initialState : {
        items : [],
    },
    reducers : {
        addItem : (state, action) =>{
            // vanilla(older) Redux => Don't Mutate the state, returning was mandatory
            // const newState = [...state];
            // newState.items.push(action.payload);
            // return newState;  

            
            // Redux toolkit
            // we have to mutate the state
            // mutating the state over here 
            state.items.push(action.payload)
        },
        removeItem : (state) =>{
            state.items.pop();
        },
        clearCart : (state) =>{
            state.items.length = 0;
        },
    },
});

export const {addItem, removeItem, clearCart} = cardSlice.actions;

export default cardSlice.reducer;
