import type { AnchorHTMLAttributes } from 'react';
import { clsx } from 'clsx';
import { forwardRef } from 'react';

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  current?: boolean;
  href: AnchorHTMLAttributes<HTMLAnchorElement>['href'];
  inlineBox?: boolean;
  placeholder?: boolean;
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(props, forwardedRef) {
  const { children, className, current, href, inlineBox, placeholder, role, ...restProps } = props;

  return (
    <a
      {...restProps}
      aria-current={current ? true : undefined}
      aria-disabled={placeholder ? 'true' : undefined}
      href={placeholder ? undefined : href}
      className={clsx(
        'nl-link',
        placeholder && 'nl-link--placeholder',
        current && 'nl-link--current',
        inlineBox && 'nl-link--inline-box',
        className,
      )}
      role={role || (placeholder ? 'link' : undefined)}
      ref={forwardedRef}
    >
      {children}
    </a>
  );
});
