import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { clsx } from 'clsx';
import { forwardRef, Children, isValidElement } from 'react';

export type ButtonPurpose = 'primary' | 'secondary' | 'subtle';
export type ButtonHint = 'positive' | 'negative';

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

export type ButtonPurposeHintProps =
  | {
      purpose?: ButtonPurpose;
      hint?: never;
    }
  | {
      hint?: ButtonHint;
      purpose: ButtonPurpose;
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
     * Show only icons, and no label. The label remains accessible.
     */
    iconOnly?: boolean;

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

    /**
     * Indicates to assistive technologies the button is a toggle button, that is either pressed or not pressed.
     * For toggle buttons use `<Button toggle>` for not pressed, and `<Button toggle pressed>` for pressed.
     * Do not use `toggle` for buttons that only look pressed, but aren't toggle buttons.
     */
    toggle?: boolean;
  };

/**
 * A button. Can be used to let the user perform various actions.
 * When the `purpose` prop is set, an optional `hint` prop can be used as well
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(props, forwardedRef) {
  const {
    children,
    className,
    iconOnly,
    iconEnd,
    iconStart,
    purpose,
    hint,
    disabled,
    htmlDisabled,
    pressed,
    type = 'button',
    label,
    toggle,
    ...restProps
  } = props;

  const hasIcon = Boolean(iconStart || iconEnd);

  // Is there markup inside `children`
  const isChildrenFormatted = Children.toArray(children).some(isValidElement);

  // Should the children be wrapped in a span:
  // 1. there is markup in `children` _and_ there is an icon: `children`
  // should be wrapped, otherwise there will be a gap around the markup
  // 2. iconOnly === true: `children` should be wrapped and get the label class
  // so that the label is hidden
  const shouldWrapChildren = (isChildrenFormatted && hasIcon) || iconOnly;

  return (
    <button
      ref={forwardedRef}
      type={type}
      className={clsx('nl-button', className, {
        'nl-button--pressed': pressed,
        'nl-button--disabled': disabled || htmlDisabled,
        'nl-button--primary': purpose === 'primary',
        'nl-button--secondary': purpose === 'secondary',
        'nl-button--subtle': purpose === 'subtle',
        'nl-button--positive': Boolean(purpose) && hint === 'positive',
        'nl-button--negative': Boolean(purpose) && hint === 'negative',
        'nl-button--icon-only': iconOnly,
      })}
      aria-pressed={toggle ? String(Boolean(pressed)) : undefined}
      aria-disabled={disabled ? 'true' : undefined}
      disabled={htmlDisabled}
      {...restProps}
    >
      {iconStart && <span className="nl-button__icon">{iconStart}</span>}
      {label && <span className="nl-button__label">{label}</span>}
      {shouldWrapChildren ? <span className={iconOnly ? 'nl-button__label' : ''}>{children}</span> : children}
      {iconEnd && <span className="nl-button__icon">{iconEnd}</span>}
    </button>
  );
});

Button.displayName = 'Button';
