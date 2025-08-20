// Fallback page for OIDC logout if external redirect is blocked
import { redirect } from "next/navigation";

export default async function LogoutOidcPage() {
    // Call Keycloak logout endpoint server-side
    await fetch("http://localhost:8080/auth/realms/saturn72-realm/protocol/openid-connect/logout", {
        method: "GET",
        // credentials: "include", // Uncomment if cookies/session needed
    });
    // Redirect to home page
    redirect("/");
    return null;
}
