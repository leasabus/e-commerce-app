//formatear el codigo para q quede limpio(separar en componentes etc)
//aplicar el grid
//mostrar msj de carga cuando aplico filtros
//implementar el boton de agregar al carrito

import { useState, useEffect } from 'react';
import { CardProduct } from '../components/CardProduct';

export const FetchingData = () => {
    const [data, setData] = useState([])
    const [filter, setFilter] = useState(data)
    const [loading, setLoading] = useState(false)

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


    const Loading = () => {

        return (
            <>
                <ShowProducts />

                <h1 className='text-white'>Loading...</h1>
            </>
        )
    }

    const filterProducts = (cat) => {
        const updatedList = data.filter((x) => x.category === cat)
        setFilter(updatedList)
    }

    const ShowProducts = () => {

    }
    return (
        <>
            {/* mensaje de carga */}
            <div>
                <h1 className='text-white'>Latest Products</h1>
                {loading ? <Loading /> : "error 404"}
            </div>
            <div className='flex items-center justify-center'>
                <button className='text-white bg-slate-400 m-2 px-2 py-1 rounded w-[80px]'
                    onClick={() => setFilter(data)}>All</button>
                <button className='text-white bg-slate-400 m-2 px-2 py-1 rounded w-[80px]'
                    onClick={() => filterProducts("men's clothing")}>Men's Clothing</button>
                <button className='text-white bg-slate-400 m-2 px-2 py-1 rounded w-[80px]'
                    onClick={() => filterProducts("women's clothing")}>Women's Clothing</button>

                <button className='text-white bg-slate-400 m-2 px-2 py-1 rounded w-[80px]'
                    onClick={() => filterProducts("jewelery")}>Jewelery</button>
                <button className='text-white bg-slate-400 m-2 px-2 py-1 rounded w-[80px]'
                    onClick={() => filterProducts("electronics")}>Electronics</button>



            </div>
            {filter.map((product) => {
                return (
                    <>
                        <div className='card' >
                            <CardProduct
                                key={product.id}
                                image={product.image}
                                title={product.title}
                                category={product.category}
                                price={product.price}
                                stars={product.rating.rate}
                            />
                        </div>
                    </>
                )
            }
            )}

        </>
    )
}







