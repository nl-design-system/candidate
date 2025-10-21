import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { clsx } from 'clsx';
import { forwardRef } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  iconEnd?: ReactNode;
  iconStart?: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(props, forwardedRef) {
  const { children, className, type = 'button', ...restProps } = props;
  return (
    <button type={type} className={clsx('nl-button', className)} ref={forwardedRef} {...restProps}>
      {children}
    </button>
  );
});

Button.displayName = 'Button';
