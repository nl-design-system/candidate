import type { Meta, StoryObj } from '@storybook/react';
import { ExampleBodyTextDecorator } from '@nl-design-system-candidate/storybook-shared/src/ExampleBodyTextDecorator';
import { useId } from 'react';
import packageJSON from '../../../components-react/color-sample-react/package.json';
import { ColorSample } from '../../../components-react/color-sample-react/src/css';
import { Paragraph } from '../../../components-react/paragraph-react/src/css';
import componentMarkdown from '../../../docs/color-sample-docs/docs/component.md?raw';
import tokens from '../../../tokens/color-sample-tokens/tokens.json';

const meta = {
  argTypes: {
    'aria-labelledby': { control: 'text', table: { category: 'API' } },
    value: { control: 'color', table: { category: 'API' } },
  },
  component: ColorSample,
  decorators: [ExampleBodyTextDecorator],
  parameters: {
    docs: {
      description: {
        component: componentMarkdown,
      },
    },
    externalLinks: [
      {
        name: 'Open in Figma',
        url: 'https://www.figma.com/design/shhwGcqPLi2CapK0P1zz8O/NLDS---Voorbeeld---Bibliotheek?node-id=13781-17931',
      },
      {
        name: 'Open op GitHub',
        url: packageJSON.homepage,
      },
    ],
    tokens,
  },

  title: 'Componenten/Color Sample',
} satisfies Meta<typeof ColorSample>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Color Sample voor "deep pink"',
  args: { value: '#ff1493' },
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  parameters: {
    ariaLabelledBy: 'De kleur "#ff1493".',
    docs: {
      description: {
        story: 'Een kleurstaal met beschrijving.',
      },
    },
    status: { type: [] },
  },
  render(props, context) {
    const id = useId();

    return (
      <>
        <ColorSample {...props} aria-labelledby={id} />
        <Paragraph id={id}>{context.parameters['ariaLabelledBy']}</Paragraph>
      </>
    );
  },
};

export const SemiTransparentColorSample: Story = {
  name: 'Color Sample met semi-transparente "deep pink"',
  args: { value: '#ff14937f' },
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  parameters: {
    ariaLabelledBy: 'De semi-transparante kleur "#ff14937f".',
    docs: {
      description: {
        story: 'Een kleurstaal met een semitransparante kleur en beschrijving.',
      },
    },
    status: { type: [] },
  },
  render(props, context) {
    const id = useId();

    return (
      <>
        <ColorSample {...props} aria-labelledby={id} />
        <Paragraph id={id}>{context.parameters['ariaLabelledBy']}</Paragraph>
      </>
    );
  },
};

export const SoloColorSample: Story = {
  name: 'Color Sample als afbeelding met toegankelijke naam',
  args: {
    title: 'De kleur "#ff1493".',
    value: '#ff1493',
  },
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Een kleurstaal zonder expliciete beschrijving. Deze vorm mag alleen gebruikt worden als de kleur elders in de context toegelicht is.',
      },
    },
    status: { type: [] },
  },
};

export const Arabic: Story = {
  name: 'Color Sample met beschrijving in Arabisch',
  args: { value: 'rgb(58 131 73)' },
  globals: {
    dir: 'rtl',
    lang: 'ar',
    title: 'أخضر',
  },
  parameters: {
    ariaLabelledBy: 'أخضر',
    docs: {
      description: {
        story: 'Een kleurstaal met beschrijving in Arabisch.',
      },
    },
    status: { type: [] },
  },
  render(props, context) {
    const id = useId();

    return (
      <>
        <ColorSample {...props} aria-labelledby={id} />
        <Paragraph id={id}>{context.parameters['ariaLabelledBy']}</Paragraph>
      </>
    );
  },
};

export const Japanese: Story = {
  name: 'Color Sample met beschrijving in het Japans',
  args: { value: '#00B16B' },
  globals: {
    dir: 'ltr',
    lang: 'ja',
    title: '緑',
    writingMode: 'vertical-rl',
  },
  parameters: {
    ariaLabelledBy: '緑',
    docs: {
      description: {
        story: 'Een kleurstaal met beschrijving in het Japans.',
      },
    },
    status: { type: [] },
  },
  render(props, context) {
    const id = useId();

    return (
      <>
        <ColorSample {...props} aria-labelledby={id} />
        <Paragraph id={id}>{context.parameters['ariaLabelledBy']}</Paragraph>
      </>
    );
  },
};
