import { SignJWT, jwtVerify } from "jose";

//encrypt function
//https://github.com/panva/jose/blob/HEAD/docs/classes/jwt_sign.SignJWT.md

export async function CreateToken(email) {
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  const jwt = await new SignJWT({ email: email })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setIssuer(process.env.JWT_ISSUER)
    .setExpirationTime(process.env.JWT_EXPIRATION)
    .sign(secret);

  return jwt;
}

//decrypt function
export async function VerifyToken(token) {
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  let decode = await jwtVerify(token, secret);
  return decode["payload"];
}
