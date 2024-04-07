"use client"

import {useInput} from "@/hooks/useInput";
import {useRouter} from "next/navigation";
import {signIn} from "@/api/auth";
import Cookies from "js-cookie";

export default function SignInForm() {
    const email = useInput('')
    const password = useInput('')
    const router = useRouter()

    const onSubmitHandle = async (e) => {
        e.preventDefault()
        const response = await signIn(
            email.value,
            password.value
        )
        Cookies.set('accessToken', response.accessToken)
        router.push('/')
    }

    return (
        <form className="space-y-6" action="#" method="POST" onSubmit={onSubmitHandle}>
            <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Электронная почта
                </label>
                <div className="mt-2">
                    <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                        {...email}
                    />
                </div>
            </div>

            <div>
                <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                        Пароль
                    </label>
                </div>
                <div className="mt-2">
                    <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                        {...password}
                    />
                </div>
            </div>

            <div>
                <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                    Войти
                </button>
            </div>
        </form>
    )
}