import React from 'react';
import './Image.scss';
import { IImageProps } from '../../interfaces/IImageProps';

export const Image: React.FC<IImageProps> = ({
  src,
  alt,
  parentClassName = '',
}) => {
  return (
    <>
      <img
        className={`${parentClassName} Image`}
        src={`${import.meta.env.BASE_URL}${src}`}
        alt={alt}
      />
    </>
  );
};
