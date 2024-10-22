import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Heading1 } from './heading-1';

describe('Heading 1', () => {
  it('renders a heading level 1', () => {
    const { container } = render(<Heading1 />);
    const heading1 = container.querySelector(':only-child');

    expect(heading1).toBeInTheDocument();
  });
});
