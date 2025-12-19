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
  it(`handles [autofocus] correctly`, () => {
    render(<ButtonComponent autoFocus />);
    const button = screen.getByRole('button');
    expect(button).toHaveFocus();
  });

  // Vitest does not report states for dialogs. Need to upgrade to vitest with browser mode
  it.todo(`handles [commandfor="id"][command="show-modal"] correctly`, async () => {
    const user = userEvent.setup();
    render(
      <>
        <dialog id="id">dialog</dialog>
        {/*<ButtonComponent commandFor="id" command="show-modal" />*/}
      </>,
    );
    const button = screen.getByRole('button');
    const dialog = screen.getByText('dialog');

    expect(dialog).not.toBeVisible();
    await user.click(button);
    expect(dialog).toBeVisible();
  });

  // Vitest does not report states for dialogs. Need to upgrade to vitest with browser mode
  it.todo(`handles [commandfor="id"][command="close"] correctly`, () => {});

  // Vitest does not report states for dialogs. Need to upgrade to vitest with browser mode
  it.todo(`handles [commandfor="id"][command="request-close"] correctly`, () => {});

  // Vitest does not report states for dialogs. Need to upgrade to vitest with browser mode
  it.todo(`handles [commandfor="id"][command="show-popover"] correctly`, () => {});

  // Vitest does not report states for dialogs. Need to upgrade to vitest with browser mode
  it.todo(`handles [commandfor="id"][command="hide-popover"] correctly`, () => {});

  // Vitest does not report states for dialogs. Need to upgrade to vitest with browser mode
  it.todo(`handles [commandfor="id"][command="toggle-popover"] correctly`, () => {});

  // Vitest does not report states for dialogs. Need to upgrade to vitest with browser mode
  it.todo(`handles [commandfor="id"][command="--custom-event"] correctly`, () => {});

  it(`handles [disabled] correctly`, () => {
    render(<ButtonComponent htmlDisabled />);
    const button = screen.getByRole('button');

    expect(button).toBeDisabled();
  });

  it(`handles [form] correctly`, () => {
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

  // Vitest does not report enough data. Need to upgrade to vitest with browser mode
  it.todo(`handles [formaction] correctly`, () => {
    // let submitEvent: SubmitEvent;
    const submitHandler = vi.fn((event) => {
      event.preventDefault();
      // submitEvent = event;
    });

    render(
      <>
        <form id="form-id" data-testid="form" onSubmit={submitHandler}></form>
        <button type="submit" form="form-id" formAction="/foo/bar/">
          {text}
        </button>
      </>,
    );

    screen.getByRole('button').click();

    // expect((submitEvent?.target as HTMLFormElement)?.action).toBe('foo');
  });

  // Vitest does not report enough data. Need to upgrade to vitest with browser mode
  it.todo(`handles [formmethod="post"] correctly`, () => {});

  // Vitest does not report enough data. Need to upgrade to vitest with browser mode
  it.todo(`handles [formmethod="get"] correctly`, () => {});

  // Vitest does not report enough data. Need to upgrade to vitest with browser mode
  it.todo(`handles [formmethod="dialog"] correctly`, () => {});

  // Vitest does not report enough data. Need to upgrade to vitest with browser mode
  it.todo(`handles [formnovalidate] correctly`, () => {});

  // Vitest does not report enough data. Need to upgrade to vitest with browser mode
  it.todo(`handles [formtarget="_self"] correctly`, () => {});

  // Vitest does not report enough data. Need to upgrade to vitest with browser mode
  it.todo(`handles [formtarget="_blank"] correctly`, () => {});

  // Vitest does not report enough data. Need to upgrade to vitest with browser mode
  it.todo(`handles [formtarget="_parent"] correctly`, () => {});

  // Vitest does not report enough data. Need to upgrade to vitest with browser mode
  it.todo(`handles [formtarget="_top"] correctly`, () => {});

  // Vitest does not report enough data. Need to upgrade to vitest with browser mode
  it.todo(`handles [name] correctly`, () => {});

  // Vitest does not report enough data. Need to upgrade to vitest with browser mode
  it.todo(`handles [popovertarget] correctly`, () => {});

  // Vitest does not report enough data. Need to upgrade to vitest with browser mode
  it.todo(`handles [popovertarget="id"][popovertargetaction="hide"] correctly`, () => {});

  // Vitest does not report enough data. Need to upgrade to vitest with browser mode
  it.todo(`handles [popovertarget="id"][popovertargetaction="show"] correctly`, () => {});

  // Vitest does not report enough data. Need to upgrade to vitest with browser mode
  it.todo(`handles [popovertarget="id"][popovertargetaction="toggle"] correctly`, () => {});

  it(`handles [type="submit"] correctly`, () => {
    const submitHandler = vi.fn((event) => event.preventDefault());

    render(
      <form id="form-id" onSubmit={submitHandler}>
        <ButtonComponent type="submit">{text}</ButtonComponent>
      </form>,
    );

    screen.getByRole('button').click();
    expect(submitHandler).toHaveBeenCalled();
  });

  it(`handles [type="reset"] correctly`, async () => {
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

  it(`handles [type="button"] correctly`, () => {
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

  // Vitest does not report enough data. Need to upgrade to vitest with browser mode
  it.todo(`handles [value="my-name"] correctly`, () => {});
});
