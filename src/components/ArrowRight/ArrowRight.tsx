import React from 'react';
import { ArrowAbstract } from '../ArrowAbstract';
import './ArrowRight.scss';
import { IArrowRightProps } from '../../interfaces/IArrowRightProps';

export const ArrowRight: React.FC<IArrowRightProps> = ({
  children,
  className,
  onClick = () => {},
}) => {
  return (
    <ArrowAbstract
      className={`ArrowRight ${className}`}
      direction="right"
      onClick={onClick}
    >
      {children}
    </ArrowAbstract>
  );
};
