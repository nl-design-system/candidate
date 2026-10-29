import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { clsx } from 'clsx';
import { forwardRef } from 'react';

export type FormFieldLabelType = 'option' | 'inherit';

export type FormFieldLabelTypeProps =
  | {
      type?: undefined;
      input?: never;
      disabled?: boolean;
    }
  | {
      /** The associated form field is a radio button, checkbox or switch, passed via `input`. */
      type: 'option';
      /** The radio button, checkbox or switch inside the label. */
      input: ReactNode;
      disabled?: boolean;
    }
  | {
      /** Inherit the text styles of the parent element, for example inside a heading. */
      type: 'inherit';
      input?: never;
      disabled?: never;
    };

export type FormFieldLabelProps = ComponentPropsWithoutRef<'label'> &
  FormFieldLabelTypeProps & {
    /** Phrasing content, excluding interactive content. */
    children: ReactNode;
  };

export const FormFieldLabel = forwardRef<HTMLLabelElement, FormFieldLabelProps>((props, forwardedRef) => {
  const { children, className, disabled, input, type, ...restProps } = props;

  return (
    <label
      className={clsx(
        'nl-form-field-label',
        {
          'nl-form-field-label--disabled': disabled,
          'nl-form-field-label--inherit': type === 'inherit',
          'nl-form-field-label--option': type === 'option',
        },
        className,
      )}
      ref={forwardedRef}
      {...restProps}
    >
      {input}
      {children}
    </label>
  );
});

FormFieldLabel.displayName = 'FormFieldLabel';
