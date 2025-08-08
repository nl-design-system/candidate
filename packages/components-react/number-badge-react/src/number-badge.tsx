import type { DataHTMLAttributes, ForwardedRef, HTMLAttributes, ReactNode } from 'react';
import { forwardRef } from 'react';

interface NumberBadgePropsForData extends DataHTMLAttributes<HTMLDataElement> {
  value: number | string;
  label?: ReactNode;
}

interface NumberBadgePropsForSpan extends HTMLAttributes<HTMLSpanElement> {
  label?: ReactNode;
}

const isNumberBadgePropsForData = (props: NumberBadgeProps): props is NumberBadgePropsForData => 'value' in props;

const cn = (...classes: Array<string | undefined | null>): string => classes.filter(Boolean).join(' ');

export type NumberBadgeProps = NumberBadgePropsForData | NumberBadgePropsForSpan;

export const NumberBadge = forwardRef<HTMLDataElement | HTMLSpanElement, NumberBadgeProps>(
  function NumberBadge(props, ref) {
    const { children, label, ...restProps } = props;
    const className = cn('nl-number-badge', props.className);

    /**
     * When CSS cannot be loaded, the labels must in the opposite way to make sure the meaning is clear without visual aids.
     *
     * - without CSS the "hidden label" is visible
     * - without CSS the "visible label" is hidden
     */
    const fragment = (
      <>
        {label ? (
          <span hidden aria-hidden="true" className="nl-number-badge__visible-label">
            {children}
          </span>
        ) : (
          children
        )}
        {label ? <span className="nl-number-badge__hidden-label">{label}</span> : null}
      </>
    );

    if (isNumberBadgePropsForData(restProps)) {
      const { value, ...dataRestProps } = restProps;
      return (
        <data {...dataRestProps} value={value} className={className} ref={ref as ForwardedRef<HTMLDataElement>}>
          {fragment}
        </data>
      );
    }

    return (
      <span {...restProps} className={className} ref={ref as ForwardedRef<HTMLSpanElement>}>
        {fragment}
      </span>
    );
  },
);

NumberBadge.displayName = 'NumberBadge';
