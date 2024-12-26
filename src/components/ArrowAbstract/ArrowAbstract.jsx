import { isPointInLeftRight } from '../../services';
import './ArrowAbstract.scss';
import PropTypes from 'prop-types';

export const ArrowAbstract = ({
    children,
    className,
    direction,
    onClick = Function.prototype,
}) => {
    const classes = `${className} arrow arrow--${direction}`;
    const onHandleClick = (el) => {
        const targetClassNames = el.target.classList.value;
        if (classes === targetClassNames) {
            const rect = el.target.getBoundingClientRect();

            // coordinates of the click relative to the target
            const clickX = el.clientX - rect.x;

            //settings for ::before, ::after
            //border: 20px;
            const border = 20;
            // ::before { left: 20px;
            const left = 20;
            // ::after { right: 0;
            const right = 0;
            //::before, ::after { top: calc(50% - 20px);

            //coordinates of the rectangle
            const x1 =
                direction === 'left' ? left : rect.width - right - 2 * border;
            const x2 =
                direction === 'left' ? left + 2 * border : rect.width - right;

            if (isPointInLeftRight(clickX, x1, x2)) {
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
};

ArrowAbstract.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    direction: PropTypes.oneOf(['left', 'right']).isRequired,
    onClick: PropTypes.func,
};
