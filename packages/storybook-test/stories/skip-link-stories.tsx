import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from '../../components-react/heading-react/src/css';
import { Paragraph } from '../../components-react/paragraph-react/src/css';
import packageJSON from '../../components-react/skip-link-react/package.json';
import { SkipLink } from '../../components-react/skip-link-react/src/css';
import '../../components-css/skip-link-css/src/test.scss';

const meta = {
  argTypes: {
    children: { table: { category: 'API' }, type: 'string' },
    href: { table: { category: 'API' } },
  },
  component: SkipLink,
  parameters: {
    docs: {
      description: {
        component: 'Component beschrijving',
      },
    },
    externalLinks: [
      {
        name: 'Open in Figma',
        url: 'https://www.figma.com/design/shhwGcqPLi2CapK0P1zz8O/NLDS---Voorbeeld---Bibliotheek?node-id=2217-10122',
      },
      {
        name: 'Open op GitHub',
        url: packageJSON.homepage,
      },
    ],
  },
  render(props) {
    return (
      <>
        <SkipLink {...props} />
        <main id={props.href?.substring(1)}>
          <Heading level={1}>Test inhoud</Heading>
          <Paragraph>
            Wij hebben er heel wat rondgezworven, maar zijn er zeker van, dat we nog menig mooi en belangrijk plekje
            gemist hebben. Dat is maar goed ook; nu hebben wij een reden, om nog dikwijls terug te keeren naar de
            plaatsen, waar het ons zoo goed bevallen is en waar wij nu nog nieuwe en frissche dingen kunnen ontdekken.
            Indien gij daar ook aan wilt doen, zult ge het u niet beklagen.
          </Paragraph>
        </main>
      </>
    );
  },
  title: 'Componenten/Skip Link',
} satisfies Meta<typeof SkipLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Skip Link',
  args: {
    children: 'naar de inhoud',
    href: '#main-story-1',
  },
  parameters: {
    docs: {
      description: {
        story: 'Story beschrijving',
      },
    },
    status: { type: [] },
  },
};

export const FocusedSkipLink: Story = {
  name: 'Skip Link (gefocust)',
  args: {
    children: 'naar de inhoud',
    className: 'nl-skip-link--test-focus-visible',
    href: '#main-story-2',
  },
  parameters: {
    docs: {
      description: {
        story: 'Story beschrijving',
      },
    },
    status: { type: [] },
  },
};
