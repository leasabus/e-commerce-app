import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    //utilizamos local storage para no perder el estado de redux cuando actualizamos
    cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
    cartTotalQuantity: 0,
    cartTotalAmmount: 0,
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {

        //agrega los productos al estado
        addToCart(state, action) {
            //con esta funcion vamos a lograr que no se agreguen productos repetidos, que se sumen
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id)
            //si el index del item es mayor q 1(osea q existe el producto) se agrega un nuevo pedido
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1
            }
            //si el producto ya existe se agrega a la cantidad del mismo producto
            else {
                const tempProduct = { ...action.payload, cartQuantity: 1 };
                state.cartItems.push(tempProduct);
            }
            //utilizamos local storage para q no se borren los productos agregados
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },

    },
})

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;