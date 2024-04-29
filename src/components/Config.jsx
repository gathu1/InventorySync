
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://todfhdzdwqbzvpckpfkc.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRvZGZoZHpkd3FienZwY2twZmtjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQzMDU0MzksImV4cCI6MjAyOTg4MTQzOX0.PjMdAygLDhsD30_9U2tVlEMjBIzXHaiMAMiVhlpFzYw'
export const supabase = createClient(supabaseUrl, supabaseKey)

// function loginWithGoogle() {
//     const {user, session, error } = supabase.auth.signIn({
//       provider:'google'
//     })
//   }

//   function logout() {
//     const { error } =  supabase.auth.signOut()
//   }



// import { initializeApp } from "firebase/app";
// import {getAuth, GoogleAuthProvider, onAuthStateChanged} from "firebase/auth"
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyA3Z9pLjtFUSZKPFQ6Rtzr09dt2cQhak3I",
//   authDomain: "inventorysync-7a0b1.firebaseapp.com",
//   projectId: "inventorysync-7a0b1",
//   storageBucket: "inventorysync-7a0b1.appspot.com",
//   messagingSenderId: "755999947935",
//   appId: "1:755999947935:web:e2f32aaf5f73d28bbff6aa",
//   measurementId: "G-0T333T62VK"
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app)
// const provider = new GoogleAuthProvider();
// const db = getFirestore(app);
// const user = auth.currentUser;
// function updateUserProfile(user) {
//     const userName = user.displayName;
//     const userEmail = user.email;
//     console.log(userEmail)
//     document.getElementById("userName").textContent = userName;
//     document.getElementById("userEmail").textContent = userEmail;
// }
// onAuthStateChanged(auth, (user) => {
//     if (user) {
//         updateUserProfile(user);
//         const uid = user.uid;
//         return uid;
//     } else {
//         alert("Create Account & login");
//     }
// })

// export {auth, provider, user, db}