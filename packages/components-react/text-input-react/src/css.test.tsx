import '@testing-library/jest-dom/vitest';
import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { TextInput } from './css';

afterEach(() => {
  cleanup();
});

describe('TextInput (css import)', () => {
  it('injects a <style> block into the document', () => {
    render(<TextInput />);
    const style = document.querySelector('style');

    expect(style).toBeInTheDocument();
  });
});
