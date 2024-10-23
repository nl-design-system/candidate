import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Link } from './link';

describe('Link', () => {
  it('renders a link', () => {
    const { container } = render(<Link />);
    const link = container.querySelector(':only-child');

    expect(link).toBeInTheDocument();
  });
});
