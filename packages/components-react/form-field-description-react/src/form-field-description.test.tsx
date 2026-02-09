import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { afterEach, describe, expect, it } from 'vitest';
import { FormFieldDescription } from './form-field-description';

const displayName = 'FormFieldDescription';

afterEach(() => {
  cleanup();
});

describe('FormFieldDescription', () => {
  it(`has displayName "${displayName}"`, () => {
    expect(FormFieldDescription.displayName).toBe(displayName);
  });

  it('forwards React refs to the HTMLButtonElement', () => {
    const ref = createRef<HTMLDivElement>();
    render(<FormFieldDescription ref={ref}>form-field-description</FormFieldDescription>);
    const element = screen.getByText('form-field-description');

    expect(ref.current).toBe(element);
    expect(element).toBeInstanceOf(HTMLDivElement);
  });
});
