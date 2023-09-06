import { checkCookieAuth } from "./app/utility/MiddlewareUtility";

// Middleware for checking if user is logged in
export async function middleware(req) {
  if (req.nextUrl.pathname.startsWith("/dashboard")) {
    return await checkCookieAuth(req);
  }
}
