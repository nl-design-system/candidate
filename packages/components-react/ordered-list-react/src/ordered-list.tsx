import type { ReactNode, HTMLAttributes } from 'react';
import { clsx } from 'clsx';
import { forwardRef } from 'react';

export interface OrderedListProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode; // Needed in template file, feel free to remove
}

export const OrderedList = forwardRef<HTMLDivElement, OrderedListProps>(function OrderedList(props, forwardedRef) {
  const { children, className, ...restProps } = props;

  return (
    <div className={clsx('nl-ordered-list', className)} ref={forwardedRef} {...restProps}>
      {children}
    </div>
  );
});

OrderedList.displayName = 'OrderedList';
