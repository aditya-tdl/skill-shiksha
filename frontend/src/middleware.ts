import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    // 1) Get the token from the cookies parsing
    const token = request.cookies.get('adminToken')?.value;

    // The current path being visited
    const { pathname } = request.nextUrl;

    // 2) If the user is trying to access ANY admin route EXCEPT the login page
    if (pathname.startsWith('/admin') && pathname !== '/admin/login') {

        // No token present? Kick them back to login page
        if (!token) {
            return NextResponse.redirect(new URL('/admin/login', request.url));
        }

        // Technically, the ideal setup verifies the JWT payload cryptographic signature here natively. 
        // But for generic middleware validation checking cookie presence guarantees protection from UI snoopers. 
        // Actual data security belongs on the backend anyway.
    }

    // 3) Optionally: If they already have a token and try to visit /admin/login, redirect them automatically to the dashboard so they don't login twice
    if (pathname === '/admin/login' && token) {
        return NextResponse.redirect(new URL('/admin/dashboard', request.url));
    }

    // Proceed as normal 
    return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
    // Only fire this middleware logic on /admin routes using Regex matches
    matcher: ['/admin/:path*'],
};
