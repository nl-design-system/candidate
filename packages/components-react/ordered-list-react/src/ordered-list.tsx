import { clsx } from 'clsx';
import { forwardRef, type HTMLAttributes, type LiHTMLAttributes, type OlHTMLAttributes, type ReactNode } from 'react';

// `role` is not configurable: the component always sets `role="list"`.
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface OrderedListProps extends Omit<OlHTMLAttributes<HTMLOListElement>, 'role'> {}

export const OrderedList = forwardRef<HTMLOListElement, OrderedListProps>((props, forwardedRef) => {
  const { children, className, ...restProps } = props;

  return (
    <ol className={clsx('nl-ordered-list', className)} ref={forwardedRef} {...restProps} role="list">
      {children}
    </ol>
  );
});

OrderedList.displayName = 'OrderedList';

export interface OrderedListMarkerProps extends HTMLAttributes<HTMLSpanElement> {
  label?: ReactNode;
}

export const OrderedListMarker = forwardRef<HTMLSpanElement, OrderedListMarkerProps>((props, forwardedRef) => {
  const { children, className, label, ...restProps } = props;
  // Non-breaking space in the same text node, so screen readers keep it (VoiceOver skips a separate one).
  const labelWithSpace =
    typeof label === 'string' ? (
      `${label}\u{A0}`
    ) : (
      <>
        {label}
        {'\u{A0}'}
      </>
    );

  return (
    <span className={clsx('nl-ordered-list__marker', className)} ref={forwardedRef} {...restProps}>
      <span aria-hidden="true">{children}</span>
      {label && <span className="nl-ordered-list__marker-label">{labelWithSpace}</span>}
    </span>
  );
});

OrderedListMarker.displayName = 'OrderedListMarker';

// A custom marker always needs an accessible label, and a label is meaningless without a marker.
type OrderedListItemMarkerProps =
  | { marker?: undefined; markerLabel?: undefined }
  | { marker: ReactNode; markerLabel: ReactNode };

export type OrderedListItemProps = LiHTMLAttributes<HTMLLIElement> & {} & OrderedListItemMarkerProps;

export const OrderedListItem = forwardRef<HTMLLIElement, OrderedListItemProps>((props, forwardedRef) => {
  const { children, className, marker, markerLabel, ...restProps } = props;

  return (
    <li className={clsx('nl-ordered-list__item', className)} ref={forwardedRef} {...restProps}>
      {marker && <OrderedListMarker label={markerLabel}>{marker}</OrderedListMarker>}
      {children}
    </li>
  );
});

OrderedListItem.displayName = 'OrderedListItem';
