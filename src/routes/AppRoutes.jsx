import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { FetchingData } from '../api/FetchingData';
import { FetchProducts } from '../api/FetchProducts';
import { AboutPage } from '../components/AboutPage';
import { ContactPage } from '../components/ContactPage';
import { HomePage } from '../components/HomePage';
import { NavBar } from '../components/NavBar';


export const AppRoutes = () => {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path='home' element={<HomePage />}></Route>
                <Route path='products' element={<FetchingData />}></Route>
                <Route path='about' element={<AboutPage />}></Route>
                <Route path='contact' element={<ContactPage />}></Route>
                <Route path='/*' element={<HomePage />}></Route>


            </Routes>
        </>
    )
}
