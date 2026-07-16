import '@testing-library/jest-dom/vitest';
import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { Alert } from './css';

const text = 'Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen.';

afterEach(() => {
  cleanup();
});

describe('Alert (css import)', () => {
  it('injects a <style> block into the document', () => {
    render(<Alert>{text}</Alert>);
    const style = document.querySelector('style');

    expect(style).toBeInTheDocument();
  });
});
