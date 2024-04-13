'use client'

import {useEffect, useState} from "react";
import {getAllBoardsByUserId} from "@/api/dashboard";

export default function DashboardList() {
    const [boards, setBoards] = useState(null)
    useEffect(() => {
        const getBoards = async () => {
            const allBoards = await getAllBoardsByUserId(1)
            setBoards(allBoards)
        }
        getBoards()
    }, []);


    return (
        <ul>
            {
                boards
                    ?
                    boards.map(board => (<p key={board.id}>{board.title}</p>))
                    :
                    <div>Loading...</div>
            }
        </ul>
    )
}
