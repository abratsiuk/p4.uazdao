import { ArrowAbstract } from '../ArrowAbstract';
import './ArrowLeft.css';

export const ArrowLeft = ({
    children,
    className,
    onClick = Function.prototype,
}) => {
    return (
        <ArrowAbstract
            className={className}
            direction='left'
            onClick={onClick}
        >
            {children}
        </ArrowAbstract>
    );
};
