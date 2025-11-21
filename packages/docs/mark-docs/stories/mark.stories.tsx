import type { ComponentType } from 'react';
import type { StoryObj } from '@storybook/react-vite';
import type { MarkProps } from '@nl-design-system-candidate/mark-react';

type Story = StoryObj<MarkProps>;

export const Mark: Story = {
  name: 'Mark',
  args: {
    children: 'Gemarkeerde tekst',
  },
};

export const MarkInEenParagraph: Story = {
  name: 'Mark in een Paragraph',
  render: (_props, { component }) => {
    const Mark = component as ComponentType<MarkProps>;
    return (
      <p className="nl-paragraph">
        In deze paragraaf staat een stukje <Mark>gemarkeerde tekst</Mark>.
      </p>
    );
  },
};
