import { clsx } from 'clsx';
import { forwardRef, type HTMLAttributes, type LiHTMLAttributes, type ReactNode } from 'react';

// `role` is not configurable: the component always sets `role="list"`.
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface UnorderedListProps extends Omit<HTMLAttributes<HTMLUListElement>, 'role'> {}

export const UnorderedList = forwardRef<HTMLUListElement, UnorderedListProps>((props, forwardedRef) => {
  const { children, className, ...restProps } = props;

  return (
    <ul className={clsx('nl-unordered-list', className)} ref={forwardedRef} {...restProps} role="list">
      {children}
    </ul>
  );
});

UnorderedList.displayName = 'UnorderedList';

export interface UnorderedListMarkerProps extends HTMLAttributes<HTMLSpanElement> {
  label?: ReactNode;
}

export const UnorderedListMarker = forwardRef<HTMLSpanElement, UnorderedListMarkerProps>((props, forwardedRef) => {
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
    <span className={clsx('nl-unordered-list__marker', className)} ref={forwardedRef} {...restProps}>
      <span aria-hidden="true">{children}</span>
      {label && <span className="nl-unordered-list__marker-label">{labelWithSpace}</span>}
    </span>
  );
});

UnorderedListMarker.displayName = 'UnorderedListMarker';

// A decorative custom marker may go without a label, but a label is meaningless without a marker.
type UnorderedListItemMarkerProps =
  | { marker?: undefined; markerLabel?: undefined }
  | { marker: ReactNode; markerLabel?: ReactNode };

export type UnorderedListItemProps = LiHTMLAttributes<HTMLLIElement> & {} & UnorderedListItemMarkerProps;

export const UnorderedListItem = forwardRef<HTMLLIElement, UnorderedListItemProps>((props, forwardedRef) => {
  const { children, className, marker, markerLabel, ...restProps } = props;

  return (
    <li className={clsx('nl-unordered-list__item', className)} ref={forwardedRef} {...restProps}>
      {marker && <UnorderedListMarker label={markerLabel}>{marker}</UnorderedListMarker>}
      {children}
    </li>
  );
});

UnorderedListItem.displayName = 'UnorderedListItem';
