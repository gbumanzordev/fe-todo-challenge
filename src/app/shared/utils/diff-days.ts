export const getDiffDays = (start: Date, end: Date): number => {
  const t = end.getTime() - start.getTime();

  return Math.ceil(t / (1000 * 3600 * 24));
};
