import '@testing-library/jest-dom/vitest';
import { Icon } from '@nl-design-system-candidate/icon-react';
import { IconNumber1 } from '@tabler/icons-react';
import { cleanup, render } from '@testing-library/react';
import { createRef, type ReactNode } from 'react';
import { afterEach, describe, expect, it } from 'vitest';
import { OrderedList, type OrderedListProps, OrderedListItem } from './ordered-list';

const extraOrderedListClassName = 'nl-ordered-list--example-variant';
const extraOrderedListItemClassName = 'nl-ordered-list__item--example-variant';

const renderList = (props: OrderedListProps = {}, firstItem: ReactNode = <OrderedListItem>Item 1</OrderedListItem>) =>
  render(
    <OrderedList {...props}>
      {firstItem}
      <OrderedListItem>Item 2</OrderedListItem>
      <OrderedListItem>Item 3</OrderedListItem>
    </OrderedList>,
  );

const markerIcon = (
  <Icon>
    <IconNumber1 />
  </Icon>
);

const renderWithMarker = (marker: ReactNode = markerIcon) =>
  renderList(
    {},
    <OrderedListItem marker={marker} markerLabel="Stap 1.">
      Item 1
    </OrderedListItem>,
  );

afterEach(() => {
  cleanup();
});

describe('Ordered List', () => {
  describe('CSS API', () => {
    it('adds `nl-ordered-list` class by default', () => {
      const { container } = renderList();
      const element = container.querySelector('.nl-ordered-list');
      expect(element).toBeInTheDocument();
    });
    it('accepts an extra class name', () => {
      const { container } = renderList({ className: extraOrderedListClassName });
      const element = container.querySelector('ol');
      expect(element).toHaveClass('nl-ordered-list', extraOrderedListClassName);
    });
  });

  describe('Component API', () => {
    it('renders the HTML-element `ol`', () => {
      const { container } = renderList();
      const element = container.querySelector('ol');
      expect(element).toBeInTheDocument();
    });
    it('supports forwarding the HTML-attribute `role` to the underlying HTML-element `ol`', () => {
      const { getByRole } = renderList({ role: 'list' });
      const element = getByRole('list');
      expect(element).toBeInTheDocument();
    });
    it('supports forwarding the HTML-attribute `hidden` to the underlying HTML-element `ol`', () => {
      const { container } = renderList({ hidden: true });
      const element = container.querySelector('.nl-ordered-list');
      expect(element).toHaveAttribute('hidden');
    });
    it('supports forwarding the HTML-attribute `lang` to the underlying HTML-element `ol`', () => {
      const { container } = renderList({ lang: 'en' });
      const element = container.querySelector('.nl-ordered-list');
      expect(element).toHaveAttribute('lang', 'en');
    });
    it('supports forwarding the HTML-attribute `dir` to the underlying HTML-element `ol`', () => {
      const { container } = renderList({ dir: 'ltr' });
      const element = container.querySelector('.nl-ordered-list');
      expect(element).toHaveAttribute('dir', 'ltr');
    });
    it('supports forwarding the HTML-attribute `reversed` to the underlying HTML-element `ol`', () => {
      const { container } = renderList({ reversed: true });
      const element = container.querySelector('.nl-ordered-list');
      expect(element).toHaveAttribute('reversed');
    });
    it('supports forwarding the HTML-attribute `start` to the underlying HTML-element `ol`', () => {
      const { container } = renderList({ start: 5 });
      const element = container.querySelector('.nl-ordered-list');
      expect(element).toHaveAttribute('start', '5');
    });
    it.each(['1', 'a', 'A', 'i', 'I'] as const)(
      'supports forwarding the HTML-attribute `type` with value `%s` to the underlying HTML-element `ol`',
      (type) => {
        const { container } = renderList({ type });
        const element = container.querySelector('.nl-ordered-list');
        expect(element).toHaveAttribute('type', type);
      },
    );
  });

  describe('React API', () => {
    it('has displayName "OrderedList"', () => {
      expect(OrderedList.displayName).toBe('OrderedList');
    });

    it('forwards React refs to the HTMLOListElement', () => {
      const ref = createRef<HTMLOListElement>();
      const { container } = render(
        <OrderedList ref={ref}>
          <OrderedListItem>Item 1</OrderedListItem>
        </OrderedList>,
      );
      const element = container.querySelector('ol');

      expect(ref.current).toBe(element);
      expect(element?.tagName).toBe('OL');
    });
  });
});

describe('Ordered List Item', () => {
  describe('CSS API', () => {
    it('adds the `nl-ordered-list__item` class by default', () => {
      const { container } = renderList();
      const element = container.querySelector('.nl-ordered-list__item');
      expect(element).toBeInTheDocument();
    });
    it('accepts an extra class name', () => {
      const { container } = renderList(
        {},
        <OrderedListItem className={extraOrderedListItemClassName}>Item 1</OrderedListItem>,
      );
      const element = container.querySelector('li');
      expect(element).toHaveClass('nl-ordered-list__item', extraOrderedListItemClassName);
    });
    it('does not add the `nl-ordered-list__item--custom-marker` class when `marker` is not provided', () => {
      const { container } = renderList();
      const element = container.querySelector('.nl-ordered-list__item--custom-marker');
      expect(element).not.toBeInTheDocument();
    });
  });

  describe('Component API', () => {
    it('renders the HTML-element `li`', () => {
      const { container } = renderList();
      const element = container.querySelector('li');
      expect(element).toBeInTheDocument();
    });
    it('supports forwarding the HTML-attribute `hidden` to the underlying HTML-element `li`', () => {
      const { container } = renderList({}, <OrderedListItem hidden>Item 1</OrderedListItem>);
      const element = container.querySelector('.nl-ordered-list__item');
      expect(element).toHaveAttribute('hidden');
    });
    it('supports forwarding the HTML-attribute `lang` to the underlying HTML-element `li`', () => {
      const { container } = renderList({}, <OrderedListItem lang="en">Item 1</OrderedListItem>);
      const element = container.querySelector('.nl-ordered-list__item');
      expect(element).toHaveAttribute('lang', 'en');
    });
    it('supports forwarding the HTML-attribute `dir` to the underlying HTML-element `li`', () => {
      const { container } = renderList({}, <OrderedListItem dir="rtl">Item 1</OrderedListItem>);
      const element = container.querySelector('.nl-ordered-list__item');
      expect(element).toHaveAttribute('dir', 'rtl');
    });
    it('supports phrasing content', () => {
      const { container } = renderList(
        {},
        <OrderedListItem>
          Verzamel <strong>alle</strong> documenten via <a href="https://example.com/">de website</a>
        </OrderedListItem>,
      );
      const element = container.querySelector('.nl-ordered-list__item');
      expect(element).toContainHTML('<strong>alle</strong>');
      expect(element).toContainHTML('<a href="https://example.com/">de website</a>');
    });
    it('supports the HTML-element `p`', () => {
      const { container } = renderList(
        {},
        <OrderedListItem>
          <p>Item 1</p>
        </OrderedListItem>,
      );
      const element = container.querySelector('.nl-ordered-list__item');
      expect(element).toContainHTML('<p>Item 1</p>');
    });
  });

  describe('React API', () => {
    it('has displayName "OrderedListItem"', () => {
      expect(OrderedListItem.displayName).toBe('OrderedListItem');
    });

    it('forwards React refs to the HTMLLIElement', () => {
      const ref = createRef<HTMLLIElement>();
      const { container } = render(
        <OrderedList>
          <OrderedListItem ref={ref}>Item 1</OrderedListItem>
        </OrderedList>,
      );
      const element = container.querySelector('li');

      expect(ref.current).toBe(element);
      expect(element?.tagName).toBe('LI');
    });
  });
});

describe('Ordered List Custom Marker when `marker` is not provided', () => {
  describe('Component API', () => {
    it.each([
      ['any span', 'span'],
      ['custom marker span', '.nl-ordered-list__marker'],
      ['marker label span', '.nl-ordered-list__marker-label'],
    ])('does not render the %s HTML-element', (_, selector) => {
      const { container } = renderList();
      const element = container.querySelector('.nl-ordered-list__item');
      expect(element?.querySelector(selector)).toBeNull();
    });
  });
});

describe('Ordered List Custom Marker when `marker` is provided', () => {
  // The acceptance criteria mark `marker` without `markerLabel` as an invalid combination. These tests only
  // document what the component currently renders in that case; they do not make it a supported configuration.
  describe('and when `markerLabel` is not provided', () => {
    it('renders the custom marker HTML-element `span`', () => {
      const { container } = renderList({}, <OrderedListItem marker={markerIcon}>Item 1</OrderedListItem>);
      const element = container.querySelector('.nl-ordered-list__marker--custom');
      expect(element).toBeInTheDocument();
    });
    it('does not render the marker label HTML-element `span`', () => {
      const { container } = renderList({}, <OrderedListItem marker={markerIcon}>Item 1</OrderedListItem>);
      const element = container.querySelector('.nl-ordered-list__marker-label');
      expect(element).not.toBeInTheDocument();
    });
  });

  describe('and when `markerLabel` is provided', () => {
    describe('CSS API', () => {
      it.each([
        ['nl-ordered-list__marker', '.nl-ordered-list__marker'],
        ['nl-ordered-list__marker--custom', '.nl-ordered-list__marker--custom'],
        ['nl-ordered-list__marker-label', '.nl-ordered-list__marker-label'],
      ])('adds the `%s` class by default', (_, selector) => {
        const { container } = renderWithMarker();
        expect(container.querySelector(selector)).toBeInTheDocument();
      });
      it('adds the `nl-ordered-list__item--custom-marker` class to the item', () => {
        const { container } = renderWithMarker();
        const element = container.querySelector('li');
        expect(element).toHaveClass('nl-ordered-list__item', 'nl-ordered-list__item--custom-marker');
      });
    });

    describe('Component API', () => {
      it('renders the custom marker HTML-element `span`', () => {
        const { container } = renderWithMarker();
        const element = container.querySelector('.nl-ordered-list__marker--custom');
        expect(element).toBeInTheDocument();
        expect(element?.tagName).toBe('SPAN');
      });

      it('has the HTML-attribute `aria-hidden="true"` on the icon wrapper `span`', () => {
        const { container } = renderWithMarker();
        const marker = container.querySelector('.nl-ordered-list__marker--custom');
        const iconWrapper = marker?.firstElementChild;
        expect(iconWrapper?.tagName).toBe('SPAN');
        expect(iconWrapper).toHaveAttribute('aria-hidden', 'true');
        const icon = iconWrapper?.querySelector('svg');
        expect(icon).toBeInTheDocument();
      });

      it('does not hide the marker label with the HTML-attribute `aria-hidden`', () => {
        const { container } = renderWithMarker();
        const marker = container.querySelector('.nl-ordered-list__marker--custom');
        const label = container.querySelector('.nl-ordered-list__marker-label');
        expect(marker).not.toHaveAttribute('aria-hidden');
        expect(label).not.toHaveAttribute('aria-hidden');
      });

      it('supports phrasing content in the custom marker', () => {
        const { container } = renderWithMarker(<strong>1</strong>);
        const marker = container.querySelector('.nl-ordered-list__marker--custom');
        const iconWrapper = marker?.firstElementChild;
        expect(iconWrapper).toContainHTML('<strong>1</strong>');
      });

      it('renders the marker label HTML-element `span`', () => {
        const { container } = renderWithMarker();
        const label = container.querySelector('.nl-ordered-list__marker-label');
        expect(label).toBeInTheDocument();
        expect(label?.tagName).toBe('SPAN');
      });

      it('supports phrasing content in the marker label', () => {
        const { container } = renderWithMarker();
        const label = container.querySelector('.nl-ordered-list__marker-label');
        expect(label).toHaveTextContent('Stap 1.');
      });
    });
  });
});
