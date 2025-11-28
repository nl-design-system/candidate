import type { Meta } from '@storybook/react-vite';
import { NewComponent } from '@nl-design-system-candidate/new-component-react/css';

const CLASSES = 'classes';

const meta = {
  argTypes: {
    nlNewComponent: {
      name: 'nl-new-component',
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
  component: (props) => <NewComponent {...props} />,
} satisfies Meta;

export default meta;
