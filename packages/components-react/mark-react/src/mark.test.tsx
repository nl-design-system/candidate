import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { afterEach, describe, expect, it } from 'vitest';
import { Mark } from './mark';

afterEach(() => {
  cleanup();
});

const displayName = 'Mark';
const text = 'gemarkeerd';
const extraClassName = 'extra-classname';
const testId = 'rich-text';

describe('Mark', () => {
  it(`has displayName "${displayName}"`, () => {
    expect(Mark.displayName).toBe(displayName);
  });

  it('renders an element with role "mark"', () => {
    render(<Mark>{text}</Mark>);
    const mark = screen.getByRole('mark');

    expect(mark).toBeInTheDocument();
  });

  it('renders an HTML mark element', () => {
    const { container } = render(<Mark>{text}</Mark>);
    const mark = container.querySelector('mark:only-child');

    expect(mark).toBeInTheDocument();
  });

  it('renders a visible mark element', () => {
    render(<Mark>{text}</Mark>);
    const mark = screen.getByRole('mark');

    expect(mark).toBeVisible();
  });

  it(`supports hiding the HTML mark element visually and from the accessibility tree using the global HTML attribute "hidden"`, ({
    expect,
  }) => {
    expect.assertions(2);
    render(<Mark hidden>{text}</Mark>);
    const mark = screen.getByRole('mark', { hidden: true });

    try {
      screen.getByRole('mark');
    } catch (e) {
      expect(e).toBeDefined();
    }
    expect(mark).not.toBeVisible();
  });

  it('renders an element with class name "nl-mark"', () => {
    render(<Mark>{text}</Mark>);
    const mark = screen.getByRole('mark');

    expect(mark).toHaveClass('nl-mark');
  });

  it(`renders an element with an extra class name "${extraClassName}"`, () => {
    render(<Mark className={extraClassName}>{text}</Mark>);
    const mark = screen.getByRole('mark');

    expect(mark).toHaveClass('nl-mark', extraClassName);
  });

  it(`renders an element with text "${text}"`, () => {
    render(<Mark>{text}</Mark>);
    const mark = screen.getByText(text);

    expect(mark).toBeInTheDocument();
  });

  it('renders rich text content', () => {
    render(
      <Mark>
        <strong data-testid={testId}>{text}</strong>
      </Mark>,
    );
    const mark = screen.getByRole('mark');
    const richText = screen.getByTestId(testId);

    expect(mark).toContainElement(richText);
  });

  it('forwards React refs to the HTMLElement', () => {
    const ref = createRef<HTMLElement>();
    render(<Mark ref={ref}>{text}</Mark>);
    const mark = screen.getByRole('mark');

    expect(ref.current).toBe(mark);
    expect(ref.current).toBeInstanceOf(HTMLElement);
  });
});
