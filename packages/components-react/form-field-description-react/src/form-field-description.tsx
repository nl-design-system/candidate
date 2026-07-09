import type { ComponentPropsWithoutRef } from 'react';
import { clsx } from 'clsx';
import { forwardRef } from 'react';

export interface FormFieldDescriptionProps extends ComponentPropsWithoutRef<'div'> {
  disabled?: boolean;
}

export const FormFieldDescription = forwardRef<HTMLDivElement, FormFieldDescriptionProps>(
  function FormFieldDescription(props, forwardedRef) {
    const { children, className, disabled, ...restProps } = props;

    return (
      <div
        className={clsx('nl-form-field-description', { 'nl-form-field-description--disabled': disabled }, className)}
        ref={forwardedRef}
        {...restProps}
      >
        {children}
      </div>
    );
  },
);

FormFieldDescription.displayName = 'FormFieldDescription';
