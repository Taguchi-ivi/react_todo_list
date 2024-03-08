export const getUniqueStr = (myStrong) => {
  var strong = 1000;
  if (myStrong) strong = myStrong;
  return (
    new Date().getTime().toString(16) +
    Math.floor(strong * Math.random()).toString(16)
  );
};

// 0: 未完了 / 1: 完了済み / 2: 全て
export const getTaskCount = (task, status) => {
  if (status === 2) return task.length;
  return task.filter((t) => t.status === status).length;
};
