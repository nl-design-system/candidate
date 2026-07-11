import { forwardRef, createElement, type HTMLAttributes, type JSX } from 'react';

export const headingLevels = [1, 2, 3, 4, 5, 6] as const;

export type HeadingLevel = (typeof headingLevels)[number];

export type HeadingAppearance = `level-${HeadingLevel}`;

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  /** Sets the semantic level of the heading element */
  level: HeadingLevel;

  /** Allows the appearance of the heading to differ from the semantic level */
  appearance?: HeadingAppearance;
}

const cn = (...classes: Array<string | undefined | null>): string => classes.filter(Boolean).join(' ');

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(function Heading(props, forwardedRef) {
  const { level, appearance = `level-${level}`, children, className, ...restProps } = props;
  const type = `h${level}` as Extract<keyof JSX.IntrinsicElements, `h${HeadingLevel}`>;

  return createElement(
    type,
    { className: cn('nl-heading', `nl-heading--${appearance}`, className), ref: forwardedRef, ...restProps },
    children,
  );
});

Heading.displayName = 'Heading';
