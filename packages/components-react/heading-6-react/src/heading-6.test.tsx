import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Heading6 } from './heading-6';

describe('Heading 6', () => {
  it('renders a heading level 6', () => {
    const { container } = render(<Heading6 />);
    const heading6 = container.querySelector(':only-child');

    expect(heading6).toBeInTheDocument();
  });
});
