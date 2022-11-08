import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify'


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
                state.cartItems[itemIndex].cartQuantity += 1;
                toast.info("Product increased", {
                    position: "bottom-left",
                    autoClose: 2000,
                })
            }
            //si el producto ya existe se agrega a la cantidad del mismo producto
            else {
                const tempProduct = { ...action.payload, cartQuantity: 1 };
                state.cartItems.push(tempProduct);
                toast.success("Product added to cart", {
                    position: "bottom-left",
                    autoClose: 5000,

                })
            }
            //utilizamos local storage para q no se borren los productos agregados
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },

        //reducer para romover la cart, si no tenemos ninguna carta la elimina directamente
        removeCart(state, action) {
            const nextCartItems = state.cartItems.filter(
                (cartItems) => cartItems.id !== action.payload.id
            )
            state.cartItems = nextCartItems;
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))

            toast.error("Product removed", {
                position: "bottom-left",
            });
        },

        //reducer para decrementar la cantidad de productos
        decreaseCart(state, action) {
            const itemIndex = state.cartItems.findIndex(
                cartItems => cartItems.id === action.payload.id
            )
            //si es mayor que 1, lo decrementa en 1
            if (state.cartItems[itemIndex].cartQuantity > 1) {
                state.cartItems[itemIndex].cartQuantity -= 1

                toast.error("Product removed", {
                    position: "bottom-left",
                    autoClose: 2000,
                });
            } else if
                //si hay un solo producto y lo restamos hacemos que desaparezca
                (state.cartItems[itemIndex].cartQuantity === 1) {
                const nextCartItems = state.cartItems.filter(
                    (cartItems) => cartItems.id !== action.payload.id
                );
                state.cartItems = nextCartItems;
                localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
            }

        },

        //reducer para el boton de limpiar el carrito
        clearCart(state, action) {
            state.cartItems = []
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },

        //reducer para calcular el subtotal de todos los productos
        getTotals(state, action) {
            const { total, quantity } = state.cartItems.reduce((cartTotal, cartItem) => {

                const { price, cartQuantity } = cartItem;
                const itemTotal = price * cartQuantity;

                cartTotal.total += itemTotal;
                cartTotal.quantity += cartQuantity
                return cartTotal;
            }, {
                total: 0,
                quantity: 0,
            });
            //accedemos a los estados iniciales para modificarlos


            state.cartTotalQuantity = quantity;
            state.cartTotalAmmount = total;


        }


    }

})

export const { addToCart, removeCart, decreaseCart, increaseCart, clearCart, getTotals } = cartSlice.actions;
export default cartSlice.reducer;