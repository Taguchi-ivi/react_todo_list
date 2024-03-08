import { useState } from 'react';
import './App.css';
import Header from './component/Header';
import TaskList from './component/TaskList';

function App() {
  const [task, setTask] = useState([]); // status = 0: 未完了, 1: 完了済み | mode = edit: 編集, "": その他

  return (
    <div className="container">
      <Header setTask={setTask} />
      <TaskList
        task={task}
        setTask={setTask}
      />
    </div>
  );
}

export default App;
