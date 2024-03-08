import React from 'react';

const Header = ({ inputTask, setInputTask, addTask }) => {
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
