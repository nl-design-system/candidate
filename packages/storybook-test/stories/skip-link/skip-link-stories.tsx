import type { Decorator, Meta, StoryObj } from '@storybook/react';
import type { PropsWithChildren, ReactNode } from 'react';
import { ExampleBodyTextDecorator } from '@nl-design-system-candidate/storybook-shared/src/ExampleBodyTextDecorator';
import { Heading } from '../../../components-react/heading-react/src/css';
import { Paragraph } from '../../../components-react/paragraph-react/src/css';
import packageJSON from '../../../components-react/skip-link-react/package.json';
import { SkipLink } from '../../../components-react/skip-link-react/src/css';
import '../../../components-css/skip-link-css/src/test.scss';

interface ExamplePageProps {
  organisation: ReactNode;
  heading: ReactNode;
  mainId?: string;
  links: { href: string; children: ReactNode }[];
  paragraph: ReactNode;
}

interface ExamplePageLocale {
  dir: string;
  lang: string;
  title: string;
  page: Omit<ExamplePageProps, 'mainId'>;
}

const dutchLocale: ExamplePageLocale = {
  dir: 'ltr',
  lang: 'nl',
  page: {
    heading: 'Contact',
    links: [
      { children: 'Homepage', href: 'https://example.com/' },
      { children: 'Over ons', href: 'https://example.com/' },
      { children: 'Contact', href: 'https://example.com/' },
    ],
    organisation: 'Acme Inc.',
    paragraph: (
      <>
        {'Je kunt contact met ons opnemen via ons e-mailadres: '}
        <a href="mailto:hello@example.com">hello@example.com</a>
        {'.'}
      </>
    ),
  },
  title: 'Contact',
};

const englishLocale: ExamplePageLocale = {
  dir: 'ltr',
  lang: 'en',
  page: {
    heading: 'Supercalifragilisticexpialidocious',
    links: [
      { children: 'Homepage', href: 'https://example.com/' },
      { children: 'About us', href: 'https://example.com/' },
      { children: 'Contact', href: 'https://example.com/' },
    ],
    organisation: 'Chim Chim Cher-ee Ltd.',
    paragraph: (
      <>
        {'Contact Mary Poppins via e-mail: '}
        <a href="mailto:mary@example.com">mary@example.com</a>
        {'.'}
      </>
    ),
  },
  title: 'Contact',
};

const arabicLocale: ExamplePageLocale = {
  dir: 'rtl',
  lang: 'ar',
  page: {
    heading: 'اتصال',
    links: [
      { children: 'الصفحة الرئيسية', href: 'https://example.com/' },
      { children: 'نبذة عنا', href: 'https://example.com/' },
      { children: 'اتصل بنا', href: 'https://example.com/' },
    ],
    organisation: 'Acme Inc.',
    paragraph: (
      <>
        {'يمكنك التواصل معنا عبر عنوان البريد الإلكتروني الخاص بنا:'}
        <a href="mailto:hello@example.com">hello@example.com</a>
        {'.'}
      </>
    ),
  },
  title: 'اتصال',
};

const ExamplePage = ({
  children,
  heading,
  links,
  mainId,
  organisation,
  paragraph,
}: PropsWithChildren<ExamplePageProps>) => {
  return (
    <>
      {children}
      <header>
        <Paragraph>
          <bdi>{organisation}</bdi>
        </Paragraph>
      </header>
      <nav>
        <ul>
          {links.map(({ children, href }, index) => (
            <li key={index}>
              <a href={href}>{children}</a>
            </li>
          ))}
        </ul>
      </nav>
      <main id={mainId} tabIndex={-1}>
        <Heading level={1}>{heading}</Heading>
        <Paragraph>{paragraph}</Paragraph>
      </main>
    </>
  );
};

const ExamplePageDecorator: Decorator = (Story, context) => {
  return (
    <ExamplePage
      mainId={typeof context.args['href'] === 'string' ? context.args['href'].substring(1) : undefined}
      {...context.globals['page']}
    >
      {Story()}
    </ExamplePage>
  );
};

const meta = {
  argTypes: {
    children: { table: { category: 'API' }, type: 'string' },
    href: { table: { category: 'API' } },
  },
  component: SkipLink,
  decorators: [ExamplePageDecorator, ExampleBodyTextDecorator],
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
  title: 'Componenten/Skip Link',
} satisfies Meta<typeof SkipLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Skip Link',
  args: {
    children: 'Naar de inhoud',
    href: '#main-story-1',
  },
  globals: {
    ...dutchLocale,
  },
  parameters: {
    docs: {
      description: {
        story: `Een kleine webpagina: naam van de organisatie, hoofdnavigatie met 3 links, een Heading, en een alinea tekst met daarin een link.

Je kunt met \`Tab\` naar de Skip Link die eerst niet zichtbaar is. Daarmee kun je links in de navigatie overslaan. De volgende tab-stop is de link in de alinea.`,
      },
    },
    status: { type: [] },
  },
};

export const FocusedSkipLink: Story = {
  name: 'Skip Link (zichtbaar)',
  args: {
    ...Default.args,
    className: 'nl-skip-link--test-focus-visible',
    href: '#main-story-2',
  },
  globals: {
    ...dutchLocale,
  },
  parameters: {
    docs: {
      description: {
        story: `Dezelfde webpagina als in het eerste voorbeeld, maar hier is de Skip Link voor de test al zichtbaar in beeld.

Normaalgesproken is de Skip Link alleen zichtbaar als die focus heeft. Problemen met [WCAG-succescriterium 2.4.11 Focus niet bedekt (minimum)](https://nldesignsystem.nl/wcag/2.4.11) kunnen in dit test-scenario voorkomen als de Skip Link over andere content staat, maar kan niet in de praktijk.`,
      },
    },
    status: { type: [] },
  },
  render: Default.render,
};

export const RightToLeft: Story = {
  name: 'Skip Link in pagina met Arabische taal',
  args: {
    children: 'تخطي إلى المحتوى الرئيسي',
    href: '#main-story-3',
  },
  globals: {
    ...arabicLocale,
  },
  parameters: {
    docs: {
      description: {
        story: `Een zelfde webpagina als in het eerste voorbeeld, maar dan in Arabisch. Een kleine webpagina: naam van de organisatie, hoofdnavigatie met 3 links, een Heading, en een alinea tekst met daarin een link.

In een right-to-left pagina zoals Arabisch moet de Skip Link rechts uitgelijnd zijn.`,
      },
    },
    status: { type: [] },
  },
};

export const RightToLeftVisible: Story = {
  name: 'Skip Link in pagina met Arabische taal (zichtbaar)',
  args: {
    ...RightToLeft.args,
    className: 'nl-skip-link--test-focus-visible',
    href: '#main-story-4',
  },
  globals: {
    ...arabicLocale,
  },
  parameters: {
    docs: {
      description: {
        story: `Dezelfde pagina als "${RightToLeft.name}", maar hier is de Skip Link voor de test al zichtbaar in beeld.`,
      },
    },
    status: { type: [] },
  },
  render: RightToLeft.render,
};

export const LongLabel: Story = {
  name: 'Skip Link in het Engels, met een lange linktekst',
  args: {
    children: 'Skip to the article "Supercalifragilisticexpialidocious"',
    className: 'nl-skip-link--test-focus-visible',
    href: '#main-story-5',
  },
  globals: {
    ...englishLocale,
  },
  parameters: {
    docs: {
      description: {
        story: `Een kleine webpagina: naam van de organisatie, hoofdnavigatie met 3 links, een Heading, en een alinea tekst met daarin een link.

Je kunt met \`Tab\` naar de Skip Link die eerst niet zichtbaar is. Daarmee kun je links in de navigatie overslaan. De volgende tab-stop is de link in de alinea.`,
      },
    },
    status: { type: [] },
  },
};
