import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react'
import './App.css'
import AddTodo from './AddTodo'

function App() {
  // ここにtodoの状態を管理するものを入れる
  const [todo, setTodo] = useState({ title: '', status: '', due: '' });

  function addTodo(title, status, due) {
    // TODO: 実際のtodoリストに追加する処理を実装
    console.log('Adding todo:', { title, status, due });

    setTodo({ title: '', status: '', due: '' });
  }
  
  return (
  <>
      {/* これはtodo追加 */}

    <AddTodo todo={todo} setTodo={setTodo} addTodo={addTodo} />
    {/* ここより下は後でコンポーネント化する */}
    <div className="Incomplete mb-10">
      <p className="text-2xl font-black text-left mb-3">InComplete</p>
      <div className=" w-[100%] h-[254px] rounded-[30px] bg-[#e0e0e0]"
          style={{
                  boxShadow: `15px 15px 30px #bebebe, -15px -15px 30px #ffffff`
                }}>
          {/* tasklist */}
      </div>
    </div>
    <div className="Inprogress mb-10">
    <p className="text-2xl font-black text-left mb-3">InProgress</p>
      <div className=" w-[100%] h-[254px] rounded-[30px] bg-[#e0e0e0]"
          style={{
                  boxShadow: `15px 15px 30px #bebebe, -15px -15px 30px #ffffff`
                }}>
          {/* tasklist */}
      </div>
    </div>
    <div className="complete">
    <p className="text-2xl font-black text-left mb-3">Complete</p>
      <div className=" w-[100%] h-[254px] rounded-[30px] bg-[#e0e0e0]"
          style={{
                  boxShadow: `15px 15px 30px #bebebe, -15px -15px 30px #ffffff`
                }}>
          {/* tasklist */}
      </div>
    </div>

    </>
  )
}

export default App
