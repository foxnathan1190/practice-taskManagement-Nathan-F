import './App.css'
import TaskDetail from './components/TaskDetail'
import TaskList from './components/TaskList'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {


  return (

    <BrowserRouter>
      <Routes>
        <Route path="/:id" element={<TaskDetail />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
