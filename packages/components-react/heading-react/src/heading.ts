import { clsx } from 'clsx';
import type { HTMLAttributes } from 'react';
import { forwardRef, createElement } from 'react';

export type HeadingAppearance = 'level-1' | 'level-2' | 'level-3' | 'level-4' | 'level-5' | 'level-6';

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  appearance?: HeadingAppearance;
}

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(function Heading(props, forwardedRef) {
  const { level, appearance = `level-${level}`, className: extraClassName, children, ...restProps } = props;
  const type = `h${level}` as keyof JSX.IntrinsicElements;
  const className = `nl-heading-${appearance.split('-')[1]}`;

  return createElement(type, { className: clsx(className, extraClassName), ref: forwardedRef, ...restProps }, children);
});
