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
    if(method === "DELETE"){
        const session = await getServerSession(req,res, authOptions)
        if(!session) return res.status(401).json({message: "Please sign in"})
        //get auth users post
        try{
            const todoId = req.body
            const result = await prisma.todo.delete({
                where:{
                    id: todoId,
                }
            })
            return res.status(200).json(result);
        }
        catch(err){
            res.status(403).json({error: "error occured while deleting the todo"})
        }
    }
}
