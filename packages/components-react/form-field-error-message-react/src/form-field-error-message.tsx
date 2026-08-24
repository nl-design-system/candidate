import { forwardRef, type ReactNode, type HTMLAttributes } from 'react';
import clsx from 'clsx';

export interface FormFieldErrorMessageProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  icon?: ReactNode;
}

export const FormFieldErrorMessage = forwardRef<HTMLDivElement, FormFieldErrorMessageProps>(
  ({ id, role, className, children, icon, ...restProps }, ref) => {
    return (
      <div ref={ref} className={clsx('nl-form-field-error-message', className)} {...restProps}>
        {icon && <div className={clsx('nl-form-field-error-message__icon')}>{icon}</div>}
        <div id={id} role={role} className={clsx('nl-form-field-error-message__content')}>
          {children}
        </div>
      </div>
    );
  },
);

FormFieldErrorMessage.displayName = 'FormFieldErrorMessage';
