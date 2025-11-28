import type { Meta } from '@storybook/react-vite';
import { SkipLink } from '@nl-design-system-candidate/skip-link-react/css';

const CLASSES = 'classes';

const meta = {
  argTypes: {
    nlSkipLink: {
      name: 'nl-skip-link',
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
  component: (props) => <SkipLink {...props} />,
} satisfies Meta;

export default meta;
