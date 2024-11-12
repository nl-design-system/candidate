import { describe, expect, it } from '@jest/globals';
import '@testing-library/jest-dom/jest-globals';
import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { ColorSample } from './color-sample';

const value = 'deeppink';
const extraClassName = 'extra-classname';
const text = 'Voorbeeld van de CSS kleur deeppink';

describe('Color sample', () => {
  it('renders an HTML data element', () => {
    const { container } = render(<ColorSample value={value} />);
    const colorSample = container.querySelector('data:only-child');

    expect(colorSample).toBeInTheDocument();
  });

  it('renders an element with class name "nl-color-sample"', () => {
    const { container } = render(<ColorSample value={value} />);
    const colorSample = container.querySelector('data:only-child');

    expect(colorSample).toHaveClass('nl-color-sample');
  });

  it(`renders an element with text content "${text}"`, () => {
    render(<ColorSample value={value}>{text}</ColorSample>);
    const colorSample = screen.getByText(text);

    expect(colorSample).toHaveTextContent(text);
  });

  it(`renders an element with an extra class name "${extraClassName}"`, () => {
    const { container } = render(<ColorSample value={value} className={extraClassName} />);
    const colorSample = container.querySelector('data:only-child');

    expect(colorSample).toHaveClass('nl-color-sample', extraClassName);
  });

  it(`renders an element with a "value" attribute with value "${value}"`, () => {
    const { container } = render(<ColorSample value={value} />);
    const colorSample = container.querySelector('data:only-child');

    expect(colorSample).toHaveAttribute('value', value);
  });

  it(`renders an element with a "style" attribute with value "{ color: ${value} }"`, () => {
    const { container } = render(<ColorSample value={value} />);
    const colorSample = container.querySelector('data:only-child');

    expect(colorSample).toHaveStyle({ color: value });
  });

  it('renders a visible data element', () => {
    const { container } = render(<ColorSample value={value} />);
    const colorSample = container.querySelector('data:only-child');

    expect(colorSample).toBeVisible();
  });

  it(`supports hiding the HTML data element visually and from the accessibility tree using the global HTML attribute "hidden"`, () => {
    const { container } = render(<ColorSample value={value} hidden />);
    const colorSample = container.querySelector('data:only-child');

    expect(colorSample).not.toBeVisible();
  });

  it('forwards React refs to the HTMLDataElement', () => {
    const ref = createRef<HTMLDataElement>();
    const { container } = render(<ColorSample value={value} ref={ref} />);
    const colorSample = container.querySelector('data:only-child');

    expect(ref.current).toBe(colorSample);
    expect(ref.current).toBeInstanceOf(HTMLDataElement);
  });
});
