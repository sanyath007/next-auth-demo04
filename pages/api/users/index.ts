import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/prisma'

type User = {
    id: number
    name: string
    email: string
    password: string
    createdAt: string
    updatedAt: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<User[] | any[]>
) {
    const users = await prisma.user.findMany({})

    res.status(200).json(users)
}