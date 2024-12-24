import { ArrowAbstract } from '../ArrowAbstract';
import './ArrowRight.css';

export const ArrowRight = ({
    children,
    className,
    onClick = Function.prototype,
}) => {
    return (
        <ArrowAbstract
            className={className}
            direction='right'
            onClick={onClick}
        >
            {children}
        </ArrowAbstract>
    );
};
