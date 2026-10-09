import type { Meta, StoryObj } from '@storybook/react-vite';
import componentMarkdown from '../../docs/unordered-list-docs/docs/component.md?raw';
import { IconCheck, IconPointFilled, IconX } from '@tabler/icons-react';
import '../../components-css/icon-css/src/icon.scss';
import '../../components-css/unordered-list-css/src/unordered-list.scss';
import packageJSON from '../../components-react/unordered-list-react/package.json';
import {
  UnorderedList,
  UnorderedListItem,
  type UnorderedListProps,
} from '../../components-react/unordered-list-react/src/unordered-list';
import { Icon } from '../../components-react/icon-react/src/icon';
import { UnorderedListExampleMarkersDecorator } from '../src/UnorderedListExampleMarkersDecorator';

const meta = {
  argTypes: {
    // Vul aan door developer
  },
  args: { role: 'list' },
  component: UnorderedList,
  parameters: {
    docs: {
      description: {
        component: componentMarkdown,
      },
      source: {
        type: 'dynamic',
      },
    },
    externalLinks: [
      {
        name: 'Open op NL Design System',
        url: 'https://nldesignsystem.nl/unordered-list',
      },
      {
        name: 'Open op GitHub',
        url: packageJSON.homepage,
      },
    ],
  },
  title: 'Componenten/Unordered List',
} satisfies Meta<typeof UnorderedList>;

export default meta;

type Story = StoryObj<UnorderedListProps>;

// <ul class="nl-unordered-list">
//   <li class="nl-unordered-list__item">Kinderen jonger dan 12 jaar hebben toestemming nodig bij de aanvraag van een ID-kaart.</li>
//   <li class="nl-unordered-list__item">Kinderen jonger dan 18 jaar hebben toestemming nodig bij de aanvraag van een paspoort.</li>
//   <li class="nl-unordered-list__item">Uw kind komt zelf mee naar de afspraak voor het aanvragen en ophalen.</li>
// </ul>
// Original: Unordered List zonder `role="list"`
export const UnorderedListNoRole: Story = {
  name: 'Fout: Unordered List zonder HTML-attribuut role="list"',
  render: (args) => (
    <UnorderedList {...args}>
      <UnorderedListItem>
        Kinderen jonger dan 12 jaar hebben toestemming nodig bij de aanvraag van een ID-kaart.
      </UnorderedListItem>
      <UnorderedListItem>
        Kinderen jonger dan 18 jaar hebben toestemming nodig bij de aanvraag van een paspoort.
      </UnorderedListItem>
      <UnorderedListItem>Uw kind komt zelf mee naar de afspraak voor het aanvragen en ophalen.</UnorderedListItem>
    </UnorderedList>
  ),
  args: { role: undefined },
  parameters: {
    docs: {
      description: {
        story: `Bezoekers zien een lijst, maar screenreadergebruikers krijgen niet te horen dat dit een ongeordende lijst is. De items lijken als een groep bij elkaar te horen, maar zonder de juiste semantiek is niet duidelijk dat het om een ongeordende lijst gaat.

Het probleem ontstaat omdat het HTML-element \`ul\` niet als lijst wordt herkend in WebKit-browsers in combinatie met de CSS \`list-style: none\`. Voeg het HTML-attribuut \`role="list"\` toe, zodat de reeks als ongeordende lijst wordt herkend en correct wordt voorgelezen.`,
      },
    },
  },
};

// <ul class="nl-unordered-list">
//   <li class="nl-unordered-list__item nl-unordered-list__item--custom-marker">
//     <span class="nl-unordered-list__marker nl-unordered-list__marker--custom">
//       <span aria-hidden="true"><span class="nl-icon" aria-hidden="true"><svg><!-- bolletje --></svg></span></span>
//       <span class="nl-unordered-list__marker-label">Leesteken. </span>
//     </span>
//     Kinderen jonger dan 12 jaar hebben toestemming nodig bij de aanvraag van een ID-kaart.
//   </li>
//   <li class="nl-unordered-list__item nl-unordered-list__item--custom-marker">
//     <span class="nl-unordered-list__marker nl-unordered-list__marker--custom">
//       <span aria-hidden="true"><span class="nl-icon" aria-hidden="true"><svg><!-- bolletje --></svg></span></span>
//       <span class="nl-unordered-list__marker-label">Leesteken. </span>
//     </span>
//     Kinderen jonger dan 18 jaar hebben toestemming nodig bij de aanvraag van een paspoort.
//   </li>
// </ul>
// Original: Unordered List met custom marker zonder `role="list"`
export const UnorderedListCustomMarkerNoRole: Story = {
  name: 'Fout: Unordered List met Custom Marker zonder HTML-attribuut role="list"',
  render: (args) => (
    <UnorderedList {...args}>
      <UnorderedListItem
        marker={
          <Icon>
            <IconPointFilled />
          </Icon>
        }
        markerLabel="Leesteken. "
      >
        Kinderen jonger dan 12 jaar hebben toestemming nodig bij de aanvraag van een ID-kaart.
      </UnorderedListItem>
      <UnorderedListItem
        marker={
          <Icon>
            <IconPointFilled />
          </Icon>
        }
        markerLabel="Leesteken. "
      >
        Kinderen jonger dan 18 jaar hebben toestemming nodig bij de aanvraag van een paspoort.
      </UnorderedListItem>
    </UnorderedList>
  ),
  args: { role: undefined },
  parameters: {
    docs: {
      description: {
        story: `Bezoekers zien een lijst, maar screenreadergebruikers krijgen niet te horen dat dit een ongeordende lijst is. De items lijken als een groep bij elkaar te horen, maar zonder de juiste semantiek is niet duidelijk dat het om een ongeordende lijst gaat.

De marker bevat toegankelijke tekst, maar dit is niet de oplossing voor het probleem voor screenreadergebruikers.

Het probleem ontstaat omdat het HTML-element \`ul\` niet als lijst wordt herkend in WebKit-browsers in combinatie met de CSS \`list-style: none\`. Voeg het HTML-attribuut \`role="list"\` toe, zodat de reeks als ongeordende lijst wordt herkend en correct wordt voorgelezen.`,
      },
    },
  },
};

// <ul class="nl-unordered-list" role="list" tabindex="0">
//   <li class="nl-unordered-list__item">Kinderen jonger dan 12 jaar hebben toestemming nodig bij de aanvraag van een ID-kaart.</li>
//   <li class="nl-unordered-list__item">Kinderen jonger dan 18 jaar hebben toestemming nodig bij de aanvraag van een paspoort.</li>
//   <li class="nl-unordered-list__item">Uw kind komt zelf mee naar de afspraak voor het aanvragen en ophalen.</li>
// </ul>
// Original: Unordered List met `tabindex`
export const UnorderedListTabIndex: Story = {
  name: 'Fout: Unordered List met HTML-attribuut tabindex',
  render: (args) => (
    <UnorderedList {...args}>
      <UnorderedListItem>
        Kinderen jonger dan 12 jaar hebben toestemming nodig bij de aanvraag van een ID-kaart.
      </UnorderedListItem>
      <UnorderedListItem>
        Kinderen jonger dan 18 jaar hebben toestemming nodig bij de aanvraag van een paspoort.
      </UnorderedListItem>
      <UnorderedListItem>Uw kind komt zelf mee naar de afspraak voor het aanvragen en ophalen.</UnorderedListItem>
    </UnorderedList>
  ),
  args: { tabIndex: 0 },
  parameters: {
    docs: {
      description: {
        story: `Bezoekers die met het toetsenbord navigeren komen onbedoeld in de focusvolgorde van een lijst terecht, terwijl een lijst niet interactief is. Dat voelt onlogisch en verwart de navigatie.

Het probleem ontstaat omdat een niet-interactief element via het HTML-attribuut \`tabindex\` focusbaar is gemaakt. Verwijder het HTML-attribuut \`tabindex\`, zodat de lijst niet extra in de keyboardnavigatie verschijnt en de focusvolgorde logisch blijft.`,
      },
    },
  },
};

// <ul class="nl-unordered-list" role="list">
//   <li class="nl-unordered-list__item nl-unordered-list__item--custom-marker">
//     <span class="nl-unordered-list__marker nl-unordered-list__marker--custom">
//       <span aria-hidden="true">👁️‍🗨️</span>
//     </span>
//     Kinderen jonger dan 12 jaar hebben toestemming nodig bij de aanvraag van een ID-kaart.
//   </li>
//   <li class="nl-unordered-list__item nl-unordered-list__item--custom-marker">
//     <span class="nl-unordered-list__marker nl-unordered-list__marker--custom">
//       <span aria-hidden="true">👁️‍🗨️</span>
//     </span>
//     Kinderen jonger dan 18 jaar hebben toestemming nodig bij de aanvraag van een paspoort.
//   </li>
// </ul>
// Original: Unordered List met custom marker (Unicode emoji) zonder toegankelijk alternatief
export const UnorderedListEmojiNoAlt: Story = {
  name: 'Fout: Unordered List met Unicode emoji Custom Marker zonder toegankelijk alternatief',
  render: (args) => (
    <UnorderedList {...args}>
      <UnorderedListItem marker="👁️‍🗨️">
        Kinderen jonger dan 12 jaar hebben toestemming nodig bij de aanvraag van een ID-kaart.
      </UnorderedListItem>
      <UnorderedListItem marker="👁️‍🗨️">
        Kinderen jonger dan 18 jaar hebben toestemming nodig bij de aanvraag van een paspoort.
      </UnorderedListItem>
    </UnorderedList>
  ),
  parameters: {
    docs: {
      description: {
        story: `Bezoekers zien een emoji als marker, maar screenreadergebruikers krijgen geen duidelijke boodschap over wat die marker betekent. Hierdoor voelt de lijst minder logisch en kunnen de items moeilijker worden begrepen. Visueel is de marker duidelijk, maar de informatie over de marker is niet toegankelijk.

Het probleem ontstaat omdat de emoji als marker is gebruikt zonder toegankelijke tekst. Voeg een zichtbare of visueel verstopte alternatieve tekst toe of gebruik een standaard lijstmarker, zodat de boodschap voor iedereen duidelijk is.`,
      },
    },
  },
};

// <style>
//   .nl-unordered-list--example-emoji-marker > li { list-style-type: none; }
//   .nl-unordered-list--example-emoji-marker > li::before { content: "👁️‍🗨️ "; }
// </style>
// <ul class="nl-unordered-list nl-unordered-list--example-emoji-marker" role="list">
//   <li class="nl-unordered-list__item">Kinderen jonger dan 12 jaar hebben toestemming nodig bij de aanvraag van een ID-kaart.</li>
//   <li class="nl-unordered-list__item">Kinderen jonger dan 18 jaar hebben toestemming nodig bij de aanvraag van een paspoort.</li>
//   <li class="nl-unordered-list__item">Uw kind komt zelf mee naar de afspraak voor het aanvragen en ophalen.</li>
// </ul>
// Original: Unordered List met custom marker (Unicode emoji) via CSS `content`
export const UnorderedListEmojiAltInCssContent: Story = {
  name: 'Fout: Unordered List met Unicode emoji Custom Marker via CSS-eigenschap content',
  decorators: [UnorderedListExampleMarkersDecorator],
  render: (args) => (
    <UnorderedList {...args} className="nl-unordered-list--example-emoji-marker">
      <UnorderedListItem>
        Kinderen jonger dan 12 jaar hebben toestemming nodig bij de aanvraag van een ID-kaart.
      </UnorderedListItem>
      <UnorderedListItem>
        Kinderen jonger dan 18 jaar hebben toestemming nodig bij de aanvraag van een paspoort.
      </UnorderedListItem>
      <UnorderedListItem>Uw kind komt zelf mee naar de afspraak voor het aanvragen en ophalen.</UnorderedListItem>
    </UnorderedList>
  ),
  parameters: {
    docs: {
      description: {
        story: `Bezoekers zien een emoji als marker. Screenreaders lezen tekst uit de CSS-eigenschap \`content\` niet allemaal op dezelfde manier voor: de ene screenreader leest de naam van de emoji voor, zoals "oog in tekstballon", de andere slaat de marker over. De boodschap van de marker is daardoor niet voor iedereen betrouwbaar beschikbaar, en de tekst kan niet worden vertaald of gekopieerd.

Het probleem ontstaat omdat de marker via de CSS-eigenschap \`content\` is toegevoegd in plaats van als toegankelijke marker in de HTML. Gebruik een standaard lijstmarker, of stel een toegankelijke alternatieve tekst beschikbaar, zodat de boodschap voor iedereen duidelijk is.`,
      },
    },
  },
};

// <style>
//   .nl-unordered-list--example-image-marker > li:nth-child(-n + 2) { list-style-image: url("data:image/svg+xml,<!-- vinkje -->"); }
//   .nl-unordered-list--example-image-marker > li:nth-child(3) { list-style-image: url("data:image/svg+xml,<!-- kruis -->"); }
// </style>
// <ul class="nl-unordered-list nl-unordered-list--example-image-marker" role="list">
//   <li class="nl-unordered-list__item">Minimaal 10 karakters lang.</li>
//   <li class="nl-unordered-list__item">Minimaal één cijfer.</li>
//   <li class="nl-unordered-list__item">Minimaal één speciaal karakter.</li>
// </ul>
// Original: Unordered List met custom marker via `list-style-image` gecombineerd met `::marker`
export const UnorderedListListStyleImage: Story = {
  name: 'Fout: Unordered List met Custom Marker via CSS-eigenschap list-style-image en pseudo-element marker',
  decorators: [UnorderedListExampleMarkersDecorator],
  render: (args) => (
    <UnorderedList {...args} className="nl-unordered-list--example-image-marker">
      <UnorderedListItem>Minimaal 10 karakters lang.</UnorderedListItem>
      <UnorderedListItem>Minimaal één cijfer.</UnorderedListItem>
      <UnorderedListItem>Minimaal één speciaal karakter.</UnorderedListItem>
    </UnorderedList>
  ),
  parameters: {
    docs: {
      description: {
        story: `Bezoekers zien een afbeelding als marker, maar screenreadergebruikers krijgen geen duidelijke boodschap over wat die marker betekent. Een afbeelding uit de CSS-eigenschap \`list-style-image\` heeft geen alternatieve tekst. Hierdoor voelt de lijst minder logisch en kunnen de items moeilijker worden begrepen. Visueel is de marker duidelijk, maar de informatie over de marker is niet toegankelijk.

Het probleem ontstaat omdat de marker via de CSS-eigenschap \`list-style-image\` is toegevoegd in plaats van als toegankelijke marker in de HTML. Gebruik een standaard lijstmarker, of stel een toegankelijke alternatieve tekst beschikbaar, zodat de boodschap voor iedereen duidelijk is.`,
      },
    },
  },
};

// <style>
//   .nl-unordered-list--example-counter-marker { counter-reset: punt; }
//   .nl-unordered-list--example-counter-marker > li { list-style-type: none; }
//   .nl-unordered-list--example-counter-marker > li::before { counter-increment: punt; content: counter(punt, disc) " Let op: "; }
// </style>
// <ul class="nl-unordered-list nl-unordered-list--example-counter-marker" role="list">
//   <li class="nl-unordered-list__item">Kinderen jonger dan 12 jaar hebben toestemming nodig bij de aanvraag van een ID-kaart.</li>
//   <li class="nl-unordered-list__item">Kinderen jonger dan 18 jaar hebben toestemming nodig bij de aanvraag van een paspoort.</li>
//   <li class="nl-unordered-list__item">Uw kind komt zelf mee naar de afspraak voor het aanvragen en ophalen.</li>
// </ul>
// Original: Unordered List met custom markers via `counter-reset` / `counter-increment` in CSS `content`
export const UnorderedListCounterContent: Story = {
  name: 'Fout: Unordered List met Custom Marker via CSS-eigenschappen counter-reset en counter-increment in CSS-eigenschap content',
  decorators: [UnorderedListExampleMarkersDecorator],
  render: (args) => (
    <UnorderedList {...args} className="nl-unordered-list--example-counter-marker">
      <UnorderedListItem>
        Kinderen jonger dan 12 jaar hebben toestemming nodig bij de aanvraag van een ID-kaart.
      </UnorderedListItem>
      <UnorderedListItem>
        Kinderen jonger dan 18 jaar hebben toestemming nodig bij de aanvraag van een paspoort.
      </UnorderedListItem>
      <UnorderedListItem>Uw kind komt zelf mee naar de afspraak voor het aanvragen en ophalen.</UnorderedListItem>
    </UnorderedList>
  ),
  parameters: {
    docs: {
      description: {
        story: `Bezoekers zien een tekst als marker, zoals "Let op:". Screenreaders lezen tekst uit de CSS-eigenschap \`content\` niet allemaal op dezelfde manier voor, dus niet alle screenreadergebruikers horen deze tekst. Ook kan de tekst niet worden vertaald of gekopieerd. Visueel is de marker duidelijk, maar de informatie over de marker is niet voor iedereen betrouwbaar toegankelijk.

Het probleem ontstaat omdat de tekst met de CSS-eigenschappen \`counter-reset\` en \`counter-increment\` via de CSS-eigenschap \`content\` is opgebouwd, in plaats van als toegankelijke tekst in de HTML. Gebruik een standaard lijstmarker, of stel een toegankelijke alternatieve tekst beschikbaar, zodat de boodschap voor iedereen duidelijk is.`,
      },
    },
  },
};

// <ul class="nl-unordered-list" role="list">
//   <li class="nl-unordered-list__item nl-unordered-list__item--custom-marker">
//     <span class="nl-unordered-list__marker nl-unordered-list__marker--custom">
//       <span aria-hidden="true"><span class="nl-icon" aria-hidden="true"><svg><!-- vinkje --></svg></span></span>
//     </span>
//     Minimaal 10 karakters lang.
//   </li>
//   <li class="nl-unordered-list__item nl-unordered-list__item--custom-marker">
//     <span class="nl-unordered-list__marker nl-unordered-list__marker--custom">
//       <span aria-hidden="true"><span class="nl-icon" aria-hidden="true"><svg><!-- vinkje --></svg></span></span>
//     </span>
//     Minimaal één cijfer.
//   </li>
//   <li class="nl-unordered-list__item nl-unordered-list__item--custom-marker">
//     <span class="nl-unordered-list__marker nl-unordered-list__marker--custom">
//       <span aria-hidden="true"><span class="nl-icon" aria-hidden="true"><svg><!-- kruis --></svg></span></span>
//     </span>
//     Minimaal één speciaal karakter.
//   </li>
// </ul>
// Original: Unordered List met SVG's als bullets zonder toegankelijke implementatie
export const UnorderedListSVGNotAccessible: Story = {
  name: "Fout: Unordered List met SVG's als leestekens zonder toegankelijke implementatie",
  render: (args) => (
    <UnorderedList {...args}>
      <UnorderedListItem
        marker={
          <Icon>
            <IconCheck />
          </Icon>
        }
      >
        Minimaal 10 karakters lang.
      </UnorderedListItem>
      <UnorderedListItem
        marker={
          <Icon>
            <IconCheck />
          </Icon>
        }
      >
        Minimaal één cijfer.
      </UnorderedListItem>
      <UnorderedListItem
        marker={
          <Icon>
            <IconX />
          </Icon>
        }
      >
        Minimaal één speciaal karakter.
      </UnorderedListItem>
    </UnorderedList>
  ),
  parameters: {
    docs: {
      description: {
        story: `Bezoekers zien een afbeelding als marker, maar deze bevat geen alternatieve tekst en wordt daardoor niet voorgelezen voor screenreadergebruikers. Hierdoor voelt de lijst minder logisch en kunnen de items moeilijker worden begrepen. Visueel is de marker duidelijk, maar de informatie over de marker is niet toegankelijk.

Het probleem ontstaat omdat de afbeeldingen, in dit geval een SVG, niet toegankelijk zijn opgebouwd en geen passende alternatieve tekst krijgen. Maak een toegankelijke alternatieve tekst beschikbaar, zodat de boodschap voor iedereen duidelijk is.

Dit kan via een zichtbare tekst, een visueel verstopte tekst of het WAI-ARIA-attribuut \`aria-labelledby\`.`,
      },
    },
  },
};

// <ul class="nl-unordered-list" role="list">
//   <li class="nl-unordered-list__item nl-unordered-list__item--custom-marker">
//     <span class="nl-unordered-list__marker nl-unordered-list__marker--custom">
//       <span aria-hidden="true"><span class="nl-icon" aria-hidden="true"><svg><!-- vinkje --></svg></span></span>
//       <span class="nl-unordered-list__marker-label">Check Icoon. </span>
//     </span>
//     Minimaal 10 karakters lang.
//   </li>
//   <li class="nl-unordered-list__item nl-unordered-list__item--custom-marker">
//     <span class="nl-unordered-list__marker nl-unordered-list__marker--custom">
//       <span aria-hidden="true"><span class="nl-icon" aria-hidden="true"><svg><!-- vinkje --></svg></span></span>
//       <span class="nl-unordered-list__marker-label">Check Icoon. </span>
//     </span>
//     Minimaal één cijfer.
//   </li>
//   <li class="nl-unordered-list__item nl-unordered-list__item--custom-marker">
//     <span class="nl-unordered-list__marker nl-unordered-list__marker--custom">
//       <span aria-hidden="true"><span class="nl-icon" aria-hidden="true"><svg><!-- kruis --></svg></span></span>
//       <span class="nl-unordered-list__marker-label">Kruis Icoon. </span>
//     </span>
//     Minimaal één speciaal karakter.
//   </li>
// </ul>
// Original: Unordered List met Custom Marker met Informatieve Icon met foutieve alternatieve tekst. Voorbeeldcode: <UnorderedListItem marker={<svg><title>Number One Icon</title>...</svg>} />
export const UnorderedListInformativeIconBadAlt: Story = {
  name: 'Fout: Unordered List met Custom Marker met informatieve icoon met ontoegankelijke tekst',
  render: (args) => (
    <UnorderedList {...args}>
      <UnorderedListItem
        marker={
          <Icon>
            <IconCheck />
          </Icon>
        }
        markerLabel="Check Icoon. "
      >
        Minimaal 10 karakters lang.
      </UnorderedListItem>
      <UnorderedListItem
        marker={
          <Icon>
            <IconCheck />
          </Icon>
        }
        markerLabel="Check Icoon. "
      >
        Minimaal één cijfer.
      </UnorderedListItem>
      <UnorderedListItem
        marker={
          <Icon>
            <IconX />
          </Icon>
        }
        markerLabel="Kruis Icoon. "
      >
        Minimaal één speciaal karakter.
      </UnorderedListItem>
    </UnorderedList>
  ),
  parameters: {
    docs: {
      description: {
        story: `Bezoekers zien een informatieve icoon als marker, maar screenreadergebruikers krijgen een ontoegankelijke boodschap over wat die marker betekent. Hierdoor voelt de lijst minder logisch en kunnen de items moeilijker worden begrepen. Visueel is de marker duidelijk, maar de informatie over de marker is niet toegankelijk.

Het probleem ontstaat omdat de alternatieve tekst van de marker de naam van de icoon bevat (bijvoorbeeld "Check Icoon."), in plaats van de boodschap van de icoon (bijvoorbeeld "Voltooid.").

Gebruik een standaard lijstmarker, of stel een toegankelijke alternatieve tekst in die de boodschap van de marker overbrengt, zodat de boodschap voor iedereen duidelijk is.`,
      },
    },
  },
};
