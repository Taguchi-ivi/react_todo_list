import { useState } from 'react';
import './App.css';
import Header from './component/Header';
import TaskList from './component/TaskList';

function App() {
  const [tasks, setTasks] = useState([]); // id | title | isCompleted | isEdit

  return (
    <div className="container">
      <Header setTasks={setTasks} />
      <TaskList
        tasks={tasks}
        setTasks={setTasks}
      />
    </div>
  );
}

export default App;
