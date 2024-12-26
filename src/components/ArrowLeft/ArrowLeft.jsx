import { ArrowAbstract } from '../ArrowAbstract';
import './ArrowLeft.scss';
import PropTypes from 'prop-types';

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

ArrowLeft.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    onClick: PropTypes.func,
};
