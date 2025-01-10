import React from 'react';
import { ArrowAbstract } from '../ArrowAbstract';
import './ArrowLeft.scss';
import { IArrowLeftProps } from '../../interfaces/IArrowLeftProps';

export const ArrowLeft: React.FC<IArrowLeftProps> = ({
  children,
  className = '',
  onClick = () => {},
}) => {
  return (
    <ArrowAbstract
      className={`ArrowLeft ${className}`}
      direction="left"
      onClick={onClick}
    >
      {children}
    </ArrowAbstract>
  );
};
