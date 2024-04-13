'use client'
import {useEffect, useState} from "react";
import {getAllBoardsByUserId} from "@/api/dashboard";

export function BoardsList() {
    const [boards, setBoards] = useState(null)

    useEffect(() => {
        async function getBoards() {
            const allBoards = await getAllBoardsByUserId(1)
            setBoards(allBoards)
        }

        getBoards()
    }, []);

    return (
        <div>
            {
                boards
                    ?
                        boards.map(board => (
                            <div key={board.id}>{board.title}</div>
                        ))
                    :
                        <div>Loading...</div>
            }
        </div>
    )
}