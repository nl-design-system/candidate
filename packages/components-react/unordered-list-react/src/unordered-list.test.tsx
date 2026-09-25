import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { afterEach, describe, expect, it } from 'vitest';
import { UnorderedList } from './unordered-list';

const displayName = 'UnorderedList';

afterEach(() => {
  cleanup();
});

describe('Unordered List', () => {
  describe('CSS API', () => {
    it.todo('adds `nl-unordered-list` class by default', () => {});
  });

  describe('Component API', () => {
    it.todo('renders the HTML-element `ul`', () => {});
    it.todo('has the HTML-attribute `role="list"`', () => {});
    it.todo('supports forwarding the HTML-attribute `hidden` to the underlying HTML-element `ul`', () => {});
    it.todo('supports forwarding the HTML-attribute `lang` to the underlying HTML-element `ul`', () => {});
    it.todo('supports forwarding the HTML-attribute `dir` to the underlying HTML-element `ul`', () => {});
    it.todo('supports forwarding the HTML-attribute `role` to the underlying HTML-element `ul`', () => {});
    it.todo('supports forwarding the HTML-attribute `reversed` to the underlying HTML-element `ul`', () => {});
  });

  describe('React API', () => {
    it.todo(`has displayName "${displayName}"`, () => {
      expect(UnorderedList.displayName).toBe(displayName);
    });

    it.todo('forwards React refs to the HTMLUListElement', () => {
      const ref = createRef<HTMLUListElement>();
      render(<UnorderedList ref={ref}>unordered-list</UnorderedList>);
      const element = screen.getByText('unordered-list');

      expect(ref.current).toBe(element);
      expect(element).toBeInstanceOf(HTMLUListElement);
    });
  });
});

describe('Unordered List Item', () => {
  describe('CSS API', () => {
    it.todo('adds the `nl-unordered-list__item` class by default', () => {});
  });

  describe('Component API', () => {
    it.todo('renders the HTML-element `li`', () => {});
    it.todo('supports forwarding the HTML-attribute `hidden` to the underlying HTML-element `li`', () => {});
    it.todo('supports forwarding the HTML-attribute `lang` to the underlying HTML-element `li`', () => {});
    it.todo('supports forwarding the HTML-attribute `dir` to the underlying HTML-element `li`', () => {});
    it.todo('supports phrasing content', () => {});
    it.todo('supports the HTML-element `p`', () => {});
  });
});

// Hint voor Ontwikkelfase developer, comment mag weg na ontwikkeling:
// <ul class="nl-unordered-list" role="list">
//   <li class="nl-unordered-list__item">
//     <span class="nl-unordered-list__marker nl-unordered-list__marker--custom">
//       <span aria-hidden="true">
//         <Icon />
//       </span>
//     </span>
//     Foo Bar
//   </li>
// </ul>
// <ul class="nl-unordered-list" role="list">
//   <li class="nl-unordered-list__item">
//     <span class="nl-unordered-list__marker nl-unordered-list__marker--custom">
//       <span aria-hidden="true">
//        <Icon />
//      </span>
//      <span class="sr-only">Informatieve label{" "}</span>
//     </span>
//     Foo Bar
//   </li>
// </ul>
describe('Unordered List Custom Marker when `marker` is not provided', () => {
  describe('Component API', () => {
    it.todo('does not render the HTML-element `span`', () => {});
    it.todo('does not render the custom marker HTML-element `span`', () => {});
    it.todo('does not render the screenreader text HTML-element `span`', () => {});
  });
});

describe('Unordered List Custom Marker when `marker` is provided', () => {
  describe('CSS API', () => {
    it.todo('adds the `nl-unordered-list__marker` class by default', () => {});
    it.todo('adds the `nl-unordered-list__marker--custom` class by default', () => {});
  });

  describe('Component API', () => {
    it.todo('renders the HTML-element `span`', () => {});

    it.todo('renders the custom marker HTML-element `span`', () => {});
    it.todo('has the HTML-attribute `aria-hidden="true"` on the custom marker HTML-element `span`', () => {});
    it.todo('supports phrasing content in the custom marker HTML-element `span`', () => {});
    it.todo('supports the HTML-element `p` in the custom marker HTML-element `span`', () => {});

    it.todo('does not render the screenreader text HTML-element `span` when `markerLabel` is not provided', () => {});

    it.todo('renders the screenreader text HTML-element `span` when `markerLabel` is provided', () => {});
    it.todo('supports phrasing content in the screenreader text HTML-element `span`', () => {});
    it.todo('has the `sr-only` class on the screenreader text HTML-element `span`', () => {});
  });
});
