import { useState } from 'react';
import './App.css';
import { getTaskCount, getUniqueStr } from './lib/uniq';

function App() {
  const [inputTask, setInputTask] = useState('');
  const [task, setTask] = useState([]); // status = 0: 未完了, 1: 完了済み | mode = add: 追加, edit: 編集

  const addTask = (e) => {
    if (inputTask === '') return;

    const newTask = {
      id: getUniqueStr(15),
      title: inputTask,
      status: 0,
      mode: 'add',
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
                <p className="cardItemP">{t.title}</p>
                <div className="cardItemBtns">
                  <button className="keep">保存</button>
                  <button className="edit">編集</button>
                  <button className="del">削除</button>
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
