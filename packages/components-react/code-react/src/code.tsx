import type { HTMLAttributes } from 'react';
import { forwardRef } from 'react';

export type CodeProps = HTMLAttributes<HTMLElement>;

const cn = (...classes: Array<string | undefined | null>): string => classes.filter(Boolean).join(' ');

export const Code = forwardRef<HTMLElement, CodeProps>(function Code(props, forwardedRef) {
  const { children, className, ...restProps } = props;

  return (
    <code dir="ltr" translate="no" className={cn('nl-code', className)} {...restProps} ref={forwardedRef}>
      {children}
    </code>
  );
});

Code.displayName = 'Code';
