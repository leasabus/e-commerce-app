
import { useState, useEffect } from 'react';
import { ApiContext } from './ApiContext';


export const ApiProvider = ({ children }) => {
    //trae los datos de la api
    const [data, setData] = useState([]);
    //establece los filtros para los botones
    const [filter, setFilter] = useState(data);
    //muestra mensajes de carga cuando se renderiza
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


    return (
        <>

            <ApiContext.Provider value={{ data, filter, setFilter }} >
                {children}

            </ApiContext.Provider >
            {loading ? <h1 className='text-white text-xl flex justify-center text-center h-[100vh] p-4'>Loading...</h1> : ""}
        </>
    )
}
