import { AbstractArrow } from './AbstractArrow';
import './Arrows.css';

export const ArrowLeft = ({
    children,
    className,
    onClick = Function.prototype,
}) => {
    return (
        <AbstractArrow
            className={className}
            direction='left'
            onClick={onClick}
        >
            {children}
        </AbstractArrow>
    );
};
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
