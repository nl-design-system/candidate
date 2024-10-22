import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Heading4 } from './heading-4';

describe('Heading 4', () => {
  it('renders a heading level 4', () => {
    const { container } = render(<Heading4 />);
    const heading4 = container.querySelector(':only-child');

    expect(heading4).toBeInTheDocument();
  });
});
