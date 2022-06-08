import './App.css'
import TaskListComponent from './components/TaskListComponent'
import TaskListReducer from './components/TaskListReducer'

function App () {
  return (
    <div className='App'>
      <TaskListReducer>
        <TaskListComponent />
      </TaskListReducer>
    </div>
  )
}

export default App
