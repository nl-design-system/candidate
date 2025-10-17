import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { Button } from './button';

afterEach(() => {
  cleanup();
});

const displayName = 'Button';

describe('Button', () => {
  it(`has displayName "${displayName}"`, () => {
    expect(Button.displayName).toBe(displayName);
  });
});
