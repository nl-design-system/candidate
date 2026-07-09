import '@testing-library/jest-dom/vitest';
import { cleanup, render } from '@testing-library/react';
import { createRef } from 'react';
import { afterEach, describe, expect, it } from 'vitest';
import { FormFieldDescription } from './form-field-description';

const content = 'Een postcode bestaat uit 4 cijfers, een spatie en 2 letters. Bijvoorbeeld: 1234 AB.';
const displayName = 'FormFieldDescription';
const extraClassName = 'example-variant';

afterEach(() => {
  cleanup();
});

describe('FormFieldDescription', () => {
  it('has displayName "${displayName}"', () => {
    expect(FormFieldDescription.displayName).toBe(displayName);
  });

  it('renders an HTML div element', () => {
    const { container } = render(<FormFieldDescription>{content}</FormFieldDescription>);
    const element = container.querySelector('div');

    expect(element).toBeInTheDocument();
  });

  it('renders a visible element', () => {
    const { container } = render(<FormFieldDescription>{content}</FormFieldDescription>);
    const element = container.querySelector('.nl-form-field-description');

    expect(element).toBeVisible();
  });

  it('renders text content', () => {
    const { container } = render(<FormFieldDescription>{content}</FormFieldDescription>);
    const element = container.querySelector('.nl-form-field-description');

    expect(element).toHaveTextContent(content);
  });

  it('renders an element with class name "nl-form-field-description"', () => {
    const { container } = render(<FormFieldDescription>{content}</FormFieldDescription>);
    const element = container.querySelector('.nl-form-field-description');

    expect(element).toHaveClass('nl-form-field-description');
  });

  it('renders an element with an extra class name "${extraClassName}"', () => {
    const { container } = render(<FormFieldDescription className={extraClassName}>{content}</FormFieldDescription>);
    const element = container.querySelector('.nl-form-field-description');

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
    const { container } = render(<FormFieldDescription hidden>{content}</FormFieldDescription>);
    const element = container.querySelector('.nl-form-field-description');

    expect(element).not.toBeVisible();
  });

  it('forwards React refs to the HTMLDivElement', () => {
    const ref = createRef<HTMLDivElement>();
    const { container } = render(<FormFieldDescription ref={ref}>{content}</FormFieldDescription>);
    const element = container.querySelector('.nl-form-field-description');

    expect(ref.current).toBe(element);
    expect(element).toBeInstanceOf(HTMLDivElement);
  });

  it('renders the disabled state', () => {
    const { container } = render(<FormFieldDescription disabled>{content}</FormFieldDescription>);
    const element = container.querySelector('.nl-form-field-description');

    expect(element).toHaveClass('nl-form-field-description--disabled');
  });
  it('can contain HTML p elements', () => {
    const { container } = render(
      <FormFieldDescription>
        <p>{content}</p>
      </FormFieldDescription>,
    );
    const formFieldDescription = container.querySelector('.nl-form-field-description');
    const paragraph = container.querySelector('p');

    expect(formFieldDescription).toContainElement(paragraph);
  });
  it('can contain phrasing content', () => {
    const { container } = render(
      <FormFieldDescription>
        <span>{content}</span>
      </FormFieldDescription>,
    );
    const formFieldDescription = container.querySelector('.nl-form-field-description');
    const span = container.querySelector('span');

    expect(formFieldDescription).toContainElement(span);
  });
  it('has HTML id attribute', () => {
    const id = 'form-field-description-id';
    const { container } = render(<FormFieldDescription id={id}>{content}</FormFieldDescription>);
    const element = container.querySelector('.nl-form-field-description');

    expect(element).toHaveAttribute('id', id);
  });
});
