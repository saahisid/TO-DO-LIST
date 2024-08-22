"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState([])
  const [desc, setdecs] = useState([])
  const [mainTask, setmainTask] = useState([])
  const submitHandler = (e)=>{
      e.preventDefault()
      setmainTask([...mainTask, {title, desc}]);
      settitle('')
      setdecs('')
      console.log(mainTask)
  }; 

  const deleteHander = (i) => {
    let copytask = [...mainTask]
    copytask.splice(i,1)
    setmainTask(copytask)

  }

  let renderTask = <h2 className='flex justify-center'> No Task Available</h2>;

  if (mainTask.length > 0) {
  renderTask = mainTask.map((t,i) => {
    return (
       <li key={i} className='flex items-center justify-between mb-8'>
         <div className='flex items-center justify-between mb-5 w-2/3'>
        <h5 className='text-2xl font-semibold '>{t.title}</h5>
        <h6 className='text-lg font-medium '>{t.desc}</h6>
        </div>
        <button 
        onClick={()=>{
          deleteHander(i)
        }}
        className='bg-red-400 text-white rounded font-bold px-4 py-2'>Delete</button>

       </li>
  );
});
  }
  return (
    <>    
    <h1 className='bg-gray-800 text-gray-400 p-5 text-5xl font-bold text-center'>Saahil todo list</h1>    
    <form onSubmit={submitHandler} className='flex justify-center' >
      <input className=' text-gray-600 text-2xl border-zinc-800 border-2 m-5 px-4 py-2 ' 
      type="text"
      placeholder='Enter Title task'
      value={title}
      onChange={(e)=> {
        settitle(e.target.value)
      }}
       />
      
      <input className='text-gray-600 text-2xl border-zinc-800 border-2 m-5 px-4 py-2 '
      type="text"
      placeholder='Enter description task'
      value={desc} 
      onChange={(e)=>{
        setdecs(e.target.value)

      }}
      
      />
      <button className='bg-white text-black px-4 py-2 text-2xl font-bold rounded m-5 '>Add Task</button>
    </form>
    <hr />
    <div className='p-8 bg-slate-800'>
    <ul>
      {renderTask}
    </ul>
    </div>
    </>
  )
}

export default page
