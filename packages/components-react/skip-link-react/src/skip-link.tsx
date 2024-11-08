import { clsx } from 'clsx';
import type { AnchorHTMLAttributes } from 'react';
import { forwardRef } from 'react';

export interface SkipLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: AnchorHTMLAttributes<HTMLAnchorElement>['href'];
}

export const SkipLink = forwardRef<HTMLAnchorElement, SkipLinkProps>(function SkipLink(props, forwardedRef) {
  const { children, className, ...restProps } = props;

  return (
    <a {...restProps} className={clsx('nl-skip-link', className)} ref={forwardedRef}>
      {children}
    </a>
  );
});
