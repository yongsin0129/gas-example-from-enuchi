import React from 'react'
import Button from 'react-bootstrap/Button'

function TodoItem ({ task, deleteTask, toggleCompleted }) {
  return (
    <div className='todo-item'>
      <input
        type='checkbox'
        checked={task.completed}
        onChange={() => toggleCompleted(task.id, task.completed)}
      />
      <p className={task.completed ? 'completed' : ''}>{task.text}</p>
      <Button size='sm' variant='danger' onClick={() => deleteTask(task.id)}>
        X
      </Button>
    </div>
  )
}
export default TodoItem
