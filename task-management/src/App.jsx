import './App.css'
import TaskDetail from './components/TaskDetail'
import TaskList from './components/TaskList'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {


  return (

    <Router>
      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/task/:taskId" element={<TaskDetail />} />
      </Routes>
    </Router>

  );
}

export default App
