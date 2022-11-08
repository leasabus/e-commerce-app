
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, clearCart, decreaseCart, getTotals, removeCart } from '../redux/cartSlice';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';


//utlizamos useselector para llamar a la accion y acceder al estado

export const CartComponent = () => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    //este use efect accede al estado del cart y despacha la accion gettotals para
    //q se actualice la cantidad
    useEffect(() => {
        dispatch(getTotals())
    }, [cart, dispatch])

    //llamada a todos los dispatch de los reducers
    const handleRemoveCart = (cartItems) => {
        dispatch(removeCart(cartItems))
    }

    const handleDecreaseCart = (cartItems) => {
        dispatch(decreaseCart(cartItems))
    }
    const handleIncreaseCart = (cartItems) => {
        dispatch(addToCart(cartItems))
    }

    const handleClearCart = () => {
        dispatch(clearCart())
    }
    return (
        <div>
            <h1 className='text-white flex items-center justify-center text-3xl pt-6 mb-6'>Shopping Cart</h1>
            {
                cart.cartItems.length === 0 ? (
                    <div className='text-white flex flex-col items-center justify-center pt-4 pb-6 h-[400px]  '>
                        <span className='text-2xl md:text-4xl m-2 p-4'>Your Cart is empty!</span>
                        <Link to="/products"> <span className='text-green-500 text-2xl md:text-4xl pt-6 m-2 hover:text-slate-500'>Click here and Start shopping</span></Link>

                    </div>
                ) : (

                    <div className='text-white '>

                        <div className=' flex flex-row items-center justify-around pt-6 text-2xl md:text-3xl text-green-400 '>
                            <span>Product</span>
                            <span>Price</span>
                            <span>Quantity</span>
                            <span className='mr-2'>Total</span>
                        </div>

                        <div>
                            {
                                cart.cartItems?.map(cartItems => (
                                    <div className='flex flex-row justify-around items-center bg-slate-800 p-4 mt-4 ' key={cartItems.id}>
                                        <div className='flex flex-col items-center m-1 rounded pt-2'>
                                            <img className='w-14 h-14 md:w-20 md:h-20 rounded' src={cartItems.image} alt={cartItems.name} />
                                            <h3>{cartItems.title.substring(0, 5)}...</h3>
                                            <button className='flex flex-col items-center justify-center text-red-500 hover:text-white'

                                                onClick={() => handleRemoveCart(cartItems)}
                                            >Remove</button>

                                        </div>
                                        <div className='p-4 md:text-2xl md:p-0'>{cartItems.price}$</div>
                                        <div className='flex flex-row items-center '>
                                            <button className='text-red-500 text-2xl m-2 ' onClick={() => handleDecreaseCart(cartItems)}><AiOutlineMinus /></button>
                                            <div className='md:text-2xl'>{cartItems.cartQuantity}</div>
                                            <button className='text-green-500 text-2xl m-2' onClick={() => handleIncreaseCart(cartItems)}><AiOutlinePlus /></button>
                                        </div>
                                        <div className='md:text-2xl'>{cartItems.price * cartItems.cartQuantity}$</div>

                                    </div>


                                ))}



                        </div>

                        <div className='text-white flex flex-col justify-center'>
                            <div className='flex flex-col items-center justify-center'>
                                <span className='text-2xl p-1 mb-4 md:text-2xl'>Subtotal</span>
                                <span className='text-2xl mb-4'>{cart.cartTotalAmmount}$</span>
                                {/* <button>Checkout</button> */}


                                <div className='flex flex-row items-center p-4 mr-2 space-x-4 '>
                                    <button
                                        onClick={() => handleClearCart()}
                                        className="rounded-md w-32 h-12 px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-green-500 ">
                                        <span className=" absolute max-w-65 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                                        <span className=" relative text-green-300 transition duration-300 group-hover:text-white ease"
                                        >Clear Cart</span>
                                    </button>
                                    <Link to="/products"> <button className="rounded-md w-32 h-12 px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-green-500 ">
                                        <span className=" absolute max-w-65 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                                        <span className=" relative text-green-300 transition duration-300 group-hover:text-white ease"
                                        >Shop</span>
                                    </button></Link>
                                </div>
                            </div>
                        </div>

                    </div>

                )}


        </div>)
}
