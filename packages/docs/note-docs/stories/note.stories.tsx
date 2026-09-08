import type { Meta, StoryObj } from '@storybook/react-vite';
import { Note as NoteComponent } from '@nl-design-system-candidate/note-react';

const _meta = { component: NoteComponent } satisfies Meta<typeof NoteComponent>;

type Story = StoryObj<typeof _meta>;

export const Note: Story = {
  name: 'Note',
  args: {
    children: `Note`,
  },
  parameters: {
    docs: {
      description: {
        story: `Een standaard Note`,
      },
    },
  },
};
