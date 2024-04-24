import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>

            <nav className='bg-gray-700 py-3'>
                <div className='container  flex justify-between items-center mt-1 mb-1 '>
                    <Link to="/" className='ml-10 text-white font-bold text-2xl'><strong>IS</strong></Link>
                    <ul className="flex justify-center items-center space-x-10">
                        <li>
                            <Link to="/" className='hover:underline text-white transition duration-300 ease-in-out font-bold '>Home</Link>
                        </li>
                        <li>
                            <Link to="/Inventory" className='hover:underline text-white transition duration-300 ease-in-out font-bold '>Inventory</Link>
                        </li><li>
                            <Link to="/Sale" className='hover:underline text-white transition duration-300 ease-in-out font-bold '>Sales</Link>
                        </li>
                    </ul>
                    <div>
                    
                    
                        </div>
                </div>


            </nav>
        </>
    )
    
}

export default Navbar;