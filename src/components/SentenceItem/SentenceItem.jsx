import { ArrowLeft } from '../ArrowLeft';
import { ArrowRight } from '../ArrowRight';
import './SentenceItem.scss';

function SentenceItem({
    imgPath,
    header,
    text,
    onPrevious = Function.prototype,
    onNext = Function.prototype,
}) {
    return (
        <div className='sentence'>
            <ArrowLeft
                className='sentence__image'
                onClick={() => onNext()}
            >
                <img
                    src={imgPath}
                    alt='sentence image'
                />
            </ArrowLeft>
            <ArrowRight
                className='sentence__quote'
                onClick={() => onPrevious()}
            >
                {header ? (
                    <blockquote>
                        <span>{header}</span>
                    </blockquote>
                ) : null}
                <blockquote>
                    <span>{text}</span>
                </blockquote>
            </ArrowRight>
        </div>
    );
}

export { SentenceItem };
