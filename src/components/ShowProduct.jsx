import React, { useState } from 'react'
import { useEffect } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useNavigate, useParams } from 'react-router-dom';





export const ShowProduct = () => {
    const [loading, setLoading] = useState([]);
    const [product, setProduct] = useState(false);
    const { id } = useParams();

    const navigate = useNavigate();
    const onReturn = () => {
        navigate(-1)
    }

    useEffect(() => {
        const getProductById = async () => {
            setLoading(true)
            const URL = `https://fakestoreapi.com/products/${id}`;
            const response = await fetch(URL);
            setProduct(await response.json());
            setLoading(false)

        }
        getProductById();
    }, [])



    return (
        <>

            {loading ? <h1 className='text-white text-xl flex justify-center text-center h-[100vh] p-4'>Loading...</h1> : ""}
            <div className='text-white flex flex-col items-center justify-center xl:flex-row'>
                <div className='flex justify-center items-center lg:max-w-[600px]  md:max-w-[350px] p-4  '>
                    <img src={product.image} className=" rounded h-[500px] w-[400px] mt-4" alt="Image is loading..."
                    />
                </div>
                <div className='flex flex-col justify-center items-center text-center px-4 mb-12 max-w-[600px]'>
                    <h1 className='text-white text-center px-2 pt-4 text-2xl'>{product.title}</h1>
                    <span className='text-2xl p-2 text-slate-400'>Category: {product.category}</span>
                    <span className='pb-4 text-2xl text-slate-400'>Price: {product.price}$</span>
                    <button onClick={onReturn}><AiOutlineArrowLeft className='text-green-500 bg-slate-700 rounded sm:w-24 md:w-28 mb-4 hover:bg-slate-300' size={40} /></button>
                </div>
            </div>
        </>
    )
}

