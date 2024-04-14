'use client'

import DashboardList from "@/app/dashboard/DashboardList";
import {useState} from "react";

function LeftBarMenu() {
    const [boardList, setBoardList] = useState(false)
    return (
        <div className={'flex'}>
            <div className={'h-full w-16 border-r border-grey bg-white flex flex-col py-4'}>
                <img src="" alt="LOGO"/>
                <div className={'flex flex-col mt-14 gap-5'}>
                    <button>Кнопка</button>
                    <button onClick={() => setBoardList(!boardList)} className={`transition-all ${boardList ? '' : 'border-l-2 border-blue-600 font-bold'}`}>Доски</button>
                    <button>Кнопка</button>
                </div>
                <div className={'flex-grow'}></div>
                <button className={'justify-self-end'}>Выход</button>
            </div>
            <DashboardList state={boardList}/>
        </div>
    );
}

export default LeftBarMenu;