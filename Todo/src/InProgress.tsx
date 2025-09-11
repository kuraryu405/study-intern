
export default function InProgress({ todos, moveCompleteTodo, deleteTodo }: { todos: Todo[]; moveCompleteTodo: (id: number) => void; deleteTodo: (id: number) => void }) {
    return (
        <>
            <div className="Incomplete mb-10">
                <p className="text-2xl font-black text-left mb-3">InProgress</p>
                <div
                    className="w-[100%] h-[254px] rounded-[30px] bg-[#e0e0e0]"
                    style={{
                        boxShadow: `15px 15px 30px #bebebe, -15px -15px 30px #ffffff`
                    }}
                >
                    {/* tasklist */}
                    {todos
                        .filter(todo => todo.status === 'InProgress')
                        .map(todo => (
                            <li
                                key={todo.id}
                                className="p-2 m-2 rounded-xl text-left pl-8 pt-4"
                            >
                                {todo.title}
                                <button className="Neumorphism-button mr-6 ml-6" onClick={() => moveCompleteTodo(todo.id)}>
                                    Complete
                                </button>
                                <button className="Neumorphism-button-del" onClick={() => deleteTodo(todo.id)}>
                                    Delete
                                </button>
                            </li>
                        ))}
                </div>
            </div>
        </>
    );
}
