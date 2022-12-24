// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {User} from "@prisma/client"
import prisma from "../../lib/prisma"



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<String>
) {
    const users:User[] = await prisma.user.findMany()
    res.json(users)
}


