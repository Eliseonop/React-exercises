import React from 'react'
import FilterContainer from '../containers/FilterContainer'
// import PropTypes from 'prop-types'

function FilterOptions () {
  return (
    <div className='filters'>
      <FilterContainer filter='SHOW_ALL'>All</FilterContainer>
      <FilterContainer filter='SHOW_ACTIVE'>Active</FilterContainer>
      <FilterContainer filter='SHOW_COMPLETED'>Completed</FilterContainer>
    </div>
  )
}

export default FilterOptions
