import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { afterEach, describe, expect, it } from 'vitest';
import { FormFieldStatus } from './form-field-status';

const displayName = 'FormFieldStatus';

afterEach(() => {
  cleanup();
});

describe('Form Field Status', () => {
  describe('CSS API', () => {
    it.todo('adds `nl-form-field-status` class by default', () => {});
  });

  describe('Component API', () => {
    it.todo('renders the HTML-element `div`', () => {});
    it.todo('supports forwarding HTML-attribute `dir` to the underlying HTML-element `div`', () => {});
    it.todo('supports forwarding HTML-attribute `id` to the underlying HTML-element `div`', () => {});
    it.todo('supports forwarding HTML-attribute `lang` to the underlying HTML-element `div`', () => {});
  });

  describe('React API', () => {
    it.todo(`has displayName "${displayName}"`, () => {
      expect(FormFieldStatus.displayName).toBe(displayName);
    });

    it.todo('forwards React refs to the HTMLElement', () => {
      const ref = createRef<HTMLElement>();
      render(<FormFieldStatus ref={ref}>form-field-status</FormFieldStatus>);
      const element = screen.getByText('form-field-status');

      expect(ref.current).toBe(element);
      expect(element).toBeInstanceOf(HTMLElement);
    });
  });
});
