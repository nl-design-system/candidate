import type { CSSProperties, HTMLAttributes } from 'react';
import { forwardRef } from 'react';

interface ColorSampleProps extends HTMLAttributes<SVGSVGElement> {
  label?: string;
  value: CSSProperties['color'];
}

const cn = (...classes: Array<string | undefined | null>): string => classes.filter(Boolean).join(' ');

export const ColorSample = forwardRef<SVGSVGElement, ColorSampleProps>(function ColorSample(props, forwardedRef) {
  const { className, label, style, value, ...restProps } = props;
  const hasLabel = typeof label === 'string' && label.trim() !== '';

  return (
    <svg
      {...restProps}
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      height="16"
      width="16"
      className={cn('nl-color-sample', className)}
      style={{ ...style, color: value }}
      ref={forwardedRef}
    >
      {hasLabel && <title>{label}</title>}
      <path d="M0 0H32V32H0Z" fill="currentcolor" />
    </svg>
  );
});

ColorSample.displayName = 'ColorSample';
