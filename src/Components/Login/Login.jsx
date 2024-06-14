import React from 'react';
import {GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../Firebase/firebase.init';


const Login = () => {
    const auth =getAuth(app);
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn =()=>{
        // console.log('google mama is coming')
        signInWithPopup(auth,googleProvider)
        .then(result=>{
            const user= result.user;
            console.log(user)
        });
        
            
        }
    
    return (
        <div>
        <button onClick={handleGoogleSignIn}>Google login</button>
    </div>
    )
};



export default Login;