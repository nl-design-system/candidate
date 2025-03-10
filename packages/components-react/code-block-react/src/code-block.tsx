import type { HTMLAttributes } from 'react';
import { clsx } from 'clsx';
import { forwardRef } from 'react';

export interface CodeBlockProps extends HTMLAttributes<HTMLPreElement> {
  overflow?: 'wrap' | 'nowrap' | 'overflow';
}

export const CodeBlock = forwardRef<HTMLPreElement, CodeBlockProps>(function CodeBlock(props, forwardedRef) {
  const { children, className, overflow = 'wrap', ...restProps } = props;
  const tabIndex = overflow === 'overflow' ? 0 : undefined;

  return (
    <pre
      dir="ltr"
      translate="no"
      tabIndex={tabIndex}
      {...restProps}
      className={clsx(
        'nl-code-block',
        {
          ['nl-code-block--nowrap']: overflow === 'nowrap',
          ['nl-code-block--overflow']: overflow === 'overflow',
        },
        className,
      )}
      ref={forwardedRef}
    >
      <code className="nl-code-block__code">{children}</code>
    </pre>
  );
});

CodeBlock.displayName = 'CodeBlock';
