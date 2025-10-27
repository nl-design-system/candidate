import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { clsx } from 'clsx';
import { forwardRef } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  iconEnd?: ReactNode;
  iconStart?: ReactNode;

  /**
   * An optional purpose of the button. Choose the purpose wisely.
   * To much `primary` buttons could confuse the user.
   */
  purpose?: 'primary' | 'secondary' | 'subtle';

  /**
   * An optional hint of the type of action the button results in.
   * - `positive` indicates a positive or confirming result of the action
   * - `negative` indicates a negative of destructive result of the action
   */
  hint?: 'positive' | 'negative';

  /**
   * The label of the button.
   */
  children?: ReactNode;

  /**
   * Indicates that the button is disabled.
   * A disabled button is visible to the user, but not interactable. As such it
   * could be confusing to users.
   *
   * `aria-disabled="true"` is used to accomplish this task. This way the user
   * able to still focus the button with a keyboard or screenreader and get
   * notified about the disabled state.
   *
   * However, the developer is responsible for managing onClick handlers!
   */
  disabled?: boolean;

  /**
   * If you absolutely have to use the html disabled attribute, you can do so
   * with the `htmlDisabled` prop. Keep in mind that this brings additional
   * accessibility issues with it, as users are not able to focus the disabled
   * button. Making them completely invisible to screenreader users.
   */
  htmlDisabled?: boolean;

  /**
   * Indicates that the button is pressed. Even if the user is not currently
   * interacting with it.
   */
  pressed?: boolean;
}

/**
 * A button. Can be used to let the user perform various actions.
 * When the `purpose` prop is set, an optional `hint` prop can be used as well
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(props, forwardedRef) {
  const {
    children,
    className,
    iconEnd,
    iconStart,
    purpose,
    hint,
    disabled,
    htmlDisabled,
    pressed,
    type = 'button',
    ...restProps
  } = props;

  return (
    <button
      type={type}
      className={clsx('nl-button', className, {
        'nl-button--primary': purpose === 'primary',
        'nl-button--secondary': purpose === 'secondary',
        'nl-button--subtle': purpose === 'subtle',
        'nl-button--positive': Boolean(purpose) && hint === 'positive',
        'nl-button--negative': Boolean(purpose) && hint === 'negative',
      })}
      ref={forwardedRef}
      aria-pressed={pressed ? 'true' : undefined}
      {...restProps}
      aria-disabled={disabled ? 'true' : undefined}
      disabled={htmlDisabled}
    >
      {iconStart}
      {children}
      {iconEnd}
    </button>
  );
});

Button.displayName = 'Button';
