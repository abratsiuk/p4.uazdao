import React, { ReactNode } from 'react';
import { isPointInLeftRight } from '../../services';
import './ArrowAbstract.scss';

interface ArrowAbstractProps {
  children?: ReactNode;
  className?: string;
  direction: 'left' | 'right';
  onClick?: () => void;
}

export const ArrowAbstract: React.FC<ArrowAbstractProps> = ({
  children,
  className = '',
  direction,
  onClick = () => {},
}) => {
  const classes = `${className} arrow arrow-${direction}`;
  const onHandleClick = (el: React.MouseEvent<HTMLDivElement>) => {
    const target = el.target as HTMLElement;
    const targetClassNames = target.classList.value;
    if (classes === targetClassNames) {
      const rect = target.getBoundingClientRect();

      // coordinates of the click relative to the target
      const clickX = el.clientX - rect.x;

      //settings for ::before, ::after
      //border: 20px;
      const border = 20;
      // ::before { left: 20px;
      const left = 20;
      // ::after { right: 0;
      const right = 0;
      //::before, ::after { top: calc(50% - 20px);

      //coordinates of the rectangle
      const x1 = direction === 'left' ? left : rect.width - right - 2 * border;
      const x2 = direction === 'left' ? left + 2 * border : rect.width - right;

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
