import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const [session, setSession] = useState(false)

    return (
        <>
            <Head>
                <title>Home Page</title>
            </Head>
            
            {session ? <User /> : <Guest />}
        </>
    )
}

function Guest() {
    return (
        <main className="container mx-auto text-center py-20">
            <h1 className="text-4xl font-bold">Guest</h1>
            <div className="flex justify-center">
                <Link href="/login" className="mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50">
                    Sign In
                </Link>
            </div>
        </main>
    )
}

function User() {
    return (
        <main className="container mx-auto text-center py-20">
            <h1 className="text-4xl font-bold">Authorize User</h1>
            <div className="details">
                <h5>Unknown</h5>
                <h5>Unknown</h5>
            </div>

            <div className="flex justify-center">
                <button className="mt-5 px-10 py-1 rounded-sm bg-indigo-500 bg-gray-50">Sign Out</button>
            </div>

            <div className="flex justify-center">
                <Link href="/profile" className="mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50">
                    Profile page
                </Link>
            </div>
        </main>
    )
}
