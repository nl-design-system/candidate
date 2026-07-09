import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { afterEach, describe, expect, it } from 'vitest';
import { FormFieldDescription } from './form-field-description';

const content = 'Een postcode bestaat uit 4 cijfers, een spatie en 2 letters. Bijvoorbeeld: 1234 AB.';
const displayName = 'FormFieldDescription';
const extraClassName = 'extra-classname';

afterEach(() => {
  cleanup();
});

describe('FormFieldDescription', () => {
  it(`has displayName "${displayName}"`, () => {
    expect(FormFieldDescription.displayName).toBe(displayName);
  });

  it('renders an HTML div element', () => {
    const { container } = render(<FormFieldDescription>{content}</FormFieldDescription>);
    const element = container.querySelector('div');

    expect(element).toBeInTheDocument();
  });

  it('renders a visible element', () => {
    render(<FormFieldDescription>{content}</FormFieldDescription>);
    const element = screen.getByText(content);

    expect(element).toBeVisible();
  });

  it('renders children', () => {
    render(<FormFieldDescription>{content}</FormFieldDescription>);
    const element = screen.getByText(content);

    expect(element).toBeInTheDocument();
  });

  it('renders an element with class name "nl-form-field-description"', () => {
    render(<FormFieldDescription>{content}</FormFieldDescription>);
    const element = screen.getByText(content);

    expect(element).toHaveClass('nl-form-field-description');
  });

  it(`renders an element with an extra class name "${extraClassName}"`, () => {
    render(<FormFieldDescription className={extraClassName}>{content}</FormFieldDescription>);
    const element = screen.getByText(content);

    expect(element).toHaveClass('nl-form-field-description', extraClassName);
  });

  it('renders rich text content', () => {
    const { container } = render(
      <FormFieldDescription>
        <strong>{content}</strong>
      </FormFieldDescription>,
    );
    const formFieldDescription = container.querySelector('.nl-form-field-description');
    const richText = container.querySelector('strong');

    expect(formFieldDescription).toContainElement(richText);
  });

  it('supports hiding the HTML div element visually and from the accessibility tree using the global HTML attribute "hidden"', () => {
    render(<FormFieldDescription hidden>{content}</FormFieldDescription>);
    const element = screen.getByText(content);

    expect(element).not.toBeVisible();
  });

  it('forwards React refs to the HTMLDivElement', () => {
    const ref = createRef<HTMLDivElement>();
    render(<FormFieldDescription ref={ref}>{content}</FormFieldDescription>);
    const element = screen.getByText(content);

    expect(ref.current).toBe(element);
    expect(element).toBeInstanceOf(HTMLDivElement);
  });

  it('renders the disabled state', () => {
    render(<FormFieldDescription disabled>{content}</FormFieldDescription>);
    const element = screen.getByText(content);

    expect(element).toHaveClass('nl-form-field-description--disabled');
  });
});
