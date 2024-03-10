export const getUniqueStr = (myStrong) => {
  var strong = 1000;
  if (myStrong) strong = myStrong;
  return (
    new Date().getTime().toString(16) +
    Math.floor(strong * Math.random()).toString(16)
  );
};

// status -> all | completed | incomplete
export const getTaskCount = (task, status) => {
  if (status === 'all') return task.length;
  if (status === 'completed') return task.filter((t) => t.isCompleted).length;
  if (status === 'incomplete') return task.filter((t) => !t.isCompleted).length;
  throw new Error(
    "status is invalid. status must be 'all' | 'completed' | 'incomplete'"
  );
};
