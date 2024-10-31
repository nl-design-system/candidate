import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Heading } from './heading';

describe('Heading', () => {
  it('renders a heading level 1', () => {
    const { container } = render(<Heading level={1} />);
    const heading = container.querySelector('h1');

    expect(heading).toBeInTheDocument();
  });
  it('renders a heading level 2', () => {
    const { container } = render(<Heading level={2} />);
    const heading = container.querySelector('h2');

    expect(heading).toBeInTheDocument();
  });
  it('renders a heading level 3', () => {
    const { container } = render(<Heading level={3} />);
    const heading = container.querySelector('h3');

    expect(heading).toBeInTheDocument();
  });
  it('renders a heading level 4', () => {
    const { container } = render(<Heading level={4} />);
    const heading = container.querySelector('h4');

    expect(heading).toBeInTheDocument();
  });
  it('renders a heading level 5', () => {
    const { container } = render(<Heading level={5} />);
    const heading = container.querySelector('h5');

    expect(heading).toBeInTheDocument();
  });
  it('renders a heading level 6', () => {
    const { container } = render(<Heading level={6} />);
    const heading = container.querySelector('h6');

    expect(heading).toBeInTheDocument();
  });
});
