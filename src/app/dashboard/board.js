export default async function Board() {
    // const allBoards = await getAllBoardsByUserId(1)

    // Временные данные
    const board = {
        title: "Работа над пет-проектом",
        columns: [
            {
                title: "Сделать",
                tasks: [
                    {
                        title: "Функционал страницы с доской",
                        body: "Нужно получать данные о доске для каждого конкретного пользователя, отказавшись от временного решения, которое использовалось для вёрстки",
                    },
                    {
                        title: "Функционал страницы с доской",
                        body: "Нужно получать данные о доске для каждого конкретного пользователя, отказавшись от временного решения, которое использовалось для вёрстки",
                    },
                ]
            },
            {
                title: "В работе",
                tasks: [
                    {
                        title: "Использовать MobX",
                        body: "Для реализации функционала страницы с доской требуется использовать state manager"
                    }
                ]
            },
            {
                title: "Готово",
                tasks: [
                    {
                        title: "Сверстать страницу доски",
                        body: "Нужно сверстать страницу для доски, где будет доска, у каждой доски минимум по 3 колонки, а у каждой колонки есть неопределенное количество задач"
                    }
                ]
            },
        ]
    }

    return (
        <main className="font-sans h-full bg-gray-200 text-gray-900">
            <div className="">
                <h1 className="text-center text-xl pb-10 pt-5 font-black">{board.title}</h1>
                <div className="flex flex-row justify-center space-x-20">
                    {
                        board.columns.map(column =>
                            <Column title={column.title}>
                                {
                                    column.tasks.map(task =>
                                        <Task title={task.title}>
                                            {task.body}
                                        </Task>
                                    )
                                }
                            </Column>
                        )
                    }
                </div>
            </div>
        </main>
    );
}

function Column({ title, children }) {
    return (
        <div className="">
            <h2 className="text-lg font-bold mb-6">{title}</h2>
            <div className="space-y-4">
                {children}
            </div>
        </div>
    )
}

function Task({ title, children }) {
    return (
        <div className="shadow-sm bg-white rounded-md w-72">
            <h3 className="pl-4 pr-4 pt-4 pb-2 text-base font-medium">{title}</h3>
            <p className="pl-4 pr-4 pb-4 text-gray-500 text-xs">{children}</p>
        </div>
    )
}