import type { HTMLAttributes } from 'react';
import { forwardRef } from 'react';

export type IconProps =
  | (Omit<HTMLAttributes<HTMLSpanElement>, 'role' | 'aria-hidden' | 'aria-label' | 'aria-labelledby' | 'dir'> & {
      'aria-hidden'?: true;
      'aria-label'?: never;
      'aria-labelledby'?: never;
      role?: never;
    })
  | (Omit<HTMLAttributes<HTMLSpanElement>, 'role' | 'aria-hidden'> & {
      'aria-hidden'?: never;
      'aria-label': string;
      'aria-labelledby'?: never;
      role: 'img';
    })
  | (Omit<HTMLAttributes<HTMLSpanElement>, 'role' | 'aria-hidden'> & {
      'aria-hidden'?: never;
      'aria-label'?: never;
      'aria-labelledby': string;
      role: 'img';
    });

function hasRoleImg(props: IconProps): props is Extract<IconProps, { role: 'img' }> {
  return props.role === 'img';
}

const cn = (...classes: Array<string | undefined | null>): string => classes.filter(Boolean).join(' ');

export const Icon = forwardRef<HTMLSpanElement, IconProps>(function Icon(props, forwardedRef) {
  const { children, className, ...restProps } = props;
  const ariaHidden = hasRoleImg(props) ? undefined : (true as const);

  return (
    <span ref={forwardedRef} className={cn('nl-icon', className)} aria-hidden={ariaHidden} {...restProps}>
      {children}
    </span>
  );
});

Icon.displayName = 'Icon';
