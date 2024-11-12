import { describe, expect, it } from '@jest/globals';
import '@testing-library/jest-dom/jest-globals';
import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { Heading3 } from './heading-3';

const extraClassName = 'extra-classname';
const testId = 'rich-text';
const level = 3;

describe('Heading 3', () => {
  it('renders an element with role "heading"', () => {
    render(<Heading3 />);
    const heading = screen.getByRole('heading');

    expect(heading).toBeInTheDocument();
  });

  it(`renders a heading at level ${level}`, () => {
    render(<Heading3 />);
    const heading = screen.getByRole('heading', { level });

    expect(heading).toBeInTheDocument();
  });

  it(`renders an HTML h${level} element`, () => {
    const { container } = render(<Heading3 />);
    const heading = container.querySelector(`h${level}:only-child`);

    expect(heading).toBeInTheDocument();
  });

  it(`renders an element with class name "nl-heading-${level}"`, () => {
    const { container } = render(<Heading3 />);
    const heading = container.querySelector(`h${level}:only-child`);

    expect(heading).toHaveClass(`nl-heading-${level}`);
  });

  it(`renders an element with role "heading" and name "Heading ${level}"`, () => {
    const name = `Heading ${level}`;
    render(<Heading3>{name}</Heading3>);
    const heading = screen.getByRole('heading', { name });

    expect(heading).toBeInTheDocument();
  });

  it(`supports hiding the HTML h${level} element visually and from the accessibility tree using the global HTML attribute "hidden"`, () => {
    expect.assertions(2);
    render(<Heading3 hidden />);
    const heading = screen.getByRole('heading', { hidden: true, level });

    try {
      screen.getByRole('heading', { level });
    } catch (e) {
      expect(e).toBeDefined();
    }
    expect(heading).not.toBeVisible();
  });

  it(`renders an HTML h${level} element with an extra class name "${extraClassName}"`, () => {
    render(<Heading3 className={extraClassName} />);
    const heading = screen.getByRole('heading');

    expect(heading).toHaveClass(`nl-heading-${level}`, extraClassName);
  });

  it('forwards React refs to the HTMLHeadingElement', () => {
    const ref = createRef<HTMLHeadingElement>();
    render(<Heading3 ref={ref} />);
    const heading = screen.getByRole('heading');

    expect(ref.current).toBe(heading);
    expect(ref.current).toBeInstanceOf(HTMLHeadingElement);
  });

  it('renders rich text content', () => {
    render(
      <Heading3>
        <strong data-testid={testId}>strong</strong>
      </Heading3>,
    );
    const heading = screen.getByRole('heading', { level });
    const richText = screen.getByTestId(testId);

    expect(heading).toContainElement(richText);
  });
});
