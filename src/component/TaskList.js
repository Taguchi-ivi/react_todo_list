import React from 'react';
import TaskCounter from './TaskCounter';

const TaskList = ({
  task,
  handleCompleteTask,
  handleEditTask,
  handleEditingTask,
  handleSaveTask,
  handleDeleteTask,
}) => {
  return (
    <div className="cardItem">
      <TaskCounter task={task} />
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
  );
};

export default TaskList;
