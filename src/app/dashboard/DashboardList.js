'use client'

import {useEffect, useState} from "react";
import {getAllBoardsByUserId} from "@/api/dashboard";
import BoardButton from "@/components/BoardButton/BoardButton";

export default function DashboardList({boardListOpen}) {
    const [boards, setBoards] = useState(null)
    useEffect(() => {
        const getBoards = async () => {
            const allBoards = await getAllBoardsByUserId(1)
            setBoards(allBoards)
        }
        getBoards()
    }, []);

    return (
        <div className={`absolute left-16 bg-white h-full py-2 font-sans text-gray-900 border-r border-grey-600 transition-all ease-in-out duration-500 delay-100 overflow-hidden ${boardListOpen ? 'w-48 px-4' : 'w-0 px-0'}`}>
            <h1 className={'text-lg font-semibold mb-3'}>Boards</h1>
            <ul className={'flex flex-col gap-2 mb-10'}>
                {
                    boards
                        ?
                        boards.map(board => (<BoardButton key={board.id} title={board.title}/>))
                        :
                        <div>Loading...</div>
                }
            </ul>

            <h1 className={'text-lg font-semibold mb-3'}>Team</h1>
        </div>
    )
}
