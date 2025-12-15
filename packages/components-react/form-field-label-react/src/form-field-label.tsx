import type { ReactNode, HTMLAttributes } from 'react';
import { clsx } from 'clsx';
import { forwardRef } from 'react';

export interface FormFieldLabelProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode; // Needed in template file, feel free to remove
}

export const FormFieldLabel = forwardRef<HTMLDivElement, FormFieldLabelProps>(
  function FormFieldLabel(props, forwardedRef) {
    const { children, className, ...restProps } = props;

    return (
      <div className={clsx('nl-form-field-label', className)} ref={forwardedRef} {...restProps}>
        {children}
      </div>
    );
  },
);

FormFieldLabel.displayName = 'FormFieldLabel';
