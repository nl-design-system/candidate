import type { AnchorHTMLAttributes } from 'react';
import { clsx } from 'clsx';
import { forwardRef } from 'react';

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * Alternative for `aria-current`.
   * Marks the link as **the current item** in a set related elements. Use the
   * `current` prop in favor of `aria-current` for the proper styling.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-current aria-current on MDN}
   */
  current?: AnchorHTMLAttributes<HTMLAnchorElement>['aria-current'];

  /**
   * The URL that the Link points to.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a#href href on MDN}
   */
  href: AnchorHTMLAttributes<HTMLAnchorElement>['href'];

  /**
   * Link around `inline-block`, `inline-flex` and `inline-grid` elements like
   * _image_ or _badge_. Changing the `display` from `inline` to `inline-block`
   * for the link ensures the focus outline is rendered around the entire box
   * in all browsers.
   */
  inlineBox?: boolean;

  /**
   * Alternative for `aria-disabled`. Marks the Link as **disabled**. Use the
   * `disabled` prop in favor of `aria-disabled` since it ensures the proper
   * styling, `role`, `href` and `tabindex` attributes.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled aria-disabled on MDN}
   */
  disabled?: boolean;

  /** @deprecated Use `current` to set the `aria-current` attribute */
  'aria-current'?: never;

  /** @deprecated Use `disabled` to set the `aria-disabled` attribute */
  'aria-disabled'?: never;
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
