import { useState } from 'react';
import './App.css';
import { getUniqueStr } from './lib/uniq';
import Header from './component/Header';
import TaskList from './component/TaskList';

function App() {
  const [inputTask, setInputTask] = useState('');
  const [task, setTask] = useState([]); // status = 0: 未完了, 1: 完了済み | mode = edit: 編集, "": その他

  const addTask = () => {
    if (inputTask === '') return;

    const newTask = {
      id: getUniqueStr(15),
      title: inputTask,
      status: 0,
      mode: '',
    };
    setTask((prevTask) => [...prevTask, newTask]);
    setInputTask('');
  };

  const handleCompleteTask = (id) => {
    const newTask = task.map((t) => {
      if (t.id === id) {
        t.status = t.status === 0 ? 1 : 0;
      }
      return t;
    });
    setTask(newTask);
  };

  const handleEditTask = (id) => {
    const newTask = task.map((t) => {
      if (t.id === id) {
        t.mode = t.mode === '' ? 'edit' : '';
      }
      return t;
    });
    setTask(newTask);
  };

  const handleEditingTask = (id, value) => {
    const newTask = task.map((task) => {
      if (task.id === id) {
        task.title = value;
      }
      return task;
    });
    setTask(newTask);
  };

  const handleSaveTask = (id) => {
    const newTask = task.map((t) => {
      if (t.id === id) {
        t.mode = t.mode === 'edit' ? '' : 'edit';
      }
      return t;
    });
    setTask(newTask);
  };

  const handleDeleteTask = (id) => {
    if (window.confirm('本当に削除してもよろしいですか？')) {
      const newTask = task.filter((t) => t.id !== id);
      setTask(newTask);
    }
  };

  return (
    <div className="container">
      <Header
        inputTask={inputTask}
        setInputTask={setInputTask}
        addTask={addTask}
      />
      <TaskList
        task={task}
        handleCompleteTask={handleCompleteTask}
        handleEditTask={handleEditTask}
        handleEditingTask={handleEditingTask}
        handleSaveTask={handleSaveTask}
        handleDeleteTask={handleDeleteTask}
      />
    </div>
  );
}

export default App;
