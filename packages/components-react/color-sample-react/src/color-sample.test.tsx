import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { ColorSample } from './color-sample';

describe('Color sample', () => {
  it('renders a data element', () => {
    const { container } = render(<ColorSample color="deeppink" />);
    const colorSample = container.querySelector('data');

    expect(colorSample).toBeInTheDocument();
  });
});
