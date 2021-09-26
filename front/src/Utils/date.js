export const countDateByTimestamp = (timestamp) => {
  const target = new Date(timestamp);

  const now = new Date();
  const diff = target.getTime() - now.getTime();

  return Math.floor(diff / (1000 * 3600 * 24));
};
