import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './AddTodo'
import status from 'daisyui/components/status'
function App() {
  const [newTask, setNewTask] = useState({
    title : '',
    status : '' 
  });
  function addTask() {
    setNewTask({title: '', status:'InComplete'})

  }
  return (
    <>
   <AddTodo />
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
