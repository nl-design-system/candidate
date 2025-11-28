import type { Meta } from '@storybook/react-vite';
import { Paragraph } from '@nl-design-system-candidate/paragraph-react/css';

const CLASSES = 'classes';

const meta = {
  argTypes: {
    nlParagraph: {
      name: 'nl-paragraph',
      description: 'De basis class van dit component',
      control: false,
      type: { name: 'other', value: 'string', required: true },
      table: {
        category: CLASSES,
        type: { summary: undefined },
      },
    },
    children: {
      table: { disable: true },
    },
  },
  component: (props) => <Paragraph {...props} />,
} satisfies Meta;

export default meta;
