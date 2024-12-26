export const isPointInLeftRight = (px, x1, x2) => {
    const minX = Math.min(x1, x2);
    const maxX = Math.max(x1, x2);
    return px >= minX && px <= maxX;
};
