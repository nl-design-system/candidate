import type { HTMLAttributes } from 'react';
import { clsx } from 'clsx';
import { forwardRef } from 'react';

export type Heading1Props = HTMLAttributes<HTMLHeadingElement>;

export const Heading1 = forwardRef<HTMLHeadingElement, Heading1Props>(function Heading1(props, forwardedRef) {
  const { children, className, ...restProps } = props;

  return (
    <h1 {...restProps} className={clsx('nl-heading-1', className)} ref={forwardedRef}>
      {children}
    </h1>
  );
});
