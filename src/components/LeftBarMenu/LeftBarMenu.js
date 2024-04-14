'use client'

import DashboardList from "@/app/dashboard/DashboardList";
import {useState} from "react";
import {signOut} from "@/api/auth";
import {useRouter} from "next/navigation";

function LeftBarMenu() {
    const [boardListOpen, setBoardListOpen] = useState(false)
    const router = useRouter()

    const signOutHandler = async () => {
        await signOut('test@gmail.com')
        router.push('/auth/login')
    }

    return (
        <div className={'flex'}>
            <div className={'h-full w-16 border-r border-grey bg-white flex flex-col py-4'}>
                <img src="" alt="LOGO"/>
                <div className={'flex flex-col mt-14 gap-5'}>
                    <button>Кнопка</button>
                    <button onClick={() => setBoardListOpen(!boardListOpen)} className={`transition-all ${boardListOpen ? 'border-l-2 border-blue-600 font-bold' : ''}`}>Доски</button>
                    <button>Кнопка</button>
                </div>
                <div className={'flex-grow'}></div>
                <button onClick={signOutHandler} className={'justify-self-end'}>Выход</button>
            </div>
            <DashboardList boardListOpen={boardListOpen}/>
        </div>
    );
}

export default LeftBarMenu;