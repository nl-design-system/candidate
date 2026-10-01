import type { Meta, StoryObj } from '@storybook/react-vite';
import componentMarkdown from '../../docs/ordered-list-docs/docs/component.md?raw';
import { IconNumber1, IconNumber2, IconNumber3, IconPointFilled } from '@tabler/icons-react';
import '../../components-css/icon-css/src/icon.scss';
import '../../components-css/ordered-list-css/src/ordered-list.scss';
import packageJSON from '../../components-react/ordered-list-react/package.json';
import {
  OrderedList,
  OrderedListItem,
  type OrderedListProps,
} from '../../components-react/ordered-list-react/src/ordered-list';
import { Icon } from '../../components-react/icon-react/src/icon';
import { OrderedListExampleMarkersDecorator } from '../src/OrderedListExampleMarkersDecorator';

const meta = {
  argTypes: {
    // Vul aan door developer
  },
  args: { role: 'list' },
  component: OrderedList,
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
        url: 'https://nldesignsystem.nl/ordered-list',
      },
      {
        name: 'Open op GitHub',
        url: packageJSON.homepage,
      },
    ],
  },
  title: 'Componenten/Ordered List',
} satisfies Meta<typeof OrderedList>;

export default meta;

type Story = StoryObj<OrderedListProps>;

// <ol class="nl-ordered-list">
//   <li class="nl-ordered-list__item">Paspoortfoto, niet ouder dan 6 maanden.</li>
//   <li class="nl-ordered-list__item">Je oude paspoort.</li>
//   <li class="nl-ordered-list__item">Je afspraakbevestiging.</li>
// </ol>
// Original: Ordered List zonder `role="list"`
export const OrderedListNoRole: Story = {
  name: 'Fout: Ordered List zonder HTML-attribuut role="list"',
  render: (args) => (
    <OrderedList {...args}>
      <OrderedListItem>Paspoortfoto, niet ouder dan 6 maanden.</OrderedListItem>
      <OrderedListItem>Je oude paspoort.</OrderedListItem>
      <OrderedListItem>Je afspraakbevestiging.</OrderedListItem>
    </OrderedList>
  ),
  args: { role: undefined },
  parameters: {
    docs: {
      description: {
        story: `Bezoekers zien een genummerde lijst, maar niet alle screenreadergebruikers krijgen betrouwbaar te horen dat dit een geordende lijst is. Zonder de juiste semantiek is de volgorde van de items onduidelijk.

Het probleem ontstaat omdat WebKit-browsers het HTML-element \`ol\` niet meer als lijst herkennen zodra de nummering met CSS wordt verborgen, bijvoorbeeld met \`list-style: none\` of een Custom Marker. Of dat gebeurt, hangt af van de CSS van de pagina en het thema. Voeg daarom altijd het HTML-attribuut \`role="list"\` toe, zodat de reeks als geordende lijst wordt herkend en correct wordt voorgelezen.`,
      },
    },
  },
};

// <ol class="nl-ordered-list">
//   <li class="nl-ordered-list__item nl-ordered-list__item--custom-marker">
//     <span class="nl-ordered-list__marker nl-ordered-list__marker--custom">
//       <span aria-hidden="true"><span class="nl-icon" aria-hidden="true"><svg>...</svg></span></span>
//       <span class="nl-ordered-list__marker-label">Stap 1. </span>
//     </span>
//     Verzamel documenten.
//   </li>
//   <li class="nl-ordered-list__item nl-ordered-list__item--custom-marker">
//     <span class="nl-ordered-list__marker nl-ordered-list__marker--custom">
//       <span aria-hidden="true"><span class="nl-icon" aria-hidden="true"><svg>...</svg></span></span>
//       <span class="nl-ordered-list__marker-label">Stap 2. </span>
//     </span>
//     Maak een afspraak.
//   </li>
// </ol>
// Original: Ordered List met custom marker zonder `role="list"`
export const OrderedListCustomMarkerNoRole: Story = {
  name: 'Fout: Ordered List met Custom Marker zonder HTML-attribuut role="list"',
  render: (args) => (
    <OrderedList {...args}>
      <OrderedListItem
        marker={
          <Icon>
            <IconNumber1 />
          </Icon>
        }
        markerLabel="Stap 1."
      >
        Verzamel documenten.
      </OrderedListItem>
      <OrderedListItem
        marker={
          <Icon>
            <IconNumber2 />
          </Icon>
        }
        markerLabel="Stap 2. "
      >
        Maak een afspraak.
      </OrderedListItem>
    </OrderedList>
  ),
  args: { role: undefined },
  parameters: {
    docs: {
      description: {
        story: `Bezoekers zien een lijst, maar screenreadergebruikers krijgen niet te horen dat dit een geordende lijst is. De items lijken op elkaar te volgen, maar zonder de juiste semantiek is de volgorde onduidelijk.

De marker bevat toegankelijke tekst, maar dit is niet de oplossing voor het probleem voor screenreadergebruikers.

Het probleem ontstaat omdat het HTML-element \`ol\` niet als lijst wordt herkend in WebKit-browsers in combinatie met de CSS \`list-style: none\`. Voeg het HTML-attribuut \`role="list"\` toe, zodat de reeks als geordende lijst wordt herkend en correct wordt voorgelezen.`,
      },
    },
  },
};

// <ol class="nl-ordered-list" role="list" tabindex="0">
//   <li class="nl-ordered-list__item">Paspoortfoto, niet ouder dan 6 maanden.</li>
//   <li class="nl-ordered-list__item">Je oude paspoort.</li>
//   <li class="nl-ordered-list__item">Je afspraakbevestiging.</li>
// </ol>
// Original: Ordered List met `tabindex`
export const OrderedListTabIndex: Story = {
  name: 'Fout: Ordered List met HTML-attribuut tabindex',
  render: (args) => (
    <OrderedList {...args} tabIndex={0}>
      <OrderedListItem>Paspoortfoto, niet ouder dan 6 maanden.</OrderedListItem>
      <OrderedListItem>Je oude paspoort.</OrderedListItem>
      <OrderedListItem>Je afspraakbevestiging.</OrderedListItem>
    </OrderedList>
  ),
  parameters: {
    docs: {
      description: {
        story: `Bezoekers die met het toetsenbord navigeren komen onbedoeld in de focusvolgorde van een lijst terecht, terwijl een lijst niet interactief is. Dat voelt onlogisch en verwart de navigatie.

Het probleem ontstaat omdat een niet-interactief element via het HTML-attribuut \`tabindex\` focusbaar is gemaakt. Verwijder het HTML-attribuut \`tabindex\`, zodat de lijst niet extra in de keyboardnavigatie verschijnt en de focusvolgorde logisch blijft.`,
      },
    },
  },
};

// <ol class="nl-ordered-list" role="list">
//   <li class="nl-ordered-list__item" aria-posinset="2" aria-setsize="5">Paspoortfoto, niet ouder dan 6 maanden.</li>
//   <li class="nl-ordered-list__item" aria-posinset="4" aria-setsize="5">Je oude paspoort.</li>
// </ol>
// Original: Ordered List met `aria-posinset` en `aria-setsize`
export const OrderedListAriaPosSetSize: Story = {
  name: 'Fout: Ordered List met HTML-attributen aria-posinset en aria-setsize',
  render: (args) => (
    <OrderedList {...args}>
      <OrderedListItem aria-posinset={2} aria-setsize={5}>
        Paspoortfoto, niet ouder dan 6 maanden.
      </OrderedListItem>
      <OrderedListItem aria-posinset={4} aria-setsize={5}>
        Je oude paspoort.
      </OrderedListItem>
    </OrderedList>
  ),
  parameters: {
    docs: {
      description: {
        story: `Bezoekers zien een lijst met twee genummerde items, maar screenreadergebruikers horen een andere positie en een ander aantal, bijvoorbeeld "2 van 5" en "4 van 5". De extra WAI-ARIA-attributen overschrijven de informatie die de browser al uit de HTML-lijststructuur haalt.

Het probleem ontstaat doordat de WAI-ARIA-attributen \`aria-posinset\` en \`aria-setsize\` op de items worden gebruikt in plaats van de semantiek van de HTML-lijststructuur. Maak geen gebruik van deze WAI-ARIA-attributen, zodat de positie en het aantal items correct worden voorgelezen.`,
      },
    },
  },
};

// <ol class="nl-ordered-list" role="list">
//   <li class="nl-ordered-list__item nl-ordered-list__item--custom-marker">
//     <span class="nl-ordered-list__marker nl-ordered-list__marker--custom">
//       <span aria-hidden="true">1️⃣</span>
//     </span>
//     Verzamel documenten.
//   </li>
//   <li class="nl-ordered-list__item nl-ordered-list__item--custom-marker">
//     <span class="nl-ordered-list__marker nl-ordered-list__marker--custom">
//       <span aria-hidden="true">2️⃣</span>
//     </span>
//     Plan een afspraak.
//   </li>
// </ol>
// Original: Ordered List met custom marker (Unicode emoji) zonder toegankelijk alternatief
export const OrderedListEmojiNoAlt: Story = {
  name: 'Fout: Ordered List met Unicode emoji Custom Marker zonder toegankelijk alternatief',
  render: (args) => (
    <OrderedList {...args}>
      <OrderedListItem marker="1️⃣">Verzamel documenten.</OrderedListItem>
      <OrderedListItem marker="2️⃣">Plan een afspraak.</OrderedListItem>
    </OrderedList>
  ),
  parameters: {
    docs: {
      description: {
        story: `Bezoekers zien een emoji als marker, maar screenreadergebruikers krijgen geen duidelijke boodschap over wat die marker betekent. Hierdoor voelt de lijst minder logisch en kunnen de stappen moeilijker worden begrepen. Visueel is de marker duidelijk, maar de informatie over de marker is niet toegankelijk.

Het probleem ontstaat omdat de emoji als marker is gebruikt zonder toegankelijke tekst. Voeg een zichtbare of visueel verstopte alternatieve tekst toe of gebruik een standaard lijstmarker, zodat de boodschap voor iedereen duidelijk is.`,
      },
    },
  },
};

// <style>
//   .nl-ordered-list--example-emoji-marker > li { list-style-type: none; }
//   .nl-ordered-list--example-emoji-marker > li:nth-child(1)::before { content: "1️⃣ "; }
//   .nl-ordered-list--example-emoji-marker > li:nth-child(2)::before { content: "2️⃣ "; }
// </style>
// <ol class="nl-ordered-list nl-ordered-list--example-emoji-marker" role="list">
//   <li class="nl-ordered-list__item">Verzamel documenten.</li>
//   <li class="nl-ordered-list__item">Plan een afspraak.</li>
// </ol>
// Original: Ordered List met custom marker (Unicode emoji) via CSS `content`
export const OrderedListEmojiAltInCssContent: Story = {
  name: 'Fout: Ordered List met Unicode emoji Custom Marker via CSS-eigenschap content',
  decorators: [OrderedListExampleMarkersDecorator],
  render: (args) => (
    <OrderedList {...args} className="nl-ordered-list--example-emoji-marker">
      <OrderedListItem>Verzamel documenten.</OrderedListItem>
      <OrderedListItem>Plan een afspraak.</OrderedListItem>
    </OrderedList>
  ),
  parameters: {
    docs: {
      description: {
        story: `Bezoekers zien een emoji als marker. Screenreaders lezen tekst uit de CSS-eigenschap \`content\` niet allemaal op dezelfde manier voor: de ene screenreader leest de naam van de emoji voor, zoals "toets 1", de andere slaat de marker over. De boodschap van de marker is daardoor niet voor iedereen betrouwbaar beschikbaar, en de tekst kan niet worden vertaald of gekopieerd.

Het probleem ontstaat omdat de marker via de CSS-eigenschap \`content\` is toegevoegd in plaats van als toegankelijke marker in de HTML. Gebruik een standaard lijstmarker, of stel een toegankelijke alternatieve tekst beschikbaar, zodat de boodschap voor iedereen duidelijk is.`,
      },
    },
  },
};

// <style>
//   .nl-ordered-list--example-image-marker > li:nth-child(1) { list-style-image: url("data:image/svg+xml,..."); }
//   .nl-ordered-list--example-image-marker > li:nth-child(2) { list-style-image: url("data:image/svg+xml,..."); }
// </style>
// <ol class="nl-ordered-list nl-ordered-list--example-image-marker" role="list">
//   <li class="nl-ordered-list__item">Verzamel documenten.</li>
//   <li class="nl-ordered-list__item">Plan een afspraak.</li>
// </ol>
// Original: Ordered List met custom marker via `list-style-image` gecombineerd met `::marker`
export const OrderedListListStyleImage: Story = {
  name: 'Fout: Ordered List met Custom Marker via CSS-eigenschap list-style-image en pseudo-element marker',
  decorators: [OrderedListExampleMarkersDecorator],
  render: (args) => (
    <OrderedList {...args} className="nl-ordered-list--example-image-marker">
      <OrderedListItem>Verzamel documenten.</OrderedListItem>
      <OrderedListItem>Plan een afspraak.</OrderedListItem>
    </OrderedList>
  ),
  parameters: {
    docs: {
      description: {
        story: `Bezoekers zien een afbeelding als marker, maar screenreadergebruikers krijgen geen duidelijke boodschap over wat die marker betekent. Een afbeelding uit de CSS-eigenschap \`list-style-image\` heeft geen alternatieve tekst. Hierdoor voelt de lijst minder logisch en kunnen de stappen moeilijker worden begrepen. Visueel is de marker duidelijk, maar de informatie over de marker is niet toegankelijk.

Het probleem ontstaat omdat de marker via de CSS-eigenschap \`list-style-image\` is toegevoegd in plaats van als toegankelijke marker in de HTML. Gebruik een standaard lijstmarker, of stel een toegankelijke alternatieve tekst beschikbaar, zodat de boodschap voor iedereen duidelijk is.`,
      },
    },
  },
};

// <style>
//   .nl-ordered-list--example-counter-marker { counter-reset: stap; }
//   .nl-ordered-list--example-counter-marker > li { list-style-type: none; }
//   .nl-ordered-list--example-counter-marker > li::before { counter-increment: stap; content: "Stap " counter(stap) ". "; }
// </style>
// <ol class="nl-ordered-list nl-ordered-list--example-counter-marker" role="list">
//   <li class="nl-ordered-list__item">Verzamel documenten.</li>
//   <li class="nl-ordered-list__item">Plan een afspraak.</li>
// </ol>
// Original: Ordered List met custom markers via `counter-reset` / `counter-increment` in CSS `content`
export const OrderedListCounterContent: Story = {
  name: 'Fout: Ordered List met Custom Marker via CSS-eigenschappen counter-reset en counter-increment in CSS-eigenschap content',
  decorators: [OrderedListExampleMarkersDecorator],
  render: (args) => (
    <OrderedList {...args} className="nl-ordered-list--example-counter-marker">
      <OrderedListItem>Verzamel documenten.</OrderedListItem>
      <OrderedListItem>Plan een afspraak.</OrderedListItem>
    </OrderedList>
  ),
  parameters: {
    docs: {
      description: {
        story: `Bezoekers zien een tekst als marker, zoals "Stap 1.". Screenreaders lezen tekst uit de CSS-eigenschap \`content\` niet allemaal op dezelfde manier voor, dus niet alle screenreadergebruikers horen deze tekst. Ook kan de tekst niet worden vertaald of gekopieerd. Visueel is de marker duidelijk, maar de informatie over de marker is niet voor iedereen betrouwbaar toegankelijk.

Het probleem ontstaat omdat de tekst met de CSS-eigenschappen \`counter-reset\` en \`counter-increment\` via de CSS-eigenschap \`content\` is opgebouwd, in plaats van als toegankelijke tekst in de HTML. Gebruik een standaard lijstmarker, of stel een toegankelijke alternatieve tekst beschikbaar, zodat de boodschap voor iedereen duidelijk is.`,
      },
    },
  },
};

// <ol class="nl-ordered-list" role="list">
//   <li class="nl-ordered-list__item nl-ordered-list__item--custom-marker">
//     <span class="nl-ordered-list__marker nl-ordered-list__marker--custom">
//       <span aria-hidden="true"><span class="nl-icon" aria-hidden="true"><svg>...</svg></span></span>
//     </span>
//     Verzamel documenten.
//   </li>
//   <li class="nl-ordered-list__item nl-ordered-list__item--custom-marker">
//     <span class="nl-ordered-list__marker nl-ordered-list__marker--custom">
//       <span aria-hidden="true"><span class="nl-icon" aria-hidden="true"><svg>...</svg></span></span>
//     </span>
//     Maak een afspraak.
//   </li>
// </ol>
// Original: Ordered List met SVG's als bullets zonder toegankelijke implementatie
export const OrderedListSVGNotAccessible: Story = {
  name: "Fout: Ordered List met SVG's als leestekens zonder toegankelijke implementatie",
  render: (args) => (
    <OrderedList {...args}>
      <OrderedListItem
        marker={
          <Icon>
            <IconNumber1 />
          </Icon>
        }
      >
        Verzamel documenten.
      </OrderedListItem>
      <OrderedListItem
        marker={
          <Icon>
            <IconNumber2 />
          </Icon>
        }
      >
        Maak een afspraak.
      </OrderedListItem>
    </OrderedList>
  ),
  parameters: {
    docs: {
      description: {
        story: `Bezoekers zien een afbeelding als marker, maar deze bevat geen alternatieve tekst en wordt daardoor niet voorgelezen voor screenreadergebruikers. Hierdoor voelt de lijst minder logisch en kunnen de stappen moeilijker worden begrepen. Visueel is de marker duidelijk, maar de informatie over de marker is niet toegankelijk.

Het probleem ontstaat omdat de afbeeldingen, in dit geval een SVG, niet toegankelijk zijn opgebouwd en geen passende alternatieve tekst krijgen. Maak een toegankelijke alternatieve tekst beschikbaar, zodat de boodschap voor iedereen duidelijk is.

Dit kan via een zichtbare tekst, een visueel verstopte tekst of het WAI-ARIA-attribuut \`aria-labelledby\`.`,
      },
    },
  },
};

// <ol class="nl-ordered-list" role="list">
//   <li class="nl-ordered-list__item nl-ordered-list__item--custom-marker">
//     <span class="nl-ordered-list__marker nl-ordered-list__marker--custom">
//       <span aria-hidden="true"><span class="nl-icon" aria-hidden="true"><svg><!-- bolletje --></svg></span></span>
//     </span>
//     Kinderen jonger dan 12 jaar hebben toestemming nodig bij de aanvraag van een ID-kaart.
//   </li>
// </ol>
// Original: Ordered List met Custom Marker met Decoratieve Icon. Voorbeeldcode: <OrderedListItem marker={<Icon />} /> waar de Icon bijvoorbeeld een bullet is (wat betekent dat je eigenlijk UnorderedList moet gebruiken).
export const OrderedListDecorativeIcon: Story = {
  name: 'Fout: Ordered List met decoratief icoon als Custom Marker',
  render: (args) => (
    <OrderedList {...args}>
      <OrderedListItem
        marker={
          <Icon>
            <IconPointFilled />
          </Icon>
        }
      >
        Kinderen jonger dan 12 jaar hebben toestemming nodig bij de aanvraag van een ID-kaart.
      </OrderedListItem>
      <OrderedListItem
        marker={
          <Icon>
            <IconPointFilled />
          </Icon>
        }
      >
        Kinderen jonger dan 18 jaar hebben toestemming nodig bij de aanvraag van een paspoort.
      </OrderedListItem>
      <OrderedListItem
        marker={
          <Icon>
            <IconPointFilled />
          </Icon>
        }
      >
        Uw kind komt zelf mee naar de afspraak voor het aanvragen en ophalen.
      </OrderedListItem>
    </OrderedList>
  ),
  parameters: {
    docs: {
      description: {
        story: `Bezoekers zien een lijst met bolletjes voor markers. Bolletjes zijn decoratief en hebben geen echte betekenis voor de stapvolgorde. Dit is niet de bedoeling, omdat een geordende lijst een lijst is waarin de stapvolgorde een betekenis heeft.

Als een lijst geen leestekens nodig heeft voor nummering, dan is het de bedoeling dat de ongeordende lijst wordt gebruikt in plaats van de geordende lijst.
Als een lijst wel leestekens nodig heeft voor nummering, dan is het de bedoeling om markers te gebruiken die de nummering aangeven. Doe dit bijvoorbeeld met de standaard lijstmarkers of met iconen die informatief zijn en gekoppeld zijn aan een toegankelijke alternatieve tekst. Zo blijft de volgorde helder.`,
      },
    },
  },
};

// <ol class="nl-ordered-list" role="list">
//   <li class="nl-ordered-list__item nl-ordered-list__item--custom-marker">
//     <span class="nl-ordered-list__marker nl-ordered-list__marker--custom">
//       <span aria-hidden="true"><span class="nl-icon" aria-hidden="true"><svg>...</svg></span></span>
//       <span class="nl-ordered-list__marker-label">Nummer Eén Icoon. </span>
//     </span>
//     Verzamel documenten.
//   </li>
// </ol>
// Original: Ordered List met Custom Marker met Informatieve Icon met foutieve alternatieve tekst. Voorbeeldcode: <OrderedListItem marker={<svg><title>Number One Icon</title>...</svg>} />
export const OrderedListInformativeIconBadAlt: Story = {
  name: 'Fout: Ordered List met Custom Marker met informatieve icoon met ontoegankelijke tekst',
  render: (args) => (
    <OrderedList {...args}>
      <OrderedListItem
        marker={
          <Icon>
            <IconNumber1 />
          </Icon>
        }
        markerLabel="Nummer Eén Icoon. "
      >
        Verzamel documenten.
      </OrderedListItem>
      <OrderedListItem
        marker={
          <Icon>
            <IconNumber2 />
          </Icon>
        }
        markerLabel="Nummer Twee Icoon. "
      >
        Maak een afspraak.
      </OrderedListItem>
      <OrderedListItem
        marker={
          <Icon>
            <IconNumber3 />
          </Icon>
        }
        markerLabel="Nummer Drie Icoon. "
      >
        Haal uw nieuwe paspoort op.
      </OrderedListItem>
    </OrderedList>
  ),
  parameters: {
    docs: {
      description: {
        story: `Bezoekers zien een informatieve icoon als marker, maar screenreadergebruikers krijgen een ontoegankelijke boodschap over wat die marker betekent. Hierdoor voelt de lijst minder logisch en kunnen de stappen moeilijker worden begrepen. Visueel is de marker duidelijk, maar de informatie over de marker is niet toegankelijk.

Het probleem ontstaat omdat de alternatieve tekst van de marker de naam van de icoon bevat (bijvoorbeeld "Nummer Drie Icoon."), in plaats van de boodschap van de icoon (bijvoorbeeld "Stap 3.").

Gebruik een standaard lijstmarker, of stel een toegankelijke alternatieve tekst in die de boodschap van de marker overbrengt, zodat de boodschap voor iedereen duidelijk is.`,
      },
    },
  },
};
