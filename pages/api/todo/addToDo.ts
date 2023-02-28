// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {getServerSession} from "next-auth/next";
import {authOptions} from '../auth/[...nextauth]'
import prisma from '../../../prisma/lib/client'


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const {method} = req;
    if(method === "POST"){
        const session = await getServerSession(req,res, authOptions)
        if(!session) return res.status(401).json({message: "Please sign in to add a todo"})
        const title:string = req.body.title
        //get user
        const prismaUser = await prisma.user.findUnique({
            where: {email: session?.user?.email}
        })
        //check on the title
        if(title.length > 300) return res.status(403).json({message: "Please write the title shorter than 300 words"})
        if(!title.length) return res.status(403).json({message :"Please do not leave title space empty"})
        //create a post
        try{
            const result = await prisma.todo.create({
                data: {
                    title,
                    userId: prismaUser.id
                }
            })
            res.status(200).json(result)
        }
        catch(err){
            res.status(403).json({error: "error has occured while adding the todo"})
        }
    }
}
