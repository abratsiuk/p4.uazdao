import { ArrowAbstract } from '../ArrowAbstract';
import './ArrowLeft.scss';

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
