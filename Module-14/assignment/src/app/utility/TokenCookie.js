import { CreateToken } from "./JWTHelper";

// Create a cookie with a JWT token
export async function TokenCookie(email) {
  const token = await CreateToken(email);
  return {
    "Set-Cookie": `token=${token}; Path=/; HttpOnly; SameSite=Strict; Max-Age=${process.env.JWT_EXPIRATION_TIME};`,
  };
}
