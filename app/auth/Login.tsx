'use client'

import React from 'react';
import {signIn} from "next-auth/react";

const Login = () => {
    return (
        <li>
            <button onClick={()=>signIn()} className={'text-sm bg-gray-600 text-white py-2 px-6 rounded-xl disabled:opacity-2.5'}>Sign in</button>
        </li>
    );
};

export default Login;