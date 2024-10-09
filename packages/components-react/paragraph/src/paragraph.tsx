import { clsx } from 'clsx';
import { forwardRef } from 'react';
import type { HTMLAttributes } from 'react';

export interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  appearance?: 'lead' | 'small';
}

export const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(function Paragraph(props, forwardedRef) {
  const { appearance, children, className, ...restProps } = props;

  return (
    <p
      className={clsx(
        'paragraph',
        { ['paragraph--lead']: appearance === 'lead', ['paragraph--small']: appearance === 'small' },
        className,
      )}
      ref={forwardedRef}
      {...restProps}
    >
      {appearance === 'lead' ? (
        <b className="paragraph__b">{children}</b>
      ) : appearance === 'small' ? (
        <small className="paragraph__small">{children}</small>
      ) : (
        children
      )}
    </p>
  );
});
