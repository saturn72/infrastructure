"use client"

import { signOut } from "next-auth/react";

export default function SignoutButton() {
    return (
        <button
            className="rounded-full border border-solid border-red-600 transition-colors flex items-center justify-center bg-red-600 text-white gap-2 hover:bg-red-700 font-medium text-sm h-10 px-4"
            onClick={() => signOut()}
        >
            Logout
        </button>
    );
}