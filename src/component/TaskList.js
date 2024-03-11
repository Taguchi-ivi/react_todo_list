import React from 'react';
import TaskCounter from './TaskCounter';

const TaskList = ({ tasks, setTasks }) => {
  const handleCompleteTask = (id) => {
    const newTask = tasks.map((t) => {
      if (t.id === id) {
        t.isCompleted = !t.isCompleted;
      }
      return t;
    });
    setTasks(newTask);
  };

  const handleChangeEditMode = (id) => {
    const newTask = tasks.map((t) => {
      if (t.id === id) {
        t.isEdit = !t.isEdit;
      }
      return t;
    });
    setTasks(newTask);
  };

  const handleEditingTask = (id, value) => {
    const newTask = tasks.map((task) => {
      if (task.id === id) {
        task.title = value;
      }
      return task;
    });
    setTasks(newTask);
  };

  const handleDeleteTask = (id) => {
    if (window.confirm('本当に削除してもよろしいですか？')) {
      const newTasks = tasks.filter((t) => t.id !== id);
      setTasks(newTasks);
    }
  };

  return (
    <div className="cardItem">
      <TaskCounter tasks={tasks} />
      <ul>
        {tasks.map((t) => (
          <li
            key={t.id}
            className="cardItemWrapper"
            style={{
              textDecoration: t.isCompleted ? 'line-through' : 'none',
            }}
          >
            <input
              type="checkbox"
              name="taskCheckbox"
              onChange={() => {
                handleCompleteTask(t.id);
              }}
            />
            {t.isEdit ? (
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
              {t.isEdit ? (
                <button
                  className="keep"
                  onClick={() => handleChangeEditMode(t.id)}
                >
                  保存
                </button>
              ) : (
                <button
                  className="edit"
                  onClick={() => handleChangeEditMode(t.id)}
                >
                  編集
                </button>
              )}
              <button
                className="del"
                onClick={() => handleDeleteTask(t.id)}
                disabled={t.isEdit}
              >
                削除
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
