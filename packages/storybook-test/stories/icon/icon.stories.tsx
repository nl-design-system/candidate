import type { Meta, StoryObj } from '@storybook/react';
import packageJSON from '../../../components-react/icon-react/package.json';
import { Icon } from '../../../components-react/icon-react/src/css';
import { Paragraph } from '../../../components-react/paragraph-react/src/css';

const meta = {
  args: {
    children: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path stroke="none" d="M0 0h24v24H0z" />
        <path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0" />
        <path d="m10 16.5 2-3 2 3m-2-3v-2l3-1m-6 0 3 1" />
        <circle cx="12" cy="7.5" r=".5" fill="currentcolor" />
      </svg>
    ),
  },
  argTypes: {
    'aria-label': { table: { category: 'API' }, type: 'string' },
    'aria-labelledby': { table: { category: 'API' }, type: 'string' },
    // Hide children as it's a React component which cannot be displayed nicely in the Storybook UI
    children: { table: { disable: true } },
    className: { table: { category: 'API' }, type: 'string' },
    dir: {
      control: { labels: { undefined: '(undefined)' }, type: 'select' },
      options: [undefined, 'rtl', 'ltr', 'auto'],
      table: { category: 'API' },
    },
    role: {
      control: { labels: { undefined: '(undefined)' }, type: 'select' },
      options: [undefined, 'img'],
      table: { category: 'API' },
    },
  },
  component: Icon,
  parameters: {
    externalLinks: [
      {
        name: 'Open op NL Design System',
        url: 'https://nldesignsystem.nl/icon',
      },
      {
        name: 'Open op GitHub',
        url: packageJSON.homepage,
      },
    ],
  },
  title: 'Componenten/Icon',
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AriaHidden: Story = {
  name: 'Decoratief icoon met aria-hidden',
  parameters: {
    docs: {
      description: {
        story:
          'Een decoratief icoon, dat door het `aria-hidden="true"` attribuut niet voorkomt in de accessibility tree.',
      },
    },
  },
};

export const RoleImg: Story = {
  name: 'Icoon met afbeelding rol',
  args: {
    role: 'img',
    'aria-label': 'Icoon',
  },
  parameters: {
    docs: {
      description: {
        story: 'Een icoon dat door de toevoeging `role="img"` als afbeelding zichtbaar is in de accessibility tree.',
      },
    },
  },
};

export const AriaLabel: Story = {
  name: 'Icoon met aria-label',
  args: {
    role: 'img',
    'aria-label': 'Icoon',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Een icoon dat door middel van het `aria-label` attribuut een toegankelijke naam heeft die zichtbaar is in de accessibility tree.',
      },
    },
  },
};

export const AriaLabelledby: Story = {
  name: 'Icoon met aria-labelledby',
  args: {
    role: 'img',
    'aria-labelledby': 'paragraph',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Een icoon dat door middel van het `aria-labelledby` attribuut, dat verwijst naar een ander element, een toegankelijke naam heeft die zichtbaar is in de accessibility tree.',
      },
    },
  },
  render(props) {
    return (
      <>
        <Paragraph id="paragraph">Symbool voor toegankelijkheid</Paragraph>
        <Paragraph>
          <Icon {...props} />
        </Paragraph>
      </>
    );
  },
};
