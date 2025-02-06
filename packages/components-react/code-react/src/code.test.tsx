import '@testing-library/jest-dom/vitest';
import { cleanup, render } from '@testing-library/react';
import { createRef } from 'react';
import { afterEach, describe, expect, it } from 'vitest';
import { Code } from './code';

afterEach(() => {
  cleanup();
});

const text = 'import';
const extraClassName = 'extra-classname';

describe('Code', () => {
  it('renders an HTML code element', () => {
    const { container } = render(<Code>{text}</Code>);
    const code = container.querySelector('code:only-child');

    expect(code).toBeInTheDocument();
  });

  it('renders an HTML pre with a dir="ltr" attribute to use left-to-right as default', () => {
    const { container } = render(<Code>{text}</Code>);
    const codeBlock = container.querySelector('code:only-child');

    expect(codeBlock).toHaveAttribute('dir', 'ltr');
  });

  it('renders an HTML pre with a dir="rtl" attribute when specified', () => {
    const { container } = render(<Code dir="rtl">{text}</Code>);
    const codeBlock = container.querySelector('code:only-child');

    expect(codeBlock).toHaveAttribute('dir', 'rtl');
  });

  it('renders an HTML pre without a dir attribute when set to `undefined`', () => {
    const { container } = render(<Code dir={undefined}>{text}</Code>);
    const codeBlock = container.querySelector('code:only-child');

    expect(codeBlock).not.toHaveAttribute('dir');
  });

  it('renders an HTML pre with a translate="no" attribute to prevent automatic translations by default', () => {
    const { container } = render(<Code>{text}</Code>);
    const codeBlock = container.querySelector('code:only-child');

    expect(codeBlock).toHaveAttribute('translate', 'no');
  });

  it('renders an HTML pre without a translate attribute when set to `undefined`', () => {
    const { container } = render(<Code translate={undefined}>{text}</Code>);
    const codeBlock = container.querySelector('code:only-child');

    expect(codeBlock).not.toHaveAttribute('translate');
  });

  it('renders an element with class name "nl-code"', () => {
    const { container } = render(<Code>{text}</Code>);
    const code = container.querySelector('code:only-child');

    expect(code).toHaveClass('nl-code');
  });

  it(`renders an HTML code element with an extra class name "${extraClassName}"`, () => {
    const { container } = render(<Code className={extraClassName}>{text}</Code>);
    const code = container.querySelector('code:only-child');

    expect(code).toHaveClass('nl-code', extraClassName);
  });

  it('renders a visible code element', () => {
    const { container } = render(<Code>{text}</Code>);
    const code = container.querySelector('code:only-child');

    expect(code).toBeVisible();
  });

  it(`supports hiding the HTML data element visually and from the accessibility tree using the global HTML attribute "hidden"`, () => {
    const { container } = render(<Code hidden>{text}</Code>);
    const code = container.querySelector('code:only-child');

    expect(code).not.toBeVisible();
  });

  it('forwards React refs to the HTMLElement', () => {
    const ref = createRef<HTMLElement>();
    const { container } = render(<Code ref={ref}>{text}</Code>);
    const code = container.querySelector('code:only-child');

    expect(ref.current).toBe(code);
    expect(ref.current).toBeInstanceOf(HTMLElement);
  });
});
