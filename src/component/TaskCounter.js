import React from 'react';
import { getTaskCount } from '../lib/uniq';

const TaskCounter = ({ tasks }) => {
  return (
    <p className="cardItemHeader">
      全てのタスク: {getTaskCount(tasks, 'all')} / 完了済み:
      {getTaskCount(tasks, 'completed')} / 未完了:
      {getTaskCount(tasks, 'incomplete')}
    </p>
  );
};

export default TaskCounter;
