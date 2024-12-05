import type { Meta, StoryObj } from '@storybook/react';
import { ReactNode } from 'react';
import packageJSON from '../../components-react/paragraph-react/package.json';
import { Paragraph } from '../../components-react/paragraph-react/src/css';

const meta = {
  argTypes: {
    children: { name: 'text', table: { category: 'API' } },
    purpose: {
      control: { labels: { undefined: '(undefined)' }, type: 'select' },
      options: [undefined, 'lead'],
      table: { category: 'API' },
      type: 'string',
    },
  },
  component: Paragraph,
  parameters: {
    docs: {
      description: {
        component: '',
      },
    },
    externalLinks: [
      {
        name: 'Open in Figma',
        url: 'https://www.figma.com/design/shhwGcqPLi2CapK0P1zz8O/NLDS---Voorbeeld---Bibliotheek?node-id=150-734',
      },
      {
        name: 'Open op GitHub',
        url: packageJSON.homepage,
      },
    ],
  },
  title: 'Componenten/Paragraph/Fout',
} satisfies Meta<typeof Paragraph>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ParagraphAllCaps: Story = {
  name: 'Fout: Paragraph in all caps',
  args: {
    children: `CREATIVE COMMONS CORPORATION IS NOT A LAW FIRM AND DOES NOT PROVIDE
LEGAL SERVICES. DISTRIBUTION OF THIS DOCUMENT DOES NOT CREATE AN
ATTORNEY-CLIENT RELATIONSHIP. CREATIVE COMMONS PROVIDES THIS
INFORMATION ON AN "AS-IS" BASIS. CREATIVE COMMONS MAKES NO WARRANTIES
REGARDING THE USE OF THIS DOCUMENT OR THE INFORMATION OR WORKS
PROVIDED HEREUNDER, AND DISCLAIMS LIABILITY FOR DAMAGES RESULTING FROM
THE USE OF THIS DOCUMENT OR THE INFORMATION OR WORKS PROVIDED
HEREUNDER.`,
    lang: 'en',
  },
  parameters: {
    docs: {
      description: {
        story: `Een alinea met alle tekst in hoofdletters.

Je moet hoofdletters alleen gebruiken voor woorden die het nodig hebben, zoals veel afkortingen. Schermvoorlees-software kan dan goed bepalen of een woord als afkorting voorgelezen moet worden. Bij een woord zoals "USE" kan bijvoorbeeld ook een afkorting zijn voor "<span lang="en">Uganda Securities Exchange</span>".`,
      },
    },
  },
};

// TODO: Visibily document all known bullet point characters.
const bullets = [
  '*',
  '-',
  '•',
  '∙',
  '⊙',
  '⊚',
  '⊛',
  '◉',
  '○',
  '◌',
  '◍',
  '◎',
  '●',
  '◘',
  '◦',
  '。',
  '☉',
  '⦾',
  '⦿',
  '⁃',
  '⁌',
  '⁍',
  '◆',
  '◇',
  '◈',
  '★',
  '☆',
  '❖',
  '⋄',
  '❥',
  '❧',
  '☙',
  '✤',
  '✱',
  '✲',
  '✦',
  '✧',
];

export const ParagraphListItem: Story = {
  name: 'Fout: Paragraph die een list item is',
  args: {
    children: `${bullets[2]} Boter, kaas en eieren.`,
  },
  parameters: {
    docs: {
      description: {
        story: `Een "bullet point" alinea alinea.
  
  Lijstitems moeten in een lijst gezet worden, niet in een normale alinea.`,
      },
    },
  },
};

export const ParagraphHeading: Story = {
  name: 'Fout: Paragraph die een list item is',
  args: {
    children: <b>Artikel 1:</b>,
  },
  parameters: {
    docs: {
      description: {
        story: `Een alinea waarin een heading staat.
  
Kopteksten moeten in een Heading component gezet worden, niet in een Paragraph.`,
      },
    },
  },
};

export const ParagraphUnicodeWords1: Story = {
  name: 'Fout: Onjuiste letters uit Unicode (serif, bold)',
  args: {
    children: '𝐎𝐩 𝐛𝐫𝐮𝐭𝐞 𝐰𝐢𝐣𝐳𝐞 𝐯𝐢𝐧𝐠 𝐝𝐞 𝐬𝐜𝐡𝐨𝐨𝐥𝐣𝐮𝐟 𝐝𝐞 𝐪𝐮𝐚𝐬𝐢-𝐤𝐚𝐥𝐦𝐞 𝐥𝐲𝐧𝐱.',
  },
  parameters: {
    docs: {
      description: {
        story: `Woorden opgebouwd uit alternatieve Unicode-tekens worden niet goed voorgelezen door schermvoorlezers.`,
      },
    },
  },
};

export const ParagraphUnicodeWords2: Story = {
  name: 'Fout: Onjuiste letters uit Unicode (sans serif, bold)',
  args: {
    children: '𝗢𝗽 𝗯𝗿𝘂𝘁𝗲 𝘄𝗶𝗷𝘇𝗲 𝘃𝗶𝗻𝗴 𝗱𝗲 𝘀𝗰𝗵𝗼𝗼𝗹𝗷𝘂𝗳 𝗱𝗲 𝗾𝘂𝗮𝘀𝗶-𝗸𝗮𝗹𝗺𝗲 𝗹𝘆𝗻𝘅.',
  },
};

export const ParagraphUnicodeWords3: Story = {
  name: 'Fout: Onjuiste letters uit Unicode (serif, bold and italic)',
  args: {
    children: '𝑶𝒑 𝒃𝒓𝒖𝒕𝒆 𝒘𝒊𝒋𝒛𝒆 𝒗𝒊𝒏𝒈 𝒅𝒆 𝒔𝒄𝒉𝒐𝒐𝒍𝒋𝒖𝒇 𝒅𝒆 𝒒𝒖𝒂𝒔𝒊-𝒌𝒂𝒍𝒎𝒆 𝒍𝒚𝒏𝒙.',
  },
};

export const ParagraphUnicodeWords4: Story = {
  name: 'Fout: Onjuiste letters uit Unicode (sans serif, bold and italic)',
  args: {
    children: '𝙊𝙥 𝙗𝙧𝙪𝙩𝙚 𝙬𝙞𝙟𝙯𝙚 𝙫𝙞𝙣𝙜 𝙙𝙚 𝙨𝙘𝙝𝙤𝙤𝙡𝙟𝙪𝙛 𝙙𝙚 𝙦𝙪𝙖𝙨𝙞-𝙠𝙖𝙡𝙢𝙚 𝙡𝙮𝙣𝙭.',
  },
};

export const OneParagraph: Story = {
  name: "Fout: één component voor meerdere alinea's",
  args: {
    children: `
Bij een incident, crisis of ramp of bij een dreiging daarvan,
kan het nodig zijn om extra mensen of middelen in te zetten.
voor de veiligheid en om de crisis onder controle te houden.
Dit noemen we bijstand.
Er bestaan verschillende vormen.
Soms heeft de politie behoefte aan extra ondersteuning.
Zo kan de Koninklijke Marechaussee bijvoorbeeld versterking bieden bij een demonstratie of een belangrijke voetbalwedstrijd.
De politie kan ook hulp inschakelen van Defensie.
Bijvoorbeeld wanneer er een verdacht pakketje wordt gevonden.
Of bij evenementen als de Dodenherdenking, waarbij specialisten van Defensie het terrein vooraf controleren.
Het komt ook voor dat de politie juist de Koninklijke Marechaussee ondersteunt, bijvoorbeeld bij een demonstratie op Schiphol.
Dit waren voorbeelden van bijstand die vallen onder de Politiewet.
Ook een veiligheidsregio kan hulp vragen.
Van Defensie en van een andere veiligheidsregio.
Bijvoorbeeld wanneer in de regio een grote natuurbrand is door warmte en droogte.
Voor ondersteuning van een naastgelegen veiligheidsregio is geen bijstandsaanvraag nodig als hierover vooraf afspraken zijn gemaakt tussen de regio's.
Dit noemen we ook wel burenhulp.
Soms komt hulp uit het buitenland of biedt Nederland juist hulp aan het buitenland.
We spreken dan van internationale bijstand.
Denk aan de Belgische politie die een wielerronde begeleidt die gedeeltelijk door Nederland loopt.
Of aan de Nederlandse politie die helpt bij de Grand Prix in België.
Bij een ernstige ramp of crisis kunnen landen over de hele wereld ook een beroep doen op de EU.
Dit gaat via het EU Civil Protection Mechanism.
Een aanvraag doen of meer weten over het bijstandsverzoek?
Kijk dan op rijksoverheid.nl/locc`
      .split('\n')
      .reduce<ReactNode[]>(
        (list, line, index, array) => [...list, line, index > 0 && index <= array.length - 2 ? <br /> : null],
        [],
      ),
  },
  parameters: {
    docs: {
      description: {
        story: `Dit probleem komt vaak voor wanneer "plain text" formaten naar rich text worden geconverteerd, waarbij 1 new line character naar \`<br/>\` wordt geconverteerd, en twee of meerdere newlines naar een \`<p>\` element. Dit gebeurt bijvoorbeeld vaak bij transcripties van audio en video.`,
      },
    },
  },
};

export const ParagraphDiv: Story = {
  name: 'Fout: paragraph zonder p HTML-element',
  args: {
    children: 'Op brute wĳze ving de schooljuf de quasi-kalme lynx.',
  },
  render: ({ children }) => <div className="nl-paragraph">{children}</div>,
};

export const ParagraphIncorrectLang: Story = {
  name: 'Fout: verkeerde taal ingesteld',
  args: {
    children: 'Op brute wĳze ving de schooljuf de quasi-kalme lynx.',
    lang: 'en',
  },
};

export const ParagraphIncorrectDir: Story = {
  name: 'Fout: verkeerde taal ingesteld',
  args: {
    children: 'Op brute wĳze ving de schooljuf de quasi-kalme lynx.',
    lang: 'en',
  },
  decorators: [(Story) => <div dir="ltr">{Story()}</div>],
};

export const ParagraphAlignCenter: Story = {
  name: 'Fout: tekst gecentreerd',
  args: {
    align: 'center',
    children: 'Op brute wĳze ving de schooljuf de quasi-kalme lynx.',
  },
};

export const ParagraphAlignRight: Story = {
  name: 'Fout: tekst rechts uitgelijnd',
  args: {
    align: 'right',
    children: 'Op brute wĳze ving de schooljuf de quasi-kalme lynx.',
  },
};

export const ParagraphSmall: Story = {
  name: 'Fout: tekst te klein',
  args: {
    children: 'Op brute wĳze ving de schooljuf de quasi-kalme lynx.',
    style: {
      '--nl-paragraph-font-size': '12px',
    },
  },
};

export const ParagraphFixedSize: Story = {
  name: 'Fout: font-size niet te vergroten via CSS',
  args: {
    children: 'Op brute wĳze ving de schooljuf de quasi-kalme lynx.',
    style: {
      '--nl-paragraph-font-size': '16px',
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          fontSize: '32px',
        }}
      >
        {Story()}
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: `In dit voorbeeld is de font-size van de HTML rondom de paragraph groter gemaakt, maar die heeft geen effect omdat de paragraph \`font-size: 16px\` heeft.

Als je absolute waarden gebruikt zoals \`font-size: 0\` dan kan dat niet. In de meest gevallen is de beste keuze om font-size helemaal niet in te stellen. Als je font-size gebruikt, doe dat dan met relatieve CSS units zoals \`rem\`.`,
      },
    },
  },
};

export const ParagraphLineHeight: Story = {
  name: 'Fout: line-height niet te vergroten via CSS',
  args: {
    children:
      'Allen die zich in Nederland bevinden, worden in gelijke gevallen gelijk behandeld. Discriminatie wegens godsdienst, levensovertuiging, politieke gezindheid, ras, geslacht, handicap, seksuele gerichtheid of op welke grond dan ook, is niet toegestaan.',
    style: {
      '--nl-paragraph-line-height': '24px',
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          lineHeight: '3',
        }}
      >
        {Story()}
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: `In dit voorbeeld is de line-height van de HTML rondom de paragraph groter gemaakt, maar die heeft geen effect omdat de paragraph \`line-height: 16px\` heeft.

Als je absolute waarden gebruikt zoals \`line-height: 0\` dan kan dat niet. In de meest gevallen is de beste keuze om line-height helemaal niet in te stellen. Als je line-height gebruikt, doe dat dan met relatieve CSS units zoals \`rem\`.`,
      },
    },
  },
};

export const ParagraphLetterSpacing: Story = {
  name: 'Fout: letter-spacing niet te vergroten via CSS',
  args: {
    children: 'Op brute wĳze ving de schooljuf de quasi-kalme lynx.',
    style: {
      letterSpacing: '0',
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          letterSpacing: '0.2em',
        }}
      >
        {Story()}
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: `Gebruikers moeten in een eigen CSS-stylesheet in hun browser de letter-spacing groter of kleiner kunnen instellen.

In dit voorbeeld is de letter-spacing van de HTML rondom de paragraph groter gemaakt, maar die heeft geen effect omdat de paragraph letter-spacing: 0 heeft.

Als je absolute waarden gebruikt zoals \`letter-spacing: 0\` dan kan dat niet. In de meest gevallen is de beste keuze om letter-spacing helemaal niet in te stellen. Als je letter-spacing gebruikt, doe dat dan met relatieve CSS units zoals \`em\`.

Voor schriften waarbij letter spacing de tekst onleesbaar maakt, zoals Arabisch, is een uitzondering.`,
      },
    },
  },
};

export const ParagraphWordSpacing: Story = {
  name: 'Fout: word-spacing niet te vergroten via CSS',
  args: {
    children: 'Op brute wĳze ving de schooljuf de quasi-kalme lynx.',
    style: {
      wordSpacing: '0',
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          wordSpacing: '0.2em',
        }}
      >
        {Story()}
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: `Gebruikers moeten in een eigen CSS-stylesheet in hun browser de word-spacing groter of kleiner kunnen instellen.

In dit voorbeeld is de \`word-spacing\` van de HTML rondom de paragraph groter gemaakt, maar die heeft geen effect omdat de paragraph \`word-spacing: 0;\` heeft.

Als je absolute waarden gebruikt zoals \`word-spacing: 0\` dan kan dat niet. In de meest gevallen is de beste keuze om word-spacing helemaal niet in te stellen. Als je \`word-spacing\` gebruikt, doe dat dan altijd met relatieve CSS units zoals \`em\`.`,
      },
    },
  },
};

export const ParagraphContrast: Story = {
  name: 'Fout: contrast te laag',
  args: {
    children: 'Op brute wĳze ving de schooljuf de quasi-kalme lynx.',
    style: {
      '--nl-paragraph-color': 'silver',
      '--nl-paragraph-font-size': '16px',
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          backgroundColor: 'white',
        }}
      >
        {Story()}
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: ``,
      },
    },
  },
};
