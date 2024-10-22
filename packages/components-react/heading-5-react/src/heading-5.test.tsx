import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Heading5 } from './heading-5';

describe('Heading 5', () => {
  it('renders a heading level 5', () => {
    const { container } = render(<Heading5 />);
    const heading5 = container.querySelector(':only-child');

    expect(heading5).toBeInTheDocument();
  });
});
