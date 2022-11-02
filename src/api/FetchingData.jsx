

//implementar el boton de agregar al carrito

import { useState, useEffect } from 'react';
import { CardProduct } from '../components/CardProduct';

export const FetchingData = () => {
    //trae los datos de la api
    const [data, setData] = useState([]);
    //filtra los datos para los botones filtro
    const [filter, setFilter] = useState(data);
    //muestra mensajes de carga cuando se renderiza la call
    const [loading, setLoading] = useState(false);



    useEffect(() => {
        const getProducts = async () => {
            setLoading(true)
            const URL = 'https://fakestoreapi.com/products';
            const response = await fetch(URL)

            setData(await response.clone().json());
            setFilter(await response.json());
            setLoading(false);
        }
        getProducts()

    }, [])


    const filterProducts = (cat) => {
        const updatedList = data.filter((x) => x.category === cat)
        setFilter(updatedList)
    }

    return (
        <>

            <div>
                <h1 className='text-white flex items-center text-center justify-center p-6  text-3xl'>Latest Products</h1>

            </div>
            <div className='flex flex-col items-center justify-center md:flex-row py-4 px-2'>
                <button className="rounded-md w-40 px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-green-500 ">
                    <span className="absolute max-w-65 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                    <span className="relative text-green-300 transition duration-300 group-hover:text-white ease"
                        onClick={() => setFilter(data)}>All products</span>
                </button>
                <button className="rounded-md w-40 px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-green-500 text-white">
                    <span className="absolute max-w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                    <span className="relative text-green-300  transition duration-300 group-hover:text-white ease"
                        onClick={() => filterProducts("men's clothing")}>Men's </span>
                </button>
                <button className="rounded-md w-40 px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-green-500 text-white">
                    <span className="absolute max-w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                    <span className="relative  text-green-300 transition duration-300 group-hover:text-white ease"
                        onClick={() => filterProducts("women's clothing")}>Women's </span>
                </button>

                <button className="rounded-md w-40 px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-green-500 text-white">
                    <span className="absolute max-w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                    <span className="relative text-green-300  transition duration-300 group-hover:text-white ease"
                        onClick={() => filterProducts("jewelery")}>Jewelery</span>
                </button>
                <button className="rounded-md w-40 px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-green-500 text-white">
                    <span className="absolute max-w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                    <span className="relative  text-green-300 transition duration-300 group-hover:text-white ease"
                        onClick={() => filterProducts("electronics")}>Electronics</span>
                </button>

            </div>
            {loading ? <h1 className='text-white text-xl flex justify-center text-center h-[100vh] p-4'>Loading...</h1> : ""}

            <section className='flex justify-center items-center'>
                <div className='card-container '>
                    {filter.map((product) => (

                        <div className='card shadow-green-200 shadow-md bg-slate-200 rounded  '>
                            <CardProduct
                                key={product.id}
                                image={product.image}
                                title={product.title}
                                category={product.category}
                                price={product.price}
                                stars={product.rating.rate}
                            />
                        </div>

                    ))}
                </div>
            </section>
        </>
    )
}







