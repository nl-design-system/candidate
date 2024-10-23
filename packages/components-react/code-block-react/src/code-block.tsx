import type { HTMLAttributes } from 'react';
import { clsx } from 'clsx';
import { forwardRef } from 'react';

export type CodeBlockProps = HTMLAttributes<HTMLPreElement>;

export const CodeBlock = forwardRef<HTMLPreElement, CodeBlockProps>(function CodeBlock(props, forwardedRef) {
  const { children, className, ...restProps } = props;

  return (
    <pre {...restProps} className={clsx('nl-code-block', className)} ref={forwardedRef}>
      <code className="nl-code-block__content">{children}</code>
    </pre>
  );
});