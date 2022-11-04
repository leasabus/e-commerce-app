
import { useContext } from 'react';
import { CardProduct } from '../components/CardProduct';
import { ApiContext } from '../context/ApiContext';


export const FetchingData = () => {

    const { data, filter, setFilter } = useContext(ApiContext);

    const filterProducts = (cat) => {
        const updatedList = data.filter((x) => x.category === cat)
        setFilter(updatedList)
    }

    return (
        <>

            {/* filter buttons */}
            <div>
                <h1 className='text-white flex items-center text-center justify-center p-6  text-3xl'>Latest Products</h1>

            </div>
            <div className='flex flex-col items-center justify-center md:flex-row py-4 px-2 '>
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

            {/* card section */}
            <section className='flex justify-center items-center'>
                <div className='card-container '>

                    <CardProduct />
                </div>
            </section>
        </>
    )
}







