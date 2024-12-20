import type { Meta, StoryObj } from '@storybook/react';
import { ExampleBodyTextDecorator } from '@nl-design-system-candidate/storybook-shared/src/ExampleBodyTextDecorator';
import { ParagraphDecorator } from '@nl-design-system-candidate/storybook-shared/src/ParagraphDecorator';
import { Heading } from '../../../components-react/heading-react/src/css';
import packageJSON from '../../../components-react/link-react/package.json';
import { Link } from '../../../components-react/link-react/src/css';
import { Paragraph } from '../../../components-react/paragraph-react/src/css';
import componentMarkdown from '../../../docs/link-docs/docs/component.md?raw';
import tokens from '../../../tokens/link-tokens/tokens.json';
import '../../../components-css/link-css/src/test.scss';

const ExampleImage = () => (
  <svg
    role="img"
    aria-label="NL Design System logo"
    width="420"
    height="auto"
    viewBox="0 0 1120 630"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="1120" height="630" fill="#F1B5FF" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M266.235 198.321H494.101C495.713 198.321 497.018 199.626 497.018 201.238V315.179C497.018 330.935 493.932 346.247 487.822 360.673C481.938 374.592 473.52 387.087 462.8 397.807C452.086 408.527 439.59 416.944 425.671 422.834C411.231 428.944 395.932 432.036 380.168 432.036C364.404 432.036 349.093 428.938 334.665 422.834C320.752 416.944 308.257 408.527 297.536 397.807C286.822 387.087 278.398 374.592 272.514 360.673C266.411 346.24 263.318 330.935 263.318 315.179V201.238C263.318 199.626 264.629 198.321 266.235 198.321ZM368.363 213.35H368.35L368.356 213.357H368.363C353.684 213.507 346.439 231.252 356.802 241.646L378.7 263.6C378.728 263.625 378.755 263.65 378.782 263.675C378.808 263.7 378.835 263.725 378.863 263.75C379.258 264.101 379.729 264.252 380.199 264.252C380.664 264.258 381.134 264.095 381.536 263.75L381.547 263.739L381.559 263.727L381.587 263.7C381.606 263.682 381.625 263.664 381.644 263.645C381.66 263.628 381.677 263.611 381.692 263.593L403.591 241.639C413.96 231.252 406.708 213.507 392.03 213.35C387.388 213.3 383.21 215.144 380.187 218.143C377.163 215.151 372.992 213.3 368.363 213.35ZM380.174 394.137C423.789 394.137 459.137 358.785 459.137 315.179H459.13V266.109C459.13 264.497 457.819 263.192 456.213 263.192H426.813C403.754 263.192 384.609 279.915 380.846 301.887C380.783 302.238 380.475 302.483 380.118 302.452C379.804 302.427 379.553 302.195 379.497 301.887C375.721 279.915 356.576 263.192 333.53 263.192H304.129C302.517 263.192 301.212 264.497 301.212 266.109V315.179C301.212 358.792 336.559 394.137 380.174 394.137Z"
      fill="#30003C"
    />
    <path
      d="M538.281 212.039C538.914 221.436 539.548 234.834 539.548 242.543L539.541 242.549V261.649H525.403V198.328H546.931L558.015 219.535C562.023 227.344 566.245 238.215 568.779 245.811L570.466 245.604C569.739 236.427 569.206 225.337 569.206 217.848V198.321H583.238V261.643H563.083L550.205 236.628C547.244 230.512 542.922 219.962 539.968 211.832L538.281 212.039Z"
      fill="#30003C"
    />
    <path d="M636.425 248.031H609.301V198.321H594.102V261.643H636.425V248.031Z" fill="#30003C" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M525.522 282.756H552.532V282.75C574.807 282.75 584.618 293.62 584.618 313.673C584.618 333.727 572.587 346.077 552.325 346.077H525.522V282.756ZM540.708 333.62H551.152C564.344 333.62 569.413 327.078 569.413 313.673C569.413 300.269 564.024 295.314 550.626 295.314H540.708V333.62Z"
      fill="#30003C"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M615.22 347.445C629.463 347.444 635.271 340.902 637.491 332.246L625.46 328.972C624.199 332.767 622.186 335.941 615.33 335.941C608.473 335.941 604.779 332.353 603.932 324.33H637.811C638.018 321.69 638.125 319.689 638.125 317.581C638.125 303.756 630.842 294.68 615.436 294.68C599.183 294.68 589.793 304.81 589.793 322.116C589.793 339.421 600.135 347.444 615.22 347.445ZM615.01 305.444C621.446 305.444 624.72 309.239 624.927 317.054H604.032C604.772 308.825 608.568 305.444 615.01 305.444Z"
      fill="#30003C"
    />
    <path
      d="M655.952 329.085C657.213 334.573 660.601 337.421 666.823 337.421H666.829C671.678 337.421 674.106 335.841 674.213 332.566C674.213 329.505 672.212 327.818 663.028 326.024C649.303 323.063 644.661 318.522 644.661 309.979C644.661 300.369 651.517 294.674 665.663 294.674C679.808 294.674 684.983 300.369 686.771 309.132L673.999 311.773C672.839 306.598 670.518 304.597 665.343 304.597C660.594 304.597 658.273 306.184 658.273 309.138C658.273 311.879 659.647 313.887 668.611 315.681C684.236 318.955 688.032 324.123 688.032 331.933C688.032 341.636 681.589 347.551 666.503 347.551C649.623 347.551 644.448 340.802 643.074 331.726L655.952 329.085Z"
      fill="#30003C"
    />
    <path d="M710.614 278.635H695.628V288.978H710.614V278.635Z" fill="#30003C" />
    <path d="M695.954 296.047H710.306V346.071H695.954V296.047Z" fill="#30003C" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M768.129 348.925C768.129 340.796 763.061 335.947 751.977 335.947C749.658 335.947 747.235 336.015 744.766 336.084L744.035 336.104C741.238 336.185 738.396 336.267 735.617 336.267C732.449 336.267 731.188 335.527 731.188 333.733C731.188 332.886 731.615 331.939 732.136 330.992L732.976 329.624C735.404 330.158 738.252 330.471 741.319 330.471C755.351 330.471 763.268 325.089 763.268 316.753C763.268 310.951 757.992 308.624 751.763 307.47L751.87 306.309C755.878 306.736 759.046 306.843 761.474 306.843H766.956V296.079H741.626C727.387 296.079 718.938 302.307 718.938 313.491C718.938 321.301 723.059 326.576 730.542 329.003L726.854 330.904C722.733 332.698 720.518 335.232 720.518 338.08C720.518 341.561 722.839 344.202 728.228 344.942V345.575C721.466 346.949 716.51 350.01 716.51 354.545C716.51 360.774 721.892 364.675 740.993 364.675C761.254 364.675 768.117 359.4 768.117 348.95V348.938L768.129 348.925ZM741.325 306.918C748.182 306.918 751.136 309.979 751.136 313.987C751.136 317.995 748.501 321.056 741.325 321.056C734.149 321.056 731.722 317.995 731.722 313.987C731.722 309.979 734.463 306.918 741.325 306.918ZM727.293 349.772C727.293 347.344 729.928 345.237 734.363 345.237H751.356C755.37 345.237 757.058 346.924 757.058 349.352C757.058 352.833 753.996 354.627 741.971 354.627C729.946 354.627 727.299 353.146 727.299 349.772H727.293Z"
      fill="#30003C"
    />
    <path
      d="M798.414 307.658C792.298 307.658 788.397 311.986 788.397 318.215L788.409 318.202V346.065H774.057V296.041H788.089V309.446H789.036C791.985 299.742 798.107 294.674 805.917 294.674C815.514 294.674 820.369 301.323 820.369 312.193V346.065H806.017V316.201C806.017 311.139 803.69 307.658 798.414 307.658Z"
      fill="#30003C"
    />
    <path
      d="M553.586 392.406C541.135 390.192 539.341 387.551 539.341 383.863C539.341 379.855 542.509 377.528 549.258 377.528C556.861 377.528 559.389 380.802 560.863 387.238L575.955 384.283C574.161 373.413 567.299 365.704 549.992 365.704C532.685 365.704 524.342 372.773 524.342 384.704C524.342 395.154 529.724 402.01 547.238 404.757C559.269 406.758 562.117 409.085 562.117 413.52C562.117 417.528 558.636 419.855 551.566 419.855C543.757 419.855 538.375 416.374 536.894 408.778L522.436 411.839C523.809 422.816 530.672 431.892 550.933 431.992C569.507 431.992 577.423 424.603 577.423 412.466C577.423 403.283 573.201 395.9 553.574 392.413L553.586 392.406Z"
      fill="#30003C"
    />
    <path
      d="M609.884 410.251C610.896 406.354 611.875 402.587 612.682 399.162H612.67L617.312 380.482H632.724L612.99 430.719C608.141 442.963 601.805 448.238 589.247 448.238C585.76 448.238 583.652 447.925 581.011 447.498L583.125 435.367C585.233 435.793 587.453 436.107 589.561 436.107C594.629 436.107 597.27 435.154 599.591 429.878L580.804 380.482H596.53L601.492 398.842C601.894 400.356 602.318 401.927 602.752 403.538L602.753 403.539L602.761 403.571C602.988 404.412 603.218 405.264 603.449 406.124V406.137L603.574 406.6C604.501 410.025 605.459 413.562 606.347 416.995H608.141C608.609 415.144 609.092 413.293 609.568 411.466L609.573 411.445L609.576 411.435L609.884 410.251Z"
      fill="#30003C"
    />
    <path
      d="M659.54 400.115C650.577 398.321 649.203 396.314 649.203 393.573C649.203 390.619 651.524 389.038 656.272 389.038C661.441 389.038 663.762 391.039 664.929 396.214L677.694 393.573C675.906 384.81 670.731 379.115 656.586 379.115C642.441 379.115 635.591 384.81 635.591 394.42C635.591 402.963 640.233 407.511 653.951 410.465C663.135 412.259 665.136 413.946 665.136 417.007C665.029 420.281 662.602 421.862 657.746 421.862C651.524 421.862 648.143 419.014 646.876 413.526L633.998 416.167C635.371 425.243 640.534 431.999 657.426 431.999C672.513 431.999 678.955 426.084 678.955 416.38C678.955 408.571 675.16 403.402 659.534 400.128L659.54 400.115Z"
      fill="#30003C"
    />
    <path
      d="M703.444 412.46C703.444 416.474 704.918 418.475 709.246 418.475C711.467 418.475 713.894 417.841 715.795 417.208L717.376 430.079C713.574 431.24 711.04 431.98 705.552 431.98C693.947 431.98 689.092 424.283 689.092 414.78V391.879H682.969V380.482H689.092V367.611H703.444V380.482H716.629V391.879H703.444V412.46Z"
      fill="#30003C"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M747.768 379.109C731.519 379.111 722.124 389.241 722.124 406.545C722.124 423.851 732.468 431.873 747.554 431.873C761.8 431.873 767.608 425.331 769.823 416.675L757.792 413.4C756.524 417.202 754.517 420.369 747.655 420.369C740.792 420.369 737.104 416.781 736.263 408.759H770.136C770.35 406.118 770.45 404.117 770.45 402.01C770.45 388.187 763.176 379.111 747.768 379.109ZM736.37 401.483C737.104 393.253 740.905 389.872 747.347 389.872C753.789 389.872 757.058 393.673 757.265 401.483H736.37Z"
      fill="#30003C"
    />
    <path
      d="M747.768 379.109C747.77 379.109 747.772 379.109 747.774 379.109H747.761C747.763 379.109 747.766 379.109 747.768 379.109Z"
      fill="#30003C"
    />
    <path
      d="M825.224 394.1C827.978 384.283 833.674 379.108 841.91 379.108L841.904 379.096V379.077C851.714 379.077 856.676 385.726 856.676 396.596V430.474H842.224V400.611C842.224 395.549 839.909 392.068 834.621 392.068C828.499 392.068 824.704 396.396 824.704 402.624V430.487H810.351V400.623C810.351 395.561 807.924 392.08 802.749 392.08C796.633 392.08 792.725 396.408 792.725 402.637V430.499H778.373V380.476H792.405V393.88H793.459C796.307 384.177 802.328 379.108 810.239 379.108C819.102 379.108 823.43 384.71 824.064 394.1H825.224Z"
      fill="#30003C"
    />
  </svg>
);

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
    docs: {
      description: {
        component: componentMarkdown,
      },
    },
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
    tokens,
  },
  title: 'Componenten/Link',
} satisfies Meta<typeof Link>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Link',
  args: {
    children: 'Voorbeelddomein',
    href: 'https://example.com/',
  },
  globals: {
    dir: 'ltr',
    lang: 'nl',
    title: 'Link van de dag',
  },
  parameters: {
    docs: {
      description: {
        story: 'Een enkele Link.',
      },
    },
    status: { type: [] },
  },
};

export const Engels: Story = {
  name: 'Link in Engels',
  args: {
    children: 'Example Domain',
    href: 'https://example.com/',
    lang: 'en',
  },
  globals: {
    dir: 'ltr',
    lang: 'nl',
    title: 'Link van de dag',
  },
  parameters: {
    docs: {
      description: {
        story: 'Een enkele Link in het Engels.',
      },
    },
    status: { type: [] },
  },
};

export const ArabicLink: Story = {
  name: 'Link in Arabisch',
  args: {
    children: 'مثال على المجال',
    dir: 'rtl',
    href: 'https://example.com',
    lang: 'ar',
  },
  parameters: {
    docs: {
      description: {
        story: `Een enkele Link in het Arabisch.

Het moet mogelijk zijn de \`lang\` en \`dir\` attribuut in te stellen.`,
      },
    },
    status: { type: [] },
  },
};

export const OpensInNewWindowLink: Story = {
  name: 'Link (opent in een nieuw venster)',
  args: {
    children: 'Voorbeelddomein',
    href: 'https://example.com/',
    target: '_blank',
  },
  parameters: {
    docs: {
      description: {
        story: `Een enkele Link. De Link opent in een nieuw venster.

Het moet mogelijk zijn de Link te openen in een nieuw venster. Maak alleen in uitzonderlijke gevallen gebruik van deze functionaliteit, bijvoorbeeld voor links in een formulier.`,
      },
    },
    status: { type: [] },
  },
};

export const LinkInParagraph: Story = {
  name: 'Link in Paragraph',
  args: {
    children: 'Voorbeelddomein',
    href: 'https://example.com',
  },
  parameters: {
    docs: {
      description: {
        story: 'Een Paragraph met een Link die onderdeel is van lopende tekst in een alinea.',
      },
    },
    status: { type: [] },
  },
  render({ children, ...restProps }) {
    return (
      <Paragraph>
        In deze paragraaf staat een link naar <Link {...restProps}>{children}</Link>.
      </Paragraph>
    );
  },
};

export const ExtremelyLongLink: Story = {
  name: 'Link die meerdere regels lang is',
  args: {
    children:
      'Wijzigingswet Vreemdelingenwet 2000, enz. (vaststelling criteria en instrumenten ter bepaling van de verantwoordelijke lidstaat voor behandeling verzoek om internationale bescherming)',
    href: 'https://wetten.overheid.nl/jci1.3:c:BWBR0034405&z=2014-01-01&g=2014-01-01',
  },
  globals: {
    dir: 'ltr',
    lang: 'nl',
    title: 'Link van de dag',
  },
  parameters: {
    docs: {
      description: {
        story: 'Een link die over meerdere regels tekst loopt, omdat de linktekst zo lang is.',
      },
    },
    status: { type: [] },
  },
};

export const Hover: Story = {
  name: 'Link met hover state',
  args: {
    children: 'Voorbeelddomein',
    className: 'nl-link--hover',
    href: 'https://example.com',
  },
  globals: {
    dir: 'ltr',
    lang: 'nl',
    title: 'Link van de dag',
  },
  parameters: {
    docs: {
      description: {
        story: 'Dit voorbeeld simuleert de stijl van de "hover" state.',
      },
    },
    status: { type: [] },
  },
};

export const Active: Story = {
  name: 'Link met active state',
  args: {
    children: 'Voorbeelddomein',
    className: 'nl-link--active',
    href: 'https://example.com',
  },
  globals: {
    dir: 'ltr',
    lang: 'nl',
    title: 'Link van de dag',
  },
  parameters: {
    docs: {
      description: {
        story: 'Dit voorbeeld simuleert de stijl van de "active" state.',
      },
    },
    status: { type: [] },
  },
};

export const Current: Story = {
  name: 'Link voor huidige pagina',
  args: {
    children: 'Link van de dag',
    current: true,
    href: 'https://example.com',
  },
  globals: {
    dir: 'ltr',
    lang: 'nl',
    title: 'Link van de dag',
  },
  parameters: {
    docs: {
      description: {
        story: 'Een link voor de huidige pagina.',
      },
    },
    status: { type: [] },
  },
};

export const inlineBox: Story = {
  name: 'Link rondom image',
  args: {
    'aria-label': 'homepage · NL Design System',
    children: <ExampleImage />,
    href: 'https://nldesignsystem.nl/',
    inlineBox: true,
  },
  globals: {
    dir: 'ltr',
    lang: 'nl',
    title: 'Logo van de dag',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Een Image die de enige inhoud van de Link is. Als de link focus heeft, dan is staat de focus ring om de afbeelding heen.',
      },
    },
    status: { type: [] },
  },
};

export const inlineBoxHover: Story = {
  name: 'Link rondom image met :hover',
  args: {
    'aria-label': 'homepage · NL Design System',
    children: <ExampleImage />,
    className: 'nl-link--hover',
    href: 'https://nldesignsystem.nl/',
    inlineBox: true,
  },
  globals: {
    dir: 'ltr',
    lang: 'nl',
    title: 'Logo van de dag',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Een Image die de enige inhoud van de Link is. Dit voorbeeld simuleert de stijl van de "hover" state. De hover state van de Link heeft geen zichtbaar effect, behalve de `cursor`.',
      },
    },
    status: { type: [] },
  },
};

export const inlineBoxCurrent: Story = {
  name: 'Link rondom image, current page',
  args: {
    'aria-label': 'homepage · NL Design System',
    children: <ExampleImage />,
    href: 'https://nldesignsystem.nl/',
    inlineBox: true,
  },
  globals: {
    current: true,
    dir: 'ltr',
    lang: 'nl',
    title: 'homepage · NL Design System',
  },
  parameters: {
    docs: {
      description: {
        story: `Een Image die de enige inhoud van de Link is. De link is gemarkeerd als een link naar de huidige pagina.

De HTML heeft het \`aria-current="true"\` attribuut.`,
      },
    },
    status: { type: [] },
  },
};

export const Placeholder: Story = {
  name: 'Placeholder Link',
  args: {
    children: '2 december',
    href: 'https://www.htmhell.dev/adventcalendar/2024/2/',
    placeholder: true,
  },
  globals: {
    dir: 'ltr',
    lang: 'nl',
    title: 'Adventskalender op 1 december',
  },
  parameters: {
    docs: {
      description: {
        story: `De dagen na 1 december zijn een Placeholder Link. De dagen hebben niet het visueel ontwerp van de link: ze zijn niet onderstreept, en ze hebben niet de link-kleur.

Een Placeholder-link is niet focusbaar. In de accessibility tree staan ze wel, als 'disabled' link. VoiceOver leest de link bijvoorbeeld voor als "2 december, dimmed"`,
      },
    },
    status: { type: [] },
  },
  render: (props) => {
    return (
      <>
        <Heading level={1}>Adventskalender</Heading>
        <Paragraph>Na 1 december wordt de volgende link beschikbaar.</Paragraph>
        <ul>
          <li>
            <Link href="https://www.htmhell.dev/adventcalendar/2024/1/">1 december</Link>
          </li>
          <li>
            <Link {...props} />
          </li>
          {Array(22)
            .fill(0)
            .map((_, i) => i + 3)
            .map((day) => (
              <li key={day}>
                <Link href={`https://www.htmhell.dev/adventcalendar/2024/${day}/`} placeholder>
                  {day} december
                </Link>
              </li>
            ))}
        </ul>
      </>
    );
  },
};
