import '@testing-library/jest-dom/vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { TextInput } from './text-input';
import type { TextInputSize, TextInputType } from './text-input';

const displayName = 'TextInput';
const extraClassName = 'nl-text-input--example-variant';
const typeClassNames = ['nl-text-input--password', 'nl-text-input--url', 'nl-text-input--numeric'];

afterEach(() => {
  cleanup();
});

describe('Text Input', () => {
  describe('React API', () => {
    it(`has displayName "${displayName}"`, () => {
      expect(TextInput.displayName).toBe(displayName);
    });

    it('forwards React refs to the HTMLInputElement', () => {
      const ref = createRef<HTMLInputElement>();
      render(<TextInput ref={ref} />);
      const element = screen.getByRole('textbox');

      expect(ref.current).toBe(element);
      expect(element).toBeInstanceOf(HTMLInputElement);
    });

    it('calls `onChange` when the value changes', () => {
      const handleChange = vi.fn();
      render(<TextInput onChange={handleChange} />);
      const element = screen.getByRole('textbox');
      fireEvent.change(element, { target: { value: 'Jan' } });

      expect(handleChange).toHaveBeenCalledTimes(1);
    });
  });

  describe('CSS API', () => {
    it('has BEM class name `nl-text-input`', () => {
      render(<TextInput />);
      const element = screen.getByRole('textbox');

      expect(element).toHaveClass('nl-text-input');
    });

    it('has no modifier classes by default', () => {
      render(<TextInput />);
      const element = screen.getByRole('textbox');

      expect(element).toHaveAttribute('class', 'nl-text-input');
    });
  });

  describe('Component API', () => {
    it('renders an HTML-element `input`', () => {
      render(<TextInput />);
      const element = screen.getByRole('textbox');

      expect(element.localName).toBe('input');
    });

    it(`accepts an extra class name ${extraClassName}`, () => {
      render(<TextInput className={extraClassName} />);
      const element = screen.getByRole('textbox');

      expect(element).toHaveClass('nl-text-input', extraClassName);
    });

    it('sets the HTML-attribute `type="text"` by default', () => {
      render(<TextInput />);
      const element = screen.getByRole('textbox');

      expect(element).toHaveAttribute('type', 'text');
    });

    it('sets the HTML-attribute `dir="auto"` by default', () => {
      render(<TextInput />);
      const element = screen.getByRole('textbox');

      expect(element).toHaveAttribute('dir', 'auto');
    });

    it('can set an HTML-attribute `dir`', () => {
      render(<TextInput dir="rtl" />);
      const element = screen.getByRole('textbox');

      expect(element).toHaveAttribute('dir', 'rtl');
    });

    it('can set an HTML-attribute `lang`', () => {
      render(<TextInput lang="en" />);
      const element = screen.getByRole('textbox');

      expect(element).toHaveAttribute('lang', 'en');
    });

    it('can set the HTML-attributes `id`, `name`, `autoComplete`, `placeholder` and `value`', () => {
      render(<TextInput id="name" name="name" autoComplete="name" placeholder="Jan Jansen" defaultValue="Jan" />);
      const element = screen.getByRole('textbox');

      expect(element).toHaveAttribute('id', 'name');
      expect(element).toHaveAttribute('name', 'name');
      expect(element).toHaveAttribute('autocomplete', 'name');
      expect(element).toHaveAttribute('placeholder', 'Jan Jansen');
      expect(element).toHaveValue('Jan');
    });

    it('has an accessible name via a label', () => {
      render(
        <>
          <label htmlFor="name">Naam</label>
          <TextInput id="name" />
        </>,
      );

      expect(screen.getByRole('textbox', { name: 'Naam' })).toBeInTheDocument();
    });

    it.each<[TextInputType, string | null]>([
      ['text', null],
      ['search', null],
      ['email', 'nl-text-input--url'],
      ['url', 'nl-text-input--url'],
      ['password', 'nl-text-input--password'],
      ['tel', 'nl-text-input--numeric'],
      ['number', 'nl-text-input--numeric'],
      ['date', null],
      ['month', null],
      ['week', null],
      ['time', null],
      ['datetime-local', null],
    ])('can set an HTML-attribute `type="%s"` with class `%s`', (type, cssClass) => {
      const { container } = render(<TextInput type={type} />);
      const element = container.querySelector('.nl-text-input');

      expect(element).toHaveAttribute('type', type);
      for (const className of typeClassNames) {
        if (className === cssClass) {
          expect(element).toHaveClass(className);
        } else {
          expect(element).not.toHaveClass(className);
        }
      }
    });

    it.each<[Partial<{ inputMode: 'numeric' | 'decimal' | 'tel' | 'email' | 'url'; pattern: string }>, string]>([
      [{ inputMode: 'numeric' }, 'nl-text-input--numeric'],
      [{ inputMode: 'decimal' }, 'nl-text-input--numeric'],
      [{ inputMode: 'tel' }, 'nl-text-input--numeric'],
      [{ pattern: String.raw`\d*` }, 'nl-text-input--numeric'],
      [{ pattern: '[0-9]*' }, 'nl-text-input--numeric'],
      [{ inputMode: 'email' }, 'nl-text-input--url'],
      [{ inputMode: 'url' }, 'nl-text-input--url'],
    ])('adds the class for %o', (attributes, cssClass) => {
      render(<TextInput {...attributes} />);
      const element = screen.getByRole('textbox');

      expect(element).toHaveClass(cssClass);
    });

    it.each<[TextInputSize]>([['xs'], ['sm'], ['md'], ['lg'], ['xl'], ['stretch']])('can set size `%s`', (size) => {
      render(<TextInput size={size} />);
      const element = screen.getByRole('textbox');

      expect(element).toHaveClass(`nl-text-input--${size}`);
      expect(element).not.toHaveAttribute('size');
    });

    it('can be disabled', () => {
      render(<TextInput disabled />);
      const element = screen.getByRole('textbox');

      expect(element).toBeDisabled();
      expect(element).toHaveClass('nl-text-input--disabled');
    });

    it('can be read-only', () => {
      render(<TextInput readOnly />);
      const element = screen.getByRole('textbox');

      expect(element).toHaveAttribute('readonly');
      expect(element).toHaveClass('nl-text-input--read-only');
    });

    it('can be required', () => {
      render(<TextInput required />);
      const element = screen.getByRole('textbox');

      expect(element).toBeRequired();
      expect(element).not.toHaveAttribute('aria-required');
    });

    it('can be invalid', () => {
      render(<TextInput invalid />);
      const element = screen.getByRole('textbox');

      expect(element).toBeInvalid();
      expect(element).toHaveClass('nl-text-input--invalid');
      expect(element).toHaveAttribute('aria-invalid', 'true');
    });

    it('can set the HTML-attribute `aria-invalid` without the invalid styling', () => {
      render(<TextInput aria-invalid="grammar" />);
      const element = screen.getByRole('textbox');

      expect(element).toHaveAttribute('aria-invalid', 'grammar');
      expect(element).not.toHaveClass('nl-text-input--invalid');
    });

    it('can show the invalid styling without setting `aria-invalid="true"`', () => {
      render(<TextInput invalid aria-invalid={false} />);
      const element = screen.getByRole('textbox');

      expect(element).toHaveClass('nl-text-input--invalid');
      expect(element).toHaveAttribute('aria-invalid', 'false');
    });

    it('is not read-only when it is disabled', () => {
      render(<TextInput disabled readOnly />);
      const element = screen.getByRole('textbox');

      expect(element).toBeDisabled();
      expect(element).not.toHaveAttribute('readonly');
      expect(element).not.toHaveClass('nl-text-input--read-only');
    });

    it('is not invalid when it is disabled', () => {
      render(<TextInput disabled invalid />);
      const element = screen.getByRole('textbox');

      expect(element).toBeDisabled();
      expect(element).not.toHaveAttribute('aria-invalid');
      expect(element).not.toHaveClass('nl-text-input--invalid');
    });
  });
});
