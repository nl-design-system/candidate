import type { HTMLAttributes } from 'react';
import { clsx } from 'clsx';
import { forwardRef } from 'react';

export type CodeProps = HTMLAttributes<HTMLElement>;

export const Code = forwardRef<HTMLElement, CodeProps>(function Code(props, forwardedRef) {
  const { children, className, ...restProps } = props;

  return (
    <code className={clsx('nl-code', className)} {...restProps} ref={forwardedRef}>
      {children}
    </code>
  );
});
