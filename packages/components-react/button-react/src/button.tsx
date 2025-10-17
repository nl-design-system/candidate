import type { HTMLAttributes, ReactNode } from 'react';
import { clsx } from 'clsx';
import { forwardRef } from 'react';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  iconEnd?: ReactNode;
  iconStart?: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(props, forwardedRef) {
  const { children, className, ...restProps } = props;
  return (
    <button className={clsx('nl-button', className)} ref={forwardedRef} {...restProps}>
      {children}
    </button>
  );
});

Button.displayName = 'Button';
