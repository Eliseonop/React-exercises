import React from 'react'

export default function Task ({ task, onDelete, onUpdate }) {
  return (
    <div>
      Task
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <button onClick={() => onDelete(task.id)}>Delete</button>
      <button onClick={() => onUpdate(task.id)}>Update</button>
    </div>
  )
}
