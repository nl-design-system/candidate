import '@testing-library/jest-dom/vitest';
import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { NumberBadge } from './css';

afterEach(() => {
  cleanup();
});

const value = 42;

describe('Number Badge (css import)', () => {
  it('injects a <style> block into the document', () => {
    render(<NumberBadge value={value}>{value}</NumberBadge>);
    const style = global.document.querySelector('style');

    expect(style).toBeInTheDocument();
  });
});
