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

  it('handles [autofocus] correctly', () => {
    render(<ButtonComponent autoFocus />);
    const button = screen.getByRole('button');
    expect(button).toHaveFocus();
  });

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
