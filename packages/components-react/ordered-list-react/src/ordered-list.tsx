import { clsx } from 'clsx';
import { forwardRef, type HTMLAttributes, type LiHTMLAttributes, type OlHTMLAttributes, type ReactNode } from 'react';

export interface OrderedListProps extends OlHTMLAttributes<HTMLOListElement> {
  children?: ReactNode;
}

export const OrderedList = forwardRef<HTMLOListElement, OrderedListProps>((props, forwardedRef) => {
  const { children, className, ...restProps } = props;

  return (
    <ol className={clsx('nl-ordered-list', className)} ref={forwardedRef} {...restProps}>
      {children}
    </ol>
  );
});

OrderedList.displayName = 'OrderedList';

export interface OrderedListMarkerProps extends HTMLAttributes<HTMLSpanElement> {
  children?: ReactNode;
  label?: ReactNode;
}

export const OrderedListMarker = forwardRef<HTMLSpanElement, OrderedListMarkerProps>((props, forwardedRef) => {
  const { children, className, label, ...restProps } = props;

  return (
    <span
      className={clsx('nl-ordered-list__marker', 'nl-ordered-list__marker--custom', className)}
      ref={forwardedRef}
      {...restProps}
    >
      <span aria-hidden="true">{children}</span>
      {label && <span className="nl-ordered-list__marker-label">{label}</span>}
    </span>
  );
});

OrderedListMarker.displayName = 'OrderedListMarker';

export interface OrderedListItemProps extends LiHTMLAttributes<HTMLLIElement> {
  children?: ReactNode;
  marker?: ReactNode;
  markerLabel?: ReactNode;
}

export const OrderedListItem = forwardRef<HTMLLIElement, OrderedListItemProps>((props, forwardedRef) => {
  const { children, className, marker, markerLabel, ...restProps } = props;

  return (
    <li
      className={clsx('nl-ordered-list__item', marker && 'nl-ordered-list__item--custom-marker', className)}
      ref={forwardedRef}
      {...restProps}
    >
      {marker && <OrderedListMarker label={markerLabel}>{marker}</OrderedListMarker>}
      {children}
    </li>
  );
});

OrderedListItem.displayName = 'OrderedListItem';
