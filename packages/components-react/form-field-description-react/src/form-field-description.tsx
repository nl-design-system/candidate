import type { ReactNode, HTMLAttributes } from 'react';
import { clsx } from 'clsx';
import { forwardRef } from 'react';

export interface FormFieldDescriptionProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode; // Needed in template file, feel free to remove
}

export const FormFieldDescription = forwardRef<HTMLDivElement, FormFieldDescriptionProps>(
  function FormFieldDescription(props, forwardedRef) {
    const { children, className, ...restProps } = props;

    return (
      <div className={clsx('nl-form-field-description', className)} ref={forwardedRef} {...restProps}>
        {children}
      </div>
    );
  },
);

FormFieldDescription.displayName = 'FormFieldDescription';
