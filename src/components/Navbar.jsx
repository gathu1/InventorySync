import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRef } from "react";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import '/src/components/Navbar.css'

const Navbar = () => {
    const navRef = useRef();
    // const showNavbar = () => {
    //     navRef.current.classList.toggle("responsive_nav") ;
    // }
    
const hideNavbar =()=>{
    navRef.current.classList.remove("responsive_nav")
  }
    return (
        <>
    <header clas>
    <nav className='bg-gray-700 py-3 fixed top-0 left-0  w-screen flex flex-col items-center justify-center gap-6 transition duration-1000 transform translate-y-full transform-none'>
                <div className='container  flex justify-between items-center mt-1 mb-1 '>
                    <Link to="/Home" className='ml-10 text-white font-mono text-2xl'><strong>IS</strong></Link>
                    <ul className="flex justify-center items-center space-x-10">
                        <li>
                            <Link to="/Home" className='hover:underline text-white font-mono transition duration-300 ease-in-out font-bold '>Home</Link>
                        </li>
                        <li>
                            <Link to="/Inventory" className='hover:underline font-mono text-white transition duration-300 ease-in-out font-bold '>Inventory</Link>
                        </li><li>
                            <Link to="/Sale" className='hover:underline text-white  font-mono transition duration-300 ease-in-out font-bold '>Sales</Link>
                        </li>
                        <button className="p-1 cursor-pointer bg-transparent border-none outline-none invisible opacity-0 text-white text-2xl hover:visible hover:opacity-100 absolute top-2 right-2" onClick={hideNavbar}>
                     <FontAwesomeIcon icon={faTimes} /> 

                     </button>
                        <button className="p-1 cursor-pointer  border-none outline-none opacity-0 text-white text-2xl hover:visible hover:opacity-100 " onClick={hideNavbar}>
                     <FontAwesomeIcon icon={faBars} /> 

                     </button>
                    </ul>
                   
                    <div>
                    {/* <button className="ml-auto rounded-lg bg-white py-1 px-1"><Link to="/">Signin</Link></button> */}
                     
                   
                        </div>
                  
                </div>

               
            </nav>
    </header>
        </>
    )
    
}

export default Navbar;
// import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { useRef } from "react";
// import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

// const Navbar = () => {
//     const navRef = useRef();

//     const showNavbar = () => {
//         navRef.current.classList.toggle("responsive_nav");
//     };

//     const hideNavbar = () => {
//         navRef.current.classList.remove("responsive_nav");
//     };

//     return (
//         <header>
//             <nav className='bg-gray-700 py-3 fixed top-0 left-0 h-screen w-screen flex flex-col items-center justify-center gap-6 transition duration-1000 transform -translate-y-full transform-none'>
//                 <div className='container flex justify-between items-center mt-1 mb-1'>
//                     <Link to="/Home" className='ml-10 text-white font-mono text-2xl'><strong>IS</strong></Link>
//                     <ul className="flex justify-center items-center space-x-10">
//                         <li>
//                             <Link to="/Home" className='hover:underline text-white font-mono transition duration-300 ease-in-out font-bold'>Home</Link>
//                         </li>
//                         <li>
//                             <Link to="/Inventory" className='hover:underline font-mono text-white transition duration-300 ease-in-out font-bold'>Inventory</Link>
//                         </li>
//                         <li>
//                             <Link to="/Sale" className='hover:underline text-white font-mono transition duration-300 ease-in-out font-bold'>Sales</Link>
//                         </li>
//                         <button className="p-1 cursor-pointer bg-transparent border-none outline-none invisible opacity-0 text-white text-2xl hover:visible hover:opacity-100 absolute top-8 right-8" onClick={showNavbar}>
//                             <FontAwesomeIcon icon={faTimes} />
//                         </button>
//                         <button className="p-1 cursor-pointer bg-transparent border-none outline-none invisible opacity-0 text-white text-2xl hover:visible hover:opacity-100" onClick={showNavbar}>
//                             <FontAwesomeIcon icon={faBars} />
//                         </button>
//                     </ul>
//                 </div>
//             </nav>
//         </header>
//     );
// };

// export default Navbar;
