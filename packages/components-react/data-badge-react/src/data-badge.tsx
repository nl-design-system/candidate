import type { DataHTMLAttributes, ForwardedRef, HTMLAttributes, TimeHTMLAttributes } from 'react';
import { forwardRef } from 'react';

export type DataBadgeProps =
  // <time> variant
  | (Omit<TimeHTMLAttributes<HTMLTimeElement>, 'value'> & {
      dateTime: TimeHTMLAttributes<HTMLTimeElement>['dateTime'];
      value?: never;
    })
  // <data> variant
  | (Omit<DataHTMLAttributes<HTMLDataElement>, 'dateTime'> & {
      dateTime?: never;
      value: DataHTMLAttributes<HTMLDataElement>['value'];
    })
  // <span> variant
  | Omit<HTMLAttributes<HTMLSpanElement>, 'datetime' | 'value'>;

export function isTimeDataBadgeProps(props: DataBadgeProps): props is Extract<DataBadgeProps, { dateTime: unknown }> {
  return 'dateTime' in props;
}

export function isDataDataBadgeProps(props: DataBadgeProps): props is Extract<DataBadgeProps, { value: unknown }> {
  return 'value' in props;
}

const cn = (...classes: Array<string | undefined | null>): string => classes.filter(Boolean).join(' ');

export const DataBadge = forwardRef<HTMLTimeElement | HTMLDataElement | HTMLSpanElement, DataBadgeProps>(
  function DataBadge(props, ref) {
    const { children, ...restProps } = props;
    const className = cn('nl-data-badge', props.className);

    if (isTimeDataBadgeProps(restProps)) {
      const { dateTime, ...timeRestProps } = restProps;
      return (
        <time {...timeRestProps} dateTime={dateTime} className={className} ref={ref as ForwardedRef<HTMLTimeElement>}>
          {children}
        </time>
      );
    }

    if (isDataDataBadgeProps(restProps)) {
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
