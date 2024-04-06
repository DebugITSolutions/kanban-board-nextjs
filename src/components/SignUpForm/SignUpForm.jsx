"use client"

import {useInput} from "@/hooks/useInput";
import axios from "axios";
import {useRouter} from "next/navigation";
import {signUp} from "@/api/auth";

export default function SignUpForm() {
    const name = useInput('')
    const email = useInput('')
    const password = useInput('')
    const router = useRouter()
    const onSubmitHandle = async (e) => {
        e.preventDefault()
        const response = await signUp(
            email.value,
            name.value,
            password.value
        )
        router.push('/auth/login')
    }
    return (
        <form className="space-y-6" action="#" method="POST" onSubmit={onSubmitHandle}>
            <div>
                <div className="flex items-center justify-between">
                    <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                        Имя пользователя
                    </label>
                </div>
                <div className="mt-2">
                    <input
                        id="username"
                        name="username"
                        type="text"
                        autoComplete="username"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                        {...name}
                    />
                </div>
            </div>

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
                    Создать аккаунт
                </button>
            </div>
        </form>
    )
}