import '@testing-library/jest-dom/vitest';
import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { DataBadge } from './css';

afterEach(() => {
  cleanup();
});

const value = 1024;

describe('Data Badge (css import)', () => {
  it('injects a <style> block into the document', () => {
    render(<DataBadge>{value}</DataBadge>);
    const style = global.document.querySelector('style');

    expect(style).toBeInTheDocument();
  });
});
