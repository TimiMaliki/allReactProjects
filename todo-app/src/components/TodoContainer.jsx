import React from 'react'
import Content from './Content'

const TodoContainer = ({todos, setTodoItems }) => {
  return (
    <div className='container mx-auto text-center mt-20 bg-gray-200 w-full h-full p-20'>
      <h1 className='-mt-2 text-2xl font-bold'>Todo App</h1>
       <div className='mt-8'>
         <Content todos={todos} setTodoItems={setTodoItems} />
       </div>
    </div>
  )
}

export default TodoContainer
