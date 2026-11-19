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

describe('Form Field Label', () => {
  describe('CSS API', () => {
    it.todo('does not add the `nl-form-field-label--option` class by default', () => {});
    it.todo('does not add the `nl-form-field-label--disabled` class by default', () => {});
    it.todo('does not add the `nl-form-field-label--inherit` class by default', () => {});
    it('does not render other classes by default', () => {
      const { container } = render(<FormFieldLabel>{content}</FormFieldLabel>);
      const element = container.querySelector('.nl-form-field-label');

      expect(element).toHaveAttribute('class', 'nl-form-field-label');
    });
    it('adds the `nl-form-field-label` class by default', () => {
      const { container } = render(<FormFieldLabel>{content}</FormFieldLabel>);
      const element = container.querySelector(':only-child');

      expect(element).toHaveClass('nl-form-field-label');
    });
    it(`renders an element with an extra class name "${extraClassName}"`, () => {
      const { container } = render(<FormFieldLabel className={extraClassName}>{content}</FormFieldLabel>);
      const element = container.querySelector('.nl-form-field-label');

      expect(element).toHaveClass('nl-form-field-label', extraClassName);
    });
  });

  describe('Component API', () => {
    it('renders a visible element', () => {
      const { container } = render(<FormFieldLabel>{content}</FormFieldLabel>);
      const element = container.querySelector('.nl-form-field-label');

      expect(element).toBeVisible();
    });
    it('supports hiding the HTML-element `label` visually and from the accessibility tree using the global HTML-attribute `hidden`', () => {
      const { container } = render(<FormFieldLabel hidden>{content}</FormFieldLabel>);
      const element = container.querySelector('.nl-form-field-label');

      expect(element).not.toBeVisible();
    });
    it('renders the HTML-element `label`', () => {
      const { container } = render(<FormFieldLabel>{content}</FormFieldLabel>);
      const element = container.querySelector(':only-child');

      expect(element?.localName).toBe('label');
    });
    it('supports forwarding the HTML-attribute `id` to the underlying HTML-element `label`', () => {
      const id = 'form-field-label-id';
      const { container } = render(<FormFieldLabel id={id}>{content}</FormFieldLabel>);
      const element = container.querySelector('.nl-form-field-label');

      expect(element).toHaveAttribute('id', id);
    });
    it.todo('supports forwarding the HTML-attribute `hidden` to the underlying HTML-element `label`', () => {});
    it.todo('supports forwarding the HTML-attribute `lang` to the underlying HTML-element `label`', () => {});
    it.todo('supports forwarding the HTML-attribute `dir` to the underlying HTML-element `label`', () => {});
    it.todo('supports forwarding the HTML-attribute `for` to the underlying HTML-element `label`', () => {});
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
    it('does not render the HTML-attribute `tabindex`', () => {
      const { container } = render(<FormFieldLabel>{content}</FormFieldLabel>);
      const element = container.querySelector('.nl-form-field-label');

      expect(element).not.toHaveAttribute('tabindex');
    });
    it('supports text content', () => {
      const { container } = render(<FormFieldLabel>{content}</FormFieldLabel>);
      const element = container.querySelector('.nl-form-field-label');

      expect(element).toHaveTextContent(content);
    });
    it('supports phrasing content', () => {
      const { container } = render(
        <FormFieldLabel>
          <strong>{content}</strong>
        </FormFieldLabel>,
      );
      const element = container.querySelector('.nl-form-field-label');
      const richText = container.querySelector('strong');

      expect(element).toContainElement(richText);
    });
  });

  describe('React API', () => {
    it(`has displayName "${displayName}"`, () => {
      expect(FormFieldLabel.displayName).toBe(displayName);
    });

    it('forwards React refs to the HTMLLabelElement', () => {
      const ref = createRef<HTMLLabelElement>();
      const { container } = render(<FormFieldLabel ref={ref}>{content}</FormFieldLabel>);
      const element = container.querySelector('.nl-form-field-label');

      expect(ref.current).toBe(element);
      expect(element).toBeInstanceOf(HTMLLabelElement);
    });
  });

  describe('property `disabled`', () => {
    describe('CSS API', () => {
      it('adds the `nl-form-field-label--disabled` class', () => {
        const { container } = render(<FormFieldLabel disabled>{content}</FormFieldLabel>);
        const element = container.querySelector('.nl-form-field-label');

        expect(element).toHaveClass('nl-form-field-label--disabled');
      });
    });
    describe('Component API', () => {
      it('does not render the HTML-attribute `disabled`', () => {
        const { container } = render(<FormFieldLabel disabled>{content}</FormFieldLabel>);
        const element = container.querySelector('.nl-form-field-label');

        expect(element).not.toHaveAttribute('disabled');
      });
    });
  });

  describe('property `type`', () => {
    describe('Component API', () => {
      it('does not render an HTML-attribute `type`', () => {
        const { container } = render(<FormFieldLabel type="inherit">{content}</FormFieldLabel>);
        const element = container.querySelector('.nl-form-field-label');

        expect(element).not.toHaveAttribute('type');
      });
    });

    describe('with value "inherit"', () => {
      describe('CSS API', () => {
        it('adds the `nl-form-field-label--inherit` class', () => {
          const { container } = render(<FormFieldLabel type="inherit">{content}</FormFieldLabel>);
          const element = container.querySelector('.nl-form-field-label');

          expect(element).toHaveClass('nl-form-field-label--inherit');
        });
      });
    });
  });

  describe('slot `input`', () => {
    describe('when `type` is not `option`', () => {
      describe('CSS API', () => {
        it.todo('does not add the `nl-form-field-label--option` class', () => {});
      });
      describe('Component API', () => {
        it.todo('does not render `input` slot', () => {});
      });
    });

    describe('when `type` is `option`', () => {
      describe('CSS API', () => {
        it('adds the `nl-form-field-label--option` class', () => {
          const { container } = render(
            <FormFieldLabel type="option" input={<input type="checkbox" />}>
              {optionContent}
            </FormFieldLabel>,
          );
          const element = container.querySelector('.nl-form-field-label');

          expect(element).toHaveClass('nl-form-field-label--option');
        });
      });
      describe('Component API', () => {
        it.todo('renders `input` slot', () => {});
        it('renders `input` slot before the default slot', () => {
          const { container } = render(
            <FormFieldLabel type="option" input={<input type="checkbox" />}>
              {optionContent}
            </FormFieldLabel>,
          );
          const element = container.querySelector('.nl-form-field-label');

          expect(element?.firstChild?.nodeName.toLowerCase()).toBe('input');
          expect(element?.lastChild).toHaveTextContent(optionContent);
        });
        it('labels the `input` slot with the default slot', () => {
          render(
            <FormFieldLabel type="option" input={<input type="checkbox" />}>
              {optionContent}
            </FormFieldLabel>,
          );
          const checkbox = screen.getByRole('checkbox', { name: optionContent });

          expect(checkbox).toBeInTheDocument();
        });
      });
    });
  });

  describe('TypeScript API', () => {
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
});
