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

  function showClientSideTasks () {
    console.log(tasks)
  }

  function showServerSideTasks () {
    getAllTasks()
      .then(tasks => console.log(tasks))
      .catch(err => console.log(err))
  }

  useEffect(() => updataCanva(), [])

  function addTaskToServer (text) {
    addTask(text)
      .then(() => {
        const newTask = {
          id: tasks.length + 2,
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
        // 因為 delete sheet row 會造成 data 重新排序，ID 會變動，所以要重新抓取一次
        getAllTasks().then(tasks => setTasks(tasks))
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

      <div>
        <input value={text} onChange={e => setText(e.target.value)} />
        <Button
          variant='primary'
          size='sm'
          className='m-1 p-1'
          onClick={() => addTaskToServer(text)}
        >
          Add
        </Button>
      </div>

      <div>
        <Button
          variant='info'
          size='sm'
          className='m-1 p-1'
          onClick={() => updataCanva()}
        >
          updataCanva
        </Button>

        <Button
          variant='success'
          size='sm'
          className='m-1 p-1'
          onClick={() => showClientSideTasks()}
        >
          showClientSideTasks
        </Button>

        <Button
          variant='success'
          size='sm'
          className='m-1 p-1'
          onClick={() => showServerSideTasks()}
        >
          showServerSideTasks
        </Button>
      </div>
    </div>
  )
}
export default TodoList
