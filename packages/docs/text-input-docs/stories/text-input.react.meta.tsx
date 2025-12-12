import type { Meta } from '@storybook/react-vite';
import { TextInput } from '@nl-design-system-candidate/text-input-react/css';

const meta = {
  argTypes: {
    children: { control: 'text', table: { category: 'API' } },
  },
  component: TextInput,
} satisfies Meta<typeof TextInput>;

export default meta;
