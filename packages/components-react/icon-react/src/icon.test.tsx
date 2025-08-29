import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { afterEach, describe, expect, it } from 'vitest';
import { Icon } from './icon';

const displayName = 'Icon';
const SvgIcon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"></svg>;
const unicodeCharacter = '🤖';
const extraClassName = 'extra-classname';
const label = 'SVG icon';
const dir = 'rtl';

afterEach(() => {
  cleanup();
});

describe('Icon', () => {
  it(`has displayName "${displayName}"`, () => {
    expect(Icon.displayName).toBe(displayName);
  });

  it('renders an HTML span element', () => {
    const { container } = render(
      <Icon>
        <SvgIcon />
      </Icon>,
    );
    const icon = container.querySelector('span:only-child');

    expect(icon).toBeInTheDocument();
  });

  it('renders an HTML span element with aria-hidden="true" attribute', () => {
    const { container } = render(
      <Icon>
        <SvgIcon />
      </Icon>,
    );
    const icon = container.querySelector('span:only-child');

    expect(icon).toHaveAttribute('aria-hidden', 'true');
  });

  it('accepts role="img" and an aria-label attribute', () => {
    render(
      <Icon role="img" aria-label={label}>
        <SvgIcon />
      </Icon>,
    );
    const icon = screen.getByRole('img');

    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAccessibleName(label);
  });

  it('accepts role="img" and an aria-label attribute and does not have aria-hidden="true" attribute', () => {
    render(
      <Icon role="img" aria-label={label}>
        <SvgIcon />
      </Icon>,
    );
    const icon = screen.getByRole('img');

    expect(icon).not.toHaveAttribute('aria-hidden');
  });

  it('accepts role="img" and an aria-labelledby attribute', () => {
    render(
      <>
        <h2 id="id">{label}</h2>
        <Icon role="img" aria-labelledby="id">
          <SvgIcon />
        </Icon>
      </>,
    );
    const icon = screen.getByLabelText(label);

    expect(icon).toBeInTheDocument();
  });

  it('accepts role="img" and an aria-labelledby attribute and does not have aria-hidden="true" attribute', () => {
    render(
      <Icon role="img" aria-labelledby={label}>
        <SvgIcon />
      </Icon>,
    );
    const icon = screen.getByRole('img');

    expect(icon).not.toHaveAttribute('aria-hidden');
  });

  it('accepts a dir attribute', () => {
    render(
      <Icon role="img" aria-label={label} dir={dir}>
        <SvgIcon />
      </Icon>,
    );
    const icon = screen.getByRole('img');

    expect(icon).toHaveAttribute('dir', dir);
  });

  it('has class name "nl-icon"', () => {
    render(
      <Icon role="img" aria-label={label}>
        <SvgIcon />
      </Icon>,
    );
    const icon = screen.getByRole('img');

    expect(icon).toHaveClass('nl-icon');
  });

  it(`accepts an extra class name "${extraClassName}"`, () => {
    render(
      <Icon role="img" aria-label={label} className={extraClassName}>
        <SvgIcon />
      </Icon>,
    );
    const icon = screen.getByRole('img');

    expect(icon).toHaveClass('nl-icon', extraClassName);
  });

  it('accepts a prop bidiMirrored that results in an extra class name nl-icon--bidi-mirrored', () => {
    const { container } = render(<Icon bidiMirrored />);
    const icon = container.querySelector('span:only-child');

    expect(icon).toHaveClass('nl-icon', 'nl-icon--bidi-mirrored');
  });

  it('renders a visible element', () => {
    render(
      <Icon role="img" aria-label={label}>
        <SvgIcon />
      </Icon>,
    );
    const icon = screen.getByRole('img');

    expect(icon).toBeVisible();
  });

  it('can contain an SVG element', () => {
    const { container } = render(
      <Icon role="img" aria-label={label}>
        <SvgIcon />
      </Icon>,
    );
    const icon = screen.getByRole('img');
    const svg = container.querySelector('svg:only-child');

    expect(icon).toContain(svg);
  });

  it(`can contain a unicode character "${unicodeCharacter}"`, () => {
    render(
      <Icon role="img" aria-label={label}>
        {unicodeCharacter}
      </Icon>,
    );
    const icon = screen.getByRole('img');

    expect(icon).toHaveTextContent(unicodeCharacter);
  });

  it('uses design tokens to set dimensions', () => {
    const style = {
      '--nl-icon-block-size': '2rem',
      '--nl-icon-inline-size': '4rem',
    } as React.CSSProperties;
    const { container } = render(
      <Icon style={style}>
        <SvgIcon />
      </Icon>,
    );
    const icon = container.querySelector('span:only-child');
    expect(icon).toHaveStyle({ '--nl-icon-block-size': '2rem', '--nl-icon-inline-size': '4rem' });
  });

  it('forwards React refs to the HTMLSpanElement', () => {
    const ref = createRef<HTMLSpanElement>();
    render(
      <Icon role="img" aria-label={label} ref={ref}>
        <SvgIcon />
      </Icon>,
    );
    const icon = screen.getByRole('img');

    expect(ref.current).toBe(icon);
    expect(ref.current).toBeInstanceOf(HTMLSpanElement);
  });
});
