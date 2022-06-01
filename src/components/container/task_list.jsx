import React, { useState, useEffect } from 'react'
import { LEVELS } from '../../models/levels.enum'
import { Task } from '../../models/task.class'
import TaskComponent from '../pure/task'

// Importamos la hoja de estilos de task.scss
import '../../styles/task.scss'
import Taskform from '../pure/forms/taskForm'
import TaskFormik from '../pure/forms/taskFormik'

const TaskListComponent = () => {
  const defaultTask1 = new Task('Example1', 'Description1', true, LEVELS.NORMAL)
  const defaultTask2 = new Task(
    'Example2',
    'Description 2',
    false,
    LEVELS.URGENT
  )
  const defaultTask3 = new Task(
    'Example3',
    'Description 3',
    false,
    LEVELS.BLOCKING
  )

  // Estado del componente
  const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3])
  const [loading, setLoading] = useState(true)

  // Control del ciclo de vida del componente
  useEffect(() => {
    console.log('Task State has been modified')

    setTimeout(() => {
      setLoading(false)
    }, 2000)
    return () => {
      console.log('TaskList component is going to unmount...')
    }
  }, [tasks])

  function completeTask (task) {
    console.log('Task completed: ', task)
    const index = tasks.indexOf(task)
    console.log('Index: ', index)
    const newTasks = [...tasks]
    newTasks[index].completed = !newTasks[index].completed
    setTasks(newTasks)
  }
  function deleteTask (task) {
    console.log('Tarea Eliminada: ', task)
    const index = tasks.indexOf(task)
    const newTasks = [...tasks]
    newTasks.splice(index, 1)
    setTasks(newTasks)
  }
  function addTask (task) {
    console.log('Tarea Agregada: ', task)
    const newTasks = [...tasks]
    newTasks.push(task)
    setLoading(true)
    setTasks(newTasks)
  }
  const TaskTable = () => {
    return (
      <table>
        <thead>
          <tr>
            <th scope='col'>Title</th>
            <th scope='col'>Description</th>
            <th scope='col'>Priority</th>
            <th scope='col'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => {
            return (
              <TaskComponent
                key={index}
                task={task}
                complete={completeTask}
                remove={deleteTask}
              ></TaskComponent>
            )
          })}
        </tbody>
      </table>
    )
  }
  const loadingStyle = {
    color: 'grey',
    fontSize: '2rem',
    fontWeight: 'bold',
    textAlign: 'center'
  }
  return (
    <div>
      <div className='col-12'>
        <div className='card'>
          {/* Card Header (title) */}
          <div className='card-header p-3'>
            <h5>Your Tasks:</h5>
          </div>
          {loading ? (
            <p style={loadingStyle}>Loading....</p>
          ) : (
            <div>
              {tasks.length > 0 ? (
                <TaskTable />
              ) : (
                <div className='card-body'>
                  <p>You have no tasks</p>
                </div>
              )}
              <div
                className='card-body'
                data-mdb-perfect-scrollbar='true'
                style={{ position: 'relative', height: '400px' }}
              ></div>
            </div>
          )}
        </div>
        {/* <Taskform add={addTask} length={tasks.length}></Taskform> */}
        <TaskFormik add={addTask} length={tasks.length}></TaskFormik>
      </div>
    </div>
  )
}

export default TaskListComponent
