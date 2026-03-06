import type { ReactNode, HTMLAttributes } from 'react';
import { clsx } from 'clsx';
import { forwardRef } from 'react';

export interface FormFieldErrorMessageProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode; // Needed in template file, feel free to remove
}

export const FormFieldErrorMessage = forwardRef<HTMLDivElement, FormFieldErrorMessageProps>(
  function FormFieldErrorMessage(props, forwardedRef) {
    const { children, className, ...restProps } = props;

    return (
      <div className={clsx('nl-form-field-error-message', className)} ref={forwardedRef} {...restProps}>
        {children}
      </div>
    );
  },
);

FormFieldErrorMessage.displayName = 'FormFieldErrorMessage';
