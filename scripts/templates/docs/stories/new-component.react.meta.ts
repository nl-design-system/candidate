import type { Meta } from '@storybook/react-vite';
import { NewComponent } from '@nl-design-system-candidate/new-component-react';

const meta = {
  argTypes: {
    children: { control: 'text', table: { category: 'API' } },
  },
  component: NewComponent,
} satisfies Meta<typeof NewComponent>;

export default meta;
