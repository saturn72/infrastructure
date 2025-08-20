"use server";

const keycloakClientId =
  process.env.NEXT_PUBLIC_KEYCLOAK_CLIENT_ID || "web-ui-client";
const signoutUrl = `http://localhost:8080/auth/realms/saturn72-realm/protocol/openid-connect/logout?post_logout_redirect_uri=${encodeURI(
  "http://localhost:3001/"
)}&client_id=${encodeURIComponent(keycloakClientId)}`;

export async function serverSignout() {
  await fetch(signoutUrl, { method: "GET" });
}
