import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { afterEach, describe, expect, it } from 'vitest';
import { FormFieldLabel } from './form-field-label';

const displayName = 'FormFieldLabel';

afterEach(() => {
  cleanup();
});

describe('FormFieldLabel', () => {
  it(`has displayName "${displayName}"`, () => {
    expect(FormFieldLabel.displayName).toBe(displayName);
  });

  it('forwards React refs to the HTMLButtonElement', () => {
    const ref = createRef<HTMLDivElement>();
    render(<FormFieldLabel ref={ref}>form-field-label</FormFieldLabel>);
    const element = screen.getByText('form-field-label');

    expect(ref.current).toBe(element);
    expect(element).toBeInstanceOf(HTMLDivElement);
  });
});
