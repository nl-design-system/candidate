import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { afterEach, describe, expect, it } from 'vitest';
import { Alert } from './alert';

const displayName = 'Alert';

afterEach(() => {
  cleanup();
});

describe('Alert', () => {
  it(`has displayName "${displayName}"`, () => {
    expect(Alert.displayName).toBe(displayName);
  });

  it('forwards React refs to the HTMLButtonElement', () => {
    const ref = createRef<HTMLDivElement>();
    render(<Alert ref={ref}>alert</Alert>);
    const element = screen.getByText('alert');

    expect(ref.current).toBe(element);
    expect(element).toBeInstanceOf(HTMLDivElement);
  });
});
