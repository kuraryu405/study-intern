import type { Dispatch, SetStateAction } from 'react'


export default function AddTodo({ todo, setTodo, addTodo }: { todo: CreateTodoDto; setTodo: Dispatch<SetStateAction<CreateTodoDto>>; addTodo: ( dto : CreateTodoDto) => void }) {
    return (
        <>
        <div className="text-left">
            <input 
                type="text"  
                className='w-500 m-8 ml-1 h-16 p-5 rounded-xl' 
                placeholder="ここに入力" 
                value={todo.title} 
                onChange={(e) => setTodo({...todo, title: e.target.value, status: 'InComplete', due: ''})}
            />
            <button className="Neumorphism-button" onClick={() => addTodo(todo)}>Add</button>
        </div>        
        </>
        
    );
  }
//   value={todo.title}
// onChange={(e) => setTodo({...todo, title: e.target.value})}
