import React from "react"
import { GetServerSideProps } from "next"
import { useSession, getSession } from 'next-auth/react'
import prisma from "@/prisma"
import Link from "next/link"

export const getServerSideProps: GetServerSideProps = async () => {
    const res = await fetch('http://localhost:3000/api/users')
    const users = await res.json()

    return { props: { users } }
}

export default function Users (props: any) {
    console.log(props.users);
    
    return (
        <div className="container px-2">
            <h1 className="text-3xl font-bold py-4">User List</h1>
            <ul>
                {props.users && props.users.map((user: any) => (
                    <li key={user.id}>
                        <Link href={`/users/${user.id}`}>
                            <span className="text-gray-800 hover:text-gray-600">{user.name}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}