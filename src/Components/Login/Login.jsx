import {signOut, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../Firebase/firebase.init";
import { useState } from "react";

const Login = () => {
    const [users,setUsers]= useState([''])

    const auth = getAuth(app)

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn =()=>{

        signInWithPopup(auth,googleProvider)
        .then(result=>{
            const user = result.user;
            console.log(user);
            setUsers(user)
        })
        .catch(error=>{
            console.log(error.messege);
        })
   
 
            
        };
        const handleSignOut=()=>{
            signOut(auth)
            .then(result=>{

            })
            .catch(error=>{

            })
        }
    
    return (
        <div>
        <button onClick={handleGoogleSignIn}>Google login</button>
        <button onClick={handleSignOut}>signOut</button>

        <h2>user name: {users.displayName}</h2>
        <h2>user name: {users.email}</h2>
        <img src={users.photoURL} alt="" />

    </div>
    )
};



export default Login;