/* eslint-disable no-alert */
import { ExampleBodyTextDecorator } from '@nl-design-system-candidate/storybook-shared/src/ExampleBodyTextDecorator';
import type { Meta, StoryObj } from '@storybook/react-vite';
import '../../components-css/button-css/src/button.scss';
import '../../components-css/number-badge-css/src/number-badge.scss';
import '../../components-css/skip-link-css/src/skip-link.scss';
import packageJSON from '../../components-react/button-react/package.json';
import { Button } from '../../components-react/button-react/src/button';
import { NumberBadge } from '../../components-react/number-badge-react/src/number-badge';
import { SkipLink } from '../../components-react/skip-link-react/src/skip-link';
import componentMarkdown from '../../docs/button-docs/docs/component.md?raw';
import {
  IconArrowRight,
  IconBold,
  IconBrandFacebook,
  IconChevronDown,
  IconChevronUp,
  IconInfoCircle,
  IconShoppingBag,
  IconShoppingCart,
  IconStar,
  IconStarFilled,
  IconTrash,
} from '@tabler/icons-react';
import { action } from 'storybook/actions';
import { useArgs } from 'storybook/internal/preview-api';

const meta = {
  argTypes: {
    children: { control: 'text', table: { category: 'API' } },
  },
  component: Button,
  decorators: [ExampleBodyTextDecorator],
  parameters: {
    docs: {
      description: {
        component: componentMarkdown,
      },
    },
    externalLinks: [
      {
        name: 'Open op NL Design System',
        url: 'https://nldesignsystem.nl/button',
      },
      {
        name: 'Open op GitHub',
        url: packageJSON.homepage,
      },
    ],
  },
  title: 'Componenten/Button',
  // render: function Render(args) {
  //   const [updatedArgs, updateArgs] = useArgs();

  //   const onFocus = () => {
  //     console.log('Open');
  //     action('open');
  //     updateArgs({
  //       children: 'Open',
  //       'aria-expanded': true,
  //     });
  //   };

  //   const onBlur = () => {
  //     console.log('Close');
  //     action('close');
  //     updateArgs({
  //       children: 'Close',
  //       'aria-expanded': false,
  //     });
  //   };
  //   console.log(updatedArgs);
  //   return <Button {...args} {...updatedArgs} onFocus={onFocus} onBlur={onBlur} />;
  // },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ButtonMousedown: Story = {
  name: 'Fout: Button waarvan actie niet annuleerbaar is',
  decorators: ExampleBodyTextDecorator,
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  args: {
    children: 'Klik mij',
    onMouseDown: () => alert('De actie is uitgevoerd.'),
  },
  parameters: {
    docs: {
      description: {
        story: `Deze Button voert een actie uit bij het \`mousedown\` event. De actie is niet annuleerbaar door na mousedown de aanwijzer te verplaatsen naar buiten de button, voordat de \`mouseup\` event plaatsvind. Er is geen manier om de actie ongedaan te maken. De Button voldoet daarom niet aan [WCAG Succescriterium 2.5.2](https://nldesignsystem.nl/wcag/2.5.2/).`,
      },
    },
    status: { type: [] },
  },
};

export const ButtonIconOnly: Story = {
  name: 'Fout: Button met icon maar zonder label',
  decorators: ExampleBodyTextDecorator,
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  args: {
    children: <IconArrowRight />,
  },
  parameters: {
    docs: {
      description: {
        story: `Deze Button heeft een Icon, maar geen toegankelijk label. De Button voldoet niet aan [WCAG Succescriterium 1.3.1](http://nldesignsystem.nl/wcag/1.3.1/), omdat informatie visueel beschikbaar is die niet beschikbaar is in tekst.`,
      },
    },
    status: { type: [] },
  },
};

export const ButtonFunctionalIcon: Story = {
  name: 'Fout: Button met extra informatie in de icoon',
  decorators: ExampleBodyTextDecorator,
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  args: {
    children: 'Volg ons',
    iconStart: <IconBrandFacebook />,
  },
  parameters: {
    docs: {
      description: {
        story: `Deze Button heeft een Icon die extra informatie geeft die niet in tekst beschikbaar is. Als je de icoon ziet, weet je dat de "Volgen" knop gaat over Facebook. Die informatie staat niet in de tekst, daarom voldoet de Button niet aan aan [WCAG Succescriterium 1.3.1](http://nldesignsystem.nl/wcag/1.3.1/), omdat informatie visueel beschikbaar is die niet beschikbaar is in tekst.`,
      },
    },
    status: { type: [] },
  },
};

export const ButtonBadIconLabel: Story = {
  name: 'Fout: Button met irrelevante tekst in iconStart',
  decorators: ExampleBodyTextDecorator,
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  args: {
    children: 'Verwijderen',
    iconStart: <IconTrash aria-label="Afvalbak" role="img" />,
  },
  parameters: {
    docs: {
      description: {
        story: `Deze Button heeft een afvalbak icoon, dat symbool staat voor ongebruikte dingen weg doen. Het icoon heeft de toegankelijke naam "Afvalbak". De icon is decoratief, omdat het zichtbare label "Verwijderen" de betekenis al duidelijk maakt.

De tekst "Afvalbal" is onderdeel van de toegankelijke naam van de Button. Het label van de Button is nu: "Afvalbalbak Verwijderen". Dit label is niet duidelijk, en daarom voldoet deze button niet aan [WCAG Succescriterium 2.4.6 Koppen en labels](https://nldesignsystem.nl/wcag/2.4.6/).`,
      },
    },
    status: { type: [] },
  },
};

export const ButtonNoFocusOutline: Story = {
  name: 'Fout: Button heeft geen focus ring',
  decorators: ExampleBodyTextDecorator,
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  args: {
    style: {
      outline: 0,
    },
    children: (
      <>
        {'Ga naar deze button met '}
        <kbd>Tab</kbd>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: `Deze Button heeft geen focus ring.`,
      },
    },
    status: { type: [] },
  },
};

export const ButtonFocusAction: Story = {
  name: 'Fout: Button activeert bij focus',
  decorators: ExampleBodyTextDecorator,
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  args: {
    iconStart: <IconInfoCircle />,
    children: 'Info',
  },
  render: function Render(args) {
    const [updatedArgs, updateArgs] = useArgs();

    const onFocus = () => {
      console.log('Open');
      action('open');
      updateArgs({
        children: 'Open',
        'aria-expanded': true,
      });
    };

    const onBlur = () => {
      console.log('Close');
      action('close');
      updateArgs({
        children: 'Close',
        'aria-expanded': false,
      });
    };
    console.log(updatedArgs);
    return (
      <>
        <Button {...args} {...updatedArgs} onFocus={onFocus} onBlur={onBlur} />
        <div hidden={args['aria-expanded'] === true ? undefined : true}>
          <p>Extra informatie die alleen zichtbaar is wanneer de Button focus heeft.</p>
        </div>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `Deze Button opent informatie bij \`focus\`, en verbergt de informatie bij \`blur\`.

Let op: de interactie werkt alleen als je deze Story zelfstandig bekijkt via de Storybook Sidebar. Er gebeurt niets wanneer je meerdere stories bekijkt op 1 pagina.`,
      },
    },
    status: { type: [] },
  },
};

export const ButtonFocusContextChange: Story = {
  name: 'Fout: Button die verdwijnt bij focus',
  decorators: ExampleBodyTextDecorator,
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  args: {
    children: 'Disappearing action',
  },
  render: function Render(args) {
    const [updatedArgs, updateArgs] = useArgs();

    const onFocus = () => {
      action('hide');
      updateArgs({
        hidden: true,
      });
    };

    console.log(updatedArgs);
    return <Button {...args} {...updatedArgs} onFocus={onFocus} />;
  },
  parameters: {
    docs: {
      description: {
        story: `Deze Button verdwijnt bij \`focus\`. Deze Button voldoet niet aan [WCAG SC 3.2.1 Bij focus](https://nldesignsystem.nl/wcag/3.2.1/), omdat bij het verplaatsen van focus er iets gebeurt dat desorienterend is.

Let op: de interactie werkt alleen als je deze Story zelfstandig bekijkt via de Storybook Sidebar. Er gebeurt niets wanneer je meerdere stories bekijkt op 1 pagina.`,
      },
    },
    status: { type: [] },
  },
};

export const ButtonFocusOrder: Story = {
  name: 'Fout: Button die focus krijgt in een onlogische volgorde',
  decorators: ExampleBodyTextDecorator,
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  args: {
    children: 'Button',
    tabIndex: 1,
  },
  render: function Render(args) {
    return (
      <>
        <SkipLink href="#main">Direct naar de hoofdinhoud</SkipLink>
        <Button {...args} />
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `Deze Button krijgt als eerste focus, en componenten die logischerwijs eerder focus moeten krijgen zoals Skip Link worden overgeslagen. De Skip Link krijgt als tweede focus. Deze Button voldoet niet aan [WCAG Succescriterium 2.4.3 Focus volgorde](https://nldesignsystem.nl/wcag/2.4.3/), omdat bij het verplaatsen van focus de Button eerder focus krijgt dan de Skip Link.`,
      },
    },
    status: { type: [] },
  },
};

export const ButtonNoDisabledState: Story = {
  name: 'Fout: Button is disabled, maar die informatie is niet beschikbaar voor hulpsoftware',
  decorators: ExampleBodyTextDecorator,
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  args: {
    children: 'Button',
    className: 'nl-button--disabled',
  },
  parameters: {
    docs: {
      description: {
        story: `Deze Button heeft wel het visueel ontwerp van een Disabled Button, maar die informatie is niet beschikbaar in voor hulpsoftware. Dat had wel gekund, via het \`disabled\` of via \`aria-disabled="true\`".

De Button voldoet niet aan [WCAG-succescriterium 1.3.1 Info en relaties](https://nldesignsystem.nl/wcag/1.3.1/), omdat de informatie die visueel beschikbaar is, niet beschikbaar is voor hulpsoftware of in de tekst.`,
      },
    },
    status: { type: [] },
  },
};

export const ButtonNoExpanded: Story = {
  name: 'Fout: Button is expanded, maar die informatie is niet beschikbaar voor hulpsoftware',
  decorators: ExampleBodyTextDecorator,
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  args: {
    children: 'Details',
    className: 'closed',
    iconStart: <IconChevronUp />,
  },
  render: function Render(args) {
    const [updatedArgs, updateArgs] = useArgs();

    const expanded = args.className?.includes('expanded');

    const onClick = () => {
      updateArgs({
        iconStart: expanded ? <IconChevronUp /> : <IconChevronDown />,
        className: expanded
          ? args.className?.replace('expanded', 'closed')
          : args.className?.replace('closed', 'expanded'),
      });
    };

    return (
      <>
        <Button {...args} {...updatedArgs} onClick={onClick} />
        <div hidden={expanded ? undefined : true}>
          <p>Extra informatie die alleen zichtbaar is wanneer de Expanded is heeft.</p>
        </div>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `Deze Button heeft een icon die visueel informatie geeft of de button ingeklapt of uitgekapt is, maar die informatie is niet beschikbaar in voor hulpsoftware. Dat had wel gekund, via het \`aria-expaned="true\`".

De Button voldoet niet aan [WCAG-succescriterium 1.3.1 Info en relaties](https://nldesignsystem.nl/wcag/1.3.1/), omdat de informatie die visueel beschikbaar is, niet beschikbaar is voor hulpsoftware of in de tekst.`,
      },
    },
    status: { type: [] },
  },
};

export const ButtonIllogicalOrder: Story = {
  name: 'Fout: Button toont meer informatie, maar niet in een logische volgorde',
  decorators: ExampleBodyTextDecorator,
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  args: {
    children: 'Details',
    className: 'closed',
    iconStart: <IconChevronUp />,
    'aria-expanded': 'false',
  },
  render: function Render(args) {
    const [updatedArgs, updateArgs] = useArgs();

    const expanded = args['aria-expanded'] === 'true';

    const onClick = () => {
      updateArgs({
        iconStart: expanded ? <IconChevronUp /> : <IconChevronDown />,
        'aria-expanded': expanded ? 'false' : 'true',
      });
    };

    return (
      <>
        <div hidden={expanded ? undefined : true}>
          <p>Extra informatie die alleen zichtbaar is wanneer de Expanded is heeft.</p>
        </div>
        <Button {...args} {...updatedArgs} onClick={onClick} />
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `Deze Button toont extra informatie naar het uitklappen. De logische volgorde is dat de informatie na de button komt, omdat gebruikers van begin tot eind door het document heen gaan.

De Button voldoet niet aan [WCAG-succescriterium 1.3.2 Betekenisvolle volgorde](https://nldesignsystem.nl/wcag/1.3.2/), omdat niet getoond word op de logische volgende plek waar een gebruiker. Dit is bijzonder onduidelijk voor screenreadergebruikers.`,
      },
    },
    status: { type: [] },
  },
};

export const ButtonSmallTargetsize: Story = {
  name: 'Fout: Button die te klein is',
  decorators: ExampleBodyTextDecorator,
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  args: {
    'aria-label': 'Toevoegen aan favorieten',
    'aria-pressed': 'false',
    iconStart: <IconStar width="16" height="16" />,
    purpose: 'subtle',
    style: {
      '--utrecht-icon-size': 'var(--nl-icon-inline-size)',
      '--nl-button-min-block-size': '20px',
      '--nl-button-min-inline-size': '20px',
      '--nl-button-padding-inline-start': '0',
      '--nl-button-padding-inline-end': '0',
      '--nl-button-padding-block-start': '0',
      '--nl-button-padding-line-height': '1',
      '--nl-icon-inline-size': '20px',
      '--nl-icon-block-size': '20px',
      '--nl-button-padding-block-end': '0',
    },
  },
  render: function Render(args) {
    const [updatedArgs, updateArgs] = useArgs();

    const pressed = args['aria-pressed'] === 'true';

    const onClick = () => {
      updateArgs({
        'aria-label': pressed ? 'Toevoegen aan favorieten' : 'Verwijderen uit favorieten',
        iconStart: pressed ? <IconStar width="16" height="16" /> : <IconStarFilled width="16" height="16" />,
        'aria-pressed': pressed ? 'false' : 'true',
      });
    };

    return (
      <>
        <Button {...args} {...updatedArgs} onClick={onClick} />
      </>
    );
  },

  parameters: {
    docs: {
      description: {
        story: `Deze Button bevat alleen een icon van een ster, met een lege ruimte in het midden van de ster. De icon is 20 bij 20 pixels, en de button precies even groot om ruimte te hebben voor het icon.

Deze button voldoet daarom niet aan [WCAG-succescriterium 2.5.8 Grootte van het aanwijsgebied (minimum)](https://nldesignsystem.nl/wcag/2.5.8/) omdat de button niet tenminste 24 bij 24 pixels groot is, en de Button voldoet dan ook niet aan [WCAG-succescriterium 2.5.5 Grootte van het aanwijsgebied (uitgebreid)](https://nldesignsystem.nl/wcag/2.5.5/) omdat de Button niet tenminste 44 bij 44 pixels groot is.`,
      },
    },
    status: { type: [] },
  },
};

export const ButtonNameNotInLabel: Story = {
  name: 'Fout: Button waar het zichtbare label en de toegankelijke naam niet overeenkomen',
  decorators: ExampleBodyTextDecorator,
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  args: {
    'aria-label': 'Delete file',
    iconStart: <IconTrash />,
    label: 'Verwijderen',
  },
  parameters: {
    docs: {
      description: {
        story: `Deze Button heeft als zichtbaar label "Verwijderen", maar in \`aria-label\` staat de Engelse tekst "<span lang="en">Delete file</span>". De toegankelijke naam van de Button is daardoor "Delete file". De zichtbare naam "Verwijderen" komt dus niet voor in de toegankelijke naam, en daarom voldoet deze Button niet aan [WCAG Succescriterium 2.5.3 Label in Naam](https://nldesignsystem.nl/wcag/2.5.3/). Daarnaast voldoet de Button ook niet aan [WCAG Successcriterium 3.1.2 Taal van onderdelen](https://nldesignsystem.nl/wcag/3.1.2/).

Deze situatie komt in de praktijk regelmatig voor, wanneer \`aria-label\` niet wordt opgemerkt bij het vertalen.`,
      },
    },
    status: { type: [] },
  },
};

export const InconsistentIcon: Story = {
  name: 'Fout: Button met dezelfde functie heeft niet hetzelfde icon',
  decorators: ExampleBodyTextDecorator,
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  args: {
    label: 'Toevoegen aan winkelmandje',
  },
  render: (args) => {
    return (
      <>
        <div>
          <Button iconStart={<IconShoppingCart />} {...args} />
        </div>
        <div>
          <Button
            purpose="subtle"
            iconStart={<IconShoppingBag role="img" aria-label="Winkelmandje" />}
            label={<NumberBadge aria-label="2 producten">2</NumberBadge>}
          />
        </div>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `In dit voorbeeld zijn er twee buttons. De eerste Button heeft een winkelkarretje, en het zichtbare label "Toevoegen aan winkelmandje". Hiermee wordt duidelijk wat het symbool betekent. De tweede Button heeft een winkelmandje in plaats van een winkelkarretje, een Number Badge met het nummer 2, en er is geen zichtbaar label.

Door dat niet een consistent icoon wordt gebruikt om symbool te staan voor dezelfde functionaliteit, kan de user interface verwarrend zijn. Deze button voldoet daarom niet aan [WCAG Succescriterium 3.2.4 Consistente identificatie](https://nldesignsystem.nl/wcag/3.2.4/).

Wanneer je een symbool staat voor bepaalde functionaliteit, zoals een winkelmandje, gebruik dan consistent hetzelfde symbool.`,
      },
    },
    status: { type: [] },
  },
};

export const ButtonNoRole: Story = {
  name: 'Fout: Button heeft niet de "button" rol',
  decorators: ExampleBodyTextDecorator,
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  args: {
    label: 'Toevoegen aan winkelmandje',
  },
  render: (args) => {
    return (
      <div className="nl-button" tabIndex={0} {...args}>
        Click me
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `In dit is een Button gemaakt met een \`div\` element in plaats van een \`button\` element. De button ziet er uit als een gewone button door de \`class="nl-button\`". De Button is focusbaar door de toevoeging van \`tabindex="0"\`, maar voor hulpsoftware is het niet duidelijk dat het een button is: \`role="button\`" ontbreekt.

Deze button voldoet niet aan [WCAG-succescriterium 4.1.2 Naam, rol, waarde](https://nldesignsystem.nl/wcag/4.1.2/) en ook niet aan [WCAG-succescriterium 1.3.1 Info en relaties](https://www.w3.org/TR/WCAG22/#info-and-relationships) omdat de Button er uitziet als een interactieve button, maar niet de rol \`button\` heeft en deze informatie niet beschikbaar is voor hulpsoftware.`,
      },
    },
    status: { type: [] },
  },
};

export const ButtonNotFocusable: Story = {
  name: 'Fout: Button niet bedienbaar met toetsenbord',
  decorators: ExampleBodyTextDecorator,
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  args: {
    label: 'Toevoegen aan winkelmandje',
  },
  render: (args) => {
    return (
      <div className="nl-button" {...args}>
        Click me
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `In dit is een Button gemaakt met een \`div\` element in plaats van een \`button\` element. De button is niet focusbaar met het toetsenboard, omdat een \`div\` niet standaard focusbaar is zoals een \`button\`. De \`div\` kan focusbaar gemaakt worden door de toevoeging van \`tabindex="0"\`, maar dat is in dit voorbeeld niet gedaan.

Deze button voldoet niet aan [WCAG-succescriterium 2.1.1 Toetsenbord](https://nldesignsystem.nl/wcag/2.1.1/), omdat het niet mogelijk is om met <kbd>Tab</kbd> naar de button te gaan, waardoor het niet mogelijk is de button met <kbd>Enter</kbd> of <kbd>Space</kbd> te activeren.`,
      },
    },
    status: { type: [] },
  },
};

export const ButtonLinkNoSpace: Story = {
  name: 'Fout: Button niet bedienbaar met Space',
  decorators: ExampleBodyTextDecorator,
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  args: {
    label: 'Toevoegen aan winkelmandje',
    tabIndex: 0,
    onClick: (evt) => {
      evt.preventDefault();
      alert('De button is geactiveerd.');
    },
  },
  render: (args) => {
    return (
      <a className="nl-button" role="button" href="https://example.com/" {...args}>
        Click me
      </a>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `In deze situatie is een Button gemaakt met een \`a\` element in plaats van een \`button\` element. De ze button kan niet bediend worden met <kbd>Space</kbd>, omdat de het \`click\` event wordt gebruikt en die werkt op \`a\` elementen alleen met <kbd>Enter</kbd>.

Deze button voldoet niet aan [WCAG-succescriterium 2.1.1 Toetsenbord](https://nldesignsystem.nl/wcag/2.1.1/), omdat het niet mogelijk is met de gebruikelijke toetsen de button te bedienen.`,
      },
    },
    status: { type: [] },
  },
};

export const ButtonNoEnterSpace: Story = {
  name: 'Fout: Button niet bedienbaar met Enter of Space',
  decorators: ExampleBodyTextDecorator,
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  args: {
    label: 'Toevoegen aan winkelmandje',
    tabIndex: 0,
    onClick: () => alert('De button is geactiveerd.'),
  },
  render: (args) => {
    return (
      <div className="nl-button" {...args}>
        Click me
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `In deze situatie is een Button gemaakt met een \`div\` element in plaats van een \`button\` element. De ze button kan niet bediend worden met <kbd>Enter</kbd> of <kbd>Space</kbd>, omdat de het \`click\` event alleen met een aanwijzer.

Deze button voldoet niet aan [WCAG-succescriterium 2.1.1 Toetsenbord](https://nldesignsystem.nl/wcag/2.1.1/), omdat het niet mogelijk is met de gebruikelijke toetsen de button te bedienen.`,
      },
    },
    status: { type: [] },
  },
};

export const ButtonKeyboardTrap: Story = {
  name: 'Fout: Button is een toetsenbordval',
  decorators: ExampleBodyTextDecorator,
  globals: {
    dir: 'ltr',
    lang: 'en',
  },
  args: {
    label: 'Never loose focus!',
    tabIndex: 0,
    onBlur: (evt) => {
      setTimeout(() => {
        evt.target.focus();
      }, 100);
    },
  },
  render: (args) => {
    return (
      <>
        <SkipLink href="#after-focus-trap" id="before-focus-trap">
          Ga naar na de focus trap
        </SkipLink>
        <Button {...args} />
        <SkipLink href="#before-focus-trap" id="after-focus-trap">
          Ga naar voor de focus trap
        </SkipLink>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `..`,
      },
    },
    status: { type: [] },
  },
};

export const ButtonTransparentContrast: Story = {
  name: 'Fout: Button met transparante achtergrond heeft onvoldoende contrast',
  decorators: ExampleBodyTextDecorator,
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  args: {
    label: 'Bewerken',
    purpose: 'subtle',
  },
  render: (args) => {
    return (
      <>
        <div
          style={{
            backgroundColor: 'hsl(50 0 90)',
            '--nl-button-subtle-background-color': 'transparent',
            '--nl-button-subtle-color': 'hsl(50 0 30)',
          }}
        >
          <Button {...args} />
        </div>
        <div
          style={{
            backgroundColor: 'hsl(50 0 70)',
            '--nl-button-subtle-background-color': 'transparent',
            '--nl-button-subtle-color': 'hsl(50 0 30)',
          }}
        >
          <Button {...args} />
        </div>
        <div
          style={{
            backgroundColor: 'hsl(50 0 90)',
            '--nl-button-subtle-background-color': 'transparent',
            '--nl-button-subtle-color': 'hsl(50 0 30)',
          }}
        >
          <Button {...args} />
        </div>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `In deze situatie is een Button met een transparante achtergrond geplaatst op diverse achtergrondkleuren. Er is voldoende contrast ten opzichte van sommige achtergronden, maar het contrast is niet voldoende op andere achtergrondkleuren.

Deze buttons voldoen niet aan [WCAG-succescriterium 1.4.3 Contrast (minimum)](https://nldesignsystem.nl/wcag/1.4.3/), omdat het contrast lager is dan 4,5:1.`,
      },
    },
    status: { type: [] },
  },
};

export const ButtonPressedContrast: Story = {
  name: 'Fout: Button die pressed is heeft onvoldoende contrast ten opzichte van niet pressed button',
  decorators: ExampleBodyTextDecorator,
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  args: {
    label: 'Bewerken',
  },
  render: (args) => {
    return (
      <div
        role="group"
        aria-label="Tekstuitlijning"
        style={{
          '--nl-button-default-pressed-background-color': 'var(--nl-button-default-active-background-color)',
          '--nl-button-default-pressed-border-color': 'var(--nl-button-default-active-border-color)',
          '--nl-button-default-pressed-color': 'var(--nl-button-default-active-color)',
          '--nl-button-default-pressed-hover-background-color': 'var(--nl-button-default-hover-background-color)',
          '--nl-button-default-pressed-hover-border-color': 'var(--nl-button-default-hover-border-color)',
          '--nl-button-default-pressed-hover-color': 'var(--nl-button-default-hover-color)',
          '--nl-button-default-pressed-active-background-color': 'var(--nl-button-default-active-background-color)',
          '--nl-button-default-pressed-active-border-color': 'var(--nl-button-default-active-border-color)',
          '--nl-button-default-pressed-active-color': 'var(--nl-button-default-active-color)',
        }}
      >
        <Button pressed={false} {...args} label="Links" />
        <Button pressed={true} {...args} label="Centreren" />
        <Button pressed={false} {...args} label="Rechts" />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `Er zijn drie Toggle Buttons, voor "Tekstuitlijning": "Links", "Centreren" en "Rechts". De middelste button heeft een subtiel kleurverschil ten opzichte van de andere twee buttons, omdat "Centreren" de huidige status is. De button voor "Centreren" heeft \`aria-pressed="true"\`.

De button voldoet niet aan [WCAG-succescriterium 1.4.11 Contrast van niet-tekstuele content](https://nldesignsystem.nl/wcag/1.4.11/), omdat het verschil tussen de state pressed en niet pressed minder is dan 3:1.`,
      },
    },
    status: { type: [] },
  },
};

export const ButtonNoZoom: Story = {
  name: 'Fout: Button label past niet bij text zoom',
  decorators: ExampleBodyTextDecorator,
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  args: {
    children: 'Bewerken',
    style: {
      '--nl-button-default-font-size': '2em',
      minBlockSize: 'initial',
      maxBlockSize: 'initial',
      blockSize: '24px',
    },
  },
  render: (args) => {
    return (
      <div style={{}}>
        <Button pressed {...args} />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `...`,
      },
    },
    status: { type: [] },
  },
};

export const I: Story = {
  name: 'Toggle Button met icon in plaats van zichtbaar label',
  args: {
    iconStart: (
      <span className="utrecht-icon">
        <IconBold />
      </span>
    ),
    label: undefined,
    pressed: false,
    'aria-label': 'Vet opmaken',
  },
  parameters: {
    docs: {
      description: {
        story: 'Door het "aria-label" attribute blijft de button voor hulptechnologie te beschrijven',
      },
    },
    status: { type: [] },
  },
};

export const ButtonIconContrast: Story = {
  name: 'Button met icon met onvoldoende contrast',
  args: {
    iconStart: <IconBold style={{ color: 'black' }} />,
    pressed: true,
    'aria-label': 'Vet opmaken',
  },
  parameters: {
    docs: {
      description: {
        story: `Op een donkere achtergrond heeft een zwarte Icon onvoldoende contrast.

Gebruik \`fill="currentColor"\` bij SVG iconen, om zodat de icon dezelfde kleur heeft als de tekst, en daarmee voldoende contrast heeft.`,
      },
    },
    status: { type: [] },
  },
};

/*
✅🚫 Als het label van een button uit alléén een icoon bestaat, dan heeft deze een goed tekstalternatief.
✅🚫 Het is duidelijk of een button in- of uitgeklapt
Het is duidelijk of een button in- of uitgeklapt is en/of een relatie heeft met andere componenten.
🚫 De contrastverhouding van de tekstkleur in de button met de achtergrondkleur is hoog genoeg.
Het label van de button bestaat uit gewone tekst, niet uit een afbeelding van tekst.
✅🚫 Als het zichtbare label van de button een afbeelding of icoon is, dan is het contrast tussen de afbeelding en de achtergrond minimaal 3:1.
🚫🤢 De functionaliteit van de button veroorzaakt geen toetsenbordval.
De focusvolgorde om bij de button te komen, en de focusvolgorde na het activeren van de button is logisch en voorspelbaar.
  🚫 De focusvolgorde om bij de button te komen is logisch en voorspelbaar.
  De focusvolgorde om bij de button te komen, en de focusvolgorde na het activeren van de button is logisch en voorspelbaar.
Het label van de button maakt kort en bondig duidelijk waar de button voor dient.
Als de button de toetsenbordfocus krijgt, is het element niet volledig bedekt door andere inhoud.
Als de button de toetsenbordfocus krijgt, is het element helemaal niet bedekt door andere inhoud.
✅🚫 De button heeft een goed zichtbare focusindicator.
🚫 De zichtbare naam van de button is gelijk aan de toegankelijke naam.
🚫 De button heeft een minimale grootte van 44 bij 44 pixels.
✅ Als een buttontekst in een andere taal is dan de taal van de pagina, dan heeft het element een lang-attribuut met de juiste taalcode.
🚫 De button activeert niet al bij toetsenbordfocus.
🚫 Buttons met gelijke functies hebben hetzelfde uiterlijk en hetzelfde label.
De button heeft een toegankelijke naam die duidelijk maakt waar de button voor dient en de staat van de button is beschikbaar.



Het is mogelijk om relaties met andere componenten aan te geven.
  🆕 - aria-haspopup
  🆕 - aria-controls
✅ Als je de tekst vergroot tot 200% blijft deze in zijn geheel zichtbaar.
Als je de tekstafstand vergroot blijft de tekst in zijn geheel zichtbaar.
🚫 Je kunt de button focussen met de tabtoets en activeren met de spatiebalk en de entertoets.
🚫 Wanneer een button de toetsenbordfocus krijgt is de focus zichtbaar.
✅🚫 Als de gebruiker een button indrukt met een aanwijzer zoals een muis of vinger, is er de mogelijkheid om de actie te voorkomen of ongedaan te maken.
🚫 De button heeft een rol van button en het type is instelbaar.
*/
