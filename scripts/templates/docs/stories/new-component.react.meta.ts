import type { Meta } from '@storybook/react-vite';
import { NewComponent } from '@nl-design-system-candidate/new-component-react/css';
import descriptionMarkdown from '../docs/description.md?raw';

const meta = {
  argTypes: {
    children: { control: 'text', table: { category: 'API' } },
  },
  parameters: {
    docs: {
      description: {
        component: descriptionMarkdown,
      },
    },
  },
  component: NewComponent,
} satisfies Meta<typeof NewComponent>;

export default meta;
