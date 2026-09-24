import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { afterEach, describe, expect, it } from 'vitest';
import { OrderedList } from './ordered-list';

const displayName = 'OrderedList';

afterEach(() => {
  cleanup();
});

describe('Ordered List', () => {
  describe('CSS API', () => {
    it.todo('adds `nl-ordered-list` class by default', () => {});
  });

  describe('Component API', () => {
    it.todo('renders the HTML-element `ol`', () => {});
    it.todo('has the HTML-attribute `role="list"`', () => {});
    it.todo('supports forwarding the HTML-attribute `hidden` to the underlying HTML-element `ol`', () => {});
    it.todo('supports forwarding the HTML-attribute `lang` to the underlying HTML-element `ol`', () => {});
    it.todo('supports forwarding the HTML-attribute `dir` to the underlying HTML-element `ol`', () => {});
    it.todo('supports forwarding the HTML-attribute `role` to the underlying HTML-element `ol`', () => {});
    it.todo('supports forwarding the HTML-attribute `reversed` to the underlying HTML-element `ol`', () => {});
    it.todo('supports forwarding the HTML-attribute `start` to the underlying HTML-element `ol`', () => {});
    it.todo('supports forwarding the HTML-attribute `type` to the underlying HTML-element `ol`', () => {});
    it.todo(
      'supports forwarding the HTML-attribute `type` with value `1` to the underlying HTML-element `ol`',
      () => {},
    );
    it.todo(
      'supports forwarding the HTML-attribute `type` with value `a` to the underlying HTML-element `ol`',
      () => {},
    );
    it.todo(
      'supports forwarding the HTML-attribute `type` with value `A` to the underlying HTML-element `ol`',
      () => {},
    );
    it.todo(
      'supports forwarding the HTML-attribute `type` with value `i` to the underlying HTML-element `ol`',
      () => {},
    );
    it.todo(
      'supports forwarding the HTML-attribute `type` with value `I` to the underlying HTML-element `ol`',
      () => {},
    );
  });

  describe('React API', () => {
    it.todo(`has displayName "${displayName}"`, () => {
      expect(OrderedList.displayName).toBe(displayName);
    });

    it.todo('forwards React refs to the HTMLOListElement', () => {
      const ref = createRef<HTMLOListElement>();
      render(<OrderedList ref={ref}>ordered-list</OrderedList>);
      const element = screen.getByText('ordered-list');

      expect(ref.current).toBe(element);
      expect(element).toBeInstanceOf(HTMLOListElement);
    });
  });
});

describe('Ordered List Item', () => {
  describe('CSS API', () => {
    it.todo('adds the `nl-ordered-list__item` class by default', () => {});
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
// <ol class="nl-ordered-list" role="list">
//   <li class="nl-ordered-list__item">
//     <span class="nl-ordered-list__marker nl-ordered-list__marker--custom">
//       <span aria-hidden="true">
//        <Icon />
//      </span>
//      <span class="sr-only">Informatieve label{" "}</span>
//     </span>
//     Foo Bar
//   </li>
// </ol>
describe('Ordered List Custom Marker when `marker` is not provided', () => {
  describe('Component API', () => {
    it.todo('does not render the HTML-element `span`', () => {});
    it.todo('does not render the the custom marker HTML-element `span`', () => {});
    it.todo('does not render the screenreader text HTML-element `span`', () => {});
  });
});

describe('Ordered List Custom Marker when `marker` is provided', () => {
  describe('and when `markerLabel` is not provided', () => {
    it.todo('does not render the HTML-element `span`', () => {});
    it.todo('does not render the the custom marker HTML-element `span`', () => {});
    it.todo('does not render the screenreader text HTML-element `span`', () => {});
  });

  describe('and when `markerLabel` is provided', () => {
    describe('CSS API', () => {
      it.todo('adds the `nl-ordered-list__marker` class by default', () => {});
      it.todo('adds the `nl-ordered-list__marker--custom` class by default', () => {});
    });

    describe('Component API', () => {
      it.todo('renders the HTML-element `span`', () => {});

      it.todo('renders the custom marker HTML-element `span`', () => {});
      it.todo('has the HTML-attribute `aria-hidden="true"` on the custom marker HTML-element `span`', () => {});
      it.todo('supports phrasing content in the custom marker HTML-element `span`', () => {});
      it.todo('supports the HTML-element `p` in the custom marker HTML-element `span`', () => {});

      it.todo('renders the screenreader text HTML-element `span`', () => {});
      it.todo('supports phrasing content in the screenreader text HTML-element `span`', () => {});
      it.todo('has the `sr-only` class on the screenreader text HTML-element `span`', () => {});
    });
  });
});
