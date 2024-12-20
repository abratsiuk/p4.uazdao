export const isPointInRectangle = (px, py, x1, y1, x2, y2) => {
    const minX = Math.min(x1, x2);
    const maxX = Math.max(x1, x2);
    const minY = Math.min(y1, y2);
    const maxY = Math.max(y1, y2);
    return px >= minX && px <= maxX && py >= minY && py <= maxY;
};

export const isPointInTriangle = (
    px,
    py,
    x1,
    y1,
    x2,
    y2,
    x3,
    y3,
    tolerance = 0.1
) => {
    // calculate the area of the triangle
    function calculateArea(x1, y1, x2, y2, x3, y3) {
        return Math.abs((x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2)) / 2);
    }

    // full triangle area
    const A = calculateArea(x1, y1, x2, y2, x3, y3);

    // areas of subtriangles
    const A1 = calculateArea(px, py, x2, y2, x3, y3);
    const A2 = calculateArea(x1, y1, px, py, x3, y3);
    const A3 = calculateArea(x1, y1, x2, y2, px, py);
    const sumAreas = A1 + A2 + A3;

    // check is the point in the triangle
    const maxArea = Math.max(A, sumAreas);
    const difference = Math.abs(A - sumAreas);
    return difference <= maxArea * tolerance;
};
