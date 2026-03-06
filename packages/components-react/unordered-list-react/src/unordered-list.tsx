import type { ReactNode, HTMLAttributes } from 'react';
import { clsx } from 'clsx';
import { forwardRef } from 'react';

export interface UnorderedListProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode; // Needed in template file, feel free to remove
}

export const UnorderedList = forwardRef<HTMLDivElement, UnorderedListProps>(
  function UnorderedList(props, forwardedRef) {
    const { children, className, ...restProps } = props;

    return (
      <div className={clsx('nl-unordered-list', className)} ref={forwardedRef} {...restProps}>
        {children}
      </div>
    );
  },
);

UnorderedList.displayName = 'UnorderedList';
