import type { HTMLAttributes } from 'react';
import { clsx } from 'clsx';
import { forwardRef } from 'react';

export type Heading2Props = HTMLAttributes<HTMLHeadingElement>;

export const Heading2 = forwardRef<HTMLHeadingElement, Heading2Props>(function Heading2(props, forwardedRef) {
  const { children, className, ...restProps } = props;

  return (
    <h2 {...restProps} className={clsx('nl-heading-2', className)} ref={forwardedRef}>
      {children}
    </h2>
  );
});

Heading2.displayName = 'Heading2';
