import React from 'react'
import PropTypes from 'prop-types'

/**
 *
 * @param {func,boolean,string,number} param0
 * @returns
 */
export function Todo ({ onClick, completed, text, id }) {
  return (
    <div>
      <li
        onClick={onClick}
        style={{
          textDecoration: completed ? 'line-through' : 'none',
          textDecorationColor: completed ? 'green' : 'black',
          color: completed ? 'green' : 'black'
        }}
      >
        {id} -{text}
      </li>
    </div>
  )
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
}
