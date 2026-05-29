import type { Meta } from '@storybook/react-vite';
import { Alert } from '@nl-design-system-candidate/alert-react/css';

const CLASSES = 'classes';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ATTRIBUTES = 'attributes';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CHILDREN = 'children';

const meta = {
  parameters: {
    docs: {
      description: {
        // component: 'Als de `purpose` prop is gezet, kan er optioneel een `hint` mee gegeven worden',
      },
    },
  },
  argTypes: {
    nlAlert: {
      name: 'nl-alert',
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
  args: {
    nlButton: undefined,
    children: 'Alert',
  },
  component: ({ className, ...props }) => {
    const classes = className || '';

    return <Alert {...props} className={classes} />;
  },
} satisfies Meta;

export default meta;
