import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { forwardRef, Children, isValidElement } from 'react';

export type ButtonLabelProps =
  | {
      label?: ReactNode;
      children?: never;
    }
  | {
      children?: ReactNode;
      label?: never;
    };

export type ButtonDisabledProps =
  | {
      disabled?: boolean;
      htmlDisabled?: never;
    }
  | {
      htmlDisabled?: boolean;
      disabled?: never;
    };

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonLabelProps &
  ButtonDisabledProps & {
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
     * If you absolutely have to use the html disabled attribute, you can do so
     * with the `htmlDisabled` prop. Keep in mind that this brings additional
     * accessibility issues with it, as users are not able to focus the disabled
     * button. Making them completely invisible to screenreader users.
     */
    htmlDisabled?: unknown;

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
    disabled?: unknown;
  };

/**
 * A button. Can be used to let the user perform various actions.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(props, forwardedRef) {
  const {
    children,
    className,
    iconEnd,
    iconStart,
    disabled,
    htmlDisabled,
    pressed,
    type = 'button',
    label,
    ...restProps
  } = props;

  const hasIcon = Boolean(iconStart || iconEnd);

  // Is there markup inside `children`
  const isChildrenFormatted = Children.toArray(children).some(isValidElement);

  // If there is markup in `children` _and_ there is an icon, `children`
  // should be wrapped, otherwise there will be a gap around the markup
  const shouldWrapChildren = isChildrenFormatted && hasIcon;

  return (
    <button
      ref={forwardedRef}
      type={type}
      aria-pressed={pressed ? 'true' : undefined}
      aria-disabled={disabled ? 'true' : undefined}
      disabled={htmlDisabled}
      {...restProps}
    >
      {iconStart && <span>{iconStart}</span>}
      {label && <span>{label}</span>}
      {shouldWrapChildren ? <span>{children}</span> : children}
      {iconEnd && <span>{iconEnd}</span>}
    </button>
  );
});

Button.displayName = 'Button';
