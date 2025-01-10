import React from 'react';
import './ExternalLink.scss';
import { IExternalLinkProps } from '../../interfaces/IExternalLinkProps';

export const ExternalLink: React.FC<IExternalLinkProps> = ({
  parentClassName = '',
  href,
  text,
  parentClassName_disabled = '',
  text_disabled = '',
}) => {
  return (
    <>
      {href ? (
        <div className={parentClassName}>
          <a
            href={href}
            title={text}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={text}
          >
            {text}
          </a>
        </div>
      ) : text_disabled ? (
        <div className={`${parentClassName} ${parentClassName_disabled}`}>
          {text_disabled}
        </div>
      ) : null}
    </>
  );
};
