import { describe, expect, it } from '@jest/globals';
import '@testing-library/jest-dom/jest-globals';
import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { ColorSample } from './color-sample';

const color = 'deeppink';
const extraClassName = 'extra-classname';
const title = 'title';
const label = 'label';

describe('Color sample', () => {
  it('renders an svg element', () => {
    const { container } = render(<ColorSample color={color} />);
    const colorSample = container.querySelector('svg:only-child');

    expect(colorSample).toBeInTheDocument();
  });

  it('renders an element with role "img"', () => {
    render(<ColorSample color={color} />);
    const colorSample = screen.getByRole('img');

    expect(colorSample).toBeInTheDocument();
  });

  it('renders an element with class name "nl-color-sample"', () => {
    render(<ColorSample color={color} />);
    const colorSample = screen.getByRole('img');

    expect(colorSample).toHaveClass('nl-color-sample');
  });

  it(`renders an element with an extra class name "${extraClassName}"`, () => {
    render(<ColorSample color={color} className={extraClassName} />);
    const colorSample = screen.getByRole('img');

    expect(colorSample).toHaveClass('nl-color-sample', extraClassName);
  });

  it(`renders an svg element that contains a title element with text "${title}"`, () => {
    render(<ColorSample color={color} title={title} />);
    const colorSample = screen.getByRole('img');
    const titleElem = colorSample.querySelector('title');

    expect(titleElem).toBeInTheDocument();
    expect(titleElem).toHaveTextContent(title);
  });

  it('renders an svg element with an "aria-labelledby" attribute that references its title element', () => {
    render(<ColorSample color={color} title={title} />);
    const colorSample = screen.getByRole('img');
    const titleElem = colorSample.querySelector('title');
    const ariaLabelleBy = titleElem?.id;

    expect(colorSample).toHaveAttribute('aria-labelledby', ariaLabelleBy);
  });

  it('renders an svg element with an "aria-labelledby" attribute that references its title element as well as an external element when both "title" and "aria-labelledby" are passed as props', () => {
    render(<ColorSample color={color} title={title} aria-labelledby={label} />);
    const colorSample = screen.getByRole('img');
    const titleElem = colorSample.querySelector('title');
    const ariaLabelleBy = titleElem?.id;

    expect(colorSample).toHaveAttribute('aria-labelledby', [ariaLabelleBy, label].join(' '));
  });

  it(`renders an element with a "style" attribute with value "color: ${color}"`, () => {
    render(<ColorSample color={color} />);
    const colorSample = screen.getByRole('img');

    expect(colorSample).toHaveStyle({ color });
  });

  it('renders a visible data element', () => {
    render(<ColorSample color={color} />);
    const colorSample = screen.getByRole('img');

    expect(colorSample).toBeVisible();
  });

  it(`supports hiding the HTML data element visually and from the accessibility tree using the global HTML attribute "hidden"`, () => {
    expect.assertions(2);
    render(<ColorSample color={color} hidden />);
    const colorSample = screen.getByRole('img', { hidden: true });

    try {
      screen.getByRole('img');
    } catch (e) {
      expect(e).toBeDefined();
    }

    expect(colorSample).not.toBeVisible();
  });

  it('forwards React refs to the HTMLDataElement', () => {
    const ref = createRef<SVGSVGElement>();
    render(<ColorSample color={color} ref={ref} />);
    const colorSample = screen.getByRole('img');

    expect(ref.current).toBe(colorSample);
    expect(ref.current).toBeInstanceOf(SVGSVGElement);
  });
});
