"use client";

import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";

export default function SignoutButton() {
    const router = useRouter();
    const signoutUrl = "http://localhost:8080/auth/realms/saturn72-realm/protocol/openid-connect/logout";

    const handleSignOut = async () => {
        await signOut();
        router.push(signoutUrl);
    };

    return (
        <button
            className="rounded-full border border-solid border-red-600 transition-colors flex items-center justify-center bg-red-600 text-white gap-2 hover:bg-red-700 font-medium text-sm h-10 px-4"
            onClick={handleSignOut}
        >
            Logout
        </button>
    );
}
