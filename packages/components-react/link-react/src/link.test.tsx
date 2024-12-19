import { describe, expect, it } from '@jest/globals';
import '@testing-library/jest-dom/jest-globals';
import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { Link } from './link';

const href = 'https://example.com';
const text = 'Bezoek een voorbeeld site';
const extraClassName = 'extra-classname';
const testId = 'rich-text';

describe('Link', () => {
  it('renders an HTML "a" element', () => {
    const { container } = render(<Link href={href}>{text}</Link>);
    const link = container.querySelector('a:only-child');

    expect(link).toBeInTheDocument();
  });

  it('renders an element with role "link"', () => {
    render(<Link href={href}>{text}</Link>);
    const link = screen.getByRole('link');

    expect(link).toBeInTheDocument();
  });

  it('renders an element with class name "nl-link"', () => {
    render(<Link href={href}>{text}</Link>);
    const link = screen.getByRole('link');

    expect(link).toHaveClass('nl-link');
  });

  it(`renders an element with an extra class name "${extraClassName}"`, () => {
    render(
      <Link href={href} className={extraClassName}>
        {text}
      </Link>,
    );
    const link = screen.getByRole('link');

    expect(link).toHaveClass('nl-link', extraClassName);
  });

  it('renders a visible "a" element', () => {
    render(<Link href={href}>{text}</Link>);
    const link = screen.getByRole('link');

    expect(link).toBeVisible();
  });

  it(`supports hiding the HTML "a" element visually and from the accessibility tree using the global HTML attribute "hidden"`, () => {
    expect.assertions(2);
    render(
      <Link href={href} hidden>
        {text}
      </Link>,
    );
    const link = screen.getByRole('link', { hidden: true });

    try {
      screen.getByRole('link');
    } catch (e) {
      expect(e).toBeDefined();
    }
    expect(link).not.toBeVisible();
  });

  it('renders rich text content', () => {
    render(
      <Link href={href}>
        <strong data-testid={testId}>{text}</strong>
      </Link>,
    );
    const link = screen.getByRole('link');
    const richText = screen.getByTestId(testId);

    expect(link).toContainElement(richText);
  });

  it('renders an element with aria-current="true" when a "current" prop is passed', () => {
    render(
      <Link href={href} current>
        {text}
      </Link>,
    );
    const link = screen.getByRole('link');

    expect(link).toHaveAttribute('aria-current', 'true');
  });

  it('renders an element with class name "nl-link--current" when a "current" prop is passed', () => {
    render(
      <Link href={href} current>
        {text}
      </Link>,
    );
    const link = screen.getByRole('link');

    expect(link).toHaveClass('nl-link--current');
  });

  it('renders an element with aria-disabled="true" when a "placeholder" prop is passed', () => {
    render(
      <Link href={href} placeholder>
        {text}
      </Link>,
    );
    const link = screen.getByRole('link');

    expect(link).toHaveAttribute('aria-disabled', 'true');
  });

  it('renders an element with class name "nl-link--placeholder" when a "placeholder" prop is passed', () => {
    render(
      <Link href={href} placeholder>
        {text}
      </Link>,
    );
    const link = screen.getByRole('link');

    expect(link).toHaveClass('nl-link--placeholder');
  });

  it('renders an element without a href attribute when a "placeholder" prop is passed', () => {
    render(
      <Link href={href} placeholder>
        {text}
      </Link>,
    );
    const link = screen.getByRole('link');

    expect(link).not.toHaveAttribute('href');
  });

  it('renders an element with class name "nl-link--inline-box" when a "inlineBox" prop is passed', () => {
    render(
      <Link href={href} inlineBox>
        {text}
      </Link>,
    );
    const link = screen.getByRole('link');

    expect(link).toHaveClass('nl-link--inline-box');
  });

  it('forwards React refs to the HTMLAnchorElement', () => {
    const ref = createRef<HTMLAnchorElement>();
    render(
      <Link href={href} ref={ref}>
        {text}
      </Link>,
    );
    const link = screen.getByRole('link');

    expect(link).toBeInstanceOf(HTMLAnchorElement);
  });
});
