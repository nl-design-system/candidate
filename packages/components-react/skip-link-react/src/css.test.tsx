import '@testing-library/jest-dom/vitest';
import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { SkipLink } from './css';

afterEach(() => {
  cleanup();
});

const text = 'Skip to main content';

describe('Skip link (css import)', () => {
  it('injects a <style> block into the document', () => {
    render(<SkipLink href="#main-content">{text}</SkipLink>);
    const style = global.document.querySelector('style');

    expect(style).toBeInTheDocument();
  });
});
