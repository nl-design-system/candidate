import '@testing-library/jest-dom/vitest';
import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { Button } from './css';

afterEach(() => {
  cleanup();
});

const testCode = "import { Button } from '@nl-design-system-candidate/button-react/css';";

describe('Button (css import)', () => {
  it('injects a <style> block into the document', () => {
    render(<Button>{testCode}</Button>);
    const style = global.document.querySelector('style');

    expect(style).toBeInTheDocument();
  });
});
