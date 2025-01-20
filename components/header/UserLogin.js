"use client"

import { useAuth } from "@/lib/contexts/AuthContext"
import Link from 'next/link'

export default function UserLogin() {

    const {
        user,
        isLoading,
        error,
        handleSignInWithGoogle,
        handleLogout,
    } = useAuth();

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    if (user) {
        return <div className="flex gap-4 items-center">
            <button
                onClick={() => {
                    handleLogout();
                }}
                className="flex items-center gap-3 bg-indigo-500 text-white px-4 py-2 rounded-full"
            >
                Logout
            </button>
            <Link href='/'>
                <div className="flex gap-4 rounded-xl bg-indigo-500 px-3 py-2">
                    <div>
                        <h1 className="font-bold">{user?.displayName}</h1>
                        <h1 className="text-sm text-grey-300">{user?.email}</h1>
                    </div>
                </div>
            </Link>
            
        </div>
    }

    return <section>
        <button
            onClick={() => {
                handleSignInWithGoogle();
            }}
            className="flex items-center gap-3 bg-black text-white px-4 py-2 rounded-full">
            <img className='h-7' src="/google.png" alt="" />
            Sign-in With Google
        </button>
    </section>
}
