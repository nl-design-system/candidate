import type { InputHTMLAttributes } from 'react';
import { clsx } from 'clsx';
import { forwardRef } from 'react';

export type TextInputType =
  | 'text'
  | 'email'
  | 'url'
  | 'tel'
  | 'search'
  | 'password'
  | 'number'
  | 'date'
  | 'month'
  | 'week'
  | 'time'
  | 'datetime-local';

export type TextInputSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'stretch';

export interface TextInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'children' | 'size' | 'type'> {
  /** The `type` HTML attribute. Types for one line of text only, `checkbox`, `file` etc. are not supported. */
  type?: TextInputType;
  /** Shows the invalid state and sets `aria-invalid="true"`. Ignored when `disabled` is set. */
  invalid?: boolean;
  /** Width of the input field. Use `stretch` for the full width of the container. */
  size?: TextInputSize;
}

const isNumeric = ({ type, inputMode, pattern }: Pick<TextInputProps, 'type' | 'inputMode' | 'pattern'>) =>
  type === 'tel' ||
  type === 'number' ||
  inputMode === 'numeric' ||
  inputMode === 'decimal' ||
  inputMode === 'tel' ||
  pattern === String.raw`\d*` ||
  pattern === '[0-9]*';

const isUrl = ({ type, inputMode }: Pick<TextInputProps, 'type' | 'inputMode'>) =>
  type === 'url' || type === 'email' || inputMode === 'url' || inputMode === 'email';

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>((props, forwardedRef) => {
  const {
    'aria-invalid': ariaInvalid,
    className,
    dir,
    disabled,
    inputMode,
    invalid,
    pattern,
    readOnly,
    size,
    type,
    ...restProps
  } = props;

  // A disabled input cannot be changed or validated, so `disabled` wins from `invalid` and `readOnly`.
  const isInvalid = Boolean(invalid) && !disabled;
  const isReadOnly = Boolean(readOnly) && !disabled;

  return (
    <input
      aria-invalid={disabled ? undefined : (ariaInvalid ?? (isInvalid || undefined))}
      className={clsx(
        'nl-text-input',
        {
          'nl-text-input--invalid': isInvalid,
          'nl-text-input--disabled': disabled,
          'nl-text-input--read-only': isReadOnly,
          [`nl-text-input--${size}`]: size,
          'nl-text-input--password': type === 'password',
          'nl-text-input--url': isUrl({ type, inputMode }),
          'nl-text-input--numeric': isNumeric({ type, inputMode, pattern }),
        },
        className,
      )}
      dir={dir ?? 'auto'}
      disabled={disabled}
      inputMode={inputMode}
      pattern={pattern}
      readOnly={isReadOnly || undefined}
      ref={forwardedRef}
      type={type ?? 'text'}
      {...restProps}
    />
  );
});

TextInput.displayName = 'TextInput';
