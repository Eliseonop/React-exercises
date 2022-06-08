import React, { useContext, useState } from 'react'
import Task from './Pure/Task'
import { TaskListContext } from './TaskListReducer'

export default function TaskListComponent () {
  const { state, dispatch } = useContext(TaskListContext)
  const [filter, setFilter] = useState(true)
  const [value, setValue] = useState({
    title: '',
    description: '',
    completed: false,
    id: ''
  })

  const handleCreate = (title, description) => {
    console.log(title, description)
    const id = state.tasks.length + 1
    dispatch({ type: 'CREATE', payload: { title, description, id } })
  }
  const handleCompleted = id => {
    dispatch({ type: 'COMPLETED', payload: { id } })
  }
  const handleDelete = id => {
    dispatch({ type: 'DELETE', payload: id })
  }

  //   console.log(state)
  return (
    <div>
      <h1>Task List</h1>
      <p>
        <button onClick={() => setFilter(!filter)}>
          {filter ? 'Completed' : 'Pending'}
        </button>
      </p>
      <hr />
      <div className='tasks'>
        {filter
          ? state.tasks.map(task => (
              <Task
                id={task.id}
                key={task.id}
                task={task}
                onDelete={handleDelete}
                onCompleted={handleCompleted}
              />
            ))
          : state.tasks
              .filter(task => task.completed)
              .map(task => (
                <Task
                  key={task.id}
                  task={task}
                  onDelete={handleDelete}
                  onCompleted={handleCompleted}
                />
              ))}
      </div>
      <div className='create'>
        <h2>Create Task</h2>
        <form
          onSubmit={e => {
            e.preventDefault()
            handleCreate(value.title, value.description)
            setValue({ title: '', description: '', completed: false, id: '' })
          }}
        >
          <input
            required
            type='text'
            placeholder='Title'
            value={value.title}
            onChange={e => setValue({ ...value, title: e.target.value })}
          />
          <input
            required
            type='text'
            placeholder='Description'
            value={value.description}
            onChange={e => setValue({ ...value, description: e.target.value })}
          />

          <button type='submit'>Create</button>
        </form>
      </div>
    </div>
  )
}
