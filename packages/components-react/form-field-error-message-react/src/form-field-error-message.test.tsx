import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { afterEach, describe, expect, it } from 'vitest';
import { FormFieldErrorMessage } from './form-field-error-message';

const displayName = 'FormFieldErrorMessage';
const content = "Het veld 'Naam' is een verplicht veld.";
const extraClassName = 'nl-form-field-error-message--extra-variant';

const ExampleWarningIcon = () => (
  <span className="example-icon" aria-hidden="true">
    ⚠️
  </span>
);

afterEach(() => {
  cleanup();
});

describe('Form Field Error Message', () => {
  describe('CSS API', () => {
    it('has BEM class name `nl-form-field-error-message`', () => {
      const { container } = render(<FormFieldErrorMessage>{content}</FormFieldErrorMessage>);
      const element = container.querySelector('.nl-form-field-error-message');

      expect(element).toHaveClass('nl-form-field-error-message');
    });
    it('displays as CSS block element', () => {
      const { container } = render(<FormFieldErrorMessage>{content}</FormFieldErrorMessage>);
      const element = container.querySelector('.nl-form-field-error-message');

      expect(element).toHaveStyle({ display: 'block' });
    });
  });

  describe('Component API', () => {
    it('accepts an extra class name ${extraClassName}', () => {
      const { container } = render(<FormFieldErrorMessage className={extraClassName}>{content}</FormFieldErrorMessage>);
      const element = container.querySelector(':only-child');
      expect(element).toHaveClass('nl-form-field-error-message', extraClassName);
    });
    it('renders children', () => {
      const { container } = render(
        <FormFieldErrorMessage>
          <p>{content}</p>
        </FormFieldErrorMessage>,
      );
      const formFieldErrorMessage = container.querySelector('.nl-form-field-error-message');
      expect(formFieldErrorMessage).toContainElement(container.querySelector('p'));
      expect(formFieldErrorMessage).toHaveTextContent(content);
    });
    it('renders an HTML-element `div`', () => {
      const { container } = render(<FormFieldErrorMessage>{content}</FormFieldErrorMessage>);
      const element = container.querySelector('.nl-form-field-error-message');
      expect(element?.tagName).toBe('DIV');
      expect(element).toHaveClass('nl-form-field-error-message');
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
    it('can set an HTML-attribute `role` on the root element', () => {
      const { container } = render(<FormFieldErrorMessage role="alert">{content}</FormFieldErrorMessage>);
      const element = container.querySelector('.nl-form-field-error-message');

      expect(element).toHaveAttribute('role', 'alert');
    });
    it('can set an HTML-attribute `id` on the root element', () => {
      const { container } = render(<FormFieldErrorMessage id="root-id">{content}</FormFieldErrorMessage>);
      const element = container.querySelector('.nl-form-field-error-message');

      expect(element).toHaveAttribute('id', 'root-id');
    });
    it('remains in the DOM during realtime validation', () => {
      const { rerender, container } = render(
        <div>
          <label htmlFor="email">Email</label>
          <FormFieldErrorMessage contentId="email-error" contentRole="alert">
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
          <div>
            <label htmlFor="email">Email</label>
          </div>
          <FormFieldErrorMessage contentId="email-error" contentRole="alert">
            Please enter a valid email address
          </FormFieldErrorMessage>
          <div>
            <input
              id="email"
              name="email"
              aria-describedby="email-error"
              aria-invalid="true"
              value="invalid"
              readOnly
            />
          </div>
        </div>,
      );

      expect(screen.getByRole('alert')).toBeInTheDocument();
      expect(screen.getByText('Please enter a valid email address')).toBeInTheDocument();
    });
  });

  describe('React API', () => {
    it(`has displayName "${displayName}"`, () => {
      expect(FormFieldErrorMessage.displayName).toBe(displayName);
    });
    it('forwards React refs to the HTMLDivElement', () => {
      const ref = createRef<HTMLDivElement>();
      const { container } = render(<FormFieldErrorMessage ref={ref}>{content}</FormFieldErrorMessage>);
      const element = container.querySelector('.nl-form-field-error-message');

      expect(ref.current).toBe(element);
      expect(element).toBeInstanceOf(HTMLDivElement);
    });
  });
});

describe('Form Field Error Message Icon', () => {
  describe('CSS API', () => {
    it('has BEM class name `nl-form-field-error-message__icon`', () => {
      const { container } = render(
        <FormFieldErrorMessage icon={<ExampleWarningIcon />}>{content}</FormFieldErrorMessage>,
      );
      const element = container.querySelector('.nl-form-field-error-message__icon');

      expect(element).toBeInTheDocument();
    });
    it('displays as CSS block element', () => {
      const { container } = render(
        <FormFieldErrorMessage icon={<ExampleWarningIcon />}>{content}</FormFieldErrorMessage>,
      );
      const element = container.querySelector('.nl-form-field-error-message__icon');

      expect(element).toHaveStyle({ display: 'block' });
    });
  });
  describe('Component API', () => {
    it('renders an HTML-element `div` ', () => {
      const { container } = render(
        <FormFieldErrorMessage icon={<span aria-hidden="true">⚠️</span>}>{content}</FormFieldErrorMessage>,
      );
      const formFieldErrorMessageIcon = container.querySelector('.nl-form-field-error-message__icon');

      expect(formFieldErrorMessageIcon?.tagName).toBe('DIV');
      expect(formFieldErrorMessageIcon).toHaveClass('nl-form-field-error-message__icon');
    });
    it('renders children', () => {
      const { container } = render(
        <FormFieldErrorMessage icon={<ExampleWarningIcon />}>{content}</FormFieldErrorMessage>,
      );
      const element = container.querySelector('.nl-form-field-error-message__icon');
      expect(element).toContainElement(container.querySelector('.example-icon'));
    });
    it('can contain an HTML-element `p` ', () => {
      const { container } = render(<FormFieldErrorMessage icon={<p>Icon</p>}>{content}</FormFieldErrorMessage>);
      const element = container.querySelector('.nl-form-field-error-message__icon');

      expect(element).toContainElement(container.querySelector('p'));
    });
    it('can contain phrasing content', () => {
      const { container } = render(<FormFieldErrorMessage icon={<span>Icon</span>}>{content}</FormFieldErrorMessage>);
      const element = container.querySelector('.nl-form-field-error-message__icon');

      expect(element).toContainElement(container.querySelector('span'));
    });
  });
});

describe('Form Field Error Message Content', () => {
  describe('CSS API', () => {
    it('has BEM class name `nl-form-field-error-message__content`', () => {
      const { container } = render(<FormFieldErrorMessage>{content}</FormFieldErrorMessage>);
      const element = container.querySelector('.nl-form-field-error-message__content');

      expect(element).toBeInTheDocument();
    });
    it('displays as CSS block element', () => {
      const { container } = render(<FormFieldErrorMessage>{content}</FormFieldErrorMessage>);
      const element = container.querySelector('.nl-form-field-error-message__content');

      expect(element).toHaveStyle({ display: 'block' });
    });
  });

  describe('Component API', () => {
    it('renders an HTML-element `div`', () => {
      const { container } = render(<FormFieldErrorMessage>{content}</FormFieldErrorMessage>);
      const formFieldErrorMessageContent = container.querySelector('.nl-form-field-error-message__content');

      expect(formFieldErrorMessageContent?.tagName).toBe('DIV');
      expect(formFieldErrorMessageContent).toHaveClass('nl-form-field-error-message__content');
    });
    it('renders children', () => {
      const { container } = render(
        <FormFieldErrorMessage>
          <p>{content}</p>
        </FormFieldErrorMessage>,
      );
      const element = container.querySelector('.nl-form-field-error-message__content');
      expect(element).toContainElement(container.querySelector('p'));
      expect(element).toHaveTextContent(content);
    });
    it('has an HTML-attribute `id` on the content element via `contentId`', () => {
      const { container } = render(
        <FormFieldErrorMessage contentId="form-field-error-message-id">{content}</FormFieldErrorMessage>,
      );
      const element = container.querySelector('.nl-form-field-error-message__content');

      expect(element).toHaveAttribute('id', 'form-field-error-message-id');
    });
    it('can contain an HTML-attribute `role` with value `alert` on the content element via `contentRole`', () => {
      render(
        <FormFieldErrorMessage contentId="form-field-error-message-id" contentRole="alert">
          {content}
        </FormFieldErrorMessage>,
      );
      const formFieldErrorMessageContent = screen.getByRole('alert');
      expect(formFieldErrorMessageContent).toHaveAttribute('id', 'form-field-error-message-id');
      expect(formFieldErrorMessageContent).toBeInTheDocument();
    });
  });
});
