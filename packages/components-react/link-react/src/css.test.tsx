import '@testing-library/jest-dom/vitest';
import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { Link } from './css';

afterEach(() => {
  cleanup();
});

const href = 'https://example.com';
const text = 'Bezoek een voorbeeld site';

describe('Link (css import)', () => {
  it('injects a <style> block into the document', () => {
    render(<Link href={href}>{text}</Link>);
    const style = global.document.querySelector('style');

    expect(style).toBeInTheDocument();
  });
});
