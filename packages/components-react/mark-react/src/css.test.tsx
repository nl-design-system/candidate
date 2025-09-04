import '@testing-library/jest-dom/vitest';
import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { Mark } from './css';

afterEach(() => {
  cleanup();
});

const text = 'gemarkeerd';

describe('Mark (css import)', () => {
  it('injects a <style> block into the document', () => {
    render(<Mark>{text}</Mark>);
    const style = global.document.querySelector('style');

    expect(style).toBeInTheDocument();
  });
});
