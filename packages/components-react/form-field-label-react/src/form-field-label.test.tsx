import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { afterEach, describe, expect, it } from 'vitest';
import { FormFieldLabel } from './form-field-label';

const content = 'Naam';
const optionContent = 'Ik wil de nieuwsbrief ontvangen';
const displayName = 'FormFieldLabel';
const extraClassName = 'nl-form-field-label--example-variant';

afterEach(() => {
  cleanup();
});

describe('FormFieldLabel', () => {
  it(`has displayName "${displayName}"`, () => {
    expect(FormFieldLabel.displayName).toBe(displayName);
  });

  it('renders an HTML label element', () => {
    const { container } = render(<FormFieldLabel>{content}</FormFieldLabel>);
    const element = container.querySelector(':only-child');

    expect(element?.localName).toBe('label');
  });

  it('renders a visible element', () => {
    const { container } = render(<FormFieldLabel>{content}</FormFieldLabel>);
    const element = container.querySelector('.nl-form-field-label');

    expect(element).toBeVisible();
  });

  it('renders text content', () => {
    const { container } = render(<FormFieldLabel>{content}</FormFieldLabel>);
    const element = container.querySelector('.nl-form-field-label');

    expect(element).toHaveTextContent(content);
  });

  it('renders rich text content', () => {
    const { container } = render(
      <FormFieldLabel>
        <strong>{content}</strong>
      </FormFieldLabel>,
    );
    const element = container.querySelector('.nl-form-field-label');
    const richText = container.querySelector('strong');

    expect(element).toContainElement(richText);
  });

  it('renders an element with class name "nl-form-field-label"', () => {
    const { container } = render(<FormFieldLabel>{content}</FormFieldLabel>);
    const element = container.querySelector(':only-child');

    expect(element).toHaveClass('nl-form-field-label');
  });

  it(`renders an element with an extra class name "${extraClassName}"`, () => {
    const { container } = render(<FormFieldLabel className={extraClassName}>{content}</FormFieldLabel>);
    const element = container.querySelector('.nl-form-field-label');

    expect(element).toHaveClass('nl-form-field-label', extraClassName);
  });

  it('does not render modifier class names by default', () => {
    const { container } = render(<FormFieldLabel>{content}</FormFieldLabel>);
    const element = container.querySelector('.nl-form-field-label');

    expect(element).toHaveAttribute('class', 'nl-form-field-label');
  });

  it('links to a form control using the `htmlFor` attribute', () => {
    render(
      <>
        <FormFieldLabel htmlFor="name">{content}</FormFieldLabel>
        <input id="name" type="text" />
      </>,
    );
    const input = screen.getByRole('textbox', { name: content });

    expect(input).toBeInTheDocument();
  });

  it('does not render an HTML tabindex attribute', () => {
    const { container } = render(<FormFieldLabel>{content}</FormFieldLabel>);
    const element = container.querySelector('.nl-form-field-label');

    expect(element).not.toHaveAttribute('tabindex');
  });

  it('renders the disabled state', () => {
    const { container } = render(<FormFieldLabel disabled>{content}</FormFieldLabel>);
    const element = container.querySelector('.nl-form-field-label');

    expect(element).toHaveClass('nl-form-field-label--disabled');
  });

  it('does not render an HTML disabled attribute', () => {
    const { container } = render(<FormFieldLabel disabled>{content}</FormFieldLabel>);
    const element = container.querySelector('.nl-form-field-label');

    expect(element).not.toHaveAttribute('disabled');
  });

  it('renders the option type', () => {
    const { container } = render(
      <FormFieldLabel type="option" input={<input type="checkbox" />}>
        {optionContent}
      </FormFieldLabel>,
    );
    const element = container.querySelector('.nl-form-field-label');

    expect(element).toHaveClass('nl-form-field-label--option');
  });

  it('renders the input before the text content', () => {
    const { container } = render(
      <FormFieldLabel type="option" input={<input type="checkbox" />}>
        {optionContent}
      </FormFieldLabel>,
    );
    const element = container.querySelector('.nl-form-field-label');

    expect(element?.firstChild?.nodeName.toLowerCase()).toBe('input');
    expect(element?.lastChild).toHaveTextContent(optionContent);
  });

  it('labels the input with the text content', () => {
    render(
      <FormFieldLabel type="option" input={<input type="checkbox" />}>
        {optionContent}
      </FormFieldLabel>,
    );
    const checkbox = screen.getByRole('checkbox', { name: optionContent });

    expect(checkbox).toBeInTheDocument();
  });

  it('renders the disabled option type', () => {
    const { container } = render(
      <FormFieldLabel type="option" input={<input type="checkbox" disabled />} disabled>
        {optionContent}
      </FormFieldLabel>,
    );
    const element = container.querySelector('.nl-form-field-label');

    expect(element).toHaveClass('nl-form-field-label--option', 'nl-form-field-label--disabled');
  });

  it('renders the inherit type', () => {
    const { container } = render(<FormFieldLabel type="inherit">{content}</FormFieldLabel>);
    const element = container.querySelector('.nl-form-field-label');

    expect(element).toHaveClass('nl-form-field-label--inherit');
    expect(element).not.toHaveClass('nl-form-field-label--option');
  });

  it('does not render an HTML type attribute', () => {
    const { container } = render(<FormFieldLabel type="inherit">{content}</FormFieldLabel>);
    const element = container.querySelector('.nl-form-field-label');

    expect(element).not.toHaveAttribute('type');
  });

  it('supports hiding the HTML label element visually and from the accessibility tree using the global HTML attribute "hidden"', () => {
    const { container } = render(<FormFieldLabel hidden>{content}</FormFieldLabel>);
    const element = container.querySelector('.nl-form-field-label');

    expect(element).not.toBeVisible();
  });

  it('has HTML id attribute', () => {
    const id = 'form-field-label-id';
    const { container } = render(<FormFieldLabel id={id}>{content}</FormFieldLabel>);
    const element = container.querySelector('.nl-form-field-label');

    expect(element).toHaveAttribute('id', id);
  });

  it('forwards React refs to the HTMLLabelElement', () => {
    const ref = createRef<HTMLLabelElement>();
    const { container } = render(<FormFieldLabel ref={ref}>{content}</FormFieldLabel>);
    const element = container.querySelector('.nl-form-field-label');

    expect(ref.current).toBe(element);
    expect(element).toBeInstanceOf(HTMLLabelElement);
  });

  // These combinations are invalid according to the acceptance criteria. `tsc` fails when they are accepted.
  it('rejects invalid prop combinations in TypeScript', () => {
    const invalid = [
      // @ts-expect-error: `input` is only allowed with `type="option"`
      <FormFieldLabel key="1" input={<input type="checkbox" />}>
        {content}
      </FormFieldLabel>,
      // @ts-expect-error: `type="option"` requires `input`
      <FormFieldLabel key="2" type="option">
        {content}
      </FormFieldLabel>,
      // @ts-expect-error: `type="inherit"` can't be combined with `disabled`
      <FormFieldLabel key="3" type="inherit" disabled>
        {content}
      </FormFieldLabel>,
      // @ts-expect-error: `type="inherit"` can't be combined with `input`
      <FormFieldLabel key="4" type="inherit" input={<input type="checkbox" />}>
        {content}
      </FormFieldLabel>,
    ];

    expect(invalid).toHaveLength(4);
  });
});
