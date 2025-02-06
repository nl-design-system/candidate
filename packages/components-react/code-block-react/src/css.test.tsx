import '@testing-library/jest-dom/vitest';
import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { CodeBlock } from './css';

afterEach(() => {
  cleanup();
});

const testCode = "import { CodeBlock } from '@nl-design-system-candidate/code-block-react/css';";

describe('Code Block (css import)', () => {
  it('injects a <style> block into the document', () => {
    render(<CodeBlock>{testCode}</CodeBlock>);
    const style = global.document.querySelector('style');

    expect(style).toBeInTheDocument();
  });
});
