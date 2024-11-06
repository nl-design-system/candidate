import { clsx } from 'clsx';
import type { DataHTMLAttributes, ForwardedRef, HTMLAttributes, TimeHTMLAttributes } from 'react';
import { forwardRef } from 'react';

interface DataBadgePropsForTime extends TimeHTMLAttributes<HTMLTimeElement> {
  dateTime: TimeHTMLAttributes<HTMLTimeElement>['dateTime'];
  value?: never;
}

interface DataBadgePropsForData extends DataHTMLAttributes<HTMLDataElement> {
  dateTime?: never;
  value: DataHTMLAttributes<HTMLTimeElement>['value'];
}

export type DataBadgeProps = DataBadgePropsForTime | DataBadgePropsForData | HTMLAttributes<HTMLSpanElement>;

export const DataBadge = forwardRef<HTMLTimeElement | HTMLDataElement | HTMLSpanElement, DataBadgeProps>(
  function DataBadge(props, ref) {
    const { children, ...restProps } = props;
    const className = clsx('nl-data-badge', props.className);

    if ('dateTime' in props) {
      const { dateTime, ...timeRestProps } = restProps as React.TimeHTMLAttributes<HTMLTimeElement>;
      return (
        <time {...timeRestProps} dateTime={dateTime} className={className} ref={ref as ForwardedRef<HTMLTimeElement>}>
          {children}
        </time>
      );
    }

    if ('value' in props) {
      const { value, ...dataRestProps } = restProps as React.DataHTMLAttributes<HTMLDataElement>;
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
