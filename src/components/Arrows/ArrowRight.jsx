import { AbstractArrow } from './AbstractArrow';
import './Arrows.css';

export const ArrowRight = ({
    children,
    className,
    onClick = Function.prototype,
}) => {
    return (
        <AbstractArrow
            className={className}
            direction='right'
            onClick={onClick}
        >
            {children}
        </AbstractArrow>
    );
};
