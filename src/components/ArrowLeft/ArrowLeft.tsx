import React, { ReactNode } from 'react';
import { ArrowAbstract } from '../ArrowAbstract';
import './ArrowLeft.scss';

interface ArrowLeftProps {
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
}

export const ArrowLeft: React.FC<ArrowLeftProps> = ({
  children,
  className = '',
  onClick = () => {},
}) => {
  return (
    <ArrowAbstract className={className} direction="left" onClick={onClick}>
      {children}
    </ArrowAbstract>
  );
};
