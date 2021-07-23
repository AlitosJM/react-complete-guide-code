import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0,
    },
    reducers:{
        addItemToCart(state, action){
            const newItem = action.payload; 
            const existingItem = action.items.find( item => item.id === newItem.id)

            !existingItem 
            ?  (state.items.push({
                itemId:newItem.id, 
                price:newItem.price, 
                quantity:1, 
                totalPrice:newItem.price,
                name:newItem.title})
                ): (
                    existingItem.quantity++,
                    existingItem.totalPrice = existingItem.totalPrice + newItem.price
                );
        },       
        removeItemFromCart(state, action){
            const id = action.payload; 
            const existingItem = action.items.find( item => item.id === id);
            if(existingItem){
                state.items = state.items.filter( item => item.id !== id);
            }
            else{
                existingItem.quantity--;   
                // existingItem.totalPrice = existingItem.totalPrice - existingItem.price;     
            }
        } 
    }
});

export const cartActions = cartSlice.actions;
export default cartSlice;