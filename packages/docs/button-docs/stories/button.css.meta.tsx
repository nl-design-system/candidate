import type { Meta } from '@storybook/react-vite';
import { Button } from '@nl-design-system-candidate/button-react/css';

const CLASSES = 'classes';

const meta = {
  argTypes: {
    nlButton: {
      name: 'nl-button',
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
  component: ({ label, children, ...props }) => <Button {...props}>{label || children}</Button>,
} satisfies Meta;

export default meta;
