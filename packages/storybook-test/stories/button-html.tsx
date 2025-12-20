import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { forwardRef } from 'react';

export type ButtonLabelProps =
  | {
      label?: ReactNode;
      children?: never;
    }
  | {
      children?: ReactNode;
      label?: never;
    };

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonLabelProps & {
    /** The label of the button */
    label?: unknown;

    /** The label of the button */
    children?: unknown;

    /**
     * An optional icon after the label
     */
    iconEnd?: ReactNode;

    /**
     * An optional icon before the label
     */
    iconStart?: ReactNode;

    /**
     * Indicates that the button is pressed. Even if the user is not currently
     * interacting with it.
     */
    pressed?: boolean;

    /**
     * Indicates that the button is disabled.
     * A disabled button is visible to the user, but not interactable. As such it
     * could be confusing to users.
     *
     * `aria-disabled="true"` is used to accomplish this task. This way the user
     * is still able focus the button with a keyboard or screenreader and get
     * notified about the disabled state.
     *
     * However, the developer is responsible for managing onClick handlers!
     */
    disabled?: boolean;
  };

/**
 * A button. Can be used to let the user perform various actions.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(props, forwardedRef) {
  const { children, className, iconEnd, iconStart, disabled, pressed, type = 'button', label, ...restProps } = props;

  return (
    <button
      ref={forwardedRef}
      type={type}
      aria-pressed={pressed ? 'true' : undefined}
      disabled={disabled}
      {...restProps}
    >
      {iconStart}
      {label}
      {children}
      {iconEnd}
    </button>
  );
});

Button.displayName = 'Button';
