import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from '../../../components-react/heading-react/src/css';
import { Paragraph } from '../../../components-react/paragraph-react/src/css';
import packageJSON from '../../../components-react/skip-link-react/package.json';
import { SkipLink } from '../../../components-react/skip-link-react/src/css';
import { ExampleBodyText } from '../../src/ExampleBodyText';
import '../../../components-css/skip-link-css/src/test.scss';

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
    dir: 'ltr',
    lang: 'nl',
    title: 'Contact',
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
  render(props) {
    return (
      <ExampleBodyText>
        <SkipLink {...props} />
        <header>
          <Paragraph>
            <bdi>Example Inc.</bdi>
          </Paragraph>
        </header>
        <nav>
          <ul>
            <li>
              <a href="https://example.com/">Homepage</a>
            </li>
            <li>
              <a href="https://example.com/">Over ons</a>
            </li>
            <li>
              <a href="https://example.com/">Contact</a>
            </li>
          </ul>
        </nav>
        <main id={props.href?.substring(1)}>
          <Heading level={1}>Contact</Heading>
          <Paragraph>
            Je kunt contact met ons opnemen via ons e-mailadres:{' '}
            <a href="mailto:hello@example.com">hello@example.com</a>.
          </Paragraph>
        </main>
      </ExampleBodyText>
    );
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
    ...Default.globals,
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
    dir: 'rtl',
    lang: 'ar',
    title: 'اتصل بنا',
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
  render(props) {
    return (
      <ExampleBodyText>
        <SkipLink {...props} />
        <p>
          <bdi>Example Inc.</bdi>
        </p>
        <nav>
          <ul>
            <li>
              <a href="https://example.com/">الصفحة الرئيسية</a>
            </li>
            <li>
              <a href="https://example.com/">نبذة عنا</a>
            </li>
            <li>
              <a href="https://example.com/">اتصل بنا</a>
            </li>
          </ul>
        </nav>
        <main id={props.href?.substring(1)}>
          <Heading level={1}>اتصال</Heading>
          <Paragraph>
            يمكنك التواصل معنا عبر عنوان البريد الإلكتروني الخاص بنا:{' '}
            <a href="mailto:hello@example.com">hello@example.com</a>.
          </Paragraph>
        </main>
      </ExampleBodyText>
    );
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
    ...RightToLeft.globals,
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
    dir: 'ltr',
    lang: 'en',
    title: 'Contact',
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
  render(props) {
    return (
      <>
        <ExampleBodyText>
          <SkipLink {...props} />
          <header>
            <Paragraph>
              <bdi>Chim Chim Cher-ee Ltd.</bdi>
            </Paragraph>
          </header>
          <nav>
            <ul>
              <li>
                <a href="https://example.com/">Homepage</a>
              </li>
              <li>
                <a href="https://example.com/">About us</a>
              </li>
              <li>
                <a href="https://example.com/">Contact</a>
              </li>
            </ul>
          </nav>
          <main id={props.href?.substring(1)}>
            <Heading level={1}>Supercalifragilisticexpialidocious</Heading>
            <Paragraph>
              Contact Mary Poppins via e-mail:
              <a href="mailto:mary@example.com">mary@example.com</a>.
            </Paragraph>
          </main>
        </ExampleBodyText>
      </>
    );
  },
};
