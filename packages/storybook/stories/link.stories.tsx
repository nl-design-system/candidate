import type { Meta, StoryObj } from '@storybook/react';
import { ExampleBodyTextDecorator } from '@nl-design-system-candidate/storybook-shared/src/ExampleBodyTextDecorator';
import { ParagraphDecorator } from '@nl-design-system-candidate/storybook-shared/src/ParagraphDecorator';
import packageJSON from '../../components-react/link-react/package.json';
import { Link } from '../../components-react/link-react/src/css';
import { Paragraph } from '../../components-react/paragraph-react/src/css';

const meta = {
  argTypes: {
    children: { table: { category: 'API' }, type: 'string' },
    href: { table: { category: 'API' } },
    target: {
      control: { labels: { undefined: '(undefined)' }, type: 'select' },
      options: [undefined, '_blank', '_parent', '_self', '_top'],
      table: { category: 'API' },
    },
  },
  component: Link,
  decorators: [ParagraphDecorator, ExampleBodyTextDecorator],
  parameters: {
    externalLinks: [
      {
        name: 'Open in Figma',
        url: 'https://www.figma.com/design/shhwGcqPLi2CapK0P1zz8O/NLDS---Voorbeeld---Bibliotheek?node-id=153-1056',
      },
      {
        name: 'Open op GitHub',
        url: packageJSON.homepage,
      },
    ],
  },
  title: 'Link',
} satisfies Meta<typeof Link>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Link',
  args: {
    children: 'voorbeeldsite',
    href: 'https://example.com',
  },
};

export const LinkInParagraph: Story = {
  name: 'Link in een Paragraph',
  args: {
    href: 'https://example.com',
  },
  render(args) {
    return (
      <Paragraph>
        In deze paragraaf staat een <Link {...args}>link naar een voorbeeldsite</Link>.
      </Paragraph>
    );
  },
};
