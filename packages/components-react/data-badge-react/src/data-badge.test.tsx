import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { afterEach, describe, expect, it } from 'vitest';
import { DataBadge } from './data-badge';

afterEach(() => {
  cleanup();
});

const dateTime = '19700101T00:00:00Z';
const dateTimeText = '1 januari 1970 om middernacht';
const value = 1024;
const extraClassName = 'extra-classname';
const testId = 'rich-text';

describe('Data Badge', () => {
  describe('as an HTML span element', () => {
    it('renders an HTML span element when neither "value" nor "dateTime" is passed', () => {
      const { container } = render(<DataBadge>{value}</DataBadge>);
      const dataBadge = container.querySelector('span:only-child');

      expect(dataBadge).toBeInTheDocument();
    });

    it('renders an HTML span element when neither "value" nor "dateTime" is passed', () => {
      render(<DataBadge>{value}</DataBadge>);
      const dataBadge = screen.getByText(value);

      expect(dataBadge).toBeInTheDocument();
    });

    it('renders an HTML span element with class name "nl-data-badge"', () => {
      const { container } = render(<DataBadge>{value}</DataBadge>);
      const dataBadge = container.querySelector('span:only-child');

      expect(dataBadge).toHaveClass('nl-data-badge');
    });

    it(`renders an HTML span element with an extra class name "${extraClassName}"`, () => {
      const { container } = render(<DataBadge className={extraClassName}>{value}</DataBadge>);
      const dataBadge = container.querySelector('span:only-child');

      expect(dataBadge).toHaveClass('nl-data-badge', extraClassName);
    });

    it('supports hiding the HTML span element visually and from the accessibility tree using the global HTML attribute "hidden"', () => {
      const { container } = render(<DataBadge hidden>{value}</DataBadge>);
      const dataBadge = container.querySelector('span:only-child');

      expect(dataBadge).not.toBeVisible();
    });

    it('forwards React refs to the HTMLSpanElement', () => {
      const spanRef = createRef<HTMLSpanElement>();
      const { container } = render(<DataBadge ref={spanRef}>{value}</DataBadge>);
      const dataBadge = container.querySelector('span:only-child');

      expect(spanRef.current).toBe(dataBadge);
      expect(spanRef.current).toBeInstanceOf(HTMLSpanElement);
    });

    it('renders rich text content in an HTML span element', () => {
      const { container } = render(
        <DataBadge>
          <strong data-testid={testId}>{value}</strong>
        </DataBadge>,
      );
      const dataBadge = container.querySelector('span:only-child');
      const richText = screen.getByTestId(testId);

      expect(dataBadge).toContainElement(richText);
    });
  });

  describe('as an HTML time element', () => {
    it('renders an element with role "time" when a "dateTime" prop is passed', () => {
      render(<DataBadge dateTime={dateTime}>{dateTimeText}</DataBadge>);
      const dataBadge = screen.getByRole('time');

      expect(dataBadge).toBeInTheDocument();
    });

    it('renders an HTML time element when a "dateTime" prop is passed', () => {
      const { container } = render(<DataBadge dateTime={dateTime}>{dateTimeText}</DataBadge>);
      const dataBadge = container.querySelector('time:only-child');

      expect(dataBadge).toBeInTheDocument();
      expect(dataBadge).toHaveAttribute('dateTime', dateTime);
    });

    it('renders an HTML time element when both "value" and "dateTime" are passed', () => {
      const { container } = render(
        // @ts-expect-error value and dateTime are mutually exclusive
        <DataBadge value={value} dateTime={dateTime}>
          {dateTimeText}
        </DataBadge>,
      );
      const dataBadge = container.querySelector('time:only-child');

      expect(dataBadge).toBeInTheDocument();
    });

    it('renders an HTML time element with class name "nl-data-badge"', () => {
      const { container } = render(<DataBadge dateTime={dateTime}>{dateTimeText}</DataBadge>);
      const dataBadge = container.querySelector('time:only-child');

      expect(dataBadge).toHaveClass('nl-data-badge');
    });

    it(`renders an HTML time element with an extra class name "${extraClassName}"`, () => {
      const { container } = render(
        <DataBadge dateTime={dateTime} className={extraClassName}>
          {dateTimeText}
        </DataBadge>,
      );
      const dataBadge = container.querySelector('time:only-child');

      expect(dataBadge).toHaveClass('nl-data-badge', extraClassName);
    });

    it('supports hiding the HTML time element visually and from the accessibility tree using the global HTML attribute "hidden"', () => {
      const { container } = render(
        <DataBadge dateTime={dateTime} hidden>
          {dateTimeText}
        </DataBadge>,
      );
      const dataBadge = container.querySelector('time:only-child');

      expect(dataBadge).not.toBeVisible();
    });

    it('forwards React refs to the HTMLTimeElement', () => {
      const timeRef = createRef<HTMLTimeElement>();
      const { container } = render(
        <DataBadge dateTime={dateTime} ref={timeRef}>
          {dateTimeText}
        </DataBadge>,
      );
      const dataBadge = container.querySelector('time:only-child');

      expect(timeRef.current).toBe(dataBadge);
      expect(timeRef.current).toBeInstanceOf(HTMLTimeElement);
    });

    it('renders rich text content in an HTML time element', () => {
      const { container } = render(
        <DataBadge dateTime={dateTime}>
          <strong data-testid={testId}>{dateTimeText}</strong>
        </DataBadge>,
      );
      const dataBadge = container.querySelector('time:only-child');
      const richText = screen.getByTestId(testId);

      expect(dataBadge).toContainElement(richText);
    });
  });

  describe('as an HTML data element', () => {
    it('renders an HTML data element when a "value" prop is passed', () => {
      const { container } = render(<DataBadge value={value}>{value}</DataBadge>);
      const dataBadge = container.querySelector('data:only-child');

      expect(dataBadge).toBeInTheDocument();
      expect(dataBadge).toHaveAttribute('value', String(value));
    });

    it('renders an HTML data element with class name "nl-data-badge"', () => {
      const { container } = render(<DataBadge value={value}>{value}</DataBadge>);
      const dataBadge = container.querySelector('data:only-child');

      expect(dataBadge).toHaveClass('nl-data-badge');
    });

    it(`renders an HTML data element with an extra class name "${extraClassName}"`, () => {
      const { container } = render(
        <DataBadge value={value} className={extraClassName}>
          {value}
        </DataBadge>,
      );
      const dataBadge = container.querySelector('data:only-child');

      expect(dataBadge).toHaveClass('nl-data-badge', extraClassName);
    });

    it('supports hiding the HTML data element visually and from the accessibility tree using the global HTML attribute "hidden"', () => {
      const { container } = render(
        <DataBadge value={value} hidden>
          {value}
        </DataBadge>,
      );
      const dataBadge = container.querySelector('data:only-child');

      expect(dataBadge).not.toBeVisible();
    });

    it('forwards React refs to the HTMLDataElement', () => {
      const dataRef = createRef<HTMLDataElement>();
      const { container } = render(
        <DataBadge value={value} ref={dataRef}>
          {value}
        </DataBadge>,
      );
      const dataBadge = container.querySelector('data:only-child');

      expect(dataRef.current).toBe(dataBadge);
      expect(dataRef.current).toBeInstanceOf(HTMLDataElement);
    });

    it('renders rich text content in an HTML data element', () => {
      const { container } = render(
        <DataBadge value={value}>
          <strong data-testid={testId}>{value}</strong>
        </DataBadge>,
      );
      const dataBadge = container.querySelector('data:only-child');
      const richText = screen.getByTestId(testId);

      expect(dataBadge).toContainElement(richText);
    });
  });
});
