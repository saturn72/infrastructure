const requiredVars = [
  "AUTH_SECRET",
  "AUTH_KEYCLOAK_ID",
  "AUTH_KEYCLOAK_SECRET",
  "AUTH_KEYCLOAK_ISSUER",
];

console.log("Validating environment variables...");
const missing = requiredVars.filter(
  (v) => !process.env[v] || process.env[v]?.trim() === ""
);
if (missing.length > 0) {
  throw new Error(`Missing required env variables: ${missing.join(", ")}`);
}
