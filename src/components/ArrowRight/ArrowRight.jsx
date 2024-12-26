import { ArrowAbstract } from '../ArrowAbstract';
import './ArrowRight.scss';
import PropTypes from 'prop-types';

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

ArrowRight.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    onClick: PropTypes.func,
};
