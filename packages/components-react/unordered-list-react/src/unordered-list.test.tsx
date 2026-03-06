import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { afterEach, describe, expect, it } from 'vitest';
import { UnorderedList } from './unordered-list';

const displayName = 'UnorderedList';

afterEach(() => {
  cleanup();
});

describe('UnorderedList', () => {
  it(`has displayName "${displayName}"`, () => {
    expect(UnorderedList.displayName).toBe(displayName);
  });

  it('forwards React refs to the HTMLButtonElement', () => {
    const ref = createRef<HTMLDivElement>();
    render(<UnorderedList ref={ref}>unordered-list</UnorderedList>);
    const element = screen.getByText('unordered-list');

    expect(ref.current).toBe(element);
    expect(element).toBeInstanceOf(HTMLDivElement);
  });
});
