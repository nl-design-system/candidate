import type { ReactNode, HTMLAttributes } from 'react';
import { clsx } from 'clsx';
import { forwardRef } from 'react';

export interface NoteProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode; // Needed in template file, feel free to remove
}

export const Note = forwardRef<HTMLDivElement, NoteProps>(function Note(props, forwardedRef) {
  const { children, className, ...restProps } = props;

  return (
    <div className={clsx('nl-note', className)} ref={forwardedRef} {...restProps}>
      {children}
    </div>
  );
});

Note.displayName = 'Note';
