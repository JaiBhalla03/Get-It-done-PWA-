import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]"
import Login from "@/app/auth/Login";
import Logged from "@/app/auth/Logged";
import "server-only";

export default async function Nav(){
    const session = await getServerSession(authOptions)

    console.log(session)
    return (
        <nav className={'flex justify-between items-center py-8'}>
            <h1 className={'text-lg text-white'}>GET IT DONE</h1>
            <ul>
                {
                    (!session?.user)?<Login/>:<Logged avatar={session?.user?.image || ''}/>
                }
            </ul>
        </nav>
    )
}