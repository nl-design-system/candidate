import type { HTMLAttributes } from 'react';

import { clsx } from 'clsx';
import { forwardRef } from 'react';

export interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  appearance?: 'lead' | 'small';
}

export const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(function Paragraph(props, forwardedRef) {
  const { appearance, children, className, ...restProps } = props;

  return (
    <p
      className={clsx(
        'nl-paragraph',
        { ['nl-paragraph--lead']: appearance === 'lead', ['nl-paragraph--small']: appearance === 'small' },
        className,
      )}
      ref={forwardedRef}
      {...restProps}
    >
      {appearance === 'lead' ? (
        <b className="nl-paragraph__b">{children}</b>
      ) : appearance === 'small' ? (
        <small className="nl-paragraph__small">{children}</small>
      ) : (
        children
      )}
    </p>
  );
});
