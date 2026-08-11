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
  describe('Use Cases', () => {
    it.todo('supports phrasing content', () => {});
    it.todo('supports nesting the associated form control instead of using `for` HTML-attribute', () => {});
  });

  describe('HTML API', () => {
    it.todo('renders a `label` HTML-element', () => {});
    it.todo('supports the `for` HTML-attribute', () => {});
    it.todo('supports the `hidden` HTML-attribute', () => {});
    it.todo('supports the `lang` HTML-attribute', () => {});
    it.todo('supports the `dir` HTML-attribute', () => {});
  });

  describe('CSS API', () => {
    it.todo('adds `nl-form-field-label` class by default', () => {});
    it.todo('adds `nl-form-field-label--option` class when `type="option"`', () => {});
    it.todo('adds `nl-form-field-label--inherit` class when `type="inherit"`', () => {});
    it.todo('adds `nl-form-field-label--disabled` class when `disabled` is true', () => {});
  });

  describe('Property: Type', () => {
    it.todo('supports `type="option"`', () => {});
    it.todo('supports `type="inherit"`', () => {});
  });

  describe('Slot: Input', () => {
    it.todo('supports an input slot for radio', () => {});
    it.todo('supports an input slot for checkbox', () => {});
    it.todo('supports an input slot for switch', () => {});
    it.todo('requires `type="option"` when an input slot is used', () => {});
    it.todo('requires an input slot when `type="option"` is used', () => {});
  });

  describe('Component API', () => {
    it.todo('supports forwarding HTML-attributes to the underlying `label`', () => {});
    it.todo('supports the `for` HTML-attribute', () => {});
    it.todo('supports the `hidden` HTML-attribute', () => {});
    it.todo('supports the `lang` HTML-attribute', () => {});
    it.todo('supports the `dir` HTML-attribute', () => {});
  });

  describe('React API', () => {
    it.todo(`has displayName "${displayName}"`, () => {
      expect(FormFieldLabel.displayName).toBe(displayName);
    });

    it.todo('forwards React refs to the HTMLLabelElement', () => {
      const ref = createRef<HTMLDivElement>();
      render(<FormFieldLabel ref={ref}>form-field-label</FormFieldLabel>);
      const element = screen.getByText('form-field-label');

      expect(ref.current).toBe(element);
      expect(element).toBeInstanceOf(HTMLDivElement);
    });
  });
});
