'use client'

import React from 'react';
import {signOut} from "next-auth/react";
import Image from 'next/image';

type User = {
    avatar: string
}

const Logged = ({avatar}:User) => {
    return (
        <li>
            <Image src={avatar} alt={''} width={24} height={24}/>
            <button onClick={()=>signOut()}>Sign Out</button>
        </li>
    );
};

export default Logged;