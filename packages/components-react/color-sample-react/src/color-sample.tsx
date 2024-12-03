import type { CSSProperties, HTMLAttributes } from 'react';
import { clsx } from 'clsx';
import { forwardRef, useId } from 'react';

interface ColorSampleProps extends HTMLAttributes<SVGSVGElement> {
  value: CSSProperties['color'];
}

export const ColorSample = forwardRef<SVGSVGElement, ColorSampleProps>(function ColorSampe(props, forwardedRef) {
  const id = useId();
  const { className, style, title, value, ...restProps } = props;
  const hasTitle = typeof title === 'string';
  const ariaLabelledBy = [hasTitle ? id : undefined, props['aria-labelledby']].filter(Boolean).join(' ') || undefined;

  return (
    <svg
      {...restProps}
      aria-labelledby={ariaLabelledBy}
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      height="16"
      width="16"
      className={clsx('nl-color-sample', className)}
      style={{ ...style, color: value }}
      ref={forwardedRef}
    >
      {hasTitle && <title id={id}>{title}</title>}
      <path d="M0 0H32V32H0Z" fill="currentcolor" />
    </svg>
  );
});
