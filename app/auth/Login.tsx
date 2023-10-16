'use client'

import React from 'react';
import {signIn} from "next-auth/react";

const Login = () => {
    return (
        <li>
            <button onClick={()=>signIn()} className={'text-xl font-semibold bg-white text-gray-400 py-2 px-6 rounded-xl shadow shadow-gray-400 shadow-lg disabled:opacity-2.5'}>Sign in</button>
        </li>
    );
};

export default Login;