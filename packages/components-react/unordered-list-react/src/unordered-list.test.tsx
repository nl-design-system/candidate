import '@testing-library/jest-dom/vitest';
import { Icon } from '@nl-design-system-candidate/icon-react';
import { IconPointFilled } from '@tabler/icons-react';
import { cleanup, render } from '@testing-library/react';
import { createRef, type ReactNode } from 'react';
import { afterEach, describe, expect, it } from 'vitest';
import { UnorderedList, UnorderedListItem, UnorderedListProps } from './unordered-list';

const extraUnorderedListClassName = 'nl-unordered-list--example-variant';
const extraUnorderedListItemClassName = 'nl-unordered-list__item--example-variant';

const renderList = (
  props: UnorderedListProps = {},
  firstItem: ReactNode = <UnorderedListItem>Item 1</UnorderedListItem>,
) =>
  render(
    <UnorderedList {...props}>
      {firstItem}
      <UnorderedListItem>Item 2</UnorderedListItem>
      <UnorderedListItem>Item 3</UnorderedListItem>
    </UnorderedList>,
  );

const markerIcon = (
  <Icon>
    <IconPointFilled />
  </Icon>
);

const renderWithMarker = (marker: ReactNode = markerIcon) =>
  renderList(
    {},
    <UnorderedListItem marker={marker} markerLabel="Leesteken">
      Item 1
    </UnorderedListItem>,
  );

afterEach(() => {
  cleanup();
});

describe('Unordered List', () => {
  describe('CSS API', () => {
    it('adds `nl-unordered-list` class by default', () => {
      const { container } = renderList();
      const element = container.querySelector('.nl-unordered-list');
      expect(element).toBeInTheDocument();
    });
    it('accepts an extra class name', () => {
      const { container } = renderList({ className: extraUnorderedListClassName });
      const element = container.querySelector('ul');
      expect(element).toHaveClass('nl-unordered-list', extraUnorderedListClassName);
    });
  });

  describe('Component API', () => {
    it('renders the HTML-element `ul`', () => {
      const { container } = renderList();
      const element = container.querySelector('ul');
      expect(element).toBeInTheDocument();
    });
    it('supports forwarding the HTML-attribute `role` to the underlying HTML-element `ul`', () => {
      const { getByRole } = renderList({ role: 'list' });
      const element = getByRole('list');
      expect(element).toBeInTheDocument();
    });
    it('supports forwarding the HTML-attribute `hidden` to the underlying HTML-element `ul`', () => {
      const { container } = renderList({ hidden: true });
      const element = container.querySelector('.nl-unordered-list');
      expect(element).toHaveAttribute('hidden');
    });
    it('supports forwarding the HTML-attribute `lang` to the underlying HTML-element `ul`', () => {
      const { container } = renderList({ lang: 'en' });
      const element = container.querySelector('.nl-unordered-list');
      expect(element).toHaveAttribute('lang', 'en');
    });
    it('supports forwarding the HTML-attribute `dir` to the underlying HTML-element `ul`', () => {
      const { container } = renderList({ dir: 'ltr' });
      const element = container.querySelector('.nl-unordered-list');
      expect(element).toHaveAttribute('dir', 'ltr');
    });
  });

  describe('React API', () => {
    it('has displayName "UnorderedList"', () => {
      expect(UnorderedList.displayName).toBe('UnorderedList');
    });

    it('forwards React refs to the HTMLUListElement', () => {
      const ref = createRef<HTMLUListElement>();
      const { container } = render(
        <UnorderedList ref={ref}>
          <UnorderedListItem>Item 1</UnorderedListItem>
        </UnorderedList>,
      );
      const element = container.querySelector('ul');

      expect(ref.current).toBe(element);
      expect(element?.tagName).toBe('UL');
    });
  });
});

describe('Unordered List Item', () => {
  describe('CSS API', () => {
    it('adds the `nl-unordered-list__item` class by default', () => {
      const { container } = renderList();
      const element = container.querySelector('.nl-unordered-list__item');
      expect(element).toBeInTheDocument();
    });
    it('accepts an extra class name', () => {
      const { container } = renderList(
        {},
        <UnorderedListItem className={extraUnorderedListItemClassName}>Item 1</UnorderedListItem>,
      );
      const element = container.querySelector('li');
      expect(element).toHaveClass('nl-unordered-list__item', extraUnorderedListItemClassName);
    });
    it('does not add the `nl-unordered-list__item--custom-marker` class when `marker` is not provided', () => {
      const { container } = renderList();
      const element = container.querySelector('.nl-unordered-list__item--custom-marker');
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
      const { container } = renderList({}, <UnorderedListItem hidden>Item 1</UnorderedListItem>);
      const element = container.querySelector('.nl-unordered-list__item');
      expect(element).toHaveAttribute('hidden');
    });
    it('supports forwarding the HTML-attribute `lang` to the underlying HTML-element `li`', () => {
      const { container } = renderList({}, <UnorderedListItem lang="en">Item 1</UnorderedListItem>);
      const element = container.querySelector('.nl-unordered-list__item');
      expect(element).toHaveAttribute('lang', 'en');
    });
    it('supports forwarding the HTML-attribute `dir` to the underlying HTML-element `li`', () => {
      const { container } = renderList({}, <UnorderedListItem dir="rtl">Item 1</UnorderedListItem>);
      const element = container.querySelector('.nl-unordered-list__item');
      expect(element).toHaveAttribute('dir', 'rtl');
    });
    it('supports phrasing content', () => {
      const { container } = renderList(
        {},
        <UnorderedListItem>
          Verzamel <strong>alle</strong> documenten via <a href="https://example.com/">de website</a>
        </UnorderedListItem>,
      );
      const element = container.querySelector('.nl-unordered-list__item');
      expect(element).toContainHTML('<strong>alle</strong>');
      expect(element).toContainHTML('<a href="https://example.com/">de website</a>');
    });
    it('supports the HTML-element `p`', () => {
      const { container } = renderList(
        {},
        <UnorderedListItem>
          <p>Item 1</p>
        </UnorderedListItem>,
      );
      const element = container.querySelector('.nl-unordered-list__item');
      expect(element).toContainHTML('<p>Item 1</p>');
    });
  });

  describe('React API', () => {
    it('has displayName "UnorderedListItem"', () => {
      expect(UnorderedListItem.displayName).toBe('UnorderedListItem');
    });

    it('forwards React refs to the HTMLLIElement', () => {
      const ref = createRef<HTMLLIElement>();
      const { container } = render(
        <UnorderedList>
          <UnorderedListItem ref={ref}>Item 1</UnorderedListItem>
        </UnorderedList>,
      );
      const element = container.querySelector('li');

      expect(ref.current).toBe(element);
      expect(element?.tagName).toBe('LI');
    });
  });
});

describe('Unordered List Custom Marker when `marker` is not provided', () => {
  describe('Component API', () => {
    it.each([
      ['any span', 'span'],
      ['custom marker span', '.nl-unordered-list__marker'],
      ['marker label span', '.nl-unordered-list__marker-label'],
    ])('does not render the %s HTML-element', (_, selector) => {
      const { container } = renderList();
      const element = container.querySelector('.nl-unordered-list__item');
      expect(element?.querySelector(selector)).toBeNull();
    });
  });
});

describe('Unordered List Custom Marker when `marker` is provided', () => {
  describe('and when `markerLabel` is not provided', () => {
    it('renders the custom marker HTML-element `span`', () => {
      const { container } = renderList({}, <UnorderedListItem marker={markerIcon}>Item 1</UnorderedListItem>);
      const element = container.querySelector('.nl-unordered-list__marker--custom');
      expect(element).toBeInTheDocument();
    });
    it('does not render the marker label HTML-element `span`', () => {
      const { container } = renderList({}, <UnorderedListItem marker={markerIcon}>Item 1</UnorderedListItem>);
      const element = container.querySelector('.nl-unordered-list__marker-label');
      expect(element).not.toBeInTheDocument();
    });
  });

  describe('and when `markerLabel` is provided', () => {
    describe('CSS API', () => {
      it.each([
        ['nl-unordered-list__marker', '.nl-unordered-list__marker'],
        ['nl-unordered-list__marker--custom', '.nl-unordered-list__marker--custom'],
        ['nl-unordered-list__marker-label', '.nl-unordered-list__marker-label'],
      ])('adds the `%s` class by default', (_, selector) => {
        const { container } = renderWithMarker();

        expect(container.querySelector(selector)).toBeInTheDocument();
      });
      it('adds the `nl-unordered-list__item--custom-marker` class to the item', () => {
        const { container } = renderWithMarker();
        const element = container.querySelector('li');
        expect(element).toHaveClass('nl-unordered-list__item', 'nl-unordered-list__item--custom-marker');
      });
    });

    describe('Component API', () => {
      it('renders the custom marker HTML-element `span`', () => {
        const { container } = renderWithMarker();
        const element = container.querySelector('.nl-unordered-list__marker--custom');
        expect(element).toBeInTheDocument();
        expect(element?.tagName).toBe('SPAN');
      });

      it('has the HTML-attribute `aria-hidden="true"` on the icon wrapper `span`', () => {
        const { container } = renderWithMarker();
        const marker = container.querySelector('.nl-unordered-list__marker--custom');
        const iconWrapper = marker?.firstElementChild;
        expect(iconWrapper?.tagName).toBe('SPAN');
        expect(iconWrapper).toHaveAttribute('aria-hidden', 'true');
        const icon = iconWrapper?.querySelector('svg');
        expect(icon).toBeInTheDocument();
      });

      it('does not hide the marker label with the HTML-attribute `aria-hidden`', () => {
        const { container } = renderWithMarker();
        const marker = container.querySelector('.nl-unordered-list__marker--custom');
        const label = container.querySelector('.nl-unordered-list__marker-label');
        expect(marker).not.toHaveAttribute('aria-hidden');
        expect(label).not.toHaveAttribute('aria-hidden');
      });

      it('supports phrasing content in the custom marker', () => {
        const { container } = renderWithMarker(<strong>1</strong>);
        const marker = container.querySelector('.nl-unordered-list__marker--custom');
        const iconWrapper = marker?.firstElementChild;
        expect(iconWrapper).toContainHTML('<strong>1</strong>');
      });

      it('renders the marker label HTML-element `span`', () => {
        const { container } = renderWithMarker();
        const label = container.querySelector('.nl-unordered-list__marker-label');
        expect(label).toBeInTheDocument();
        expect(label?.tagName).toBe('SPAN');
      });

      it('supports phrasing content in the marker label', () => {
        const { container } = renderWithMarker();
        const label = container.querySelector('.nl-unordered-list__marker-label');
        expect(label).toHaveTextContent('Leesteken');
      });
    });
  });
});
