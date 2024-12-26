import PropTypes from 'prop-types';
import { ArrowLeft } from '../ArrowLeft';
import { ArrowRight } from '../ArrowRight';
import styles from './SentenceItem.module.scss';

function SentenceItem({
    imgPath,
    header = '',
    footer = '',
    text,
    onPrevious = Function.prototype,
    onNext = Function.prototype,
}) {
    return (
        <div className={styles.sentence}>
            <ArrowLeft
                className={styles.sentence__image}
                onClick={() => onNext()}
            >
                <img
                    src={imgPath}
                    alt='sentence image'
                />
            </ArrowLeft>
            <ArrowRight
                className={styles.sentence__quote}
                onClick={() => onPrevious()}
            >
                <figure>
                    {header && (
                        <blockquote className={styles.sentence__quote__header}>
                            {header}
                        </blockquote>
                    )}
                    <blockquote
                        className={styles.sentence__quote__text}
                        data-direct-speach={text.trim().charAt(0) === '-'}
                    >
                        {text}
                    </blockquote>
                    {footer && (
                        <figcaption className={styles.sentence__quote__footer}>
                            {footer}
                        </figcaption>
                    )}
                </figure>
            </ArrowRight>
        </div>
    );
}

export { SentenceItem };

SentenceItem.propTypes = {
    imgPath: PropTypes.string,
    header: PropTypes.string,
    footer: PropTypes.string,
    text: PropTypes.string,
    onPrevious: PropTypes.func,
    onNext: PropTypes.func,
};
