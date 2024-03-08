import React from 'react';
import { getTaskCount } from '../lib/uniq';

const TaskCounter = ({ task }) => {
  return (
    <p className="cardItemHeader">
      全てのタスク: {getTaskCount(task, 2)} / 完了済み: {getTaskCount(task, 1)}{' '}
      / 未完了: {getTaskCount(task, 0)}
    </p>
  );
};

export default TaskCounter;
