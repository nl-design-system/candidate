import type { HTMLAttributes } from 'react';
import { clsx } from 'clsx';
import { forwardRef } from 'react';

export type CodeProps = HTMLAttributes<HTMLElement>;

export const Code = forwardRef<HTMLHeadingElement, CodeProps>(function Code(props, forwardedRef) {
  const { children, className, ...restProps } = props;

  return (
    <code className={clsx('nl-code', className)} {...restProps} ref={forwardedRef}>
      {children}
    </code>
  );
});
