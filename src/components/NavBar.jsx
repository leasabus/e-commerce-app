
import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { BsFillCartPlusFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export const NavBar = () => {

    const [nav, setNav] = useState(true);



    const handleNav = () => {
        setNav(!nav)
        //se opone al valor actual de nav, si esta true es false y viceversa
    }

    return (
        <>
            <div className='bg-black text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-6'>

                <h1 className='w-full text-3xl font-bold text-green-400'>E-Shop.</h1>
                <ul className='hidden md:flex'>
                    <li className='p-4 font-medium text-xl'>
                        <Link to="home">Home</Link>
                    </li>
                    <li className='p-4 font-medium text-xl'>
                        <Link to='products'>Products</Link>
                    </li>

                    <li className='p-4 font-medium text-xl'>
                        <Link to='contact'>Contact</Link>
                    </li>
                    <li className='p-4 font-medium text-2xl  '>
                        <div className='flex flex-row items-center justify-center'>
                            <Link to='cart'>  <BsFillCartPlusFill /> </Link>
                            <span className='text-small text-red-600 text-[20px]'>0</span>
                        </div>
                    </li>
                </ul>

                <div onClick={handleNav} className='block md:hidden'>
                    {
                        !nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />
                    }
                    {/* si nav es true, se muestra el primer icono, de lo contrario(else) el otro */}
                </div>

                {/* if nav es not true , se muestra la navbar replegada, de lo contrario la escondemos */}
                <div className={!nav ? 'absolute left-0 top-0 w-[60%] h-[450px] border-r border-r-gray-900 bg-slate-900 ease-in-out duration-500' : 'fixed left-[-100%] '}>
                    <h1 className='w-full text-3xl font-bold text-green-400 m-4 p-4'>Shop.</h1>
                    <ul className=' uppercase  p-4'>
                        <li className='p-4 font-medium text-xl border-b border-gray-600'>
                            <Link to="home">Home</Link>
                        </li>
                        <li className='p-4 font-medium text-xl border-b border-gray-600'>
                            <Link to='products'>Products</Link>
                        </li>

                        <li className='p-4 font-medium text-xl border-b border-gray-600'>
                            <Link to='contact'>Contact</Link>
                        </li>
                        <div>
                            <li className='p-4 font-medium text-xl border-b border-gray-600'>
                                <div className='flex flex-row '>
                                    <Link to='cart'>  <BsFillCartPlusFill /> </Link>
                                    <span className='text-small text-red-600 text-[20px]'>0</span>
                                </div>

                            </li>
                        </div>
                    </ul>

                </div>
            </div>

        </>
    )
}
