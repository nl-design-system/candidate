import { clsx } from 'clsx';
import type { HTMLAttributes } from 'react';
import { forwardRef } from 'react';

export type ParagraphPurpose = 'lead';

interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  purpose?: ParagraphPurpose;
}

export const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(function Paragraph(props, forwardedRef) {
  const { purpose, children, className, ...restProps } = props;

  return (
    <p
      className={clsx('nl-paragraph', { ['nl-paragraph--lead']: purpose === 'lead' }, className)}
      ref={forwardedRef}
      {...restProps}
    >
      {purpose === 'lead' ? <b className="nl-paragraph__lead">{children}</b> : children}
    </p>
  );
});
