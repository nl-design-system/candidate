import type { Meta, StoryObj } from '@storybook/react';
import type { SkipLinkProps } from '../../../components-react/skip-link-react/src/skip-link';
import { Heading } from '../../../components-react/heading-react/src/css';
import { Paragraph } from '../../../components-react/paragraph-react/src/css';
import packageJSON from '../../../components-react/skip-link-react/package.json';
import { SkipLink } from '../../../components-react/skip-link-react/src/css';

const ExamplePage = (props: SkipLinkProps & { headingText: string; paragraphText: string }) => (
  <>
    <SkipLink {...props} />
    <main id={props.href?.substring(1)}>
      <Heading level={1}>{props.headingText}</Heading>
      <Paragraph>{props.paragraphText}</Paragraph>
    </main>
  </>
);

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
    return ExamplePage({
      ...props,
      headingText: 'Test inhoud',
      paragraphText: `Wij hebben er heel wat rondgezworven, maar zijn er zeker van, dat we nog menig mooi en belangrijk plekje
        gemist hebben. Dat is maar goed ook; nu hebben wij een reden, om nog dikwijls terug te keeren naar de
        plaatsen, waar het ons zoo goed bevallen is en waar wij nu nog nieuwe en frissche dingen kunnen ontdekken.
        Indien gij daar ook aan wilt doen, zult ge het u niet beklagen.`,
    });
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
  },
};

export const FocusedSkipLink: Story = {
  name: 'Skip Link (gefocust)',
  args: {
    children: 'naar de inhoud',
    className: 'nl-skip-link--storybook-focus-visible',
    href: '#main-story-2',
  },
  parameters: {
    docs: {
      description: {
        story: 'Story beschrijving',
      },
    },
  },
};

export const RightToLeft: Story = {
  name: 'Right-to-left',
  args: {
    children: 'تخطي إلى المحتوى الرئيسي',
    href: '#main',
  },
  decorators: [
    (Story) => (
      <div dir="rtl" lang="ar">
        {Story()}
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: 'In een right-to-left pagina moet de skip link rechts uitgelijnd zijn.',
      },
    },
  },
  render(props) {
    return ExamplePage({
      ...props,
      headingText: 'أحسنت جداً',
      paragraphText: `نص لوريم إيبسوم هو نوع من النصوص المؤقتة المستخدمة بشكل شائع في صناعات التصميم والنشر لملء مساحة على الصفحة وإعطاء انطباع عن الشكل النهائي للمحتوى. نص لوريم إيبسوم باللغة العربية مشتق من نص لاتيني كتبه الفيلسوف الروماني شيشرون وقد تم استخدامه منذ ستينيات القرن العشرين. النص غير منطقي ولا ينقل أي معنى محدد، مما يسمح للمصممين بالتركيز على التخطيط والعناصر المرئية دون تشتيت الانتباه بالمحتوى الهادف.`,
    });
  },
};
