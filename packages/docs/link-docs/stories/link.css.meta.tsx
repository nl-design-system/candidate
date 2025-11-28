import type { Meta } from '@storybook/react-vite';
import { Link } from '@nl-design-system-candidate/link-react/css';

const CLASSES = 'classes';

const meta = {
  argTypes: {
    nlLink: {
      name: 'nl-link',
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
  component: (props) => <Link {...props} />,
} satisfies Meta;

export default meta;
