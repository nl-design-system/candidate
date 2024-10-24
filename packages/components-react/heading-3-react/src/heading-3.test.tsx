import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Heading3 } from './heading-3';

describe('Heading 3', () => {
  it('renders a heading level 3', () => {
    const { container } = render(<Heading3 />);
    const heading3 = container.querySelector(':only-child');

    expect(heading3).toBeInTheDocument();
  });
});
