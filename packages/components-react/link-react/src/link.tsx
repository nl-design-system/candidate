import type { AnchorHTMLAttributes } from 'react';
import { clsx } from 'clsx';
import { forwardRef } from 'react';

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  current?: AnchorHTMLAttributes<HTMLAnchorElement>['aria-current'];
  href: AnchorHTMLAttributes<HTMLAnchorElement>['href'];
  inlineBox?: boolean;
  disabled?: boolean;
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(props, forwardedRef) {
  const { children, className, current, disabled, href, inlineBox, ...restProps } = props;

  return (
    <a
      aria-current={current || undefined}
      aria-disabled={disabled}
      className={clsx(
        'nl-link',
        {
          ['nl-link--current']: current,
          ['nl-link--disabled']: disabled,
          ['nl-link--inline-box']: inlineBox,
        },
        className,
      )}
      href={disabled ? undefined : href}
      role={disabled ? 'link' : undefined}
      ref={forwardedRef}
      tabIndex={disabled ? 0 : undefined}
      // Let restProps override aria-current, aria-disabled, tabindex and role
      {...restProps}
    >
      {children}
    </a>
  );
});

Link.displayName = 'Link';
