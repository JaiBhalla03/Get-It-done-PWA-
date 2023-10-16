'use client'

import React from 'react';
import {signOut} from "next-auth/react";
import Image from 'next/image';

type User = {
    avatar: string
}

const Logged = ({avatar}:User) => {
    return (
        <li className={'flex items-center gap-1'}>
            <div className={'rounded-full p-1 shadow shadow-gray-400 shadow-lg'}>
                <Image src={avatar} alt={''} width={40} height={40} className={'rounded-full'}/>
            </div>
            <button
                onClick={()=>signOut()}
                className={'text-xl font-semibold bg-white text-gray-400 py-2 px-6 rounded-xl shadow shadow-gray-400 shadow-lg'}
            >
                Sign Out
            </button>
        </li>
    );
};

export default Logged;