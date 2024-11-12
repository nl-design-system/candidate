import { describe, expect, it } from '@jest/globals';
import '@testing-library/jest-dom/jest-globals';
import { render } from '@testing-library/react';
import { createRef } from 'react';
import { Code } from './code';

const text = 'import';
const extraClassName = 'extra-classname';

describe('Code', () => {
  it('renders an HTML code element', () => {
    const { container } = render(<Code>{text}</Code>);
    const code = container.querySelector('code:only-child');

    expect(code).toBeInTheDocument();
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
