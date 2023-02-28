'use client'

import React from 'react';
import {signIn} from "next-auth/react";

const Login = () => {
    return (
        <li>
            <button onClick={()=>signIn()}>Sign in</button>
        </li>
    );
};

export default Login;