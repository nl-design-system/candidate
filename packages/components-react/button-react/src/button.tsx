import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { clsx } from 'clsx';
import { forwardRef } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The label of the button
   */
  label?: ReactNode;

  /**
   * An optional icon after the label
   */
  iconEnd?: ReactNode;

  /**
   * An optional icon before the label
   */
  iconStart?: ReactNode;

  /**
   * An optional purpose of the button. Choose the purpose wisely.
   * To much `primary` buttons could confuse the user.
   */
  purpose?: 'primary' | 'secondary' | 'subtle';

  /**
   * An optional hint of the type of action the button results in.
   * This property only works when the `purpose` has been set to a value.
   * - `positive` indicates a positive or confirming result of the action
   * - `negative` indicates a negative of destructive result of the action
   */
  hint?: 'positive' | 'negative';

  /**
   * Children of the button. Use this if you'll want full controll over the
   * contents of the button. When an `iconStart` or `iconEnd` is provided, the
   * children are wrapped in a `<span>` element to prevent the weird gaps in
   * formatted content.
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
    label,
    ...restProps
  } = props;

  const hasIcon = Boolean(iconStart || iconEnd);

  // Is there markup inside `children`
  const childrenIsFormatted = Array.isArray(children) && children.some((part) => typeof part !== 'string');

  // If there is markup in `children` _and_ there is an icon, `children`
  // should be wrapped, otherwise there will be a gap around the markup
  const wrapChildren = childrenIsFormatted && hasIcon;

  return (
    <button
      ref={forwardedRef}
      type={type}
      className={clsx('nl-button', className, {
        'nl-button--primary': purpose === 'primary',
        'nl-button--secondary': purpose === 'secondary',
        'nl-button--subtle': purpose === 'subtle',
        'nl-button--positive': Boolean(purpose) && hint === 'positive',
        'nl-button--negative': Boolean(purpose) && hint === 'negative',
      })}
      aria-pressed={pressed ? 'true' : undefined}
      aria-disabled={disabled ? 'true' : undefined}
      disabled={htmlDisabled}
      {...restProps}
    >
      {iconStart && <span className="nl-button__icon-start">{iconStart}</span>}
      {label && <span className="nl-button__label">{label}</span>}
      {wrapChildren ? <span>{children}</span> : children}
      {iconEnd && <span className="nl-button__icon-end">{iconEnd}</span>}
    </button>
  );
});

Button.displayName = 'Button';
