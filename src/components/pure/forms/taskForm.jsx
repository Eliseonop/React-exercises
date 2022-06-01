import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { LEVELS } from '../../../models/levels.enum'
import { Task } from '../../../models/task.class'

const Taskform = ({ add, length }) => {
  const nameRef = useRef('')
  const descriptionRef = useRef('')
  const levelRef = useRef(LEVELS.NORMAL)

  function addTask (e) {
    e.preventDefault()
    const newTask = new Task(
      nameRef.current.value,
      descriptionRef.current.value,
      false,
      levelRef.current.value
    )

    add(newTask)
    // resetear formulario
    nameRef.current.value = ''
    descriptionRef.current.value = ''
    levelRef.current.value = LEVELS.NORMAL
  }
  const normalStyle = {
    color: '#007bff',
    fontWeight: 'bold'
  }
  const urgentStyle = {
    color: '#dc3545',
    fontWeight: 'bold'
  }
  const blockingStyle = {
    color: '#ffc107',
    fontWeight: 'bold'
  }

  return (
    <form
      onSubmit={addTask}
      className='d-flex justify-content-center align-item-center mb-4'
    >
      <div className='form-outline flex-fill'>
        <input
          ref={nameRef}
          type='text'
          id='inputName'
          className='form-control form-control-lg'
          required
          autoFocus
          placeholder='Nombre de la tarea'
        />
        <input
          ref={descriptionRef}
          type='text'
          id='inputDescription'
          className='form-control form-control-lg'
          required
          placeholder='Description'
        />

        <select
          className='form-control form-control-lg'
          ref={levelRef}
          id='selectLevel'
          defaultValue={LEVELS.NORMAL}
          style={
            levelRef.current.value === LEVELS.NORMAL
              ? normalStyle
              : levelRef.current.value === LEVELS.URGENT
              ? urgentStyle
              : blockingStyle
          }
        >
          <option style={normalStyle} value={LEVELS.NORMAL}>
            Normal
          </option>
          <option style={urgentStyle} value={LEVELS.URGENT}>
            Urgent
          </option>
          <option style={blockingStyle} value={LEVELS.BLOCKING}>
            Blocking
          </option>
        </select>
        <button type='submit' className='btn btn-success btn-lg ms-2'>
          {length > 0 ? 'Add New Task' : 'Create your First Task'}
        </button>
      </div>
    </form>
  )
}
Taskform.propTypes = {
  add: PropTypes.func.isRequired,
  length: PropTypes.number.isRequired
}

export default Taskform
