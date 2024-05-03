// import { createClient } from '@supabase/supabase-js'
// import { Auth } from '@supabase/auth-ui-react'/*ThemeSupa*/
// import { useNavigate } from 'react-router-dom';
// import React, { useEffect, useState } from 'react'

// const supabase = createClient(
//   "https://todfhdzdwqbzvpckpfkc.supabase.co",
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRvZGZoZHpkd3FienZwY2twZmtjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQzMDU0MzksImV4cCI6MjAyOTg4MTQzOX0.PjMdAygLDhsD30_9U2tVlEMjBIzXHaiMAMiVhlpFzYw"
// );
// import { supabase } from "./Config"

// import { useState, useEffect } from 'react'
// import { auth, provider } from "./Config";
// import { signInWithPopup } from 'firebase/auth';

const Home = () => {
  // const [user, setUser] = useState({});
  // const navigate = useNavigate();

  // useEffect(() => {
  //   async function getUserData() {
  //     await supabase.auth.getUser().then((value) => {
  //       if (value.data?.user) {
  //         console.log(value.data.user);
  //         setUser(value.data.user);
  //       }
  //     })
  //   }
  //   getUserData();
  // }, []);

  // async function signOutUser() {
  //   const { error } = await supabase.auth.signOut();
  //   navigate("/");
  // }

  return (
    <>

      
  
      

        <div className='flex mb-20 mt-10'>
          <div className='w-1/2'>
            <div className='text-4xl mt-20 ml-20'>

              <h1 class="text-4xl font-bold text-gray-900">Inventory Management <br /> Portal</h1>

            </div>
            <div className='  mt-5 ml-20'>
              <p class="text-gray-600">
                Welcome to our Inventory Management System! Our platform streamlines <br />
                inventory tracking, order management, and stock replenishment. Easily
                <br /> manage product quantities, monitor sales, and generate reports. Whether <br />
                you're a small business or a large enterprise, our system ensures efficient <br />
                inventory control.
              </p>

            </div>
          </div>
          <div className='w-1/2 mr-10'>
            <img src="src\assets\industry-3087393_1280.jpg" alt="" className='mt-20 rounded-lg ' />

          </div>
        </div>
       {/* { Object.keys(user) !== 0? 
         <>
             <button className='rounded-lg p-3 bg-red-300' onClick={() => signOutUser()}>Sign Out</button>    

         </>
         :
         <>
         <h1>User is not logged in</h1>
         <button onClick={() => {navigate("/")}}>Go back home</button>
         </>
} */}
    </>
  )
}

export default Home