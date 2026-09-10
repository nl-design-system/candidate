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
    it.todo('has HTML-attribute `role="list"`', () => {});
    it.todo('supports forwarding HTML-attribute `hidden` to the underlying HTML-element `ul`', () => {});
    it.todo('supports forwarding HTML-attribute `lang` to the underlying HTML-element `ul`', () => {});
    it.todo('supports forwarding HTML-attribute `dir` to the underlying HTML-element `ul`', () => {});
    it.todo('supports forwarding HTML-attribute `role` to the underlying HTML-element `ul`', () => {});
    it.todo('supports forwarding HTML-attribute `reversed` to the underlying HTML-element `ul`', () => {});
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
    it.todo('adds `nl-unordered-list__item` class by default', () => {});
  });

  describe('Component API', () => {
    it.todo('renders the HTML-element `li`', () => {});
    it.todo('supports forwarding HTML-attribute `hidden` to the underlying HTML-element `li`', () => {});
    it.todo('supports forwarding HTML-attribute `lang` to the underlying HTML-element `li`', () => {});
    it.todo('supports forwarding HTML-attribute `dir` to the underlying HTML-element `li`', () => {});
    it.todo('supports phrasing content', () => {});
    it.todo('supports HTML-element `p`', () => {});
  });
});

// Hint voor Ontwikkelfase developer, comment mag weg na ontwikkeling:
// <ul class="nl-unordered-list">
//   <li class="nl-unordered-list--item">
//     <span class="nl-unordered-list--inline-marker">
//       <span aria-hidden="true">
//         <Icon />
//       </span>
//     </span>
//     Foo Bar
//   </li>
// </ul>
// <ul class="nl-unordered-list">
//   <li class="nl-unordered-list--item">
//     <span class="nl-unordered-list--inline-marker">
//       <span aria-hidden="true">
//        <Icon />
//      </span>
//      <span class="sr-only">Informatieve label{" "}</span>
//     </span>
//     Foo Bar
//   </li>
// </ul>
describe('Unordered List Inline Marker when `inlineMarker` is not provided', () => {
  describe('Component API', () => {
    it.todo('does not render the HTML-element `span`', () => {});

    it.todo('does not render the the inline marker HTML-element `span`', () => {});
    it.todo('does not render the screenreader text HTML-element `span`', () => {});
  });
});

describe('Unordered List Inline Marker when `inlineMarker` is provided', () => {
  describe('CSS API', () => {
    it.todo('adds `nl-unordered-list__inline-marker` class by default', () => {});
  });

  describe('Component API', () => {
    it.todo('renders the HTML-element `span`', () => {});

    it.todo('renders the the inline marker HTML-element `span`', () => {});
    it.todo('has HTML-attribute `aria-hidden="true"` on the inline marker HTML-element `span`', () => {});
    it.todo('supports phrasing content in the inline marker HTML-element `span`', () => {});
    it.todo('supports HTML-element `p` in the inline marker HTML-element `span`', () => {});

    it.todo(
      'does not render the screenreader text HTML-element `span` when `inlineMarkerLabel` is not provided',
      () => {},
    );

    it.todo('renders the screenreader text HTML-element `span` when `inlineMarkerLabel` is provided', () => {});
    it.todo('supports phrasing content in the screenreader text HTML-element `span`', () => {});
    it.todo('has `sr-only` class on the screenreader text HTML-element `span`', () => {});
  });
});
