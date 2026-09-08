import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { afterEach, describe, expect, it } from 'vitest';
import { Note } from './note';

const displayName = 'Note';

afterEach(() => {
  cleanup();
});

describe('Note', () => {
  it(`has displayName "${displayName}"`, () => {
    expect(Note.displayName).toBe(displayName);
  });

  it('forwards React refs to the HTMLButtonElement', () => {
    const ref = createRef<HTMLDivElement>();
    render(<Note ref={ref}>note</Note>);
    const element = screen.getByText('note');

    expect(ref.current).toBe(element);
    expect(element).toBeInstanceOf(HTMLDivElement);
  });
});
