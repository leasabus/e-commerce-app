
import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
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
                        <Link to='about'>About</Link>
                    </li>
                    <li className='p-4 font-medium text-xl'>
                        <Link to='contact'>Contact</Link>
                    </li>
                </ul>

                <div onClick={handleNav} className='block md:hidden'>
                    {
                        !nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />
                    }
                    {/* si nav es true, se muestra el primer icono, de lo contrario(else) el otro */}
                </div>

                {/* if nav es not true , se muestra la navbar replegada, de lo contrario la escondemos */}
                <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-black ease-in-out duration-500' : 'fixed left-[-100%] '}>
                    <h1 className='w-full text-3xl font-bold text-green-400 m-4 p-4'>Shop.</h1>
                    <ul className=' uppercase  p-4'>
                        <li className='p-4 font-medium text-xl border-b border-gray-600'>
                            <Link to="home">Home</Link>
                        </li>
                        <li className='p-4 font-medium text-xl border-b border-gray-600'>
                            <Link to='products'>Products</Link>
                        </li>
                        <li className='p-4 font-medium text-xl border-b border-gray-600'>
                            <Link to='about'>About</Link>
                        </li>
                        <li className='p-4 font-medium text-xl border-b border-gray-600'>
                            <Link to='contact'>Contact</Link>
                        </li>
                    </ul>

                </div>
            </div>

        </>
    )
}
