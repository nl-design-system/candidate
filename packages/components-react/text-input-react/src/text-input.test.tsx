import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { afterEach, describe, expect, it } from 'vitest';
import { TextInput } from './text-input';

const displayName = 'TextInput';

afterEach(() => {
  cleanup();
});

describe('TextInput', () => {
  it(`has displayName "${displayName}"`, () => {
    expect(TextInput.displayName).toBe(displayName);
  });

  it('forwards React refs to the HTMLButtonElement', () => {
    const ref = createRef<HTMLElement>();
    render(<TextInput ref={ref}>text-input</TextInput>);
    const element = screen.getByRole('body:first-child');

    expect(ref.current).toBe(element);
    expect(element).toBeInstanceOf(HTMLElement);
  });
});
