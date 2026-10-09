import type { ReactNode, HTMLAttributes } from 'react';
import { forwardRef } from 'react';

const cn = (...classes: Array<string | undefined | null>): string => classes.filter(Boolean).join(' ');

export interface NewComponentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode; // Needed in template file, feel free to remove
}

export const NewComponent = forwardRef<HTMLDivElement, NewComponentProps>(function NewComponent(props, forwardedRef) {
  const { children, className, ...restProps } = props;

  return (
    <div className={cn('nl-new-component', className)} ref={forwardedRef} {...restProps}>
      {children}
    </div>
  );
});

NewComponent.displayName = 'NewComponent';
