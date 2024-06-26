import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'

import TodoItem from './TodoItem'

function DefaultListGroup ({ tasks, deleteTask, toggleCompleted }) {
  return (
    <ListGroup>
      {tasks.map(task => (
        <ListGroup.Item key={task.id}>
          <TodoItem
            task={task}
            deleteTask={deleteTask}
            toggleCompleted={toggleCompleted}
          />
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}

export default DefaultListGroup
