"use client"

import { signIn } from "next-auth/react";

export default function SigninButton() {
    return (
        <button
            className="rounded-full border border-solid border-blue-600 transition-colors flex items-center justify-center bg-blue-600 text-white gap-2 hover:bg-blue-700 font-medium text-sm h-10 px-4"
            onClick={() => signIn("keycloak")}
        >
            Login
        </button>
    );
}