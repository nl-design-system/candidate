import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { afterEach, describe, expect, it } from 'vitest';
import { SkipLink } from './skip-link';

afterEach(() => {
  cleanup();
});

const displayName = 'SkipLink';
const text = 'Skip to main content';
const extraClassName = 'extra-classname';
const testId = 'rich-text';

describe('Skip link', () => {
  it(`has displayName "${displayName}"`, () => {
    expect(SkipLink.displayName).toBe(displayName);
  });

  it('renders an HTML "a" element', () => {
    const { container } = render(<SkipLink href="#main-content">{text}</SkipLink>);
    const skipLink = container.querySelector('a:only-child');

    expect(skipLink).toBeInTheDocument();
  });

  it('renders an element with role "link"', () => {
    render(<SkipLink href="#main-content">{text}</SkipLink>);
    const skipLink = screen.getByRole('link');

    expect(skipLink).toBeInTheDocument();
  });

  it('renders an element with class name "nl-skip-link"', () => {
    render(<SkipLink href="#main-content">{text}</SkipLink>);
    const skipLink = screen.getByRole('link');

    expect(skipLink).toHaveClass('nl-skip-link');
  });

  it(`renders an element with extra class name "${extraClassName}"`, () => {
    render(
      <SkipLink href="#main-content" className={extraClassName}>
        {text}
      </SkipLink>,
    );
    const skipLink = screen.getByRole('link');

    expect(skipLink).toHaveClass('nl-skip-link', extraClassName);
  });

  it('supports hiding the HTML "a" element visually and from the accessibility tree using the global HTML attribute "hidden"', ({
    expect,
  }) => {
    expect.assertions(2);
    render(
      <SkipLink href="#main-content" hidden>
        {text}
      </SkipLink>,
    );
    const skipLink = screen.getByRole('link', { hidden: true });

    try {
      screen.getByRole('link');
    } catch (e) {
      expect(e).toBeDefined();
    }

    expect(skipLink).not.toBeVisible();
  });

  it('forwards React refs to the HTMLAnchorElement', () => {
    const ref = createRef<HTMLAnchorElement>();
    render(
      <SkipLink href="#main-content" ref={ref}>
        {text}
      </SkipLink>,
    );
    const skipLink = screen.getByRole('link');

    expect(skipLink).toBeInstanceOf(HTMLAnchorElement);
  });

  it('renders rich text content', () => {
    render(
      <SkipLink href="#main-content">
        <strong data-testid={testId}>{text}</strong>
      </SkipLink>,
    );
    const skipLink = screen.getByRole('link');
    const richText = screen.getByTestId(testId);

    expect(skipLink).toContainElement(richText);
  });
});
