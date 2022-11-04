
import { Link } from 'react-router-dom'
import Typed from 'react-typed';

export const HomePage = () => {
    return (
        <>
            <div className='text-white flex flex-col justify-center align-center text-center max-w-[800px] mx-auto min-h-screen pb-24'>
                <span className='text-green-300  font-semi-bold text-medium md:text-2xl'>Buy the best products</span>
                <h2 className='text-white md:text-7xl sm:text-6xl text-4xl   font-large pt-2'>The best choice.</h2>
                <h1 className='md:text-5xl sm:text-3xl text-2xl pt-2'>Fast, Security, Quality for <span className='text-gray-500'>
                    <Typed
                        strings={['Shoes', 'Shirts', 'Tech', 'Jewerly']}
                        typeSpeed={40}
                        backSpeed={60}
                        loop /></span></h1>
                <span className='text-slate-500 pt-4 text-bold text-center md:text-3xl sm: text-2xl mx-2' >Make your order and recive your products in three days!</span>
                <div className='flex justify-center align-center pt-12'>
                    <Link to="/products"><button className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-green-500 rounded-full shadow-md group">
                        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-green-500 group-hover:translate-x-0 ease">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                        <span className="absolute flex items-center justify-center w-full h-full text-green-500 transition-all duration-300 transform group-hover:translate-x-full ease">Get started</span>
                        <span className="relative invisible">Get Started</span>
                    </button>
                    </Link>
                </div>
            </div>



        </>
    )
}



