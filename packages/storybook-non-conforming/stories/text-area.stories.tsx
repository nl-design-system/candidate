import { merge } from 'lodash-es';
import { ExampleBodyTextDecorator } from '@nl-design-system-candidate/storybook-shared/src/ExampleBodyTextDecorator';
import type { Meta, StoryObj } from '@storybook/react-vite';
import '../../components-css/text-area-css/src/text-area.scss';
import packageJSON from '../../components-react/text-area-react/package.json';
import { TextArea as TextAreaComponent } from '../../components-react/text-area-react/src/text-area';
import componentMarkdown from '../../docs/text-area-docs/docs/component.md?raw';
import reactMeta from '../../docs/text-area-docs/stories/text-area.react.meta';

const meta = {
  ...merge({
    ...reactMeta,

    args: {
      // Vul aan door developer
    },
    decorators: [ExampleBodyTextDecorator],
    globals: {
      dir: 'ltr',
      lang: 'nl',
    },
    parameters: {
      // TODO: When component is implemented, enable Chromatic
      chromatic: { disableSnapshot: true },
      docs: {
        description: {
          component: componentMarkdown,
        },
        source: {
          type: 'dynamic',
        },
      },
      externalLinks: [
        {
          name: 'Open op NL Design System',
          url: 'https://nldesignsystem.nl/text-area',
        },
        {
          name: 'Open op GitHub',
          url: packageJSON.homepage,
        },
      ],
    },
  }),
  title: 'Componenten/Text Area',
} satisfies Meta<typeof TextAreaComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TextArea: Story = {
  name: 'Text Area',
  args: {
    children: 'Text Area',
  },
  parameters: {
    docs: {
      description: {
        story: 'Text Area',
      },
    },
    status: { type: [] },
  },
};
