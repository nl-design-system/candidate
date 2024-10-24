import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Heading2 } from './heading-2';

describe('Heading 2', () => {
  it('renders a heading level 2', () => {
    const { container } = render(<Heading2 />);
    const heading2 = container.querySelector(':only-child');

    expect(heading2).toBeInTheDocument();
  });
});
