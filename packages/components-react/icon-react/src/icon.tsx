import { clsx } from 'clsx';
import type { HTMLAttributes } from 'react';
import { forwardRef } from 'react';

export type IconProps = (
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
    })
) & {
  /**
   * If `true` flips the icon horizontally in right-to-left layouts.
   * This is useful for directional icons like arrows or chevrons.
   */
  bidiMirrored?: boolean;
};

function hasRoleImg(props: IconProps): props is Extract<IconProps, { role: 'img' }> {
  return props.role === 'img';
}

export const Icon = forwardRef<HTMLSpanElement, IconProps>(function Icon(props, forwardedRef) {
  const { bidiMirrored = false, children, className, ...restProps } = props;
  const ariaHidden = hasRoleImg(props) ? undefined : (true as const);

  return (
    <span
      ref={forwardedRef}
      className={clsx('nl-icon', { ['nl-icon--bidi-mirrored']: bidiMirrored }, className)}
      aria-hidden={ariaHidden}
      {...restProps}
    >
      {children}
    </span>
  );
});

Icon.displayName = 'Icon';
