import type { Meta } from '@storybook/react-vite';
import * as Stories from './button.stories';
import packageJSON from '../../../components-css/button-css/package.json';
import componentMarkdown from '../docs/component.md?raw';

const meta = {
  title: 'CSS Components/Button',
  argTypes: {
    root: {
      name: 'nl-button',
      control: false,
      description: 'De basis `class`. Moet op elk component gebruikt worden',
      table: {
        category: 'classes',
      },
    },
    primary: {
      name: 'nl-button--primary',
      control: false,
      description: 'Markeer de button als een `primary` button',
      table: {
        category: 'classes',
      },
    },
    secondary: {
      name: 'nl-button--secondary',
      control: false,
      description: 'Markeer de button als een `secondary` button',
      table: {
        category: 'classes',
      },
    },
    subtle: {
      name: 'nl-button--subtle',
      control: false,
      description: 'Markeer de button als een `subtle` button',
      table: {
        category: 'classes',
      },
    },
    positive: {
      name: 'nl-button--positive',
      control: false,
      description:
        'Hint naar een negatieve uitkomt na activatie. Enkel te gebruiken als er een primary, secondary of subtle doel gezet is',
      table: {
        category: 'classes',
      },
    },
    negative: {
      name: 'nl-button--negative',
      control: false,
      description:
        'Hint naar een negatieve uitkomt na activatie. Enkel te gebruiken als er een primary, secondary of subtle doel gezet is',
      table: {
        category: 'classes',
      },
    },
    pressed: {
      name: 'aria-pressed',
      description: 'Wanneer deze op `"true"` staat, blijft de button ingedrukt',
      control: 'boolean',
      table: {
        category: 'attributes',
        type: { summary: `"true" | "undefined"` },
      },
    },
    disabled: {
      name: 'aria-disabled',
      description: 'Markeert de button als disabled.',
      control: 'boolean',
      table: {
        category: 'attributes',
        type: { summary: `"true" | "undefined"` },
      },
    },
  },
  args: {
    pressed: false,
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        component: componentMarkdown,
      },
    },
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
} satisfies Meta;

export default meta;

export const Default = Stories.Default;
export const Primary = Stories.Primary;
export const Secondary = Stories.Secondary;
export const Subtle = Stories.Subtle;
export const FormattedLabelWithIcon = Stories.FormattedLabelWithIcon;
export const ToggleButton = Stories.ToggleButton;
