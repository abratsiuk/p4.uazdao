import { AbstractArrow } from './AbstractArrow';

function ArrowLeft({ children, className, onClick = Function.prototype }) {
    return (
        <AbstractArrow
            className={className}
            direction='left'
            onClick={onClick}
        >
            {children}
        </AbstractArrow>
    );
}
function ArrowRight({ children, className, onClick = Function.prototype }) {
    return (
        <AbstractArrow
            className={className}
            direction='right'
            onClick={onClick}
        >
            {children}
        </AbstractArrow>
    );
}

export { ArrowLeft, ArrowRight };
