import { clsx } from 'clsx';
import { forwardRef, type HTMLAttributes, type LiHTMLAttributes, type ReactNode } from 'react';

export interface UnorderedListProps extends HTMLAttributes<HTMLUListElement> {
  children?: ReactNode;
}

export const UnorderedList = forwardRef<HTMLUListElement, UnorderedListProps>((props, forwardedRef) => {
  const { children, className, ...restProps } = props;

  return (
    <ul className={clsx('nl-unordered-list', className)} ref={forwardedRef} {...restProps}>
      {children}
    </ul>
  );
});

UnorderedList.displayName = 'UnorderedList';

export interface UnorderedListMarkerProps extends HTMLAttributes<HTMLSpanElement> {
  children?: ReactNode;
  label?: ReactNode;
}

export const UnorderedListMarker = forwardRef<HTMLSpanElement, UnorderedListMarkerProps>((props, forwardedRef) => {
  const { children, className, label, ...restProps } = props;

  return (
    <span
      className={clsx('nl-unordered-list__marker', 'nl-unordered-list__marker--custom', className)}
      ref={forwardedRef}
      {...restProps}
    >
      <span aria-hidden="true">{children}</span>
      {label && <span className="nl-unordered-list__marker-label">{label}</span>}
    </span>
  );
});

UnorderedListMarker.displayName = 'UnorderedListMarker';

export interface UnorderedListItemProps extends LiHTMLAttributes<HTMLLIElement> {
  children?: ReactNode;
  marker?: ReactNode;
  markerLabel?: ReactNode;
}

export const UnorderedListItem = forwardRef<HTMLLIElement, UnorderedListItemProps>((props, forwardedRef) => {
  const { children, className, marker, markerLabel, ...restProps } = props;

  return (
    <li
      className={clsx('nl-unordered-list__item', marker && 'nl-unordered-list__item--custom-marker', className)}
      ref={forwardedRef}
      {...restProps}
    >
      {marker && <UnorderedListMarker label={markerLabel}>{marker}</UnorderedListMarker>}
      {children}
    </li>
  );
});

UnorderedListItem.displayName = 'UnorderedListItem';
