import type { ReactNode, HTMLAttributes } from 'react';
import { forwardRef } from 'react';

const cn = (...classes: Array<string | undefined | null>): string => classes.filter(Boolean).join(' ');

export interface FormFieldStatusProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode; // Needed in template file, feel free to remove
}

export const FormFieldStatus = forwardRef<HTMLDivElement, FormFieldStatusProps>((props, forwardedRef) => {
  const { children, className, ...restProps } = props;

  return (
    <div className={cn('nl-form-field-status', className)} ref={forwardedRef} {...restProps}>
      {children}
    </div>
  );
});

FormFieldStatus.displayName = 'FormFieldStatus';
