'use client'

import React from 'react';
import {signOut} from "next-auth/react";
import Image from 'next/image';

type User = {
    avatar: string
}

const Logged = ({avatar}:User) => {
    return (
        <li className={'flex'}>
            <Image src={avatar} alt={''} width={32} height={32} className={'rounded-full mx-2'}/>
            <button onClick={()=>signOut()} className={'text-sm bg-gray-600 text-white py-2 px-6 rounded-xl'}>Sign Out</button>
        </li>
    );
};

export default Logged;