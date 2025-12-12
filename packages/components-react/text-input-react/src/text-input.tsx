import type { ReactNode, HTMLAttributes } from 'react';
import { clsx } from 'clsx';
import { forwardRef } from 'react';

export interface TextInputProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode; // Needed in template file, feel free to remove
}

export const TextInput = forwardRef<HTMLDivElement, TextInputProps>(function TextInput(props, forwardedRef) {
  const { children, className, ...restProps } = props;

  return (
    <div className={clsx('nl-text-input', className)} ref={forwardedRef} {...restProps}>
      {children}
    </div>
  );
});

TextInput.displayName = 'TextInput';
