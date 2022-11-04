import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { FetchingData } from '../api/FetchingData';
import { CartComponent } from '../components/CartComponent';
import { ContactPage } from '../components/ContactPage';
import { HomePage } from '../components/HomePage';
import { NavBar } from '../components/NavBar';
import { ShowProduct } from '../components/ShowProduct';


export const AppRoutes = () => {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path='home' element={<HomePage />}></Route>
                <Route path='products' element={<FetchingData />}></Route>
                <Route path='contact' element={<ContactPage />}></Route>
                <Route path='cart' element={<CartComponent />}></Route>
                <Route path='/*' element={<HomePage />}></Route>
                <Route path={'/details/:id'} element={<ShowProduct />}></Route>
            </Routes>
        </>
    )
}
