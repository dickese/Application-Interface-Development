import React, { useState } from 'react'

const ToDoInput = ({handleAdd}) => {
  const [todo, setToDo]= useState("")
  return (
    <div className='flex flex-col p-8 gap-4'>
      <input type='text' className='bg-white py-2 pl-2 rounded-xl border' value={todo} onChange={(e) => setToDo(e.target.value)}/>
      <div className='flex gap-4 justify-center'>
        <button
          className='bg-green-600 text-lg text-white px-4 py-2 font-bold rounded-lg cursor-pointer'
          onClick={() => {
            if (todo === '') {
              return;
            }
            handleAdd(todo);
            setToDo('');
          }}
        >
          Add
        </button>
        <button className='bg-blue-600 text-lg text-white px-4 py-2 font-bold rounded-lg cursor-pointer'
          onClick={() => setToDo("")}
        >
            Reset
        </button>
      </div>
    </div>
  );
}

export default ToDoInput
