import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React,{ useReducer } from 'react'
import './App.css'
import AddTodo from './AddTodo'
import { use } from 'react'
function App() {
  // ここにtodoの状態を管理するものを入れる
  //読みさすさ重視でuseReducerを使う
  const todoStatus = { title : '', status : '', due : ''};
  const [todo, dispatch] = useReducer(reducer, todoStatus);

  function addTodo(title, status, due) {
    dispatch({type: 'addTodo', title: title, status: status, due: due});
  }
  function InProgress(title, status, due) {
    dispatch({type: 'InProgress', title: title, status: status, due: due});
  }
  function Complete(title, status, due) {
    dispatch({type: 'Complete', title: title, status: status, due: due});
  }
  function reducer(state, action) {
    switch(action.type){
      case 'addTodo':
        // useReducerのステータスを変える
        return {title: action.title, status: action.status, due: action.due};
        break;
      case 'InProgress':
        // useReducerのステータスを変える
        return {title: action.title, status: action.status, due: action.due};
        break;
      case 'Complete':
        // useReducerのステータスを変える
        return {title: action.title, status: action.status, due: action.due};
        break;
      default:
        return state;
        break;
    }
  }
  return (
  <>
      {/* これはtodo追加 */}
      {/* <button className="Neumorphism-button-del">del</button> */}
    <AddTodo />
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
