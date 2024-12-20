import React from 'react';
import { isPointInTriangle } from '../services/geometry';

function AbstractArrow({
    children,
    className,
    direction,
    onClick = Function.prototype,
}) {
    const classes = `${className} arrow arrow--${direction}`;
    const onHandleClick = (el) => {
        // console.log(`Arrow ${direction} clicked`);

        const targetClassNames = el.target.classList.value;
        if (classes === targetClassNames) {
            const rect = el.target.getBoundingClientRect();
            // //Координаты target
            // console.log(
            //     'Координаты target:',
            //     `(${Math.round(rect.x)}, ${Math.round(rect.y)})`
            // );
            // // Размеры target
            // console.log(
            //     'Размеры target:',
            //     Math.round(rect.width),
            //     Math.round(rect.height)
            // );
            // // Координаты клика
            // console.log('Координаты клика', `(${el.clientX}, ${el.clientY})`);

            // Координаты клика относительно target
            const clickX = el.clientX - rect.x;
            const clickY = el.clientY - rect.y;
            // console.log(
            //     'Координаты клика относительно target',
            //     `(${Math.round(clickX)}, ${Math.round(clickY)})`
            // );

            //settings for ::before, ::after
            //border: 20px;
            const border = 20;
            // ::before { left: 20px;
            const left = 20;
            // ::after { right: 0;
            const right = 0;
            //::before, ::after { top: calc(50% - 20px);
            const top = Math.round(rect.height / 2 - border);

            //precision for click: +- 10px in coordinate
            const precision = 20;

            let x1 = 0,
                y1 = 0,
                x2 = 0,
                y2 = 0,
                x3 = 0,
                y3 = 0;
            if (direction === 'left') {
                x1 = border + left - 2 * precision;
                x2 = border + border + left + precision;
                x3 = border + border + left + precision;
                y1 = Math.round(top + border);
                y2 = Math.round(top + border - border - precision);
                y3 = Math.round(top + border + border + precision);
                // console.log(
                //     `координаты точек левого треугольника с заступом в ${precision}:
                // (${border + left - 2 * precision}, ${Math.round(
                //     border - border + rect.height / 2
                //     )}),
                // (${border + border + left + precision}, ${Math.round(
                //     border - border + rect.height / 2 - border - precision
                //     )}),
                // (${border + border + left + precision}, ${Math.round(
                //     border - border + rect.height / 2 + border + precision
                //     )})`
                // );
            }

            if (direction === 'right') {
                x1 = rect.width - border - border - right - precision;
                x2 = rect.width - border - right + 2 * precision;
                x3 = rect.width - border - border - right - precision;
                y1 = Math.round(top + border - border - precision);
                y2 = Math.round(top + border);
                y3 = Math.round(top + border + border + precision);
                // console.log(
                //     `координаты точек правого треугольника с заступом в ${precision}:
                // (${Math.round(
                //     rect.width - border - border - right - precision
                // )}, ${Math.round(
                //         Math.round(
                //             border - border + rect.height / 2 - border - precision
                //         )
                //     )}),
                // (${Math.round(
                //     rect.width - border - right + 2 * precision
                // )}, ${Math.round(
                //         Math.round(border - border + rect.height / 2)
                //     )},
                // (${Math.round(
                //     rect.width - border - border - right - precision
                // )}, ${Math.round(
                //         Math.round(
                //             border - border + rect.height / 2 + border + precision
                //         )
                //     )})`
                // );
            }

            if (
                isPointInTriangle(clickX, clickY, x1, y1, x2, y2, x3, y3, 0.3)
            ) {
                console.log('Arrow clicked');
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
