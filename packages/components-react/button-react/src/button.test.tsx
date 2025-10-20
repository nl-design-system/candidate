import '@testing-library/jest-dom/vitest';
import { render, screen, cleanup } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { Button } from './button';
import { createRef } from 'react';

afterEach(() => {
  cleanup();
});

const displayName = 'Button';
const text = 'Klik mij';
const extraClassName = 'extra-classname';
const testId = 'rich-text';

describe('Button', () => {
  it(`has displayName "${displayName}"`, () => {
    expect(Button.displayName).toBe(displayName);
  });

  it('renders an element with role "button"', () => {
    render(<Button>{text}</Button>);
    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
  });

  it('renders an HTML "button" element', () => {
    const { container } = render(<Button>{text}</Button>);
    const button = container.querySelector('button:only-child');

    expect(button).toBeInTheDocument();
  });

  it('renders an element with class name "nl-button"', () => {
    render(<Button>{text}</Button>);
    const button = screen.getByRole('button');

    expect(button).toHaveClass('nl-button');
  });

  it(`renders an element with an extra class name "${extraClassName}"`, () => {
    render(<Button className={extraClassName}>{text}</Button>);
    const button = screen.getByRole('button');

    expect(button).toHaveClass('nl-button', extraClassName);
  });

  it('renders a visible "button" element', () => {
    render(<Button>{text}</Button>);
    const button = screen.getByRole('button');

    expect(button).toBeVisible();
  });

  it('renders rich text content', () => {
    render(
      <Button>
        <strong data-testid={testId}>{text}</strong>
      </Button>,
    );
    const button = screen.getByRole('button');
    const richText = screen.getByTestId(testId);

    expect(button).toContainElement(richText);
  });

  it('forwards React refs to the HTMLAnchorElement', () => {
    const ref = createRef<HTMLButtonElement>();
    render(<Button ref={ref}>{text}</Button>);
    const button = screen.getByRole('button');

    expect(button).toBeInstanceOf(HTMLButtonElement);
  });
});
