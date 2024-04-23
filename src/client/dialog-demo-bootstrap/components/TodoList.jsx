import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'

import DefaultListGroup from './BootstrapTable'

import {
  getAllTasks,
  addTask,
  deleteTask as deleteServerTask,
  updateTask
} from '../hook'

function TodoList () {
  const [tasks, setTasks] = useState([])
  const [text, setText] = useState('')

  function updataCanva () {
    getAllTasks()
      .then(tasks => setTasks(tasks))
      .catch(err => console.log(err))
  }

  function showTasks () {
    console.log(tasks)
  }

  useEffect(() => updataCanva(), [])

  function addTaskToServer (text) {
    addTask(text)
      .then(() => {
        const newTask = {
          id: tasks.length + 1,
          text: text,
          completed: false
        }
        setTasks([...tasks, newTask])
      })
      .catch(err => console.log(err))

    setText('')
  }

  function deleteTask (id) {
    deleteServerTask(id)
      .then(() => {
        const result = tasks.filter(task => task.id !== id)
        setTasks(result)
      })
      .catch(err => console.log(err))
  }

  function toggleCompleted (id, completed) {
    updateTask(id, completed)
      .then(() => {
        const result = tasks.map(task => {
          if (task.id === id) task.completed = !task.completed
          return task
        })
        setTasks(result)
      })
      .catch(err => console.log(err))
  }

  return (
    <div className='todo-list'>
      <DefaultListGroup
        tasks={tasks}
        deleteTask={deleteTask}
        toggleCompleted={toggleCompleted}
      ></DefaultListGroup>

      <input value={text} onChange={e => setText(e.target.value)} />
      <Button variant='primary' size='sm' onClick={() => addTaskToServer(text)}>
        Add
      </Button>

      <Button variant='info' size='sm' onClick={() => updataCanva()}>
        updataCanva
      </Button>

      <Button variant='success' size='sm' onClick={() => showTasks()}>
        showTasks
      </Button>
    </div>
  )
}
export default TodoList
