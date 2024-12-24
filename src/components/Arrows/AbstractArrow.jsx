import React from 'react';
import { isPointInRectangle } from '../../services/geometry';

function AbstractArrow({
    children,
    className,
    direction,
    onClick = Function.prototype,
}) {
    const classes = `${className} arrow arrow--${direction}`;
    const onHandleClick = (el) => {
        const targetClassNames = el.target.classList.value;
        if (classes === targetClassNames) {
            const rect = el.target.getBoundingClientRect();

            // coordinates of the click relative to the target
            const clickX = el.clientX - rect.x;
            const clickY = el.clientY - rect.y;

            //settings for ::before, ::after
            //border: 20px;
            const border = 20;
            // ::before { left: 20px;
            const left = 20;
            // ::after { right: 0;
            const right = 0;
            //::before, ::after { top: calc(50% - 20px);
            const top = Math.round(rect.height / 2 - border);

            //coordinates of the rectangle
            const x1 =
                direction === 'left' ? left : rect.width - right - 2 * border;
            const x2 =
                direction === 'left' ? left + 2 * border : rect.width - right;
            const y1 = top;
            const y2 = top + 2 * border;

            if (isPointInRectangle(clickX, clickY, x1, y1, x2, y2)) {
                onClick();
            }
        }
    };
    return (
        <div
            className={classes}
            onClick={onHandleClick}
        >
            {children}
        </div>
    );
}
export { AbstractArrow };
