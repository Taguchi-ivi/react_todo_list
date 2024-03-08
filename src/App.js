import { useState } from 'react';
import './App.css';
import { getTaskCount, getUniqueStr } from './lib/uniq';

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
    <div className="App">
      <div className="container">
        <div className="cardTitle">
          <h1 className="title">Todo List 🚀</h1>
          <p className="subTitle">output vanilla js todo list</p>
          <form>
            <div className="wrapperInput">
              <input
                className="inputText"
                type="text"
                value={inputTask}
                onChange={(e) => setInputTask(e.target.value)}
              />
              <button
                className="btn"
                type="button"
                onClick={addTask}
              >
                保存
              </button>
            </div>
          </form>
        </div>
        <div className="cardItem">
          <p className="cardItemHeader">
            全てのタスク: {getTaskCount(task, 2)} / 完了済み:{' '}
            {getTaskCount(task, 1)} / 未完了: {getTaskCount(task, 0)}
          </p>
          <ul>
            {task.map((t) => (
              <li
                key={t.id}
                className="cardItemWrapper"
                style={{
                  textDecoration: t.status === 1 ? 'line-through' : 'none',
                }}
              >
                <input
                  type="checkbox"
                  name="taskCheckbox"
                  onChange={() => {
                    handleCompleteTask(t.id);
                  }}
                />
                {t.mode === 'edit' ? (
                  <input
                    type="text"
                    value={t.title}
                    className="newEditInput"
                    onChange={(e) => {
                      handleEditingTask(t.id, e.target.value);
                    }}
                  />
                ) : (
                  <p className="cardItemP">{t.title}</p>
                )}
                <div className="cardItemBtns">
                  {t.mode === 'edit' ? (
                    <button
                      className="keep"
                      onClick={() => handleSaveTask(t.id)}
                    >
                      保存
                    </button>
                  ) : (
                    <button
                      className="edit"
                      onClick={() => handleEditTask(t.id)}
                    >
                      編集
                    </button>
                  )}
                  <button
                    className="del"
                    onClick={() => handleDeleteTask(t.id)}
                    disabled={t.mode === 'edit'}
                  >
                    削除
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
