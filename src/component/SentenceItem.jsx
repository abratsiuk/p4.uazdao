import { ArrowLeft, ArrowRight } from './Arrows';

function SentenceItem({ imgPath, text }) {
    return (
        <div className='sentence'>
            <ArrowLeft className='sentence__image'>
                <img
                    src={imgPath}
                    alt='sentence image'
                />
            </ArrowLeft>
            <ArrowRight className='sentence__quote'>
                <blockquote>
                    <span className='text-regular text-regular--article'>
                        {text}
                    </span>
                    <cite className='text-light'>...</cite>
                </blockquote>
            </ArrowRight>
        </div>
    );
}

export { SentenceItem };
