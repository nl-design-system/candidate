import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { SkipLink } from './skip-link';

describe('Skip link', () => {
  it('renders a HTML anchor element', () => {
    render(<SkipLink href="#main">Skip to main content</SkipLink>);
    const skipLink = screen.getByRole('link', { name: 'Skip to main content' });

    expect(skipLink).toBeInTheDocument();
  });
});
