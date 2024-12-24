import { ArrowLeft, ArrowRight } from './Arrows/Arrows';

function SentenceItem({
    imgPath,
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
                <blockquote>
                    <span className=''>{text}</span>
                </blockquote>
            </ArrowRight>
        </div>
    );
}

export { SentenceItem };
