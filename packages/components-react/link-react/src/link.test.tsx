import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { afterEach, describe, expect, it } from 'vitest';
import { Link } from './link';

afterEach(() => {
  cleanup();
});

const href = 'https://example.com';
const text = 'Bezoek een voorbeeld site';
const extraClassName = 'extra-classname';
const testId = 'rich-text';

describe('Link', () => {
  it('renders an element with role "link"', () => {
    render(<Link href={href}>{text}</Link>);
    const link = screen.getByRole('link');

    expect(link).toBeInTheDocument();
  });

  it('renders an HTML "a" element', () => {
    const { container } = render(<Link href={href}>{text}</Link>);
    const link = container.querySelector('a:only-child');

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

  it(`supports hiding the HTML "a" element visually and from the accessibility tree using the global HTML attribute "hidden"`, ({
    expect,
  }) => {
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

  it('renders an element with aria-current="true" when just the "current" prop is passed', () => {
    render(
      <Link href={href} current>
        {text}
      </Link>,
    );
    const link = screen.getByRole('link');

    expect(link).toHaveAttribute('aria-current', 'true');
  });

  it('renders an element with aria-current="page" when the "current" prop is passed with "page" as its value', () => {
    render(
      <Link href={href} current="page">
        {text}
      </Link>,
    );
    const link = screen.getByRole('link');

    expect(link).toHaveAttribute('aria-current', 'page');
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

  it('renders an element with the "aria-disabled" attribute set to "true" when the "disabled" prop is passed', () => {
    render(
      <Link href={href} disabled>
        {text}
      </Link>,
    );
    const link = screen.getByRole('link');

    expect(link).toHaveAttribute('aria-disabled', 'true');
  });

  it('renders an element without the "aria-disabled" attribute when the "disabled" prop is passed but "aria-disabled" is set to `false`', () => {
    render(
      <Link href={href} disabled aria-disabled={undefined}>
        {text}
      </Link>,
    );
    const link = screen.getByRole('link');

    expect(link).not.toHaveAttribute('aria-disabled');
  });

  it('renders an element with tabindex="0" when the "disabled" prop is passed', () => {
    render(
      <Link href={href} disabled>
        {text}
      </Link>,
    );
    const link = screen.getByRole('link');

    expect(link).toHaveAttribute('tabindex', '0');
  });

  it('renders an element with a custom "tabindex" attribute when both the "disabled" and "tabindex" props are passed', () => {
    render(
      <Link href={href} disabled tabIndex={-1}>
        {text}
      </Link>,
    );
    const link = screen.getByRole('link');

    expect(link).toHaveAttribute('tabindex', '-1');
  });

  it('renders an element with class name "nl-link--disabled" when the "disabled" prop is passed', () => {
    render(
      <Link href={href} disabled>
        {text}
      </Link>,
    );
    const link = screen.getByRole('link');

    expect(link).toHaveClass('nl-link', 'nl-link--disabled');
  });

  it('renders an element without an "href" attribute and with an explicit "role" attribute when the "disabled" prop is passed', () => {
    render(
      <Link href={href} disabled>
        {text}
      </Link>,
    );
    const link = screen.getByRole('link');

    expect(link).not.toHaveAttribute('href');
    expect(link).toHaveAttribute('role', 'link');
  });

  it('renders an element with class name "nl-link--inline-box" when an "inlineBox" prop is passed', () => {
    render(
      <Link href={href} inlineBox>
        {text}
      </Link>,
    );
    const link = screen.getByRole('link');

    expect(link).toHaveClass('nl-link', 'nl-link--inline-box');
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
