'use server'
 
import { cookies } from 'next/headers'

export async function getAccessToken() {
    const cookiesStore = cookies()
    const accessTokenAsObject = cookiesStore.get('accessToken')
    const accessToken = accessTokenAsObject?.value

    return accessToken
}

export async function setAccessToken(accessToken) {
    const cookiesStore = cookies()
    cookiesStore.set('accessToken', accessToken)

    return
}