import type { Meta, StoryObj } from '@storybook/react-vite';
import clsx from 'clsx';
import '@utrecht/icon-css/dist/index.css';
import '../../components-css/icon-css/src/icon.scss';
import '../../components-css/button-css/src/button.scss';
import '../../components-css/button-css/src/test.scss';
import { Button as ButtonComponent } from '../../components-react/button-react/src/button';
import { ButtonGrid as ButtonGridTable } from './button-grid';

const meta = {
  args: {
    label: 'Example',
  },
  component: ButtonComponent,
  // These are visual test grids, not usage documentation: keep them out of the "Componenten/Button" docs page
  // that button.stories.tsx owns, both as its docs source and as entries in its Stories list.
  parameters: {
    docs: {
      disable: true,
    },
  },
  tags: ['!autodocs'],
  title: 'Componenten/Button',
} satisfies Meta<typeof ButtonComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ButtonGrid: Story = {
  render: ({ ...args }) => <ButtonGridTable args={args} />,
};

export const ButtonGridForcedColors: Story = {
  render: ({ ...args }) => (
    <ButtonGridTable
      args={args}
      getClassName={(state) => clsx(state && `nl-button--${state}-test`, 'nl-button--forced-colors-test')}
    />
  ),
};
