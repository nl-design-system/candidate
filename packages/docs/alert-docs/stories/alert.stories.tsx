// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { ComponentType } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Alert as AlertComponent,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  type AlertProps,
} from '@nl-design-system-candidate/alert-react';

const _meta = { component: AlertComponent } satisfies Meta<typeof AlertComponent>;

type Story = StoryObj<typeof _meta>;

export const Alert: Story = {
  name: 'Alert',
  args: {
    children: `Alert`,
  },
  parameters: {
    docs: {
      description: {
        story: `Een standaard Alert`,
      },
    },
  },
};
