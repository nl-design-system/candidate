import type { HTMLAttributes } from 'react';
import { forwardRef } from 'react';

const cn = (...classes: Array<string | undefined | null>): string => classes.filter(Boolean).join(' ');

export type MarkProps = HTMLAttributes<HTMLElement>;

export const Mark = forwardRef<HTMLElement, MarkProps>(function Mark(props, forwardedRef) {
  const { children, className, ...restProps } = props;

  return (
    <mark {...restProps} className={cn('nl-mark', className)} ref={forwardedRef}>
      {children}
    </mark>
  );
});

Mark.displayName = 'Mark';
