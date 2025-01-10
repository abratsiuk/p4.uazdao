import { ReactNode } from 'react';

export interface IArrowAbstractProps {
  children?: ReactNode;
  className?: string;
  direction: 'left' | 'right';
  onClick?: () => void;
}
