import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { afterEach, describe, expect, it } from 'vitest';
import { FormFieldLabel } from './form-field-label';

const displayName = 'FormFieldLabel';

afterEach(() => {
  cleanup();
});

describe('Form Field Label', () => {
  describe('CSS API', () => {
    it.todo('adds the `nl-form-field-label` class by default', () => {});
  });

  describe('Component API', () => {
    it.todo('renders the HTML-element `label`', () => {});
    it.todo('supports forwarding the HTML-attribute `hidden` to the underlying HTML-element `label`', () => {});
    it.todo('supports forwarding the HTML-attribute `lang` to the underlying HTML-element `label`', () => {});
    it.todo('supports forwarding the HTML-attribute `dir` to the underlying HTML-element `label`', () => {});
    it.todo('supports forwarding the HTML-attribute `for` to the underlying HTML-element `label`', () => {});
    it.todo('supports phrasing content', () => {});
  });

  describe('React API', () => {
    it.todo(`has displayName "${displayName}"`, () => {
      expect(FormFieldLabel.displayName).toBe(displayName);
    });

    it.todo('forwards React refs to the HTMLLabelElement', () => {
      const ref = createRef<HTMLLabelElement>();
      render(<FormFieldLabel ref={ref}>form-field-label</FormFieldLabel>);
      const element = screen.getByText('form-field-label');

      expect(ref.current).toBe(element);
      expect(element).toBeInstanceOf(HTMLLabelElement);
    });
  });

  describe('property `disabled`', () => {
    describe('CSS API', () => {
      it.todo('adds the `nl-form-field-label--disabled` class', () => {});
    });
  });

  describe('property `type`', () => {
    describe('with value "option"', () => {
      describe('CSS API', () => {
        it.todo('adds the `nl-form-field-label--inherit` class', () => {});
      });
    });

    describe('with value "inherit"', () => {
      it.todo('supports `type="inherit"`', () => {});

      describe('CSS API', () => {
        it.todo('adds the `nl-form-field-label--inherit` class', () => {});
      });
    });
  });

  describe('slot `input`', () => {
    describe('when `type` is not `option`', () => {
      describe('Component API', () => {
        it.todo('does not render children', () => {});
      });
    });

    describe('when `type` is `option`', () => {
      describe('Component API', () => {
        it.todo('renders children', () => {});
      });
    });
  });
});
