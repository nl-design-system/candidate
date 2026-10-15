import type { ReactNode, HTMLAttributes } from 'react';
import { forwardRef } from 'react';

const cn = (...classes: Array<string | undefined | null>): string => classes.filter(Boolean).join(' ');

export interface TextAreaProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode; // Needed in template file, feel free to remove
}

export const TextArea = forwardRef<HTMLDivElement, TextAreaProps>((props, forwardedRef) => {
  const { children, className, ...restProps } = props;

  return (
    <div className={cn('nl-text-area', className)} ref={forwardedRef} {...restProps}>
      {children}
    </div>
  );
});

TextArea.displayName = 'TextArea';
