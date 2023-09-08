import { SignJWT, jwtVerify } from "jose";

// Create a JWT token
export async function CreateToken(email) {
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  const jwt = await new SignJWT({ email })
    .setProtectedHeader({ alg: "HS256", typ: "JWT" })
    .setIssuedAt()
    .setIssuer(process.env.JWT_ISSUER)
    .setExpirationTime(process.env.JWT_EXPIRATION_TIME)
    .sign(secret);

  return jwt;
}

// Verify a JWT token
export async function VerifyToken(token) {
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  let decode = await jwtVerify(token, secret);
  return decode.payload;
}
