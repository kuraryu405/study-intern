import "./App.css";

export default function Complete({ todos, deleteTodo }) {
  return (
    <>
      <div className="Complete mb-10">
        <p className="text-2xl font-black text-left mb-3">Complete</p>
        <div
          className="w-[100%] h-[254px] rounded-[30px] bg-[#e0e0e0]"
          style={{
            boxShadow: `15px 15px 30px #bebebe, -15px -15px 30px #ffffff`,
          }}
        >
          {/* tasklist */}
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="p-2 m-2 rounded-xl text-left pl-8 pt-4"
            >
              {todo.title}
              <button
                className="Neumorphism-button-del mr-6 ml-6"
                onClick={() => deleteTodo(todo.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </div>
      </div>
    </>
  );
}
