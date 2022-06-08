import React from 'react'

export default function Task ({ task, onDelete, onCompleted }) {
  return (
    <div className='task'>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <p>{task.completed ? 'Completed' : 'Pending'}</p>
      {/* buton completed */}
      <button onClick={() => onCompleted(task.id)}>Completed</button>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  )
}
