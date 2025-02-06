import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { afterEach, describe, expect, it } from 'vitest';
import { NumberBadge } from './number-badge';

afterEach(() => {
  cleanup();
});

const value = 42;
const extraClassName = 'extra-classname';
const testId = 'rich-text';

describe('Number Badge', () => {
  describe('as an HTML data element', () => {
    it('renders an HTML data element when a "value" prop is passed', () => {
      const { container } = render(<NumberBadge value={value}>{value}</NumberBadge>);
      const numberBadge = container.querySelector('data:only-child');

      expect(numberBadge).toBeInTheDocument();
    });

    it(`renders an HTML data element with a value attribute with value "${value}"`, () => {
      const { container } = render(<NumberBadge value={value}>{value}</NumberBadge>);
      const numberBadge = container.querySelector('data:only-child');

      expect(numberBadge).toHaveAttribute('value', String(value));
    });

    it(`renders an element with text content "${value}"`, () => {
      render(<NumberBadge value={value}>{value}</NumberBadge>);
      const numberBadge = screen.getByText(value);

      expect(numberBadge).toBeInTheDocument();
    });

    it(`renders an element with Number for the value attribute "1e6"`, () => {
      render(<NumberBadge value={1e6}>1000000</NumberBadge>);
      const numberBadge = screen.getByText('1000000');

      expect(numberBadge).toHaveAttribute('value', '1000000');
    });

    it(`renders an element with String for the value attribute "-Infinity"`, () => {
      render(<NumberBadge value="-Infinity">-Infinity</NumberBadge>);
      const numberBadge = screen.getByText('-Infinity');

      expect(numberBadge).toHaveAttribute('value', '-Infinity');
    });

    it('renders an HTML data element with class name "nl-number-badge"', () => {
      const { container } = render(<NumberBadge value={value}>{value}</NumberBadge>);
      const numberBadge = container.querySelector('data:only-child');

      expect(numberBadge).toHaveClass('nl-number-badge');
    });

    it(`renders an HTML data element with an extra class name "${extraClassName}"`, () => {
      const { container } = render(
        <NumberBadge value={value} className={extraClassName}>
          {value}
        </NumberBadge>,
      );
      const numberBadge = container.querySelector('data:only-child');

      expect(numberBadge).toHaveClass('nl-number-badge', extraClassName);
    });

    it('renders rich text content in an HTML data element', () => {
      const { container } = render(
        <NumberBadge value={value}>
          <strong data-testid={testId}>{value}</strong>
        </NumberBadge>,
      );
      const numberBadge = container.querySelector('data:only-child');
      const richText = screen.getByTestId(testId);

      expect(numberBadge).toContainElement(richText);
    });

    it('renders an accessible label', () => {
      render(
        <a href="https://example.com">
          <NumberBadge value={value} label="42 unread messages">
            {value}
          </NumberBadge>
        </a>,
      );
      const numberBadge = screen.getByRole('link', { name: '42 unread messages' });

      expect(numberBadge).toBeInTheDocument();
    });

    it('forwards React refs to the HTMLDataElement', () => {
      const ref = createRef<HTMLDataElement>();
      const { container } = render(
        <NumberBadge value={value} ref={ref}>
          {value}
        </NumberBadge>,
      );
      const numberBadge = container.querySelector('data:only-child');

      expect(ref.current).toBe(numberBadge);
      expect(ref.current).toBeInstanceOf(HTMLDataElement);
    });
  });
  describe('as an HTML span element', () => {
    it('renders an HTML span element when a "value" prop is NOT passed', () => {
      const { container } = render(<NumberBadge>{value}</NumberBadge>);
      const numberBadge = container.querySelector('span:only-child');

      expect(numberBadge).toBeInTheDocument();
    });

    it(`renders an element with text content "${value}"`, () => {
      render(<NumberBadge>{value}</NumberBadge>);
      const numberBadge = screen.getByText(value);

      expect(numberBadge).toBeInTheDocument();
    });

    it('renders an HTML span element with class name "nl-number-badge"', () => {
      const { container } = render(<NumberBadge>{value}</NumberBadge>);
      const numberBadge = container.querySelector('span:only-child');

      expect(numberBadge).toHaveClass('nl-number-badge');
    });

    it(`renders an HTML data element with an extra class name "${extraClassName}"`, () => {
      const { container } = render(<NumberBadge className={extraClassName}>{value}</NumberBadge>);
      const numberBadge = container.querySelector('span:only-child');

      expect(numberBadge).toHaveClass('nl-number-badge', extraClassName);
    });

    it('renders rich text content in an HTML span element', () => {
      const { container } = render(
        <NumberBadge>
          <strong data-testid={testId}>{value}</strong>
        </NumberBadge>,
      );
      const numberBadge = container.querySelector('span:only-child');
      const richText = screen.getByTestId(testId);

      expect(numberBadge).toContainElement(richText);
    });

    it('renders an accessible label', () => {
      render(
        <a href="https://example.com">
          <NumberBadge label="42 unread messages">{value}</NumberBadge>
        </a>,
      );
      const numberBadge = screen.getByRole('link', { name: '42 unread messages' });

      expect(numberBadge).toBeInTheDocument();
    });

    it('forwards React refs to the HTMLSpanElement', () => {
      const ref = createRef<HTMLSpanElement>();
      const { container } = render(<NumberBadge ref={ref}>{value}</NumberBadge>);
      const numberBadge = container.querySelector('span:only-child');

      expect(ref.current).toBe(numberBadge);
      expect(ref.current).toBeInstanceOf(HTMLSpanElement);
    });
  });
});
