import { createClient } from '@supabase/supabase-js'
 import {Auth} from '@supabase/auth-ui-react'/*ThemeSupa*/
import { useNavigate } from 'react-router-dom'; 
import React, {useEffect, useState} from 'react'

const supabase = createClient(
  "https://todfhdzdwqbzvpckpfkc.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRvZGZoZHpkd3FienZwY2twZmtjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQzMDU0MzksImV4cCI6MjAyOTg4MTQzOX0.PjMdAygLDhsD30_9U2tVlEMjBIzXHaiMAMiVhlpFzYw"
);
// import { supabase } from "./Config"

// import { useState, useEffect } from 'react'
// import { auth, provider } from "./Config";
// import { signInWithPopup } from 'firebase/auth';

const Home = () => {
const [user, setUser] = useState({});
const navigate = useNavigate();

useEffect(() => {
  async function getUserData() {
    await supabase.auth.getUser().then((value) => {
      if(value.data?.user) {
        console.log(value.data.user);
        setUser(value.data.user);
      }
    })
  }
  getUserData();
}, []);

async function signOutUser() {
  const { error } = await supabase.auth.signOut();
  navigate("/Signin")
}
  // const [value, setValue] = useState('')
  // const handleClick = () => {
  //   signInWithPopup(auth, provider).then((data) => {
  //     setValue(data.user.email)
  //     localStorage.setItem("email", data.user.email)
  //   })
  // }
  // useEffect(() => {
  //   setValue(localStorage.getItem('email'))
  // })
  // const logout = () => {
  //   localStorage.clear()
  //   window.location.reload()
  // }
  return (
    <>
   
    <header>
     {/* { Object.keys(user) !== 0?  */}
   <button onClick={() => signOutUser()}>Sign Out</button>   
    </header>
    

    
         <div className='scrollbar-hide'>
         <div className='flex justify-end'>
           {/* <button onClick={handleClick} className='hover:bg-white bg-gray-700 rounded-mb mt-2 text-white hover:text-black ml-2 p-1'>Continue With Google</button> */}
              {/*<h6 className='ml-2'>logged in as:</h6>
         <h6 id="userName" className='text-black ml-2'></h6>
       <button onClick={logout}>Logout</button> */}
         </div>
         <div className='flex'>
           <div className='w-1/2'>
           <div className='text-4xl mt-20 ml-20'>
             LOREM IPSUM INVENTORY <br /> SYSTEM
           </div>
           <div className='  mt-5 ml-20'>
             <p className=""> Lorem ipsum dolor sit amet, consectetur adipiscing elit
               sed do <br /> eiusmod tempor incididunt ut labore et dolore
               magna aliqua. <br /> Ut enim ad minim veniam, quis nostrud
               exercitation ullamco <br />laboris nisi ut aliquip ex ea commodo
               consequat. Duis aute irure <br /> dolor in reprehenderit in
               voluptate velit esse cillum dolore eu <br /> fugiat nulla pariatur.
               Excepteur sint occaecat cupidatat non  <br />proident, sunt in culpa
               qui officia deserunt mollit anim id est laborum.
             </p>
             </div>
             </div>
             <div className='w-1/2'>
             <img src="src\assets\industry-3087393_1280.jpg" alt="" className='mt-20 mr-20  ' />
             
           </div>
         </div>
         </div>
         {/* <img src="src/assets/photo-1616401776146-ae3453da7105.avif" alt="" /> */}
       </>
  )} 
      
export default Home