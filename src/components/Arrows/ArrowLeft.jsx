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
