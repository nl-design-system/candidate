import '@testing-library/jest-dom/vitest';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { Button } from './button';
import { createRef } from 'react';

afterEach(() => {
  cleanup();
});

const displayName = 'Button';
const accessibleName = 'menu openen';
const text = 'Klik mij';
const extraClassName = 'extra-classname';
const testAccessibleLabelId = 'button-label';
const testRichTextId = 'rich-text';

describe('Button', () => {
  it(`has displayName "${displayName}"`, () => {
    expect(Button.displayName).toBe(displayName);
  });

  it('has a default type of "button"', () => {
    render(<Button>{text}</Button>);
    const button = screen.getByRole('button');

    expect(button).toHaveAttribute('type', 'button');
  });

  it('has an accessible name', () => {
    render(<Button>{text}</Button>);
    const button = screen.getByRole('button');

    expect(button).toHaveAccessibleName(text);
  });

  it('renders an element with role "button"', () => {
    render(<Button>{text}</Button>);
    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
  });

  it('renders an HTML "button" element', () => {
    const { container } = render(<Button>{text}</Button>);
    const button = container.querySelector('button:only-child');

    expect(button).toBeInTheDocument();
  });

  it('can be labeled via "aria-label"', () => {
    render(<Button aria-label={accessibleName}>{text}</Button>);
    const button = screen.getByRole('button');

    expect(button).toHaveAccessibleName(accessibleName);
  });

  it('can be labeled via "aria-labelledby"', () => {
    render(
      <>
        <span id={testAccessibleLabelId}>{accessibleName}</span>
        <Button aria-labelledby={testAccessibleLabelId}>{text}</Button>
      </>,
    );
    const button = screen.getByRole('button');

    expect(button).toHaveAccessibleName(accessibleName);
  });

  it('can be marked as having a popup via "aria-haspopup"', () => {
    render(<Button aria-haspopup="dialog">{text}</Button>);
    const button = screen.getByRole('button');

    expect(button).toHaveAttribute('aria-haspopup', 'dialog');
  });

  it('can be focussed with the tab key', async () => {
    const user = userEvent.setup();
    render(<Button>{text}</Button>);
    const button = screen.getByRole('button');

    expect(document.body).toHaveFocus();
    await user.tab();

    expect(button).toHaveFocus();
  });

  it('can be triggered with the spacebar key', async () => {
    const user = userEvent.setup();
    const clickHandler = vi.fn(() => {});
    render(<Button onClick={clickHandler}>{text}</Button>);
    const button = screen.getByRole('button');

    button.focus();
    await user.keyboard('[Space]');

    expect(clickHandler).toHaveBeenCalled();
  });

  it('can be triggered with the left mouse click', async () => {
    const user = userEvent.setup();
    const clickHandler = vi.fn(() => {});
    render(<Button onClick={clickHandler}>{text}</Button>);
    const button = screen.getByRole('button');

    await user.pointer([{ keys: '[MouseLeft]', target: button }]);

    expect(clickHandler).toHaveBeenCalled();
  });

  it('can be triggered with the enter key', async () => {
    const user = userEvent.setup();
    const clickHandler = vi.fn(() => {});
    render(<Button onClick={clickHandler}>{text}</Button>);
    const button = screen.getByRole('button');

    button.focus();
    await user.keyboard('[Enter]');

    expect(clickHandler).toHaveBeenCalled();
  });

  it('can be marked as expanded via "aria-expanded"', () => {
    render(<Button aria-expanded="true">{text}</Button>);
    const button = screen.getByRole('button');

    expect(button).toHaveAttribute('aria-expanded', 'true');
  });

  it('can be marked as togglebutton via "aria-pressed"', () => {
    render(<Button aria-pressed="true">{text}</Button>);
    const button = screen.getByRole('button');

    expect(button).toHaveAttribute('aria-pressed', 'true');
  });

  it('can be disabled', () => {
    render(<Button disabled>{text}</Button>);
    const button = screen.getByRole('button');

    expect(button).toHaveAttribute('disabled');
  });

  it('can be given a name attribute', () => {
    render(<Button name="value">{text}</Button>);
    const button = screen.getByRole('button');

    expect(button).toHaveAttribute('name', 'value');
  });

  it('can be given a value attribute', () => {
    render(<Button value="my-value">{text}</Button>);
    const button = screen.getByRole('button');

    expect(button).toHaveAttribute('value', 'my-value');
  });

  it('can be connected to a form element it is not contained in', () => {
    const submitHandler = vi.fn((event) => event.preventDefault());
    render(
      <>
        <form id="form-id" onSubmit={submitHandler}></form>
        <Button type="submit" form="form-id">
          {text}
        </Button>
      </>,
    );
    const button = screen.getByRole('button');
    button.click();
    expect(submitHandler).toHaveBeenCalled();
  });

  it('can change type via the type attribute', () => {
    render(<Button type="submit">{text}</Button>);
    const button = screen.getByRole('button');

    expect(button).toHaveAttribute('type', 'submit');
  });

  it('can cancel a click by moving the pointer away', async () => {
    const user = userEvent.setup();
    const clickHandler = vi.fn(() => {});
    render(<Button onClick={clickHandler}>{text}</Button>);
    const button = screen.getByRole('button');

    await user.pointer([
      { keys: '[TouchA>]', target: button },
      { pointerName: 'TouchA', target: document.body },
      { keys: '[/TouchA]' },
    ]);

    expect(clickHandler).not.toHaveBeenCalled();
  });

  it('renders an element with class name "nl-button"', () => {
    render(<Button>{text}</Button>);
    const button = screen.getByRole('button');

    expect(button).toHaveClass('nl-button');
  });

  it(`renders an element with an extra class name "${extraClassName}"`, () => {
    render(<Button className={extraClassName}>{text}</Button>);
    const button = screen.getByRole('button');

    expect(button).toHaveClass('nl-button', extraClassName);
  });

  it('renders a visible "button" element', () => {
    render(<Button>{text}</Button>);
    const button = screen.getByRole('button');

    expect(button).toBeVisible();
  });

  it('renders rich text content', () => {
    render(
      <Button>
        <strong data-testid={testRichTextId}>{text}</strong>
      </Button>,
    );
    const button = screen.getByRole('button');
    const richText = screen.getByTestId(testRichTextId);

    expect(button).toContainElement(richText);
  });

  it('forwards React refs to the HTMLAnchorElement', () => {
    const ref = createRef<HTMLButtonElement>();
    render(<Button ref={ref}>{text}</Button>);
    const button = screen.getByRole('button');

    expect(button).toBeInstanceOf(HTMLButtonElement);
  });
});
