import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { afterEach, describe, expect, it } from 'vitest';
import { FormFieldErrorMessage } from './form-field-error-message';

const displayName = 'FormFieldErrorMessage';

afterEach(() => {
  cleanup();
});

describe('FormFieldErrorMessage', () => {
  it(`has displayName "${displayName}"`, () => {
    expect(FormFieldErrorMessage.displayName).toBe(displayName);
  });

  it('forwards React refs to the HTMLButtonElement', () => {
    const ref = createRef<HTMLDivElement>();
    render(<FormFieldErrorMessage ref={ref}>form-field-error-message</FormFieldErrorMessage>);
    const element = screen.getByText('form-field-error-message');

    expect(ref.current).toBe(element);
    expect(element).toBeInstanceOf(HTMLDivElement);
  });
});
