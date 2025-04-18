import type { AnchorHTMLAttributes } from 'react';
import { clsx } from 'clsx';
import { forwardRef } from 'react';

export interface SkipLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: AnchorHTMLAttributes<HTMLAnchorElement>['href'];
}

export const SkipLink = forwardRef<HTMLAnchorElement, SkipLinkProps>(function SkipLink(props, forwardedRef) {
  const { children, className, ...restProps } = props;

  return (
    <a {...restProps} className={clsx('nl-skip-link', 'nl-skip-link--visible-on-focus', className)} ref={forwardedRef}>
      {children}
    </a>
  );
});

SkipLink.displayName = 'SkipLink';
