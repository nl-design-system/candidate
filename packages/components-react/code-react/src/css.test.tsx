import '@testing-library/jest-dom/vitest';
import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { Code } from './css';

afterEach(() => {
  cleanup();
});

const text = 'import';

describe('Code (css import)', () => {
  it('injects a <style> block into the document', () => {
    render(<Code>{text}</Code>);
    const style = global.document.querySelector('style');

    expect(style).toBeInTheDocument();
  });
});
