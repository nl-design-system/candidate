import { clsx } from 'clsx';
import type { HTMLAttributes } from 'react';
import { forwardRef } from 'react';

export type Heading3Props = HTMLAttributes<HTMLHeadingElement>;

export const Heading3 = forwardRef<HTMLHeadingElement, Heading3Props>(function Heading3(props, forwardedRef) {
  const { children, className, ...restProps } = props;

  return (
    <h3 {...restProps} className={clsx('nl-heading-3', className)} ref={forwardedRef}>
      {children}
    </h3>
  );
});
