import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import { useState } from 'react'
import Layout from "@/layout/layout"
import styles from '../styles/Form.module.css'
import { HiAtSymbol, HiFingerPrint, HiEye, HiEyeOff } from 'react-icons/hi'

export default function Login() {
    const [show, setShow] = useState(false)

    return (
        <Layout>
            <Head>
                <title>Login</title>
            </Head>

            <section className="w-3/4 mx-auto flex flex-col gap-10">
                {/* title */}
                <div className="titles">
                    <h1 className="text-gray-800 text-4xl font-bold py-4">Explore</h1>
                    <p className="w-3/4 mx-auto text-gray-400">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </p>
                </div>
                {/* form */}
                <form className="flex flex-col gap-5">
                    <div className={styles.input__group}>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className={styles.input__text}
                        />
                        <span className="icon flex items-center px-4">
                            <HiAtSymbol size="25" />
                        </span>
                    </div>
                    <div className={styles.input__group}>
                        <input
                            type={`${show ? 'text' : 'password'}`}
                            name="password"
                            placeholder="Password"
                            className={styles.input__text}
                        />
                        <span className="icon flex items-center px-4" onClick={() => setShow(!show)}>
                            {show ? <HiEye size="25" /> : <HiEyeOff size="25" />}
                        </span>
                    </div>
                    <div className="input-button">
                        <button type="submit" className={styles.button}>Login</button>
                    </div>
                    <div className="input-button">
                        <button type="button" className={styles.button__custom}>
                            Sign in with Google
                            <Image src="/assets/google.svg" width="20" height="20" alt="" />
                        </button>
                    </div>
                    <div className="input-button">
                        <button type="button" className={styles.button__custom}>
                            Sign in with Github
                            <Image src="/assets/github.svg" width="25" height="25" alt="" />
                        </button>
                    </div>
                </form>
                {/* bottom */}
                <p className="text-center text-gray-400">
                    Don't have an account yet? 
                    <Link href="/register" className="text-blue-700 pl-2">Register</Link>
                </p>
            </section>
        </Layout>
    )
}
