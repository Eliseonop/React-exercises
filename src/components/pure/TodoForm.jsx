import React, { useRef } from 'react'
import PropTypes from 'prop-types'

export default function TodoForm ({ submit }) {
  const newText = useRef('')

  return (
    <div>
      <h2>Create your Todos</h2>
      <form
        onSubmit={e => {
          e.preventDefault()
          submit(newText.current.value)
          newText.current.value = ''
        }}
      >
        <input type='text' name='todo' ref={newText} />
        <button type='submit'>Add Todo</button>
      </form>
    </div>
  )
}

TodoForm.propTypes = {
  submit: PropTypes.func.isRequired
}
