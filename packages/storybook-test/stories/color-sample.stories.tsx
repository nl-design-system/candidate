import type { Meta, StoryObj } from '@storybook/react';
import { useId } from 'react';
import packageJSON from '../../components-react/color-sample-react/package.json';
import { ColorSample } from '../../components-react/color-sample-react/src/css';
import { Paragraph } from '../../components-react/paragraph-react/src/css';

const meta = {
  argTypes: {
    'aria-labelledby': { control: 'text', table: { category: 'API' } },
    color: { control: 'color', table: { category: 'API' } },
  },
  component: ColorSample,
  parameters: {
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
  },

  title: 'Componenten/Color Sample',
} satisfies Meta<typeof ColorSample>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Color Sample',
  args: { color: '#ff1493' },
  parameters: {
    ariaLabelledBy: 'De kleur "#ff1493".',
    docs: {
      description: {
        story: 'Een kleurstaal met beschrijving.',
      },
    },
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
  name: 'Color Sample (Semi-transparente kleur)',
  args: { color: '#ff14937f' },
  parameters: {
    ariaLabelledBy: 'De semi-transparante kleur "#ff14937f".',
    docs: {
      description: {
        story: 'Een kleurstaal met een semitransparante kleur en beschrijving.',
      },
    },
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
  name: 'Color Sample met title',
  args: {
    color: '#ff1493',
    title: 'De kleur "#ff1493".',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Een kleurstaal zonder expliciete beschrijving. Deze vorm mag alleen gebruikt worden als de kleur elders in de context toegelicht is.',
      },
    },
  },
};

export const FailedColorSample: Story = {
  name: 'Color Sample foutief gebruikt',
  args: { color: '#ff1493' },
  parameters: {
    docs: {
      description: {
        story: 'Foutief gebruik van de een kleurstaal zonder expliciete beschrijving.',
      },
    },
  },
};
