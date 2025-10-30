import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { clsx } from 'clsx';
import { forwardRef, Children, isValidElement } from 'react';

type Purpose = 'primary' | 'secondary' | 'subtle';
type Hint = 'positive' | 'negative';

type ButtonLabelProps =
  | {
      label?: ReactNode;
      children?: never;
    }
  | {
      children?: ReactNode;
      label?: never;
    };

type ButtonDisabledProps =
  | {
      disabled?: boolean;
      htmlDisabled?: never;
    }
  | {
      htmlDisabled?: boolean;
      disabled?: never;
    };

type ButtonPurposeHintProps =
  | {
      purpose?: Purpose;
      hint?: never;
    }
  | {
      hint?: Hint;
      purpose: Purpose;
    };

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonLabelProps &
  ButtonDisabledProps &
  ButtonPurposeHintProps & {
    /** The label of the button */
    label?: unknown;

    /** The label of the button */
    children?: unknown;

    /**
     * An optional purpose of the button. Choose the purpose wisely.
     * To much `primary` buttons could confuse the user.
     */
    purpose?: unknown;

    /**
     * An optional hint of the type of action the button results in.
     * This property only works when the `purpose` has been set to a value.
     * - `positive` indicates a positive or confirming result of the action
     * - `negative` indicates a negative of destructive result of the action
     */
    hint?: unknown;

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
  const isChildrenFormatted = Children.toArray(children).some(isValidElement);

  // If there is markup in `children` _and_ there is an icon, `children`
  // should be wrapped, otherwise there will be a gap around the markup
  const shouldWrapChildren = isChildrenFormatted && hasIcon;

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
      {iconStart && <span className="nl-button__icon">{iconStart}</span>}
      {label && <span className="nl-button__label">{label}</span>}
      {shouldWrapChildren ? <span>{children}</span> : children}
      {iconEnd && <span className="nl-button__icon">{iconEnd}</span>}
    </button>
  );
});

Button.displayName = 'Button';
