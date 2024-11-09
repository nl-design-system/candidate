import type { HTMLAttributes } from 'react';
import { clsx } from 'clsx';
import { forwardRef } from 'react';

export type Heading4Props = HTMLAttributes<HTMLHeadingElement>;

export const Heading4 = forwardRef<HTMLHeadingElement, Heading4Props>(function Heading4(props, forwardedRef) {
  const { children, className, ...restProps } = props;

  return (
    <h4 {...restProps} className={clsx('nl-heading-4', className)} ref={forwardedRef}>
      {children}
    </h4>
  );
});
