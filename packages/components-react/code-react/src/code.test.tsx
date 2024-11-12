import { describe, expect, it } from '@jest/globals';
import '@testing-library/jest-dom/jest-globals';
import { render } from '@testing-library/react';
import { Code } from './code';

describe('Code', () => {
  it('renders a HTML code element', () => {
    const { container } = render(<Code />);
    const code = container.querySelector('code:only-child');

    expect(code).toBeInTheDocument();
  });
});
