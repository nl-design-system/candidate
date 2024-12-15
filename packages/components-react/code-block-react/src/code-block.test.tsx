import { describe, expect, it } from '@jest/globals';
import '@testing-library/jest-dom/jest-globals';
import { render } from '@testing-library/react';
import { createRef } from 'react';
import { CodeBlock } from './code-block';

const testCode = "import { CodeBlock } from '@nl-design-system-candidate/code-block-react';";
const extraClassName = 'extra-classname';

describe('Code Block', () => {
  it('renders an HTML pre element', () => {
    const { container } = render(<CodeBlock>{testCode}</CodeBlock>);
    const codeBlock = container.querySelector('pre:only-child');

    expect(codeBlock).toBeInTheDocument();
  });

  it('renders an element with class name "nl-code-block"', () => {
    const { container } = render(<CodeBlock>{testCode}</CodeBlock>);
    const codeBlock = container.querySelector('pre:only-child');

    expect(codeBlock).toHaveClass('nl-code-block');
  });

  it(`renders an element with an extra class name "${extraClassName}"`, () => {
    const { container } = render(<CodeBlock className={extraClassName}>{testCode}</CodeBlock>);
    const codeBlock = container.querySelector('pre:only-child');

    expect(codeBlock).toHaveClass('nl-code-block', extraClassName);
  });

  it('renders an HTML pre element that contains an HTML code element', () => {
    const { container } = render(<CodeBlock>{testCode}</CodeBlock>);
    const codeBlock = container.querySelector('pre:only-child');
    const codeBlockContent = codeBlock?.querySelector('code:only-child');

    expect(codeBlock).toBeInTheDocument();
    expect(codeBlock).toContainElement(codeBlockContent as HTMLElement);
  });

  it('renders an HTML pre with a dir="ltr" attribute to use left-to-right as default', () => {
    const { container } = render(<CodeBlock>{testCode}</CodeBlock>);
    const codeBlock = container.querySelector('pre:only-child');

    expect(codeBlock).toHaveAttribute('dir', 'ltr');
  });

  it('renders an HTML pre with a dir="rtl" attribute when specified', () => {
    const { container } = render(<CodeBlock dir="rtl">{testCode}</CodeBlock>);
    const codeBlock = container.querySelector('pre:only-child');

    expect(codeBlock).toHaveAttribute('dir', 'rtl');
  });

  it('renders an HTML pre without a dir attribute when set to `undefined`', () => {
    const { container } = render(<CodeBlock dir={undefined}>{testCode}</CodeBlock>);
    const codeBlock = container.querySelector('pre:only-child');

    expect(codeBlock).not.toHaveAttribute('dir');
  });

  it('renders an HTML pre with a translate="no" attribute to prevent automatic translations by default', () => {
    const { container } = render(<CodeBlock>{testCode}</CodeBlock>);
    const codeBlock = container.querySelector('pre:only-child');

    expect(codeBlock).toHaveAttribute('translate', 'no');
  });

  it('renders an HTML pre without a translate attribute when set to `undefined`', () => {
    const { container } = render(<CodeBlock translate={undefined}>{testCode}</CodeBlock>);
    const codeBlock = container.querySelector('pre:only-child');

    expect(codeBlock).not.toHaveAttribute('translate');
  });

  it('renders an element with class name "nl-code-block" that contains an element with class name "nl-code-block__code"', () => {
    const { container } = render(<CodeBlock>{testCode}</CodeBlock>);
    const codeBlock = container.querySelector('pre:only-child');
    const codeBlockContent = codeBlock?.querySelector(':only-child');

    expect(codeBlock).toHaveClass('nl-code-block');
    expect(codeBlockContent).toHaveClass('nl-code-block__code');
  });

  it('renders a visible HTML pre element', () => {
    const { container } = render(<CodeBlock>{testCode}</CodeBlock>);
    const codeBlock = container.querySelector('pre:only-child');

    expect(codeBlock).toBeVisible();
  });

  it(`supports hiding the HTML pre element visually and from the accessibility tree using the global HTML attribute "hidden"`, () => {
    const { container } = render(<CodeBlock hidden>{testCode}</CodeBlock>);
    const codeBlock = container.querySelector('pre:only-child');

    expect(codeBlock).not.toBeVisible();
  });

  it('forwards React refs to the HTMLPreElement', () => {
    const ref = createRef<HTMLPreElement>();
    const { container } = render(<CodeBlock ref={ref}>{testCode}</CodeBlock>);
    const codeBlock = container.querySelector('pre:only-child');

    expect(ref.current).toBe(codeBlock);
    expect(ref.current).toBeInstanceOf(HTMLPreElement);
  });
});
