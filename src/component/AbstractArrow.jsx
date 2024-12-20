function AbstractArrow({
    children,
    className,
    direction,
    onClick = Function.prototype,
}) {
    const classes = `${className} arrow arrow--${direction}`;
    const onHandleClick = (el) => {
        console.log(`Arrow ${direction} clicked`);

        const targetClassNames = el.target.classList.value;
        if (classes === targetClassNames) {
            const rect = el.target.getBoundingClientRect();
            //Координаты target
            console.log(
                'Координаты target:',
                `(${Math.round(rect.x)}, ${Math.round(rect.y)})`
            );
            // Размеры target
            console.log(
                'Размеры target:',
                Math.round(rect.width),
                Math.round(rect.height)
            );
            // Координаты клика
            console.log('Координаты клика', `(${el.clientX}, ${el.clientY})`);

            // Координаты клика относительно target
            const clickX = el.clientX - rect.x;
            const clickY = el.clientY - rect.y;
            console.log(
                'Координаты клика относительно target',
                `(${Math.round(clickX)}, ${Math.round(clickY)})`
            );

            const precision = 10;

            if (direction === 'left') {
                console.log(
                    `координаты точек левого треугольника с заступом в ${precision}:
                (${20 + 20 - 2 * precision}, ${Math.round(
                        +20 - 20 + rect.height / 2
                    )}), 
                (${20 + 20 + 20 + precision}, ${Math.round(
                        +20 - 20 + rect.height / 2 - 20 - precision
                    )}), 
                (${20 + 20 + 20 + precision}, ${Math.round(
                        +20 - 20 + rect.height / 2 + 20 + precision
                    )})`
                );
            }

            if (direction === 'right') {
                console.log(
                    `координаты точек правого треугольника с заступом в ${precision}: 
                (${Math.round(rect.width - 20 - 20 - precision)}, ${Math.round(
                        Math.round(+20 - 20 + rect.height / 2 - 20 - precision)
                    )}), 
                (${Math.round(rect.width - 20 + 2 * precision)}, ${Math.round(
                        Math.round(+20 - 20 + rect.height / 2)
                    )}, 
                (${Math.round(rect.width - 20 - 20 - precision)}, ${Math.round(
                        Math.round(+20 - 20 + rect.height / 2 + 20 + precision)
                    )})`
                );
            }

            onClick();
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
