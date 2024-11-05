import { clsx } from 'clsx';
import type { HTMLAttributes } from 'react';
import { forwardRef } from 'react';

export interface ColorSampleProps extends HTMLAttributes<HTMLDataElement> {
  value: string;
}

export const ColorSample = forwardRef<HTMLDataElement, ColorSampleProps>(function ColorSample(props, forwardedRef) {
  const { value, children, className, style, ...restProps } = props;

  return (
    <data
      {...restProps}
      className={clsx('nl-color-sample', className)}
      style={{ ...style, color: value }}
      value={value}
      ref={forwardedRef}
    >
      {children}
    </data>
  );
});
