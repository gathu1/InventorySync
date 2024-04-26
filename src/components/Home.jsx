import {useState, useEffect} from 'react'
import {auth,provider} from "./Config";
import { signInWithPopup } from 'firebase/auth';

const Home = () => {
  const [value, setValue] = useState('')
    const handleClick =()=>{
        signInWithPopup(auth,provider).then((data)=>{
          setValue(data.user.email)
          localStorage.setItem("email", data.user.email)
        })
    }
    useEffect(() =>{
      setValue(localStorage.getItem('email'))
    })
    // const logout = () => {
    //   localStorage.clear()
    //   window.location.reload()
    // }
  return (
    <>
    <div className='flex justify-end'>
    <button onClick={handleClick} className='hover:bg-white bg-gray-700 rounded-mb mt-2 text-white hover:text-black ml-2 p-1'>Continue With Google</button>
     <h6 className='ml-2'>logged in as:</h6>
   {/* <h6 id="userName" className='text-black ml-2'></h6>
    <button onClick={logout}>Logout</button> */}
    </div>
    <div></div>
      <div className='text-4xl mt-20 ml-20'>
      LOREM IPSUM INVENTORY <br /> SYSTEM
      </div>
      <div className=' flex mt-5 ml-20'>
        <p className="w-1/2"> Lorem ipsum dolor sit amet, consectetur adipiscing elit
            sed do <br /> eiusmod tempor incididunt ut labore et dolore
            magna aliqua. <br /> Ut enim ad minim veniam, quis nostrud
            exercitation ullamco <br />laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure <br /> dolor in reprehenderit in
            voluptate velit esse cillum dolore eu <br /> fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non  <br />proident, sunt in culpa
            qui officia deserunt mollit anim id est laborum. 
        </p>
        <img src="src\assets\industry-3087393_1280.jpg" alt="" className='w-1/2 h-70 ml-5'/>
      </div>
      {/* <img src="src/assets/photo-1616401776146-ae3453da7105.avif" alt="" /> */}
    </>
    
  )
}

export default Home