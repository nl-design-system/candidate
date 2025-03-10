import type { DataHTMLAttributes, ForwardedRef, HTMLAttributes, TimeHTMLAttributes } from 'react';
import { clsx } from 'clsx';
import { forwardRef } from 'react';

interface DataBadgePropsForTime extends TimeHTMLAttributes<HTMLTimeElement> {
  dateTime: TimeHTMLAttributes<HTMLTimeElement>['dateTime'];
  value?: never;
}

const isDataBadgePropsForTime = (props: DataBadgeProps): props is DataBadgePropsForTime => 'dateTime' in props;

interface DataBadgePropsForData extends DataHTMLAttributes<HTMLDataElement> {
  dateTime?: never;
  value: DataHTMLAttributes<HTMLTimeElement>['value'];
}

const isDataBadgePropsForData = (props: DataBadgeProps): props is DataBadgePropsForData => 'value' in props;

export type DataBadgeProps = DataBadgePropsForTime | DataBadgePropsForData | HTMLAttributes<HTMLSpanElement>;

export const DataBadge = forwardRef<HTMLTimeElement | HTMLDataElement | HTMLSpanElement, DataBadgeProps>(
  function DataBadge(props, ref) {
    const { children, ...restProps } = props;
    const className = clsx('nl-data-badge', props.className);

    if (isDataBadgePropsForTime(restProps)) {
      const { dateTime, ...timeRestProps } = restProps;
      return (
        <time {...timeRestProps} dateTime={dateTime} className={className} ref={ref as ForwardedRef<HTMLTimeElement>}>
          {children}
        </time>
      );
    }

    if (isDataBadgePropsForData(restProps)) {
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

DataBadge.displayName = 'DataBadge';
