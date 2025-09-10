import { useState } from 'react';
import AddTodo from './AddTodo';
import InComplete from './InComplete';
import InProgress from './InProgress';
import Complete from './Complete';

function App() {
  type Todo = {
    id: number;
    title: string;
    status: string;
    due: string;
  }
  // ここにtodoの状態を管理するものを入れる
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todo, setTodo] = useState({ title: '', status: '', due: '' });

 
  function addTodo(title: string, status: string, due: string) {
    const incompleteCount = todos.filter(todo => todo.status === 'InComplete').length;
    
    if (incompleteCount >= 3) {
      alert('タスクの上限が来ました');
      return; 
    }
  
    if (title.trim() === '') {
      alert('タイトルを入力してください');
      return;
    }
  
    console.log('Adding todo:', { title, status, due });
    setTodos([...todos, { id: Date.now(), title, status, due }]);
    setTodo({ title: '', status: '', due: '' });
  }

  function moveInProgressTodo(id: number) {
  const inprogressCount = todos.filter(todo => todo.status === 'InProgress').length;
  if (inprogressCount >= 3) {
    alert('進行中のタスクの上限が来ました');
    return;
  }
  if (!id){ 
    setTodos(todos.map(todo => todo.id === id ? { ...todo, status: 'InProgress' } : todo));
  }

  }

  function moveCompleteTodo(id: number) {
    const completeCount = todos.filter(todo => todo.status === 'Complete').length;
    if (completeCount >= 3) {
      alert('完了済みのタスクの上限が来ました、削除してください');
      return;
    }
    setTodos(todos.map(todo => todo.id === id ? { ...todo, status: 'Complete' } : todo));
  }
  function deleteTodo(id: number) {
    setTodos(todos.filter(todo => todo.id !== id));
  }
  
  return (
  <>
      {/* これはtodo追加 */}

    <AddTodo todo={todo} setTodo={setTodo} addTodo={addTodo} />
    <InComplete todos={todos} moveInProgressTodo={moveInProgressTodo} deleteTodo={deleteTodo} />
    <InProgress todos={todos}  moveCompleteTodo={moveCompleteTodo} deleteTodo={deleteTodo} />
    <Complete todos={todos}  deleteTodo={deleteTodo} />
    

    </>
  )
}

export default App
