import { describe, expect, it } from '@jest/globals';
import '@testing-library/jest-dom/jest-globals';
import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { ColorSample } from './color-sample';

const value = '#ff1493';
const extraClassName = 'extra-classname';
const label = 'label';
const ariaLabelledBy = 'other-element';

describe('Color sample', () => {
  it('renders an svg element', () => {
    const { container } = render(<ColorSample value={value} />);
    const colorSample = container.querySelector('svg:only-child');

    expect(colorSample).toBeInTheDocument();
  });

  it('renders an element with role "img"', () => {
    render(<ColorSample value={value} />);
    const colorSample = screen.getByRole('img');

    expect(colorSample).toBeInTheDocument();
  });

  it('renders an element with class name "nl-color-sample"', () => {
    render(<ColorSample value={value} />);
    const colorSample = screen.getByRole('img');

    expect(colorSample).toHaveClass('nl-color-sample');
  });

  it(`renders an element with an extra class name "${extraClassName}"`, () => {
    render(<ColorSample value={value} className={extraClassName} />);
    const colorSample = screen.getByRole('img');

    expect(colorSample).toHaveClass('nl-color-sample', extraClassName);
  });

  it(`renders an svg element that contains a title element with text "${label}"`, () => {
    render(<ColorSample value={value} label={label} />);
    const colorSample = screen.getByRole('img');
    const titleElem = colorSample.querySelector('title');

    expect(titleElem).toBeInTheDocument();
    expect(titleElem).toHaveTextContent(label);
  });

  it('renders an svg element with an "aria-labelledby" attribute that references an external element', () => {
    render(<ColorSample value={value} label={label} aria-labelledby={ariaLabelledBy} />);
    const colorSample = screen.getByRole('img');

    expect(colorSample).toHaveAttribute('aria-labelledby', ariaLabelledBy);
  });

  it(`renders an element with a "style" attribute with value "color: ${value}"`, () => {
    render(<ColorSample value={value} />);
    const colorSample = screen.getByRole('img');

    expect(colorSample).toHaveStyle({ color: value });
  });

  it('renders a visible data element', () => {
    render(<ColorSample value={value} />);
    const colorSample = screen.getByRole('img');

    expect(colorSample).toBeVisible();
  });

  it(`supports hiding the HTML data element visually and from the accessibility tree using the global HTML attribute "hidden"`, () => {
    expect.assertions(2);
    render(<ColorSample value={value} hidden />);
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
    render(<ColorSample value={value} ref={ref} />);
    const colorSample = screen.getByRole('img');

    expect(ref.current).toBe(colorSample);
    expect(ref.current).toBeInstanceOf(SVGSVGElement);
  });
});
