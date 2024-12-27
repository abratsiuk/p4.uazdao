import React, { ReactNode } from 'react';
import { ArrowAbstract } from '../ArrowAbstract';
import './ArrowRight.scss';

interface ArrowRightProps {
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
}

export const ArrowRight: React.FC<ArrowRightProps> = ({
  children,
  className,
  onClick = () => {},
}) => {
  return (
    <ArrowAbstract className={className} direction="right" onClick={onClick}>
      {children}
    </ArrowAbstract>
  );
};
