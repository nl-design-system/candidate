import type { Meta } from '@storybook/react-vite';
import { Button } from '@nl-design-system-candidate/button-react/css';

const meta = {
  parameters: {
    docs: {
      description: {
        component: 'Als de `purpose` prop is gezet, kan er optioneel een `hint` mee gegeven worden',
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'The label of the button',
      table: { category: 'Props' },
    },
    purpose: {
      control: 'select',
      description:
        'An optional purpose of the button. Choose the purpose wisely. To much primary buttons could confuse the user.',
      options: [undefined, 'primary', 'secondary', 'subtle'],
      table: {
        category: 'Props',
        type: { summary: `'primary' | 'secondary' | 'subtle'` },
        defaultValue: { summary: 'undefined' },
      },
    },
    hint: {
      control: 'select',
      description: `An optional hint of the type of action the button results in. This property only works when the purpose has been set to a value. \n

- \`positive\` indicates a positive or confirming result of the action
- \`negative\` indicates a negative of destructive result of the action`,
      options: [undefined, 'positive', 'negative'],
      table: {
        category: 'Props',
        type: { summary: `'positive' | 'nagative'` },
        defaultValue: { summary: 'undefined' },
      },
    },
    disabled: {
      control: 'boolean',
      description: `Indicates that the button is disabled. A disabled button is visible to the user, but not interactable. As such it could be confusing to users.

\`aria-disabled="true"\` is used to accomplish this task. This way the user is still able focus the button with a keyboard or screenreader and get notified about the disabled state.

However, the developer is responsible for managing onClick handlers!`,
      table: {
        category: 'Props',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    htmlDisabled: {
      control: false,
      description: `If you absolutely have to use the html disabled attribute, you can do so with the \`htmlDisabled\` prop. Keep in mind that this brings additional accessibility issues with it, as users are not able to focus the disabled button. Making them completely invisible to screenreader users.`,
      table: {
        category: 'Props',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    pressed: {
      control: 'boolean',
      description: 'Indicates that the button is pressed. Even if the user is not currently interacting with it.',
      table: {
        category: 'Props',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    iconStart: {
      control: false,
      table: { category: 'Props', disable: true },
    },
    iconEnd: {
      control: false,
      table: { category: 'Props', disable: true },
    },
    // @ts-expect-error: The restProps are indeed not part of the accepted props, but included here for documentation purpose
    restProps: {
      name: '{...restProps}',
      control: false,
      description:
        'All props not listed here are passed directly to the rendered `<button>` element. This means that all attributes available on a html button can be added as prop',
      table: {
        category: 'Props',
        type: {
          summary: 'Examples',
          detail: 'command="show-dialog"\ncommandFor="dialog-id"\n\'aria-labelledby\'="label-id"',
        },
      },
    },
    children: {
      control: false,
      description: 'The label of the button',
      table: {
        category: 'API',
        type: { summary: 'ReactNode' },
      },
    },
  },
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
