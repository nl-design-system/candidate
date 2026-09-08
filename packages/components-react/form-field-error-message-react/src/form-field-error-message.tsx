import { forwardRef, type ReactNode, type HTMLAttributes } from 'react';
import clsx from 'clsx';

export interface FormFieldErrorMessageProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  icon?: ReactNode;
  /** `id` for the content element, so it can be linked via `aria-describedby`. */
  contentId?: string;
  /** `role` for the content element, e.g. `"alert"` for realtime validation. */
  contentRole?: HTMLAttributes<HTMLDivElement>['role'];
}

export const FormFieldErrorMessage = forwardRef<HTMLDivElement, FormFieldErrorMessageProps>(
  ({ className, children, icon, contentId, contentRole, ...restProps }, ref) => {
    return (
      <div ref={ref} className={clsx('nl-form-field-error-message', className)} {...restProps}>
        {icon && <div className={clsx('nl-form-field-error-message__icon')}>{icon}</div>}
        <div id={contentId} role={contentRole} className={clsx('nl-form-field-error-message__content')}>
          {children}
        </div>
      </div>
    );
  },
);

FormFieldErrorMessage.displayName = 'FormFieldErrorMessage';
