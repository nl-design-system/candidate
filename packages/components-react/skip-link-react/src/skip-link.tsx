import { clsx } from 'clsx';
import type { AnchorHTMLAttributes } from 'react';
import { forwardRef } from 'react';

export type SkipLinkProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export const SkipLink = forwardRef<HTMLAnchorElement, SkipLinkProps>(function SkipLink(props, forwardedRef) {
  const { children, className, ...restProps } = props;

  return (
    <a {...restProps} className={clsx('nl-skip-link', className)} ref={forwardedRef}>
      {children}
    </a>
  );
});
