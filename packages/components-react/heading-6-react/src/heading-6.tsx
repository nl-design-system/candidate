import type { HTMLAttributes } from 'react';
import { clsx } from 'clsx';
import { forwardRef } from 'react';

export type Heading6Props = HTMLAttributes<HTMLHeadingElement>;

export const Heading6 = forwardRef<HTMLHeadingElement, Heading6Props>(function Heading6(props, forwardedRef) {
  const { children, className, ...restProps } = props;

  return (
    <h6 {...restProps} className={clsx('nl-heading-6', className)} ref={forwardedRef}>
      {children}
    </h6>
  );
});
