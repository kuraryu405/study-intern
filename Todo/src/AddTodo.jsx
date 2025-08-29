import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


export default function AddTodo() {

    return (
        <div className="text-left">
            <input type="text" className='w-500 m-8 ml-1 h-16 p-5 rounded-xl' placeholder="ここに入力"/>
            <button className="Neumorphism-button">Add</button>
        </div>        

    );
  }
