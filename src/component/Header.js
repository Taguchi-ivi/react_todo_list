import React, { useState } from 'react';
import { getUniqueStr } from '../lib/uniq';

const Header = ({ setTasks }) => {
  const [inputTask, setInputTask] = useState('');
  const addTask = () => {
    if (inputTask === '') return;

    const newTask = {
      id: getUniqueStr(15),
      title: inputTask,
      isCompleted: false,
      isEdit: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setInputTask('');
  };

  return (
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
  );
};

export default Header;
