import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { afterEach, describe, expect, it } from 'vitest';
import { FormFieldErrorMessage } from './form-field-error-message';

const displayName = 'FormFieldErrorMessage';
const content = "Het veld 'Naam' is een verplicht veld.";
const extraClassName = 'nl-form-field-error-message--extra-variant';

const Icon = () => (
  <span>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
      <title>error</title>
    </svg>
  </span>
);

afterEach(() => {
  cleanup();
});

describe('FormFieldErrorMessage', () => {
  describe('React API', () => {
    it(`has displayName "${displayName}"`, () => {
      expect(FormFieldErrorMessage.displayName).toBe(displayName);
    });
    it('accepts an extra class name ${extraClassName}', () => {
      const { container } = render(<FormFieldErrorMessage className={extraClassName}>{content}</FormFieldErrorMessage>);
      const element = container.querySelector(':only-child');
      expect(element).toHaveClass('nl-form-field-error-message', extraClassName);
    });
    it('forwards React refs to the HTMLDivElement', () => {
      const ref = createRef<HTMLDivElement>();
      const { container } = render(<FormFieldErrorMessage ref={ref}>{content}</FormFieldErrorMessage>);
      const element = container.querySelector('.nl-form-field-error-message');

      expect(ref.current).toBe(element);
      expect(element).toBeInstanceOf(HTMLDivElement);
    });
    it('renders children', () => {
      const { container } = render(
        <FormFieldErrorMessage>
          <p>{content}</p>
        </FormFieldErrorMessage>,
      );
      const formFieldErrorMessage = container.querySelector(':only-child');
      expect(formFieldErrorMessage).toContainElement(container.querySelector('p'));
      expect(formFieldErrorMessage).toHaveTextContent(content);
    });
  });
  describe('HTML', () => {
    it('renders an HTML-element `div`', () => {
      const { container } = render(<FormFieldErrorMessage>{content}</FormFieldErrorMessage>);
      const element = container.querySelector(':only-child');

      expect(element).toBeInstanceOf(HTMLDivElement);
    });
    it('can set an HTML-attribute `dir`', () => {
      const { container } = render(<FormFieldErrorMessage dir="rtl">{content}</FormFieldErrorMessage>);
      const element = container.querySelector('.nl-form-field-error-message');

      expect(element).toHaveAttribute('dir', 'rtl');
    });
    it('can set an HTML-attribute `lang`', () => {
      const { container } = render(<FormFieldErrorMessage lang="en">{content}</FormFieldErrorMessage>);
      const element = container.querySelector('.nl-form-field-error-message');

      expect(element).toHaveAttribute('lang', 'en');
    });
    it('can set an HTML-attribute `role`', () => {
      render(<FormFieldErrorMessage role="alert">{content}</FormFieldErrorMessage>);
      const formFieldErrorMessageContent = screen.getByRole('alert');
      expect(formFieldErrorMessageContent).toBeInTheDocument();
    });
  });
  describe('CSS API', () => {
    it('has BEM class name `nl-form-field-error-message`', () => {
      const { container } = render(<FormFieldErrorMessage>{content}</FormFieldErrorMessage>);
      const element = container.querySelector(':only-child');

      expect(element).toHaveClass('nl-form-field-error-message');
    });
    it('icon slot has BEM class name `nl-form-field-error-message__icon`', () => {
      const { container } = render(<FormFieldErrorMessage icon={<Icon />}>{content}</FormFieldErrorMessage>);
      const element = container.querySelector('.nl-form-field-error-message__icon');

      expect(element).toBeInTheDocument();
    });
    it('content slot has BEM class name `nl-form-field-error-message__content`', () => {
      const { container } = render(<FormFieldErrorMessage>{content}</FormFieldErrorMessage>);
      const element = container.querySelector('.nl-form-field-error-message__content');

      expect(element).toBeInTheDocument();
    });
  });
  describe('Icon', () => {
    it('renders an HTML-element `div` ', () => {
      const { container } = render(<FormFieldErrorMessage icon={<div>Icon</div>}>{content}</FormFieldErrorMessage>);
      const formFieldErrorMessageIcon = container.querySelector('.nl-form-field-error-message__icon');

      expect(formFieldErrorMessageIcon).toBeInstanceOf(HTMLDivElement);
    });
    it('icon slot renders children', () => {
      const { container } = render(<FormFieldErrorMessage icon={<Icon />}>{content}</FormFieldErrorMessage>);
      const element = container.querySelector('.nl-form-field-error-message__icon');
      expect(element).toContainElement(container.querySelector('svg'));
    });
    it('can contain an HTML-element `p` ', () => {
      const { container } = render(<FormFieldErrorMessage icon={<p>Icon</p>}>{content}</FormFieldErrorMessage>);
      const element = container.querySelector('.nl-form-field-error-message__icon');

      expect(element).toContainElement(container.querySelector('p'));
    });
    it('icon slot can contain phrasing content', () => {
      const { container } = render(<FormFieldErrorMessage icon={<span>Icon</span>}>{content}</FormFieldErrorMessage>);
      const element = container.querySelector('.nl-form-field-error-message__icon');

      expect(element).toContainElement(container.querySelector('span'));
    });
  });
  describe('Content', () => {
    it('renders an HTML-element `div`', () => {
      const { container } = render(<FormFieldErrorMessage>{content}</FormFieldErrorMessage>);
      const formFieldErrorMessageContent = container.querySelector('.nl-form-field-error-message__content');
      expect(formFieldErrorMessageContent).toBeInstanceOf(HTMLDivElement);
    });
    it('content slot renders children', () => {
      const { container } = render(
        <FormFieldErrorMessage>
          <p>{content}</p>
        </FormFieldErrorMessage>,
      );
      const element = container.querySelector('.nl-form-field-error-message__content');
      expect(element).toContainElement(container.querySelector('p'));
      expect(element).toHaveTextContent(content);
    });
    it('can contain an HTML-element `p`', () => {
      const { container } = render(
        <FormFieldErrorMessage>
          <p>{content}</p>
        </FormFieldErrorMessage>,
      );
      const element = container.querySelector('.nl-form-field-error-message__content');
      expect(element).toContainElement(container.querySelector('p'));
      expect(element).toHaveTextContent(content);
    });
    it('can contain an HTML-element `span`', () => {
      const { container } = render(
        <FormFieldErrorMessage>
          <span>{content}</span>
        </FormFieldErrorMessage>,
      );
      const element = container.querySelector('.nl-form-field-error-message__content');
      expect(element).toContainElement(container.querySelector('span'));
      expect(element).toHaveTextContent(content);
    });
  });
  describe('accessibility', () => {
    it('has an HTML-attribute `id`', () => {
      const { container } = render(
        <FormFieldErrorMessage id="form-field-error-message-id">{content}</FormFieldErrorMessage>,
      );
      const element = container.querySelector('.nl-form-field-error-message__content');

      expect(element).toHaveAttribute('id', 'form-field-error-message-id');
    });
    it('can contain an HTML-attribute `role` with value `alert`', () => {
      render(
        <FormFieldErrorMessage id="form-field-error-message-id" role="alert">
          {content}
        </FormFieldErrorMessage>,
      );
      const formFieldErrorMessageContent = screen.getByRole('alert');
      expect(formFieldErrorMessageContent).toHaveAttribute('id', 'form-field-error-message-id');
      expect(formFieldErrorMessageContent).toBeInTheDocument();
    });
    it('remains in the DOM during realtime validation', () => {
      const { rerender, container } = render(
        <div>
          <label htmlFor="email">Email</label>
          <FormFieldErrorMessage id="email-error" role="alert">
            Email is required
          </FormFieldErrorMessage>

          <input id="email" name="email" aria-describedby="email-error" aria-invalid="true" value="" readOnly />
        </div>,
      );

      const input = container.querySelector('input');
      const errorMessage = screen.getByRole('alert');

      expect(input).toBeInTheDocument();
      expect(errorMessage).toBeInTheDocument();

      // Simulate a validation update
      rerender(
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" aria-describedby="email-error" aria-invalid="true" value="invalid" readOnly />

          <FormFieldErrorMessage id="email-error" role="alert">
            Please enter a valid email address
          </FormFieldErrorMessage>
        </div>,
      );

      expect(screen.getByRole('alert')).toBeInTheDocument();
      expect(screen.getByText('Please enter a valid email address')).toBeInTheDocument();
    });
  });
  describe('HTML elementen', () => {
    it('renders an div HTML-element', () => {
      const { container } = render(<FormFieldErrorMessage>{content}</FormFieldErrorMessage>);
      const element = container.querySelector(':only-child');

      expect(element).toBeInstanceOf(HTMLDivElement);
    });
    it('displays as CSS block element', () => {
      const { container } = render(<FormFieldErrorMessage>{content}</FormFieldErrorMessage>);
      const element = container.querySelector(':only-child');

      expect(element).toHaveStyle({ display: 'block' });
    });
  });
});
