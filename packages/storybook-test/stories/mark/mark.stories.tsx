import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from '../../../components-react/heading-react/src/css';
import packageJSON from '../../../components-react/mark-react/package.json';
import { Mark } from '../../../components-react/mark-react/src/css';
import { Paragraph } from '../../../components-react/paragraph-react/src/css';
import componentMarkdown from '../../../docs/mark-docs/docs/component.md?raw';

const meta = {
  argTypes: {
    children: { table: { category: 'API' }, type: 'string' },
  },
  component: Mark,
  parameters: {
    docs: {
      description: {
        component: componentMarkdown,
      },
    },
    externalLinks: [
      {
        name: 'Open in Figma',
        url: 'https://www.figma.com/design/shhwGcqPLi2CapK0P1zz8O/NLDS---Voorbeeld---Bibliotheek?node-id=13787-19085',
      },
      {
        name: 'Open op GitHub',
        url: packageJSON.homepage,
      },
    ],
  },
  title: 'Componenten/Mark',
} satisfies Meta<typeof Mark>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Mark',
  args: {
    children: 'Gemarkeerde tekst',
  },
  parameters: {
    status: { type: [] },
  },
};

export const MarkInParagraph: Story = {
  name: 'Mark voor een volledige Paragraph',
  args: {
    children: 'gemarkeerde tekst',
  },
  parameters: {
    status: { type: [] },
  },
  render({ children }) {
    return (
      <Paragraph>
        In deze paragraaf staat een stukje <Mark>{children}</Mark>.
      </Paragraph>
    );
  },
};

export const MarkInHeading: Story = {
  name: 'Mark in een Heading',
  args: {
    children: 'gemarkeerde tekst',
  },
  parameters: {
    docs: {
      description: {
        story: 'Een Mark moet zowel werken in gewone lopende tekst, als voor grotere tekst zoals Heading.',
      },
    },
    status: { type: [] },
  },
  render({ children }) {
    return (
      <Heading level={1}>
        In deze koptekst staat een stukje <Mark>{children}</Mark>.
      </Heading>
    );
  },
};

export const MarkInLargeParagraph: Story = {
  name: 'Mark in een Paragraph',
  args: {
    children: `Wij hebben er heel wat rondgezworven, maar zijn er zeker van, dat we nog menig mooi en belangrijk plekje
          gemist hebben. Dat is maar goed ook; nu hebben wij een reden, om nog dikwijls terug te keeren naar de
          plaatsen, waar het ons zoo goed bevallen is en waar wij nu nog nieuwe en frissche dingen kunnen ontdekken.
          Indien gij daar ook aan wilt doen, zult ge het u niet beklagen.`,
  },
  parameters: {
    status: { type: [] },
  },
  render({ children }) {
    return (
      <Paragraph>
        <Mark>{children}</Mark>
      </Paragraph>
    );
  },
};

export const MarkLineHeight: Story = {
  name: 'Mark in een Paragraph met grote line-height',
  args: {
    children: `Wij hebben er heel wat rondgezworven, maar zijn er zeker van, dat we nog menig mooi en belangrijk plekje
          gemist hebben. Dat is maar goed ook; nu hebben wij een reden, om nog dikwijls terug te keeren naar de
          plaatsen, waar het ons zoo goed bevallen is en waar wij nu nog nieuwe en frissche dingen kunnen ontdekken.
          Indien gij daar ook aan wilt doen, zult ge het u niet beklagen.`,
  },
  parameters: {
    status: { type: [] },
  },
  render({ children }) {
    return (
      <Paragraph
        style={{
          lineHeight: 3,
        }}
      >
        <Mark>{children}</Mark>
      </Paragraph>
    );
  },
};

export const MarkRightToLeft: Story = {
  name: 'Mark in een right-to-left tekst.',
  args: {
    children: `نص لوريم إيبسوم هو نوع من النصوص المؤقتة المستخدمة بشكل شائع في صناعات التصميم والنشر لملء مساحة على الصفحة وإعطاء انطباع عن الشكل النهائي للمحتوى. نص لوريم إيبسوم باللغة العربية مشتق من نص لاتيني كتبه الفيلسوف الروماني شيشرون وقد تم استخدامه منذ ستينيات القرن العشرين. النص غير منطقي ولا ينقل أي معنى محدد، مما يسمح للمصممين بالتركيز على التخطيط والعناصر المرئية دون تشتيت الانتباه بالمحتوى الهادف.`,
  },
  parameters: {
    docs: {
      description: {
        story: `De Mark component werkt in principe even goed voor left-to-right als voor right-to-left, de schrijfrichting heeft geen invloed op de werking.

De schrijfrichting van de tekst moet niet beïnvloed worden door de Mark component.`,
      },
    },
    status: { type: [] },
  },
  render({ children }) {
    return (
      <Paragraph lang="ar" dir="rtl">
        <Mark>{children}</Mark>
      </Paragraph>
    );
  },
};
