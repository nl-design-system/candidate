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

export type TextInputValueSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'stretch';

export interface TextInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'children' | 'type'> {
  /** The `type` HTML attribute. Types for one line of text only, `checkbox`, `file` etc. are not supported. */
  type?: TextInputType;
  /** Shows the invalid state and sets `aria-invalid="true"`. Don't combine with `disabled`. */
  invalid?: boolean;
  /**
   * Visual size of the input field, to match the expected length of the value. Use `stretch` for the full width of the
   * container. The native `size` HTML attribute is still supported.
   */
  valueSize?: TextInputValueSize;
  /** Shows the password as text. Only works with `type="password"`. */
  passwordVisible?: boolean;
}

const isNumeric = ({ type, inputMode, pattern }: Pick<TextInputProps, 'type' | 'inputMode' | 'pattern'>) =>
  type === 'tel' ||
  type === 'number' ||
  inputMode === 'numeric' ||
  inputMode === 'decimal' ||
  inputMode === 'tel' ||
  pattern === String.raw`\d*` ||
  pattern === '[0-9]*';

const isUrl = ({ type, inputMode }: Pick<TextInputProps, 'type' | 'inputMode'>) => {
  const normalizedType = type?.toLowerCase();
  const normalizedInputMode = inputMode?.toLowerCase();

  return (
    normalizedType === 'url' ||
    normalizedType === 'email' ||
    normalizedInputMode === 'url' ||
    normalizedInputMode === 'email'
  );
};

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>((props, forwardedRef) => {
  const {
    'aria-invalid': ariaInvalid,
    className,
    dir,
    disabled,
    inputMode,
    invalid,
    passwordVisible,
    pattern,
    readOnly,
    type,
    valueSize,
    ...restProps
  } = props;

  const isPassword = type === 'password';

  return (
    <input
      aria-invalid={ariaInvalid ?? (invalid || undefined)}
      className={clsx(
        'nl-text-input',
        {
          'nl-text-input--invalid': invalid,
          'nl-text-input--disabled': disabled,
          'nl-text-input--read-only': readOnly,
          [`nl-text-input--${valueSize}`]: valueSize,
          'nl-text-input--unmistakable': isPassword,
          'nl-text-input--url': isUrl({ type, inputMode }),
          'nl-text-input--numeric': isNumeric({ type, inputMode, pattern }),
        },
        className,
      )}
      dir={dir ?? 'auto'}
      disabled={disabled}
      inputMode={inputMode}
      pattern={pattern}
      readOnly={readOnly}
      ref={forwardedRef}
      type={isPassword && passwordVisible ? 'text' : (type ?? 'text')}
      {...restProps}
    />
  );
});

TextInput.displayName = 'TextInput';
