import type { Meta } from '@storybook/react-vite';
import { CodeBlock } from '@nl-design-system-candidate/code-block-react/css';

const CLASSES = 'classes';

const meta = {
  argTypes: {
    nlCodeBlock: {
      name: 'nl-code-block',
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
  component: (props) => <CodeBlock {...props} />,
} satisfies Meta;

export default meta;
