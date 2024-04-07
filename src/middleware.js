import {NextResponse} from "next/server";


export async function middleware(request, response) {
    const {url, cookies} = request

    const refreshToken = cookies.get('refreshToken')?.value

    const isAuth = url.includes('/auth')

    if (isAuth && refreshToken) {
        return NextResponse.redirect(new URL('/', url))
    }

    if (isAuth) {
        return NextResponse.next()
    }

    if (!refreshToken) {
        return NextResponse.redirect(new URL('/auth/login', url))
    }
}

export const config = {
    matcher: ['/boards', '/auth/:path*', '/']
}