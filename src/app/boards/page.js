import {getAllBoardsByUserId} from '@/api/boards'

export default async function Main() {
    const allBoards = await getAllBoardsByUserId(1)

    return (
        <div className='text-gray-900'>
            <ul>
                {
                    allBoards.map((board) => <li>{board.title}</li>)
                }
            </ul>
        </div>
    );
}