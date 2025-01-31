import React from "react";
import LoginForm from "./LoginForm";

export default function SignInPage() {
    return (
        <div className='flex justify-center h-screen w-screen bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 pr-10 py-10'>
            <LoginForm />
        </div>
    )
}