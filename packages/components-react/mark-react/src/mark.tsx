import { clsx } from 'clsx';
import type { HTMLAttributes } from 'react';
import { forwardRef } from 'react';

export type MarkProps = HTMLAttributes<HTMLElement>;

export const Mark = forwardRef<HTMLElement, MarkProps>(function Mark(props, forwardedRef) {
  const { children, className, ...restProps } = props;

  return (
    <mark {...restProps} className={clsx('nl-mark', className)} ref={forwardedRef}>
      {children}
    </mark>
  );
});
