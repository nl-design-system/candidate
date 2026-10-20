import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { afterEach, describe, expect, it } from 'vitest';
import { TextArea } from './text-area';

const displayName = 'TextArea';

afterEach(() => {
  cleanup();
});

describe('Text Area', () => {
  describe('CSS API', () => {
    it.todo('adds `nl-text-area` class by default', () => {});
  });

  describe('Component API', () => {
    it.todo('renders the HTML-element `div`', () => {});
    it.todo('supports forwarding HTML-attribute `dir` to the underlying HTML-element `div`', () => {});
    it.todo('supports forwarding HTML-attribute `id` to the underlying HTML-element `div`', () => {});
    it.todo('supports forwarding HTML-attribute `lang` to the underlying HTML-element `div`', () => {});
  });

  describe('React API', () => {
    it.todo(`has displayName "${displayName}"`, () => {
      expect(TextArea.displayName).toBe(displayName);
    });

    it.todo('forwards React refs to the HTMLElement', () => {
      const ref = createRef<HTMLElement>();
      render(<TextArea ref={ref}>text-area</TextArea>);
      const element = screen.getByText('text-area');

      expect(ref.current).toBe(element);
      expect(element).toBeInstanceOf(HTMLElement);
    });
  });
});
