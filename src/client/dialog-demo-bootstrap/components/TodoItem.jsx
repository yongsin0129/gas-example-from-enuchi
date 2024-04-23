import React from 'react'

function TodoItem ({ task, deleteTask, toggleCompleted }) {
  return (
    <div className='todo-item'>
      <input
        type='checkbox'
        checked={task.completed}
        onChange={() => toggleCompleted(task.id, task.completed)}
      />
      <p className={task.completed ? 'completed' : ''}>{task.text}</p>
      <button onClick={() => deleteTask(task.id)}>X</button>
    </div>
  )
}
export default TodoItem
