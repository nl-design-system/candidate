import type { Meta, StoryObj } from '@storybook/react-vite';
import { TextArea as TextAreaComponent } from '@nl-design-system-candidate/text-area-react';

const _meta = { component: TextAreaComponent } satisfies Meta<typeof TextAreaComponent>;

type Story = StoryObj<typeof _meta>;

export const TextArea: Story = {
  name: 'Text Area',
  args: {
    children: 'Text Area',
  },
  parameters: {
    docs: {
      description: {
        story: 'Een standaard Text Area',
      },
    },
  },
};
