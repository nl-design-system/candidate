import '@testing-library/jest-dom/vitest';
import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { Heading2 } from './css';

afterEach(() => {
  cleanup();
});

describe('Heading 2 (css import)', () => {
  it('injects a <style> block into the document', () => {
    render(<Heading2 />);
    const style = global.document.querySelector('style');

    expect(style).toBeInTheDocument();
  });
});
