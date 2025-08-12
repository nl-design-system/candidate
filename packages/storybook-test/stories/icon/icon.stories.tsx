import { Heading } from '@nl-design-system-candidate/heading-react/css';
import { Link } from '@nl-design-system-candidate/link-react/css';
import { Paragraph } from '@nl-design-system-candidate/paragraph-react/css';
import type { Decorator, Meta, StoryObj } from '@storybook/react';
import { IconCalendarEvent, IconChevronRight, IconExternalLink, IconSquareChevronRight } from '@tabler/icons-react';
import type { CSSProperties } from 'react';
import '../../../components-css/icon-css/src/icon.scss'; // Let Vite compile the SCSS
import packageJSON from '../../../components-react/icon-react/package.json';
import { Icon } from '../../../components-react/icon-react/src/icon'; // Icon without CSS

const meta = {
  args: {
    children: <IconCalendarEvent />,
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
  globals: {
    lang: 'en',
    dir: 'ltr',
  },
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

export const SVGIcon: Story = {
  name: 'Een SVG Icon',
  parameters: {
    docs: {
      description: {
        story: 'Een SVG kan gebruikt worden als Icon.',
      },
    },
  },
};

export const SVGAsIcon: Story = {
  name: 'SVG als Icon',
  args: { children: null },
  parameters: {
    docs: {
      description: {
        story: 'Een SVG met alleen de `.nl-icon` class name in te stellen.',
      },
    },
  },
  render() {
    return <IconCalendarEvent className="nl-icon" />;
  },
};

export const EmojiIcon: Story = {
  name: 'Een emoji Icon',
  args: { children: '📅' },
  parameters: {
    docs: {
      description: {
        story: 'Een emoji kan gebruikt worden als Icon.',
      },
    },
  },
};

export const SVGIconWithAriaHidden: Story = {
  name: 'Decoratief icoon met aria-hidden',
  parameters: {
    docs: {
      description: {
        story:
          'Een decoratief icoon, dat door het `aria-hidden="true"` attribuut niet voorkomt in de accessibility tree.',
      },
    },
  },
};

export const SVGIconWithRoleImg: Story = {
  name: 'Icoon met afbeelding rol',
  args: {
    role: 'img',
    'aria-label': 'Icoon',
  },
  parameters: {
    docs: {
      description: {
        story: 'Een icoon dat door de toevoeging `role="img"` als afbeelding zichtbaar is in de accessibility tree.',
      },
    },
  },
};

export const SVGIconWithAriaLabel: Story = {
  name: 'Icoon met aria-label',
  args: {
    role: 'img',
    'aria-label': 'Icoon',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Een icoon dat door middel van het `aria-label` attribuut een toegankelijke naam heeft die zichtbaar is in de accessibility tree.',
      },
    },
  },
};

export const SVGIconWithAriaLabelledby: Story = {
  name: 'Icoon met aria-labelledby',
  args: {
    role: 'img',
    'aria-labelledby': 'paragraph',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Een icoon dat door middel van het `aria-labelledby` attribuut, dat verwijst naar een ander element, een toegankelijke naam heeft die zichtbaar is in de accessibility tree.',
      },
    },
  },
  render(props) {
    return (
      <>
        <Paragraph id="paragraph">Symbool van een kalender evenement </Paragraph>
        <Paragraph>
          <Icon {...props} />
        </Paragraph>
      </>
    );
  },
};

export const SVGIconDefaultSize: Story = {
  name: 'SVG Icon default size',
  parameters: {
    docs: {
      description: {
        story: 'Een SVG Icon is standaard ingesteld op 1× de `line-height` (`1lh`) als `inline-size` en `block-size`.',
      },
    },
  },
  render(props) {
    return (
      <Paragraph>
        <Icon {...props} /> een afspraak maken
      </Paragraph>
    );
  },
};

export const SVGIconDefaultSizeInCustomLineHeight: Story = {
  name: 'SVG Icon default size met custom line-height',
  parameters: {
    docs: {
      description: {
        story:
          'Een Icon is standaard ingesteld op 1× de `line-height` (`1lh`) als de `inline-size` en `block-size` ook als de huidige `line-height` een afwijkende waarde heeft.',
      },
    },
  },
  render(props) {
    const style = {
      '--nl-paragraph-line-height': '4',
    } as CSSProperties;
    return (
      <Paragraph style={style}>
        <Icon {...props} /> een afspraak maken
      </Paragraph>
    );
  },
};

export const SVGIconSizeLh: Story = {
  name: 'SVG Icon size lh',
  args: { size: 'lh' },
  parameters: {
    docs: {
      description: {
        story:
          'Een SVG Icon kan expliciet worden ingesteld op 1× de `line-height` (`1lh`) als `inline-size` en `block-size`.',
      },
    },
  },
  render(props) {
    return (
      <Paragraph>
        <Icon {...props} /> een afspraak maken
      </Paragraph>
    );
  },
};

export const SVGIconSizeLhInCustomLineHeight: Story = {
  name: 'SVG Icon size lh met custom line-height',
  args: { size: 'lh' },
  parameters: {
    docs: {
      description: {
        story:
          'Een SVG Icon kan expliciet worden ingesteld op 1× de `line-height` (`1lh`) als `inline-size` en `block-size` ook als de huidige `line-height` een afwijkende waarde heeft.',
      },
    },
  },
  render(props) {
    return (
      <Paragraph style={{ '--nl-paragraph-line-height': 4 } as CSSProperties}>
        <Icon {...props} /> een afspraak maken
      </Paragraph>
    );
  },
};

export const SVGIconSizeEm: Story = {
  name: 'SVG Icon size em',
  args: { size: 'em' },
  parameters: {
    docs: {
      description: {
        story:
          'Een Icon kan expliciet worden ingesteld op 1× de `font-size` (`1em`) als `inline-size` en `block-size`.',
      },
    },
  },
  render(props) {
    return (
      <Paragraph>
        <Icon {...props} /> een afspraak maken
      </Paragraph>
    );
  },
};

export const SVGIconSizeEmInParagraphWithCustomFontSize: Story = {
  name: 'SVG Icon size em in custom font-size',
  args: { size: 'em' },
  parameters: {
    docs: {
      description: {
        story:
          'Een Icon kan worden ingesteld op 1× de `font-size` (`1em`) als de `inline-size` en `block-size` ook als de huidige `font-size` een afwijkende waarde heeft.',
      },
    },
  },
  render(props) {
    const style = {
      '--nl-paragraph-font-size': '3rem',
    } as CSSProperties;
    return (
      <Paragraph style={style}>
        <Icon {...props} /> een afspraak maken
      </Paragraph>
    );
  },
};

export const SVGIconSizeEx: Story = {
  name: 'SVG Icon size ex',
  args: { size: 'ex' },
  parameters: {
    docs: {
      description: {
        story:
          'Een Icon kan expliciet worden ingesteld om 1× de x-hoogte (`1ex`) als zowel `inline-size` als `block-size` te krijgen.',
      },
    },
  },
  render(props) {
    return (
      <Paragraph>
        <Icon {...props} /> een afspraak maken
      </Paragraph>
    );
  },
};

export const SVGIconSizeExInParagraphWithCustomFontSize: Story = {
  name: 'SVG Icon size ex met custom font-size',
  args: { size: 'ex' },
  parameters: {
    docs: {
      description: {
        story:
          'Een Icon kan worden ingesteld op 1× de `font-size` (`1ex`) als de `inline-size` en `block-size` ook als de huidige `font-size` een afwijkende waarde heeft.',
      },
    },
  },
  render(props) {
    const style = {
      '--nl-paragraph-font-size': '3rem',
    } as CSSProperties;
    return (
      <Paragraph style={style}>
        <Icon {...props} /> een afspraak maken
      </Paragraph>
    );
  },
};

export const SVGIconUsingBidiMirroredInRTLParagraph: Story = {
  name: 'SVG Icon bidiMirrored in RTL',
  args: { bidiMirrored: true, children: <IconChevronRight /> },
  globals: {
    lang: 'ar',
    dir: 'rtl',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Met de `bidiMirrored` prop kan een Icon worden ingesteld om mee te spiegelen met de richting van de taal zoals die is aangegeven met het `dir` attribuut in een right-to-left taal zoals Arabisch.',
      },
    },
  },
  render(props) {
    return (
      <Paragraph>
        <Icon {...props} /> طلب جواز سفر
      </Paragraph>
    );
  },
};

export const SVGIconUsingBidiMirroredInLTRParagraph: Story = {
  name: 'SVG Icon bidiMirrored in LTR',
  args: { bidiMirrored: true, children: <IconChevronRight /> },
  globals: {
    lang: 'nl',
    dir: 'ltr',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Met de `bidiMirrored` prop kan een Icon worden ingesteld om mee te spiegelen met de richting van de taal zoals die is aangegeven met het `dir` attribuut in een left-to-right taal zoals Nederlands.',
      },
    },
  },
  render(props) {
    return (
      <Paragraph>
        <Icon {...props} /> Een paspoort aanvragen
      </Paragraph>
    );
  },
};

export const SVGIconWithInheritedColor: Story = {
  name: 'SVG Icon met inherited color',
  parameters: {
    docs: {
      description: {
        story: 'Als de kleur niet expliciet is ingesteld zal het SVG Icon de kleur overnemen van een parent element.',
      },
    },
  },
  render(props) {
    return (
      <Heading level={1} style={{ color: 'tomato' }}>
        <Icon {...props} /> Een afspraak maken
      </Heading>
    );
  },
};

export const SVGIconWithExplicitColor: Story = {
  name: 'SVG Icon met expliciete kleur',
  args: {
    style: {
      '--nl-icon-color': 'tomato',
    } as CSSProperties,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Als de kleur expliciet is ingesteld met de `--nl-icon-color` design token neemt het SVG Icon niet langer de kleur over van een parent element.',
      },
    },
  },
  render(props) {
    return (
      <Heading level={1}>
        <Icon {...props} /> Een afspraak maken
      </Heading>
    );
  },
};

export const SVGIconInHeadingLevel1: Story = {
  name: 'SVG Icon in Heading level 1',
  parameters: { docs: { description: { story: 'Een SVG Icon kan worden weergegeven in een Heading met level 1' } } },
  render(props) {
    return (
      <Heading level={1}>
        <Icon {...props} /> Een afspraak maken
      </Heading>
    );
  },
};

export const SVGIconInHeadingLevel2: Story = {
  name: 'SVG Icon in Heading level 2',
  parameters: { docs: { description: { story: 'Een SVG Icon kan worden weergegeven in een Heading met level 2' } } },
  render(props) {
    return (
      <Heading level={2}>
        <Icon {...props} /> Een afspraak maken
      </Heading>
    );
  },
};

export const SVGIconInHeadingLevel3: Story = {
  name: 'SVG Icon in Heading level 3',
  parameters: { docs: { description: { story: 'Een SVG Icon kan worden weergegeven in een Heading met level 3' } } },
  render(props) {
    return (
      <Heading level={3}>
        <Icon {...props} /> Een afspraak maken
      </Heading>
    );
  },
};

export const SVGIconInHeadingLevel4: Story = {
  name: 'SVG Icon in Heading level 4',
  parameters: { docs: { description: { story: 'Een SVG Icon kan worden weergegeven in een Heading met level 4' } } },
  render(props) {
    return (
      <Heading level={4}>
        <Icon {...props} /> Een afspraak maken
      </Heading>
    );
  },
};

export const SVGIconInHeadingLevel5: Story = {
  name: 'SVG Icon in Heading level 5',
  parameters: { docs: { description: { story: 'Een SVG Icon kan worden weergegeven in een Heading met level 5' } } },
  render(props) {
    return (
      <Heading level={5}>
        <Icon {...props} /> Een afspraak maken
      </Heading>
    );
  },
};

export const SVGIconInHeadingLevel6: Story = {
  name: 'SVG Icon in Heading level 6',
  parameters: { docs: { description: { story: 'Een SVG Icon kan worden weergegeven in een Heading met level 6' } } },
  render(props) {
    return (
      <Heading level={6}>
        <Icon {...props} /> Een afspraak maken
      </Heading>
    );
  },
};

export const SVGIconInNarrowHeadingLevel1: Story = {
  name: 'SVG Icon in Heading level 1 in container',
  decorators: [withBoxDecorator('16rem')],
  parameters: {
    docs: {
      description: {
        story:
          'Een SVG Icon kan worden weergegeven in een Heading met level 1 in een smalle container waarin de Heading wordt afgebroken. Het SVG Icon staat dan inline met de rest van de Heading.',
      },
    },
  },
  render(props) {
    return (
      <Heading level={1}>
        <Icon {...props} /> Een afspraak maken bij de Gemeente Voorbeeld
      </Heading>
    );
  },
};

export const EmojiIconInHeadingLevel1: Story = {
  name: 'Emoji Icon in Heading level 1',
  args: { children: '📅' },
  parameters: { docs: { description: { story: 'Een emoji Icon kan worden weergegeven in een Heading met level 1' } } },
  render(props) {
    return (
      <Heading level={1}>
        <Icon {...props} /> Een afspraak maken
      </Heading>
    );
  },
};

export const EmojiIconInHeadingLevel2: Story = {
  name: 'Emoji Icon in Heading level 2',
  args: { children: '📅' },
  parameters: { docs: { description: { story: 'Een emoji Icon kan worden weergegeven in een Heading met level 2' } } },
  render(props) {
    return (
      <Heading level={2}>
        <Icon {...props} /> Een afspraak maken
      </Heading>
    );
  },
};

export const EmojiIconInHeadingLevel3: Story = {
  name: 'Emoji Icon in Heading level 3',
  args: { children: '📅' },
  parameters: { docs: { description: { story: 'Een emoji Icon kan worden weergegeven in een Heading met level 3' } } },
  render(props) {
    return (
      <Heading level={3}>
        <Icon {...props} /> Een afspraak maken
      </Heading>
    );
  },
};

export const EmojiIconInHeadingLevel4: Story = {
  name: 'Emoji Icon in Heading level 4',
  args: { children: '📅' },
  parameters: { docs: { description: { story: 'Een emoji Icon kan worden weergegeven in een Heading met level 4' } } },
  render(props) {
    return (
      <Heading level={4}>
        <Icon {...props} /> Een afspraak maken
      </Heading>
    );
  },
};

export const EmojiIconInHeadingLevel5: Story = {
  name: 'Emoji Icon in Heading level 5',
  args: { children: '📅' },
  parameters: { docs: { description: { story: 'Een emoji Icon kan worden weergegeven in een Heading met level 5' } } },
  render(props) {
    return (
      <Heading level={5}>
        <Icon {...props} /> Een afspraak maken
      </Heading>
    );
  },
};

export const EmojiIconInHeadingLevel6: Story = {
  name: 'Emoji Icon in Heading level 6',
  args: { children: '📅' },
  parameters: { docs: { description: { story: 'Een emoji Icon kan worden weergegeven in een Heading met level 6' } } },
  render(props) {
    return (
      <Heading level={6}>
        <Icon {...props} /> Een afspraak maken
      </Heading>
    );
  },
};

export const EmojiIconInNarrowHeadingLevel1: Story = {
  name: 'Emoji Icon in Heading level 1 in container',
  args: { children: '📅' },
  decorators: [withBoxDecorator('16rem')],
  parameters: {
    docs: {
      description: {
        story:
          'Een SVG Icon kan worden weergegeven in een Heading met level 1 in een smalle container waarin de Heading wordt afgebroken. Het SVG Icon staat dan inline met de rest van de Heading.',
      },
    },
  },
  render(props) {
    return (
      <Heading level={1}>
        <Icon {...props} /> Een afspraak maken bij de Gemeente Voorbeeld
      </Heading>
    );
  },
};

export const SVGIconInLinkInParagraph: Story = {
  name: 'SVG Icon in een Link in een Paragraph',
  args: { children: <IconExternalLink /> },
  parameters: {
    docs: {
      description: {
        story:
          'Een SVG Icon kan worden weergegeven in een Link in een Paragraaf. Het SVG Icon krijgt hierbij de kleur van de Link.',
      },
    },
  },
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

export const SVGIconSizeEmInLinkInParagraph: Story = {
  name: 'SVG Icon size em in een Link in een Paragraph',
  args: {
    children: <IconExternalLink />,
    size: 'em',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Een SVG Icon kan met size em worden weergegeven in een Link in een Paragraaf. Het SVG Icon krijgt hierbij de kleur van de Link.',
      },
    },
  },
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

export const SVGIconSizeExInLinkInParagraph: Story = {
  name: 'SVG Icon size ex in een Link in een Paragraph',
  args: {
    children: <IconExternalLink />,
    size: 'ex',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Een SVG Icon kan met size ex worden weergegeven in een Link in een Paragraaf. Het SVG Icon krijgt hierbij de kleur van de Link.',
      },
    },
  },
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

export const SVGIconInButtonInParagraph: Story = {
  name: 'SVG Icon in een button in een Paragraph',
  parameters: {
    docs: {
      description: {
        story:
          'Een SVG Icon kan worden weergegeven in een `<button>` in een Paragraaf. Het SVG Icon krijgt hierbij de kleur van de `<button>`',
      },
    },
  },
  render(props) {
    return (
      <Paragraph>
        <button type="button">
          <Icon {...props} /> Een afspraak maken
        </button>
      </Paragraph>
    );
  },
};

export const SVGIconInDisabledButtonInParagraph: Story = {
  name: 'SVG Icon in disabled button in een Paragraph',
  parameters: {
    docs: {
      description: {
        story:
          'Een SVG Icon kan worden weergegeven in een disabled `<button>` in een Paragraaf. Het SVG Icon krijgt hierbij de kleur van de disabled `<button>`',
      },
    },
  },
  render(props) {
    return (
      <Paragraph>
        <button type="button" disabled>
          <Icon {...props} /> Een afspraak maken
        </button>
      </Paragraph>
    );
  },
};

export const SVGIconInParagraphWithLetterAndWordSpacing: Story = {
  name: 'SVG Icon in Paragraph met grote letter en word spacing',
  parameters: {
    docs: {
      description: {
        story: 'Een SVG Icon kan worden weergegeven in een Paragraph met grote letter en word spacing.',
      },
    },
  },
  render(props) {
    return (
      <Paragraph style={{ letterSpacing: '0.12em', wordSpacing: '0.16em' }}>
        <Icon {...props} /> een afspraak maken
      </Paragraph>
    );
  },
};

export const SVGIconInAFlexboxRow: Story = {
  name: 'SVG Icon in een smalle flex row container',
  decorators: [withFlexDecorator(), withBoxDecorator('10rem')],
  parameters: {
    docs: {
      description: {
        story:
          'Een SVG Icon kan worden weergegeven in een net iets te smalle flex container. Het SVG Icon wordt hierbij niet in elkaar gedrukt.',
      },
    },
  },
  render(props) {
    const style = {
      '--nl-icon-color': 'white',
      backgroundColor: 'black',
    } as CSSProperties;

    return (
      <>
        <Icon {...props} style={style} />
        <Paragraph>Een afspraak maken</Paragraph>
      </>
    );
  },
};

export const SVGIconInAFlexboxColumn: Story = {
  name: 'SVG Icon in een flex column container',
  args: {
    style: {
      '--nl-icon-color': 'white',
      backgroundColor: 'black',
    } as CSSProperties,
  },
  decorators: [withFlexDecorator('column'), withBoxDecorator()],
  parameters: {
    docs: {
      description: {
        story:
          'Een SVG Icon kan worden weergegeven in een net iets te smalle flex container. Het SVG Icon wordt neemt hierbij niet de volledige breedte van de container aan.',
      },
    },
  },
  render(props) {
    return (
      <>
        <Icon {...props} />
        <Paragraph>Een afspraak maken</Paragraph>
      </>
    );
  },
};

export const CustomSizeIcon: Story = {
  name: 'SVG Icon met custom size',
  args: {
    style: {
      '--nl-icon-block-size': '5rem',
      '--nl-icon-inline-size': '5rem',
      border: '1px dashed',
    } as CSSProperties,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Een SVG Icon kan met de design tokens `--nl-icon-block-size` en `--nl-icon-inline-size` worden ingesteld op een volledig custom size.',
      },
    },
  },
};

export const SVGIconAndParagraphInFlexbox: Story = {
  name: 'SVG Icon met Paragraph in flex container',
  parameters: {
    docs: {
      description: {
        story:
          'Een SVG Icon kan met flexbox in het midden worden uitgelijnd als het staat naast een Paragraph in een flex container.',
      },
    },
  },
  render(props) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '1ch' }}>
        <Icon {...props} />
        <Paragraph>Een afspraak maken.</Paragraph>
      </div>
    );
  },
};
export const SVGIconAndParagraphInNarrowFlexbox: Story = {
  decorators: [withBoxDecorator('10rem')],
  parameters: {
    docs: {
      description: {
        story:
          'Een SVG Icon kan met flexbox bovenin worden uitgelijnd als het staat naast een Paragraph in een smalle flex container.',
      },
    },
  },
  render(props) {
    return (
      <div style={{ display: 'flex', alignItems: 'start', gap: '1ch' }}>
        <Icon {...props} />
        <Paragraph>Een afspraak maken bij de Gemeente Voorbeeld.</Paragraph>
      </div>
    );
  },
};
export const SVGIconCustomSizeAndParagraphInFlexbox: Story = {
  name: 'SVG Icon met custom size in Paragraaf in flex container',
  args: {
    style: {
      '--nl-icon-block-size': '5rem',
      '--nl-icon-inline-size': '5rem',
    } as CSSProperties,
  },
  decorators: [withBoxDecorator()],
  parameters: {
    docs: {
      description: {
        story:
          'Een SVG Icon kan met de design tokens `--nl-icon-block-size` en `--nl-icon-inline-size` worden ingesteld op een volledig custom size. Het kan dan gecentreerd worden weergegeven in een flex container.',
      },
    },
  },
  render(props) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '1ch' }}>
        <Icon {...props} />
        <Paragraph>Een afspraak maken.</Paragraph>
      </div>
    );
  },
};

export const SVGIconsInList: Story = {
  name: 'SVG Icons met verschillende groottes onder elkaar',
  args: {
    size: 'em',
    style: {
      '--nl-icon-color': 'white',
      backgroundColor: 'black',
    } as CSSProperties,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Voorbeeld van meerdere SVG Icons onder elkaar. Het laatste SVG Icon heeft een afwijkende `--nl-icon-inline-size` en lijnt daardoor niet uit met de andere SVG Icons.',
      },
    },
  },
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
              <path d="M3 6l6 6l-6 6" />
            </svg>
          </Icon>{' '}
          Een afspraak maken
        </Paragraph>
      </>
    );
  },
};

export const SVGIconInAComposition: Story = {
  name: 'SVG Icon in een compositie',
  decorators: [withBoxDecorator('16rem')],
  parameters: {
    docs: {
      description: {
        story:
          'Een SVG Icon kan ingesteld worden op een grootte en met een kleur in een compositie waarbij gebruik gemaakt worden design tokens van een ander component in de compositie zoals hier een Heading level 3.',
      },
    },
  },
  render(props) {
    return (
      <div
        style={
          {
            '--nl-icon-block-size': 'var(--nl-heading-level-3-line-height)',
            '--nl-icon-color': 'var(--nl-heading-level-3-color)',
            '--nl-icon-inline-size': 'var(--nl-heading-level-3-line-height)',
            alignItems: 'start',
            display: 'grid',
            gap: '0.5rem',
            gridTemplateColumns:
              'calc(var(--nl-heading-level-3-line-height) * var(--nl-heading-level-3-font-size)) 1fr',
          } as CSSProperties
        }
      >
        <Icon {...props} />
        <Heading level={3}>Een afspraak maken met de Gemeente Voorbeeld</Heading>
      </div>
    );
  },
};
