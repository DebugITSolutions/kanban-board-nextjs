import Link from "next/link";
import SignInForm from "@/components/SignInForm/SignInForm";

export const metadata = {
    title: "Авторизация"
};

export default function Page() {
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h1 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Авторизация
                </h1>
                <h2 className="text-center text-1xl text-gray-500">
                    Войдите в свою учетную запись
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <SignInForm/>

                <p className="mt-10 text-center text-sm text-gray-500">
                    Не зарегестрированы?{' '}
                    <Link href="/auth/register" className="font-semibold leading-6 text-blue-600 hover:text-blue-500">
                        Создать аккаунт
                    </Link>
                </p>
            </div>
        </div>
    )
};