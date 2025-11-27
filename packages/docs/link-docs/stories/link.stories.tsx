import type { ComponentType } from 'react';
import type { StoryObj } from '@storybook/react-vite';
import type { LinkProps } from '@nl-design-system-candidate/link-react';

type Story = StoryObj<LinkProps>;

export const Link: Story = {
  name: 'Link',
  args: {
    children: 'voorbeeldsite',
    href: 'https://example.com',
  },
  parameters: {
    docs: {
      description: {
        story: 'Een standaard link',
      },
    },
  },
};

export const LinkInEenParagraph: Story = {
  name: 'Link in een Paragraph',
  args: {
    children: 'link in paragraaf',
    href: 'https://example.com',
  },
  parameters: {
    docs: {
      description: {
        story: 'Een link in een paragraaf',
      },
    },
  },
  render(props, { component }) {
    const Link = component as ComponentType<LinkProps>;
    return (
      <>
        In deze paragraaf staat een <Link {...props}>link naar een voorbeeldsite</Link>.
      </>
    );
  },
};
