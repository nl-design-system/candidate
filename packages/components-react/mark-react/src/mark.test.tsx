import { describe, expect, it } from '@jest/globals';
import '@testing-library/jest-dom/jest-globals';
import { render } from '@testing-library/react';
import { Mark } from './mark';

describe('Mark', () => {
  it('renders a mark component', () => {
    const { container } = render(<Mark />);
    const mark = container.querySelector(':only-child');

    expect(mark).toBeInTheDocument();
  });
});
