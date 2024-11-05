import { clsx } from 'clsx';
import type { HTMLAttributes } from 'react';
import { forwardRef } from 'react';

export type CodeProps = HTMLAttributes<HTMLElement>;

export const Code = forwardRef<HTMLHeadingElement, CodeProps>(function Code(props, forwardedRef) {
  const { className, children, ...restProps } = props;

  return (
    <code className={clsx('nl-code', className)} {...restProps} ref={forwardedRef}>
      {children}
    </code>
  );
});
