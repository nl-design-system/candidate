import '@testing-library/jest-dom/vitest';
import { render, screen, cleanup } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { Button } from './button';
import { createRef } from 'react';

afterEach(() => {
  cleanup();
});

const displayName = 'Button';
const accessibleName = 'menu openen';
const text = 'Klik mij';
const extraClassName = 'extra-classname';
const testAccessibleLabelId = 'button-label';
const testRichTextId = 'rich-text';

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

  it('can be labeled via "aria-label"', () => {
    render(<Button aria-label={accessibleName}>{text}</Button>);
    const button = screen.getByRole('button');

    expect(button).toHaveAccessibleName(accessibleName);
  });

  it('can be labeled via "aria-labelledby"', () => {
    render(
      <>
        <span id={testAccessibleLabelId}>{accessibleName}</span>
        <Button aria-labelledby={testAccessibleLabelId}>{text}</Button>
      </>,
    );
    const button = screen.getByRole('button');

    expect(button).toHaveAccessibleName(accessibleName);
  });

  it('can be marked as having a popup via "aria-haspopup"', () => {
    render(<Button aria-haspopup="dialog">{text}</Button>);
    const button = screen.getByRole('button');

    expect(button).toHaveAttribute('aria-haspopup', 'dialog');
  });

  it('can be marked as expanded via "aria-expanded"', () => {
    render(<Button aria-expanded="true">{text}</Button>);
    const button = screen.getByRole('button');

    expect(button).toHaveAttribute('aria-expanded', 'true');
  });

  it('can be marked as togglebutton via "aria-pressed"', () => {
    render(<Button aria-pressed="true">{text}</Button>);
    const button = screen.getByRole('button');

    expect(button).toHaveAttribute('aria-pressed', 'true');
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
        <strong data-testid={testRichTextId}>{text}</strong>
      </Button>,
    );
    const button = screen.getByRole('button');
    const richText = screen.getByTestId(testRichTextId);

    expect(button).toContainElement(richText);
  });

  it('forwards React refs to the HTMLAnchorElement', () => {
    const ref = createRef<HTMLButtonElement>();
    render(<Button ref={ref}>{text}</Button>);
    const button = screen.getByRole('button');

    expect(button).toBeInstanceOf(HTMLButtonElement);
  });
});
