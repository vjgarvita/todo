import React from "react";
import { FaGoogle } from "react-icons/fa";
import { signIn } from 'next-auth/react';

const Login = () =>{
    return (
        <div className="min-h-screen grid place-items-center">
            <button className="bg-white px-8 py-4 flex gap-2 items-center" onClick={()=> signIn("google")}>
            <FaGoogle />
                Sign In with Google
            </button>
        </div>
    );
};

export default Login;