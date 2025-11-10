import type { Meta } from '@storybook/react-vite';
import packageJSON from '../../../components-react/button-react/package.json';
import { Button } from '../../../components-react/button-react/src/css';
import * as Stories from './button.stories';

const meta = {
  argTypes: {
    label: {
      control: 'text',
      table: { category: 'Props' },
    },
    purpose: {
      control: 'select',
      options: [undefined, 'primary', 'secondary', 'subtle'],
      table: {
        category: 'Props',
        type: { summary: `'primary' | 'secondary' | 'subtle'` },
        defaultValue: { summary: 'undefined' },
      },
    },
    hint: {
      control: 'select',
      options: [undefined, 'positive', 'negative'],
      table: {
        category: 'Props',
        type: { summary: `'positive' | 'nagative'` },
        defaultValue: { summary: 'undefined' },
      },
    },
    disabled: { control: 'boolean', table: { category: 'Props', defaultValue: { summary: 'false' } } },
    htmlDisabled: { control: false, table: { category: 'Props', defaultValue: { summary: 'false' } } },
    pressed: { control: 'boolean', table: { category: 'Props', defaultValue: { summary: 'false' } } },
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
    children: { control: false, table: { category: 'API' } },
  },
  args: {
    purpose: undefined,
    hint: undefined,
    disabled: false,
    pressed: false,
    children: undefined as never,
  },
  component: Button,
  parameters: {
    externalLinks: [
      {
        name: 'Open op NL Design System',
        url: 'https://nldesignsystem.nl/button',
      },
      {
        name: 'Open op GitHub',
        url: packageJSON.homepage,
      },
    ],
  },
  title: 'Button',
} satisfies Meta<typeof Button>;

export default meta;

export const Default = Stories.Default;
export const Primary = Stories.Primary;
export const Secondary = Stories.Secondary;
export const Subtle = Stories.Subtle;
export const FormattedLabelWithIcon = Stories.FormattedLabelWithIcon;
export const ToggleButton = Stories.ToggleButton;
