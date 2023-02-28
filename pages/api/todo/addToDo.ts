// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {getServerSession} from "next-auth/next";
import {authOptions} from "@/pages/api/auth/[...nextauth]";
import prisma from '../../../prisma/lib/client'


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
   const {method} = req;
   if(method === 'POST'){
       const session = await getServerSession(req, res, authOptions);
       if(!session) return res.status(401).json({message: "Please sign in"})
       const title:string = req.body.title
       //get the user
       const prismaUser = await prisma.user.findUnique({
           where : {email: session?.user?.email}
       })
       //check on the title
       if(title.length > 50) return res.status(403).json({message: "Title cannot be more than 50 characters"})
       if(!title.length) return res.status(403).json({message: "Title cannot be empty"})
       try{
           const result = await prisma.post.create({
               data:{
                   title,
                   userId: prismaUser.id
               }
           })
           res.status(200).json(result)
       }
       catch(err){
           res.status(403).json({error: "error has occured while posting the todo"})
       }
   }
}
