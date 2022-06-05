import './App.css'
import TodoContainer from './components/containers/TodoContainer'
import TodoFormContainer from './components/containers/TodoFormContainer'
import FilterOptions from './components/pure/FilterOptions'

function App () {
  return (
    <div className='App'>
      <h1>Hola mundo</h1>
      <TodoContainer />
      <TodoFormContainer />
      <FilterOptions />
    </div>
  )
}

export default App
