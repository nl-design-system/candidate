import { ButtonProps } from '@nl-design-system-candidate/button-react';
import clsx from 'clsx';

/**
 * This component is a temporary component. To use for demo purposes only
 */

export const LinkButton = ({
  label,
  iconStart,
  iconEnd,
  children,
  pressed,
  purpose,
  disabled,
  hint,
  className,
  href,
  iconOnly,
  ...args
}: ButtonProps) => {
  return (
    <a
      role="button"
      href={disabled ? href : undefined}
      tabIndex={0}
      className={clsx('nl-button', className, {
        'nl-button--pressed': pressed,
        'nl-button--disabled': disabled,
        'nl-button--primary': purpose === 'primary',
        'nl-button--secondary': purpose === 'secondary',
        'nl-button--subtle': purpose === 'subtle',
        'nl-button--positive': Boolean(purpose) && hint === 'positive',
        'nl-button--negative': Boolean(purpose) && hint === 'negative',
        'nl-button--icon-only': iconOnly,
      })}
      aria-disabled={disabled ? 'true' : undefined}
      {...args}
    >
      {iconStart && <span className="nl-button__icon-start">{iconStart}</span>}
      {label && <span className="nl-button__label">{label}</span>}
      {children}
      {iconEnd && <span className="nl-button__icon-end">{iconEnd}</span>}
    </a>
  );
};
