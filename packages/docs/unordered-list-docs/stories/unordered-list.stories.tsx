import type { StoryObj } from '@storybook/react-vite';
import {
  type UnorderedListProps,
  UnorderedList as UnorderedListComponent,
  UnorderedListItem,
} from '@nl-design-system-candidate/unordered-list-react';

type Story = StoryObj<UnorderedListProps>;

export const UnorderedList: Story = {
  name: 'Unordered List',
  args: {
    role: 'list',
  },
  render: (args) => (
    <UnorderedListComponent {...args}>
      <UnorderedListItem>
        Kinderen jonger dan 12 jaar hebben toestemming nodig bij de aanvraag van een ID-kaart.
      </UnorderedListItem>
      <UnorderedListItem>
        Kinderen jonger dan 18 jaar hebben toestemming nodig bij de aanvraag van een paspoort.
      </UnorderedListItem>
      <UnorderedListItem>Uw kind komt zelf mee naar de afspraak voor het aanvragen en ophalen.</UnorderedListItem>
    </UnorderedListComponent>
  ),
};
