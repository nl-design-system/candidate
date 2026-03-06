// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { ComponentType } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  NewComponent as NewComponentComponent,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  type NewComponentProps,
} from '@nl-design-system-candidate/new-component-react';

const _meta = { component: NewComponentComponent } satisfies Meta<typeof NewComponentComponent>;

type Story = StoryObj<typeof _meta>;

export const NewComponent: Story = {
  name: 'New Component',
  args: {
    children: `New Component`,
  },
  parameters: {
    docs: {
      description: {
        story: `Een standaard New Component`,
      },
    },
  },
};
