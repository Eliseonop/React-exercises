import React, { useContext } from 'react'
import Task from './Pure/Task'
import { TaskListContext } from './TaskListReducer'

export default function TaskListComponent () {
  const state = useContext(TaskListContext)

  //   const handleCreate = (title, description) => {
  //     dispatch({ type: 'CREATE', payload: { title, description } })
  //   }
  //   const handleUpdate = (id, title, description) => {
  //     dispatch({ type: 'UPDATE', payload: { id, title, description } })
  //   }
  //   const handleDelete = id => {
  //     dispatch({ type: 'DELETE', payload: id })
  //   }
  console.log(state)
  return (
    <div>
      <h1>Task List</h1>
      {/* {state.tasks.map(task => (
        <Task
          key={task.id}
          task={task}
          onDelete={() => handleDelete(task.id)}
          onUpdate={(title, description) =>
            handleUpdate(task.id, title, description)
          }
        />
      ))}

      <div>
        <h2>Create Task</h2>
        <form
          onSubmit={e => {
            e.preventDefault()
            const title = e.target.title.value
            const description = e.target.description.value
            handleCreate(title, description)
          }}
        >
          <input type='text' placeholder='Title' />
          <input type='text' placeholder='Description' />
          <button type='submit'>Create</button>
        </form> 
      </div>*/}
    </div>
  )
}
