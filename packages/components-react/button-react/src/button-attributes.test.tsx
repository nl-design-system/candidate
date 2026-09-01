import '@testing-library/jest-dom/vitest';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { Button, ButtonProps } from './button';

afterEach(() => {
  cleanup();
});

const text = 'text';
const ButtonComponent = (props: ButtonProps) => <Button {...props} />;

describe('Button', () => {
  it('handles [aria-controls] correctly', () => {
    render(<ButtonComponent aria-controls="region-id">{text}</ButtonComponent>);
    const button = screen.getByRole('button');

    expect(button).toHaveAttribute('aria-controls', 'region-id');
  });

  it('passes through commandfor and command attributes', () => {
    render(
      <Button commandfor="dialog" command="close">
        Close dialog
      </Button>,
    );

    expect(screen.getByRole('button')).toHaveAttribute('commandfor', 'dialog');
    expect(screen.getByRole('button')).toHaveAttribute('command', 'close');
  });
  it('handles [autofocus] correctly', () => {
    render(<ButtonComponent autoFocus />);
    const button = screen.getByRole('button');
    expect(button).toHaveFocus();
  });

  // Real navigation for `_parent`/`_top` needs an actual frame ancestry to navigate, which
  // isn't testable outside a real browser — only the attribute pass-through is verified here.
  for (const target of ['_parent', '_top'] as const) {
    it(`handles [formtarget="${target}"] correctly`, () => {
      render(<ButtonComponent formTarget={target}>{text}</ButtonComponent>);
      const button = screen.getByRole('button');

      expect(button).toHaveAttribute('formtarget', target);
    });
  }

  it('renders the HTML-attribute disabled correctly', () => {
    render(<ButtonComponent htmlDisabled />);
    const button = screen.getByRole('button');

    expect(button).toBeDisabled();
  });

  it('handles [form] correctly', () => {
    const submitHandler = vi.fn((event) => event.preventDefault());

    render(
      <>
        <form id="form-id" onSubmit={submitHandler}></form>
        <ButtonComponent type="submit" form="form-id">
          {text}
        </ButtonComponent>
      </>,
    );

    screen.getByRole('button').click();
    expect(submitHandler).toHaveBeenCalled();
  });

  it('handles [tabindex="0"] correctly', async () => {
    const user = userEvent.setup();
    render(<ButtonComponent tabIndex={0}>{text}</ButtonComponent>);
    const button = screen.getByRole('button');

    await user.tab();
    expect(button).toHaveFocus();
  });

  it('handles [tabindex="-1"] correctly', async () => {
    const user = userEvent.setup();
    render(
      <>
        <ButtonComponent tabIndex={-1}>{text}</ButtonComponent>
        <button>other</button>
      </>,
    );

    await user.tab();
    expect(screen.getByRole('button', { name: 'other' })).toHaveFocus();
  });

  it('handles [type="submit"] correctly', () => {
    const submitHandler = vi.fn((event) => event.preventDefault());

    render(
      <form id="form-id" onSubmit={submitHandler}>
        <ButtonComponent type="submit">{text}</ButtonComponent>
      </form>,
    );

    screen.getByRole('button').click();
    expect(submitHandler).toHaveBeenCalled();
  });

  it('handles [type="reset"] correctly', async () => {
    const user = userEvent.setup();

    render(
      <form>
        <input type="text" />
        <ButtonComponent type="reset">{text}</ButtonComponent>
      </form>,
    );
    const button = screen.getByRole('button');
    const input = screen.getByRole<HTMLInputElement>('textbox');

    await user.click(input);
    await user.keyboard('test123');
    expect(input.value).toBe('test123');

    await user.click(button);
    expect(input.value).toBe('');
  });

  it('handles [type="button"] correctly', () => {
    const submitHandler = vi.fn((event) => event.preventDefault());

    render(
      <form onSubmit={submitHandler}>
        <ButtonComponent type="button">{text}</ButtonComponent>
      </form>,
    );
    const button = screen.getByRole('button');
    button.click();

    expect(submitHandler).not.toHaveBeenCalled();
  });
});
