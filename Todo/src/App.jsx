import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react'
import './App.css'
import AddTodo from './AddTodo'
import InComplete from './InComplete'
import InProgress from './InProgress'
import Complete from './Complete'

function App() {
  // ここにtodoの状態を管理するものを入れる
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({ title: '', status: '', due: '' });

 
  function addTodo(title, status, due) {
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

  function moveInProgressTodo(id) {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, status: 'InProgress' } : todo));
  }

  function moveCompleteTodo(id) {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, status: 'Complete' } : todo));
  }
  function deleteTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }
  
  return (
  <>
      {/* これはtodo追加 */}

    <AddTodo todo={todo} setTodo={setTodo} addTodo={addTodo} />
    <InComplete todos={todos} setTodos={setTodos} moveInProgressTodo={moveInProgressTodo} deleteTodo={deleteTodo} />
    <InProgress todos={todos} setTodos={setTodos} moveCompleteTodo={moveCompleteTodo} deleteTodo={deleteTodo} />
    <Complete todos={todos} setTodos={setTodos} deleteTodo={deleteTodo} />
    {/* ここより下は後でコンポーネント化する */}
    

    </>
  )
}

export default App
