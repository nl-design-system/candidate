import { clsx } from 'clsx';
import type { HTMLAttributes } from 'react';
import { forwardRef } from 'react';

export type Heading5Props = HTMLAttributes<HTMLHeadingElement>;

export const Heading5 = forwardRef<HTMLHeadingElement, Heading5Props>(function Heading5(props, forwardedRef) {
  const { children, className, ...restProps } = props;

  return (
    <h5 {...restProps} className={clsx('nl-heading-5', className)} ref={forwardedRef}>
      {children}
    </h5>
  );
});
