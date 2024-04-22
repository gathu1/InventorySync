import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>

            <nav className='bg-gray-700 py-3'>
                <div className='container  flex justify-between items-center mt-1 mb-1 '>
                    <Link to="/" className='text-white   font-bold text-2xl'><strong>IS</strong></Link>
                    <ul className="flex justify-center items-center space-x-10">
                        <li>
                            <Link to="/" className='hover:underline hover:text-green-500 text-white transition duration-300 ease-in-out font-bold '>Home</Link>
                        </li>
                        <li>
                            <Link to="#" className='hover:underline hover:text-green-500 text-white transition duration-300 ease-in-out font-bold '>Inventory</Link>
                        </li><li>
                            <Link to="#" className='hover:underline hover:text-green-500 text-white transition duration-300 ease-in-out font-bold '>Sales</Link>
                        </li>
                    </ul>
                    <div>
                    <button>
                        <Link to="#" className='rounded-lg bg-white hover:underline hover:text-black text-gray-500 transition duration-300 ease-in-out mr-5 p-1'>Sign up</Link>
                        </button>
                        <button>
                        <Link to="#" className='rounded-lg bg-white hover:underline hover:text-black text-gray-500 transition duration-300 ease-in-out '>Log in</Link>
                        </button>
                        </div>
                </div>


            </nav>
        </>
    )
}

export default Navbar;