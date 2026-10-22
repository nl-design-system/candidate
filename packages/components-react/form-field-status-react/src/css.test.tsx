import '@testing-library/jest-dom/vitest';
import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { FormFieldStatus } from './css';

const text = 'Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen.';

afterEach(() => {
  cleanup();
});

describe('FormFieldStatus (css import)', () => {
  it('injects a <style> block into the document', () => {
    render(<FormFieldStatus>{text}</FormFieldStatus>);
    const style = document.querySelector('style');

    expect(style).toBeInTheDocument();
  });
});
