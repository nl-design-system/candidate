import type { Meta } from '@storybook/react-vite';
import { UnorderedList } from '@nl-design-system-candidate/unordered-list-react/css';

const meta = {
  argTypes: {
    children: { control: 'text', table: { category: 'API' } },
  },
  component: UnorderedList,
} satisfies Meta<typeof UnorderedList>;

export default meta;
