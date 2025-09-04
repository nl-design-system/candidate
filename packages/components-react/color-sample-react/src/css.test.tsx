import '@testing-library/jest-dom/vitest';
import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { ColorSample } from './css';

afterEach(() => {
  cleanup();
});

const value = '#ff1493';

describe('Color sample (css import)', () => {
  it('injects a <style> block into the document', () => {
    render(<ColorSample value={value} />);
    const style = global.document.querySelector('style');

    expect(style).toBeInTheDocument();
  });
});
