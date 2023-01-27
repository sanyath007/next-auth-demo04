import React from "react"
import { GetServerSideProps } from "next"
import Link from "next/link"
import { useSession, getSession } from 'next-auth/react'
import prisma from "@/prisma"
import moment from 'moment'
import DefaultLayout from "@/layout/default-layout"

export const getServerSideProps: GetServerSideProps = async () => {
    const res = await fetch('http://localhost:3000/api/users')
    const users = await res.json()

    return { props: { users } }
}

export default function Users (props: any) {
    return (
        <DefaultLayout>
            <div className="container px-4">
                <h1 className="text-3xl font-bold py-4">User List</h1>

                <ul className="w-3/4">
                    {props.users && props.users.map((user: any) => <User key={user.id} user={user} />)}
                </ul>
            </div>
        </DefaultLayout>
    )
}

function User({ user }: { user: any }) {
    const formatDate = (date: string): string => {
        return moment(user.createdAt).format('DD/MM/YYYY');
    }

    return (
        <li>
            <Link href={`/users/${user.id}`}>
                <div className="flex justify-between w-full border py-2 px-4 text-gray-800 hover:text-gray-600 rounded-full">
                    <span>{user.name}</span>
                    <span>{formatDate(user.createdAt)}</span>
                </div>
            </Link>
        </li>
    )
}