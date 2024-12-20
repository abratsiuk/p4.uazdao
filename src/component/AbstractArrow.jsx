function AbstractArrow({
    children,
    className,
    direction,
    onClick = Function.prototype,
}) {
    const onHandleClick = (el) => {
        console.log(`Arrow ${direction} clicked`, el.target);
        onClick();
    };
    return (
        <div
            className={`${className} arrow arrow--${direction}`}
            onClick={onHandleClick}
        >
            {children}
        </div>
    );
}
export { AbstractArrow };
