import type { HTMLAttributes } from 'react';
import { clsx } from 'clsx';
import { forwardRef, createElement } from 'react';

export const headingLevels = [1, 2, 3, 4, 5, 6] as const;

export type HeadingLevel = (typeof headingLevels)[number];

export type HeadingAppearance = `level-${HeadingLevel}`;

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level: HeadingLevel;
  appearance?: HeadingAppearance;
}

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(function Heading(props, forwardedRef) {
  const { level, appearance = `level-${level}`, children, className, ...restProps } = props;
  const type = `h${level}` as keyof JSX.IntrinsicElements;

  return createElement(
    type,
    { className: clsx('nl-heading', `nl-heading--${appearance}`, className), ref: forwardedRef, ...restProps },
    children,
  );
});
