import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { afterEach, describe, expect, it } from 'vitest';
import { Heading4 } from './heading-4';

afterEach(() => {
  cleanup();
});

const displayName = 'Heading4';
const extraClassName = 'extra-classname';
const testId = 'rich-text';
const level = 4;

describe('Heading 4', () => {
  it(`has displayName "${displayName}"`, () => {
    expect(Heading4.displayName).toBe(displayName);
  });

  it('renders an element with role "heading"', () => {
    render(<Heading4 />);
    const heading = screen.getByRole('heading');

    expect(heading).toBeInTheDocument();
  });

  it(`renders a heading at level ${level}`, () => {
    render(<Heading4 />);
    const heading = screen.getByRole('heading', { level });

    expect(heading).toBeInTheDocument();
  });

  it(`renders an HTML h${level} element`, () => {
    const { container } = render(<Heading4 />);
    const heading = container.querySelector(`h${level}:only-child`);

    expect(heading).toBeInTheDocument();
  });

  it(`renders an element with class name "nl-heading-${level}"`, () => {
    const { container } = render(<Heading4 />);
    const heading = container.querySelector(`h${level}:only-child`);

    expect(heading).toHaveClass(`nl-heading-${level}`);
  });

  it(`renders an element with role "heading" and name "Heading ${level}"`, () => {
    const name = `Heading ${level}`;
    render(<Heading4>{name}</Heading4>);
    const heading = screen.getByRole('heading', { name });

    expect(heading).toBeInTheDocument();
  });

  it(`supports hiding the HTML h${level} element visually and from the accessibility tree using the global HTML attribute "hidden"`, ({
    expect,
  }) => {
    expect.assertions(2);
    render(<Heading4 hidden />);
    const heading = screen.getByRole('heading', { hidden: true, level });

    try {
      screen.getByRole('heading', { level });
    } catch (e) {
      expect(e).toBeDefined();
    }
    expect(heading).not.toBeVisible();
  });

  it(`renders an HTML h${level} element with an extra class name "${extraClassName}"`, () => {
    render(<Heading4 className={extraClassName} />);
    const heading = screen.getByRole('heading');

    expect(heading).toHaveClass(`nl-heading-${level}`, extraClassName);
  });

  it('forwards React refs to the HTMLHeadingElement', () => {
    const ref = createRef<HTMLHeadingElement>();
    render(<Heading4 ref={ref} />);
    const heading = screen.getByRole('heading');

    expect(ref.current).toBe(heading);
    expect(ref.current).toBeInstanceOf(HTMLHeadingElement);
  });

  it('renders rich text content', () => {
    render(
      <Heading4>
        <strong data-testid={testId}>strong</strong>
      </Heading4>,
    );
    const heading = screen.getByRole('heading', { level });
    const richText = screen.getByTestId(testId);

    expect(heading).toContainElement(richText);
  });
});
