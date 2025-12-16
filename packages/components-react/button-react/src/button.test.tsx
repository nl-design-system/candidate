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

  it('accepts a type="submit" prop', () => {
    render(<Button type="submit">{text}</Button>);
    const button = screen.getByRole('button');

    expect(button).toHaveClass('nl-button--submit');
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
    const clickHandler = vi.fn();
    render(<Button onClick={clickHandler}>{text}</Button>);
    const button = screen.getByRole('button');

    button.focus();
    await user.keyboard('[Space]');

    expect(clickHandler).toHaveBeenCalled();
  });

  it('can be triggered with the left mouse click', async () => {
    const user = userEvent.setup();
    const clickHandler = vi.fn();
    render(<Button onClick={clickHandler}>{text}</Button>);
    const button = screen.getByRole('button');

    await user.pointer([{ keys: '[MouseLeft]', target: button }]);

    expect(clickHandler).toHaveBeenCalled();
  });

  it('can be triggered with the enter key', async () => {
    const user = userEvent.setup();
    const clickHandler = vi.fn();
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
    render(<Button pressed>{text}</Button>);
    const button = screen.getByRole('button');

    expect(button).toHaveAttribute('aria-pressed', 'true');
  });

  it('can be disabled', () => {
    render(<Button disabled>{text}</Button>);
    const button = screen.getByRole('button');

    expect(button).toHaveAttribute('aria-disabled', 'true');
  });

  it('can be disabled with htmlDisabled', () => {
    render(<Button htmlDisabled>{text}</Button>);
    const button = screen.getByRole('button');

    expect(button).toBeDisabled();
  });

  it('can cancel a click by moving the pointer away', async () => {
    const user = userEvent.setup();
    const clickHandler = vi.fn();
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

  it('forwards React refs to the HTMLButtonElement', () => {
    const ref = createRef<HTMLButtonElement>();
    render(<Button ref={ref}>{text}</Button>);
    const button = screen.getByRole('button');

    expect(ref.current).toBe(button);
    expect(button).toBeInstanceOf(HTMLButtonElement);
  });

  it('emits an onClick event', async () => {
    const user = userEvent.setup();
    const clickHandler = vi.fn();
    render(<Button onClick={clickHandler}>{text}</Button>);
    const button = screen.getByRole('button');

    await user.click(button);

    expect(clickHandler).toHaveBeenCalled();
  });

  it('emits an onMouseDown event', async () => {
    const user = userEvent.setup();
    const handler = vi.fn();
    render(<Button onMouseDown={handler}>{text}</Button>);
    const button = screen.getByRole('button');

    await user.pointer([{ keys: '[MouseLeft>]', target: button }]);

    expect(handler).toHaveBeenCalled();
  });

  it('emits an onMouseUp event', async () => {
    const user = userEvent.setup();
    const handler = vi.fn();
    render(<Button onMouseUp={handler}>{text}</Button>);
    const button = screen.getByRole('button');

    await user.pointer([{ keys: '[MouseLeft]', target: button }]);

    expect(handler).toHaveBeenCalled();
  });

  it('emits an onKeyDown event', async () => {
    const user = userEvent.setup();
    const handler = vi.fn();
    render(<Button onKeyDown={handler}>{text}</Button>);
    const button = screen.getByRole('button');

    button.focus();
    await user.keyboard('{a>}');

    expect(handler).toHaveBeenCalled();
  });

  it('emits an onKeyUp event', async () => {
    const user = userEvent.setup();
    const handler = vi.fn();
    render(<Button onKeyUp={handler}>{text}</Button>);
    const button = screen.getByRole('button');

    button.focus();
    await user.keyboard('{a}');

    expect(handler).toHaveBeenCalled();
  });

  it('emits an onFocus event', async () => {
    const user = userEvent.setup();
    const handler = vi.fn();
    render(<Button onFocus={handler}>{text}</Button>);

    expect(document.body).toHaveFocus();
    await user.tab();

    expect(handler).toHaveBeenCalled();
  });

  it('emits an onBlur event', async () => {
    const user = userEvent.setup();
    const handler = vi.fn();
    render(<Button onBlur={handler}>{text}</Button>);
    const button = screen.getByRole('button');

    expect(document.body).toHaveFocus();
    await user.tab();
    expect(button).toHaveFocus();
    await user.tab();

    expect(handler).toHaveBeenCalled();
  });

  it('accepts an purpose="primary" prop', () => {
    render(<Button purpose="primary">{text}</Button>);
    const button = screen.getByRole('button');

    expect(button).toHaveClass('nl-button--primary');
  });

  it('accepts an purpose="secondary" prop', () => {
    render(<Button purpose="secondary">{text}</Button>);
    const button = screen.getByRole('button');

    expect(button).toHaveClass('nl-button--secondary');
  });

  it('accepts an purpose="subtle" prop', () => {
    render(<Button purpose="subtle">{text}</Button>);
    const button = screen.getByRole('button');

    expect(button).toHaveClass('nl-button--subtle');
  });

  it('accepts an hint="postive" prop', () => {
    render(
      <Button purpose="primary" hint="positive">
        {text}
      </Button>,
    );
    const button = screen.getByRole('button');

    expect(button).toHaveClass('nl-button--positive');
  });

  it('accepts an hint="negative" prop', () => {
    render(
      <Button purpose="primary" hint="negative">
        {text}
      </Button>,
    );
    const button = screen.getByRole('button');

    expect(button).toHaveClass('nl-button--negative');
  });

  it('does not accept a hint prop when purpose is not set', () => {
    // @ts-expect-error: The point of this code is the error
    render(<Button hint="negative">{text}</Button>);
    const button = screen.getByRole('button');

    expect(button).not.toHaveClass('nl-button--negative');
  });

  it('renders label prop in a wrapper span', () => {
    render(<Button label={text} />);
    const span = screen.getByText(text);

    expect(span).toHaveClass('nl-button__label');
  });

  it('renders formatted children in a wrapper when an iconStart is present', () => {
    render(
      <Button iconStart="❤️">
        <span>a</span>
        <span>b</span>
      </Button>,
    );
    const button = screen.getByRole('button');

    expect(button.childElementCount).toBe(2);
  });

  it('renders formatted children in a wrapper when an iconEnd is present', () => {
    render(
      <Button iconEnd="❤️">
        <span>a</span>
        <span>b</span>
      </Button>,
    );
    const button = screen.getByRole('button');

    expect(button.childElementCount).toBe(2);
  });
});
