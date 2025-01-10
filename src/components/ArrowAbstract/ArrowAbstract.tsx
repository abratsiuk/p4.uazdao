import React from 'react';
import { isPointInLeftRight } from '../../services';
import './ArrowAbstract.scss';
import { IArrowAbstractProps } from '../../interfaces/IArrowAbstractProps';

export const ArrowAbstract: React.FC<IArrowAbstractProps> = ({
  children,
  className = '',
  direction,
  onClick = () => {},
}) => {
  const classes = `ArrowAbstract ${className}`;
  const onHandleClick = (el: React.MouseEvent<HTMLDivElement>) => {
    const target = el.target as HTMLElement;
    const targetClassNames = target.classList.value;
    if (classes === targetClassNames) {
      const rect = target.getBoundingClientRect();
      const clickX = el.clientX - rect.x;

      const ArrowLeftBeforeBorder = 20;
      const ArrowRightBeforeBorder = 20;
      const ArrowLeftBeforeLeft = 20;
      const ArrowRightBeforeRight = 0;

      const VerticalScrollBarWidth = 17;
      //coordinates of the rectangle that accept click
      const x1 =
        direction === 'left'
          ? ArrowLeftBeforeLeft
          : rect.width -
            ArrowRightBeforeRight -
            2 * ArrowLeftBeforeBorder -
            VerticalScrollBarWidth;
      const x2 =
        direction === 'left'
          ? ArrowLeftBeforeLeft + 2 * ArrowRightBeforeBorder
          : rect.width - ArrowRightBeforeRight;

      console.log(clickX, x1, x2);

      if (isPointInLeftRight(clickX, x1, x2)) {
        onClick();
      }
    }
  };

  return (
    <div className={classes} onClick={onHandleClick}>
      {children}
    </div>
  );
};
