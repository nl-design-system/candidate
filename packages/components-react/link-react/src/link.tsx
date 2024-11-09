import { clsx } from 'clsx';
import type { AnchorHTMLAttributes } from 'react';
import { forwardRef } from 'react';

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: AnchorHTMLAttributes<HTMLAnchorElement>['href'];
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(props, forwardedRef) {
  const { children, className, ...restProps } = props;

  return (
    <a {...restProps} className={clsx('nl-link', className)} ref={forwardedRef}>
      {children}
    </a>
  );
});
