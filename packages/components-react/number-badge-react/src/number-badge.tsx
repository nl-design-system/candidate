import type { DataHTMLAttributes, ForwardedRef, HTMLAttributes } from 'react';
import { clsx } from 'clsx';
import { forwardRef } from 'react';

interface NumberBadgePropsForData extends DataHTMLAttributes<HTMLDataElement> {
  value: number;
}

const isNumberBadgePropsForData = (props: NumberBadgeProps): props is NumberBadgePropsForData => 'value' in props;

export type NumberBadgeProps = NumberBadgePropsForData | HTMLAttributes<HTMLSpanElement>;

export const NumberBadge = forwardRef<HTMLDataElement | HTMLSpanElement, NumberBadgeProps>(
  function NumberBadge(props, ref) {
    const { children, ...restProps } = props;
    const className = clsx('nl-number-badge', props.className);

    if (isNumberBadgePropsForData(restProps)) {
      const { value, ...dataRestProps } = restProps;
      return (
        <data {...dataRestProps} value={value} className={className} ref={ref as ForwardedRef<HTMLDataElement>}>
          {children}
        </data>
      );
    }

    return (
      <span {...restProps} className={className} ref={ref as ForwardedRef<HTMLSpanElement>}>
        {children}
      </span>
    );
  },
);
