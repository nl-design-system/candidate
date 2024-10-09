import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Paragraph } from './paragraph';

describe('paragraph', () => {
  it('renders a paragraph', () => {
    const { container } = render(<Paragraph />);
    const paragraph = container.querySelector(':only-child');

    expect(paragraph).toBeInTheDocument();
    expect(paragraph).toBeInstanceOf(HTMLParagraphElement);
  });
});
