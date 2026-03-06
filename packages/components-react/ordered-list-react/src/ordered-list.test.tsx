import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { afterEach, describe, expect, it } from 'vitest';
import { OrderedList } from './ordered-list';

const displayName = 'OrderedList';

afterEach(() => {
  cleanup();
});

describe('OrderedList', () => {
  it(`has displayName "${displayName}"`, () => {
    expect(OrderedList.displayName).toBe(displayName);
  });

  it('forwards React refs to the HTMLButtonElement', () => {
    const ref = createRef<HTMLDivElement>();
    render(<OrderedList ref={ref}>ordered-list</OrderedList>);
    const element = screen.getByText('ordered-list');

    expect(ref.current).toBe(element);
    expect(element).toBeInstanceOf(HTMLDivElement);
  });
});
