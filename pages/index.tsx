import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <>
            <Head>
                <title>Home Page</title>
            </Head>
            <h1 className="text-3xl font-bold underline">
                Welcome to NextJs Auth 02
            </h1>
        </>
    )
}
