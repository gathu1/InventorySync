import { createClient } from '@supabase/supabase-js'
import {Auth } from '@supabase/auth-ui-react'/*ThemeSupa*/
import { ThemeSupa } from '@supabase/auth-ui-shared';
// import { useNavigate } from 'react-router-dom'; 

const supabase = createClient(
  "https://todfhdzdwqbzvpckpfkc.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRvZGZoZHpkd3FienZwY2twZmtjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQzMDU0MzksImV4cCI6MjAyOTg4MTQzOX0.PjMdAygLDhsD30_9U2tVlEMjBIzXHaiMAMiVhlpFzYw"
);

function Signin () {
// const navigate = useNavigate();

supabase.auth.onAuthStateChange(async (event) =>
{
    if (event !== "SIGNED_OUT"){
      window.location.href = "/Home";
    }else{
      window.location.href = "/";
    }
})
  return (
    <div className="flex h-screen bg-white items-center justify-center">
  <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
  
    <form>
    
    <Auth
    supabaseClient ={supabase}
    appearance={{theme: ThemeSupa }}
    // theme= "dark"
    providers={["google"]}
    />
  
     
    </form>
  </div>
</div>
   
  )
}

export default Signin