export const isPointInLeftRight = (
  px: number = 0,
  x1: number = 0,
  x2: number = 0,
): boolean => {
  const minX = Math.min(x1, x2);
  const maxX = Math.max(x1, x2);
  return px >= minX && px <= maxX;
};
