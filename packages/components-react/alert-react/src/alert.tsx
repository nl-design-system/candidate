import type { ReactNode, HTMLAttributes } from 'react';
import { clsx } from 'clsx';
import { forwardRef } from 'react';

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode; // Needed in template file, feel free to remove
}

export const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(props, forwardedRef) {
  const { children, className, ...restProps } = props;

  return (
    <div className={clsx('nl-alert', className)} ref={forwardedRef} {...restProps}>
      {children}
    </div>
  );
});

Alert.displayName = 'Alert';
