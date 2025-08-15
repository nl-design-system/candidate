import { Heading } from '@nl-design-system-candidate/heading-react/css';
import { Link } from '@nl-design-system-candidate/link-react/css';
import { Paragraph } from '@nl-design-system-candidate/paragraph-react/css';
import type { Decorator, Meta, StoryObj } from '@storybook/react';
import {
  IconAccessible,
  IconArticle,
  IconCalendarEvent,
  IconChevronLeft,
  IconChevronRight,
  IconSquareChevronRight,
  IconExternalLink,
} from '@tabler/icons-react';
import type { CSSProperties, ElementType } from 'react';
import '../../../components-css/icon-css/src/icon.scss'; // Let Vite compile the SCSS
import packageJSON from '../../../components-react/icon-react/package.json';
import { Icon } from '../../../components-react/icon-react/src/icon'; // Icon without CSS

const TablerIcons = {
  IconAccessible,
  IconArticle,
  IconCalendarEvent,
  IconChevronLeft,
  IconChevronRight,
  IconExternalLink,
  IconSquareChevronRight,
};

const meta = {
  args: {
    children: <IconAccessible />,
  },
  argTypes: {
    'aria-label': { table: { category: 'API' }, type: 'string' },
    'aria-labelledby': { table: { category: 'API' }, type: 'string' },
    bidiMirrored: { table: { category: 'API' }, type: 'boolean' },
    // Hide children as it's a React component which cannot be displayed nicely in the Storybook UI
    children: { table: { category: 'API', disable: true } },
    className: { table: { category: 'API' }, type: 'string' },
    role: {
      control: { labels: { undefined: '(undefined)' }, type: 'select' },
      options: [undefined, 'img'],
      table: { category: 'API' },
    },
    size: {
      control: { labels: { undefined: '(undefined)' }, type: 'select' },
      options: [undefined, 'em', 'ex'],
      table: { category: 'API' },
    },
  },
  component: Icon,
  parameters: {
    externalLinks: [
      {
        name: 'Open op NL Design System',
        url: 'https://nldesignsystem.nl/icon',
      },
      {
        name: 'Open op GitHub',
        url: packageJSON.homepage,
      },
    ],
  },
  title: 'Componenten/Icon',
} satisfies Meta<typeof Icon>;

const AutoVerticalAlignDecorator: Decorator = function AutoVerticalAlignDecorator(Story) {
  const style = {
    '--nl-icon-inset-block-start': 'calc(-0.5 * (1cap - 1ex)',
  } as CSSProperties;

  return (
    <div style={style}>
      <Story />
    </div>
  );
};

const withFlexDecorator = (flexDirection: CSSProperties['flexDirection'] = 'row'): Decorator =>
  function FlexDecorator(Story) {
    const style: CSSProperties = {
      alignItems: 'center',
      display: 'flex',
      flexDirection,
      gap: '0.5rem',
    };

    return (
      <div style={style}>
        <Story />
      </div>
    );
  };

const withBoxDecorator = (inlineSize: CSSProperties['inlineSize'] = 'max-content'): Decorator =>
  function BoxDecorator(Story) {
    const style: CSSProperties = {
      border: '1px dashed',
      inlineSize,
      paddingBlock: '1rem',
      paddingInline: '0.5rem',
    };

    return (
      <div style={style}>
        <Story />
      </div>
    );
  };

export default meta;

type Story = StoryObj<typeof meta>;

export const DifferentIcons: Story = {
  args: {
    children: 'IconAccessible',
  },
  argTypes: {
    children: {
      control: { type: 'select' },
      mapping: TablerIcons,
      options: Object.keys(TablerIcons),
      table: { disable: false },
    },
  },
  render({ children, ...restProps }) {
    const TablerIcon = children as ElementType;
    return (
      <Icon {...restProps}>
        <TablerIcon />
      </Icon>
    );
  },
};

export const AriaHidden: Story = {
  name: 'Decoratief icoon met aria-hidden',
  parameters: {
    docs: {
      description: {
        story:
          'Wanneer een icon decoratief is, is het niet nodig dat een bezoeker die gebruik maakt van hulpsoftware weet dat er een icon aanwezig is. Daarom is het nodig dat de icon aria-hidden ondersteunt.',
      },
    },
  },
};

export const RoleImg: Story = {
  name: 'Icoon met afbeelding rol',
  args: {
    role: 'img',
    'aria-label': 'Icoon',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Wanneer een icon niet verborgen is voor hulpsoftware, moet de rol goed gecommuniceerd worden in de accessibility tree. Voor een icon is dit role="img".',
      },
    },
  },
};

export const AriaLabel: Story = {
  name: 'Icoon met aria-label',
  args: {
    role: 'img',
    'aria-label': 'Icoon',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Om ervoor te zorgen dat de icon een alternatieve tekst kan hebben, is het nodig dat het een `aria-label` attribuut kan bevatten.',
      },
    },
  },
};

export const AriaLabelledby: Story = {
  name: 'Icoon met aria-labelledby',
  args: {
    role: 'img',
    'aria-labelledby': 'paragraph',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Om ervoor te zorgen dat de icon een alternatieve tekst kan hebben, is het nodig dat het een `aria-labelledby` attribuut kan bevatten.',
      },
    },
  },
  render(props) {
    return (
      <>
        <Paragraph id="paragraph">Symbool voor toegankelijkheid</Paragraph>
        <Paragraph>
          <Icon {...props} />
        </Paragraph>
      </>
    );
  },
};

export const IconUsingLineHeight: Story = {
  args: { children: <IconCalendarEvent /> },
  decorators: [AutoVerticalAlignDecorator],
  parameters: { docs: { description: { story: '' } } },
  render(props) {
    return (
      <Paragraph>
        <Icon {...props} /> Een afspraak maken
      </Paragraph>
    );
  },
};

export const IconUsingFontSize: Story = {
  args: { children: <IconCalendarEvent />, size: 'em' },
  decorators: [AutoVerticalAlignDecorator],
  parameters: { docs: { description: { story: '' } } },
  render(props) {
    return (
      <Paragraph>
        <Icon {...props} /> Een afspraak maken
      </Paragraph>
    );
  },
};

export const IconUsingXHeight: Story = {
  args: { children: <IconCalendarEvent />, size: 'ex' },
  parameters: { docs: { description: { story: '' } } },
  render(props) {
    return (
      <Paragraph>
        <Icon {...props} /> Een afspraak maken
      </Paragraph>
    );
  },
};

export const IconWithBidiMirroredUsingXHeight: Story = {
  args: { bidiMirrored: true, children: <IconChevronRight />, size: 'ex' },
  parameters: { docs: { description: { story: '' } } },
  render(props) {
    return (
      <Paragraph dir="rtl" lang="ar">
        <Icon {...props} /> طلب جواز سفر
      </Paragraph>
    );
  },
};

export const IconWithParentColor: Story = {
  args: { children: <IconCalendarEvent /> },
  decorators: [AutoVerticalAlignDecorator],
  parameters: { docs: { description: { story: '' } } },
  render(props) {
    return (
      <Heading level={1} style={{ color: 'tomato' }}>
        <Icon {...props} /> Een afspraak maken
      </Heading>
    );
  },
};

export const IconWithExplicitColor: Story = {
  args: {
    children: <IconCalendarEvent />,
    style: {
      '--nl-icon-color': 'tomato',
    } as CSSProperties,
  },
  decorators: [AutoVerticalAlignDecorator],
  parameters: { docs: { description: { story: '' } } },
  render(props) {
    return (
      <Heading level={1}>
        <Icon {...props} /> Een afspraak maken
      </Heading>
    );
  },
};

export const ParagraphWithIcon: Story = {
  args: { children: <IconCalendarEvent /> },
  decorators: [AutoVerticalAlignDecorator],
  parameters: { docs: { description: { story: '' } } },
  render(props) {
    return (
      <Paragraph>
        Vandaag nog een <Icon {...props} /> afspraak maken.
      </Paragraph>
    );
  },
};

export const HeadingLevel1WithIcon: Story = {
  args: { children: <IconCalendarEvent /> },
  decorators: [AutoVerticalAlignDecorator],
  parameters: { docs: { description: { story: '' } } },
  render(props) {
    return (
      <Heading level={1}>
        <Icon {...props} /> Een afspraak maken
      </Heading>
    );
  },
};

export const HeadingLevel2WithIcon: Story = {
  args: { children: <IconCalendarEvent /> },
  decorators: [AutoVerticalAlignDecorator],
  parameters: { docs: { description: { story: '' } } },
  render(props) {
    return (
      <Heading level={2}>
        <Icon {...props} /> Een afspraak maken
      </Heading>
    );
  },
};

export const HeadingLevel3WithIcon: Story = {
  args: { children: <IconCalendarEvent /> },
  decorators: [AutoVerticalAlignDecorator],
  parameters: { docs: { description: { story: '' } } },
  render(props) {
    return (
      <Heading level={3}>
        <Icon {...props} /> Een afspraak maken
      </Heading>
    );
  },
};

export const HeadingLevel4WithIcon: Story = {
  args: { children: <IconCalendarEvent /> },
  decorators: [AutoVerticalAlignDecorator],
  parameters: { docs: { description: { story: '' } } },
  render(props) {
    return (
      <Heading level={4}>
        <Icon {...props} /> Een afspraak maken
      </Heading>
    );
  },
};

export const HeadingLevel5WithIcon: Story = {
  args: { children: <IconCalendarEvent /> },
  decorators: [AutoVerticalAlignDecorator],
  parameters: { docs: { description: { story: '' } } },
  render(props) {
    return (
      <Heading level={5}>
        <Icon {...props} /> Een afspraak maken
      </Heading>
    );
  },
};

export const HeadingLevel6WithIcon: Story = {
  args: { children: <IconCalendarEvent /> },
  decorators: [AutoVerticalAlignDecorator],
  parameters: { docs: { description: { story: '' } } },
  render(props) {
    return (
      <Heading level={6}>
        <Icon {...props} /> Een afspraak maken
      </Heading>
    );
  },
};

export const NarrowHeadingLevel1WithIcon: Story = {
  args: { children: <IconCalendarEvent /> },
  decorators: [AutoVerticalAlignDecorator, withBoxDecorator('16rem')],
  parameters: { docs: { description: { story: '' } } },
  render(props) {
    return (
      <Heading level={1}>
        <Icon {...props} /> Een afspraak maken bij de Gemeente Voorbeeld
      </Heading>
    );
  },
};

export const ParagraphWithLinkWithIcon: Story = {
  args: {
    children: <IconExternalLink />,
    size: 'em',
  },
  decorators: [AutoVerticalAlignDecorator],
  parameters: { docs: { description: { story: '' } } },
  render(props) {
    return (
      <Paragraph>
        Bezoek{' '}
        <Link href="https://gebruikersonderzoeken.nl">
          gebruikersonderzoeken.nl <Icon {...props} />
        </Link>
        .
      </Paragraph>
    );
  },
};

export const IconInAFlexbox1: Story = {
  args: {
    children: <IconCalendarEvent />,
    style: {
      '--nl-icon-block-size': '2rem',
      '--nl-icon-inline-size': '2rem',
    } as CSSProperties,
  },
  decorators: [withFlexDecorator(), withBoxDecorator('8rem')],
  parameters: { docs: { description: { story: '' } } },
  render(props) {
    return (
      <>
        <Icon {...props} />
        <Paragraph>Een afspraak maken</Paragraph>
      </>
    );
  },
};

export const IconInAFlexbox2: Story = {
  args: { children: <IconCalendarEvent /> },
  decorators: [withFlexDecorator('column'), withBoxDecorator()],
  parameters: { docs: { description: { story: '' } } },
  render(props) {
    return (
      <>
        <Icon {...props} />
        <Paragraph>Een afspraak maken</Paragraph>
      </>
    );
  },
};

export const NonSquareIcon1: Story = {
  args: {
    style: {
      '--nl-icon-block-size': '1lh',
      '--nl-icon-inline-size': '0.5lh',
      border: '1px dashed',
      fontSize: '4rem',
    } as CSSProperties,
  },
  parameters: { docs: { description: { story: '' } } },
};

export const NonSquareIcon2: Story = {
  args: {
    style: {
      '--nl-icon-block-size': '0.5lh',
      '--nl-icon-inline-size': '1lh',
      border: '1px dashed',
      fontSize: '4rem',
    } as CSSProperties,
  },
  parameters: { docs: { description: { story: '' } } },
};

export const CustomSizeIcon: Story = {
  args: {
    children: <IconCalendarEvent />,
    style: {
      '--nl-icon-block-size': '3rem',
      '--nl-icon-inline-size': '3rem',
      border: '1px dashed',
    } as CSSProperties,
  },
  parameters: { docs: { description: { story: '' } } },
};

export const EmIconAndParagraphInFlexbox: Story = {
  args: {
    children: <IconCalendarEvent />,
    size: 'em',
  },
  decorators: [withFlexDecorator()],
  parameters: { docs: { description: { story: '' } } },
  render(props) {
    return (
      <>
        <Icon {...props} />
        <Paragraph>Een afspraak maken.</Paragraph>
      </>
    );
  },
};
export const LhIconAndParagraphInFlexbox: Story = {
  args: {
    children: <IconCalendarEvent />,
  },
  decorators: [withFlexDecorator()],
  parameters: { docs: { description: { story: '' } } },
  render(props) {
    return (
      <>
        <Icon {...props} />
        <Paragraph>Een afspraak maken.</Paragraph>
      </>
    );
  },
};
export const CustomSizeIconAndParagraphInFlexbox: Story = {
  args: {
    children: <IconCalendarEvent />,
    style: {
      '--nl-icon-block-size': '3rem',
      '--nl-icon-inline-size': '3rem',
    } as CSSProperties,
  },
  decorators: [withFlexDecorator()],
  parameters: { docs: { description: { story: '' } } },
  render(props) {
    return (
      <>
        <Icon {...props} />
        <Paragraph>Een afspraak maken.</Paragraph>
      </>
    );
  },
};

export const IconsInAList: Story = {
  args: {
    size: 'em',
    style: {
      '--nl-icon-color': 'white',
      backgroundColor: 'black',
    } as CSSProperties,
  },
  decorators: [AutoVerticalAlignDecorator],
  parameters: { docs: { description: { story: '' } } },
  render(props) {
    const customIconStyle = {
      '--nl-icon-inline-size': '0.5em',
      '--nl-icon-color': 'white',
      backgroundColor: 'black',
    } as CSSProperties;
    return (
      <>
        <Paragraph>
          <Icon {...props}>
            <IconChevronRight />
          </Icon>{' '}
          Een afspraak maken
        </Paragraph>
        <Paragraph>
          <Icon {...props}>
            <IconSquareChevronRight />
          </Icon>{' '}
          Een afspraak maken
        </Paragraph>
        <Paragraph>
          <Icon {...props} style={customIconStyle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="24"
              viewBox="0 0 12 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 6l6 6l-6 6"></path>
            </svg>
          </Icon>{' '}
          Een afspraak maken
        </Paragraph>
      </>
    );
  },
};

export const IconInAComposition: Story = {
  decorators: [withBoxDecorator('16rem')],
  render(props) {
    const style = {
      '--nl-icon-block-size': 'var(--nl-heading-level-3-line-height)',
      '--nl-icon-color': 'var(--nl-heading-level-3-color)',
      '--nl-icon-inline-size': 'var(--nl-heading-level-3-line-height)',
      alignItems: 'start',
      display: 'grid',
      gap: '0.5rem',
      gridTemplateColumns: 'calc(var(--nl-heading-level-3-line-height) * var(--nl-heading-level-3-font-size)) 1fr',
    } as CSSProperties;
    return (
      <div style={style}>
        <Icon {...props} />
        <Heading level={3}>Een afspraak maken met de Gemeente Voorbeeld</Heading>
      </div>
    );
  },
};
