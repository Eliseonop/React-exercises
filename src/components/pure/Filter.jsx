import React from 'react'
import PropTypes from 'prop-types'

function Filter ({ active, onClick, children }) {
  if (active) {
    return <span>{children}</span>
  }
  return (
    <div>
      <button
        className='filter'
        onClick={e => {
          e.preventDefault()
          onClick()
        }}
      >
        {children}
      </button>
    </div>
  )
}

Filter.propTypes = {
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
}

export default Filter
