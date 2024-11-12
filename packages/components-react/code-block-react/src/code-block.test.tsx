import { describe, expect, it } from '@jest/globals';
import '@testing-library/jest-dom/jest-globals';
import { render } from '@testing-library/react';
import { CodeBlock } from './code-block';

describe('Code block', () => {
  it('renders a code block', () => {
    const { container } = render(
      <CodeBlock>{`import { CodeBlock } from '@nl-design-system-candidate/code-block';`}</CodeBlock>,
    );
    const pre = container.querySelector('pre');
    const code = container.querySelector('code');

    expect(pre).toBeInTheDocument();
    expect(pre).toContainElement(code);
  });
});
