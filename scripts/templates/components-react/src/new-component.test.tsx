import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { afterEach, describe, expect, it } from 'vitest';
import { NewComponent } from './new-component';

const displayName = 'NewComponent';

afterEach(() => {
  cleanup();
});

describe('New Component', () => {
  describe('CSS API', () => {
    it.todo('adds `nl-new-component` class by default', () => {});
  });

  describe('Component API', () => {
    it.todo('renders the HTML-element `div`', () => {});
    it.todo('supports forwarding HTML-attribute `dir` to the underlying HTML-element `div`', () => {});
    it.todo('supports forwarding HTML-attribute `id` to the underlying HTML-element `div`', () => {});
    it.todo('supports forwarding HTML-attribute `lang` to the underlying HTML-element `div`', () => {});
  });

  describe('React API', () => {
    it.todo(`has displayName "${displayName}"`, () => {
      expect(NewComponent.displayName).toBe(displayName);
    });

    it.todo('forwards React refs to the HTMLElement', () => {
      const ref = createRef<HTMLElement>();
      render(<NewComponent ref={ref}>new-component</NewComponent>);
      const element = screen.getByText('new-component');

      expect(ref.current).toBe(element);
      expect(element).toBeInstanceOf(HTMLElement);
    });
  });
});
