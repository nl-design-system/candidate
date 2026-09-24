import type { Meta, StoryObj } from '@storybook/react-vite';
import componentMarkdown from '../../docs/ordered-list-docs/docs/component.md?raw';
import '../../components-css/ordered-list-css/src/ordered-list.scss';
import packageJSON from '../../components-react/ordered-list-react/package.json';
import { OrderedList, type OrderedListProps } from '../../components-react/ordered-list-react/src/ordered-list';

const meta = {
  argTypes: {
    // Vul aan door developer
  },
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
//   <li class="nl-ordered-list__item">Paspoortfoto, niet ouder dan 6 maanden</li>
//   <li class="nl-ordered-list__item">Je oude paspoort</li>
//   <li class="nl-ordered-list__item">Je afspraakbevestiging</li>
// </ol>
// Original: Ordered List zonder `role="list"`
export const OrderedListNoRole: Story = {
  name: 'Fout: Ordered List zonder HTML-attribuut role="list"',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Bezoekers zien een lijst, maar screenreadergebruikers krijgen niet te horen dat dit een geordende lijst is. De items lijken op elkaar te volgen, maar zonder de juiste semantiek is de volgorde onduidelijk.
        Het probleem ontstaat omdat het element geen juiste lijstsemantiek heeft. Voeg het HTML-attribuut \`role="list"\` toe, zodat de reeks als geordende lijst wordt herkend en correct wordt voorgelezen.`,
      },
    },
  },
};

// <ol class="nl-ordered-list">
//   <li class="nl-ordered-list__item">
//     <span class="nl-ordered-list__marker nl-ordered-list__marker--custom">
//       <span aria-hidden="true">
//         <IconOne />
//       </span>
//      <span class="sr-only">Stap 1.{" "}</span>
//     </span>
//     Verzamel documenten
//   </li>
//   <li class="nl-ordered-list__item">
//     <span class="nl-ordered-list__marker nl-ordered-list__marker--custom">
//       <span aria-hidden="true">
//         <IconTwo />
//       </span>
//      <span class="sr-only">Stap 2.{" "}</span>
//     </span>
//     Maak een afspraak.
//    </li>
// </ol>
// Original: Ordered List met custom marker zonder `role="list"`
export const OrderedListCustomMarkerNoRole: Story = {
  name: 'Fout: Ordered List met Custom Marker zonder HTML-attribuut role="list"',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Bezoekers zien een lijst, maar screenreadergebruikers krijgen niet te horen dat dit een geordende lijst is. De items lijken op elkaar te volgen, maar zonder de juiste semantiek is de volgorde onduidelijk.

        De marker bevat toegankelijke tekst, maar dit is niet de oplossing voor het probleem voor screenreadergebruikers.

        Het probleem ontstaat omdat het element geen juiste lijstsemantiek heeft. Voeg het HTML-attribuut \`role="list"\` toe, zodat de reeks als geordende lijst wordt herkend en correct wordt voorgelezen.`,
      },
    },
  },
};

// Original: Ordered List met `tabindex`
export const OrderedListTabIndex: Story = {
  name: 'Fout: Ordered List met HTML-attribuut tabindex',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Bezoekers die met het toetsenbord navigeren komen onbedoeld in de focusvolgorde van een lijst terecht, terwijl een lijst niet interactief is. Dat voelt onlogisch en verwart de navigatie.

        Het probleem ontstaat omdat een niet-interactief element via het HTML-attribuut \`tabindex\` focusbaar is gemaakt. Verwijder het HTML-attribuut \`tabindex\`, zodat de lijst niet extra in de keyboardnavigatie verschijnt  en de focusvolgorde logisch blijft.`,
      },
    },
  },
};

// Original: Ordered List zonder lijststyling (`list-style: none`) waardoor de lijstsemantiek en ordening verloren gaat
export const OrderedListListStyleNoneNoRole: Story = {
  name: 'Fout: Ordered List zonder lijststyling en zonder role="list"',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Bezoekers zien tekst, maar zonder lijststijl en zonder lijstsemantiek is de volgorde voor bezoekers en screenreadergebruikers niet duidelijk. De informatie lijkt meer op losse tekst dan op een geordende lijst.

        Het probleem ontstaat omdat de lijststijl is weggehaald en de semantiek ontbreekt. Behoud de CSS-eigenschap \`list-style\` zodat deze niet op \`none\` word gezet en voeg het HTML-attribuut \`role="list"\` toe, , zodat de lijst visueel en semantisch als geordende lijst wordt herkend en correct wordt voorgelezen.`,
      },
    },
  },
};

// Original: Ordered List zonder lijststyling met alleen `role="list"` (lijstsemantiek terug, maar ordening ontbreekt)
export const OrderedListListStyleNoneWithRole: Story = {
  name: 'Fout: Ordered List zonder lijststyling en met HTML-attribuut role="list"',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Bezoekers kunnen de items nog wel als een groep herkennen, maar de volgorde is niet meer zichtbaar. Dat maakt een lijst met stappen moeilijker te scannen en voor screenreadergebruikers is de logische reeks niet goed te volgen. De visuele nummering ontbreekt, waardoor de inhoud op losse onderdelen lijkt.

        Het probleem ontstaat omdat alleen het HTML-attribuut \`role="list"\` is toegevoegd, maar de nummering is uitgezet via de lijststyling. Behoud de CSS-eigenschap \`list-style\` zodat deze niet op \`none\` word gezet, zodat de lijst visueel en semantisch als geordende lijst wordt herkend.`,
      },
    },
  },
};

// Original: Ordered List met `aria-posinset` en `aria-setsize`
export const OrderedListAriaPosSetSize: Story = {
  name: 'Fout: Ordered List met HTML-attributen aria-posinset en aria-setsize',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Bezoekers zien een lijst met duidelijke items, maar screenreadergebruikers krijgen geen betrouwbare informatie over de volgorde. De extra WAI-ARIA-attributen maken de structuur onduidelijk en vervangen de semantiek van de echte geordende lijst.

        Het probleem ontstaat doordat de WAI-ARIA-attributen \`aria-posinset\` en \`aria-setsize\` worden gebruikt in plaats van de semantiek van de HTML-lijststructuur. Maak geen gebruik van deze WAI-ARIA-attributen, zodat de volgorde correct wordt voorgelezen.`,
      },
    },
  },
};

// <ol class="nl-ordered-list" role="list">
//   <li class="nl-ordered-list__item">
//     <span class="nl-ordered-list__marker nl-ordered-list__marker--custom">
//       <span aria-hidden="true">
//         1️⃣
//       </span>
//     </span>
//     Verzamel documenten
//   </li>
//   <li class="nl-ordered-list__item">
//     <span class="nl-ordered-list__marker nl-ordered-list__marker--custom">
//       <span aria-hidden="true">
//         2️⃣
//       </span>
//     </span>
//     Plan een afspraak
//   </li>
// </ol>
// Original: Ordered List met custom marker (Unicode emoji) zonder toegankelijk alternatief
export const OrderedListEmojiNoAlt: Story = {
  name: 'Fout: Ordered List met Unicode emoji Custom Marker zonder toegankelijk alternatief',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Bezoekers zien een emoji als marker, maar screenreadergebruikers krijgen geen duidelijke boodschap over wat die marker betekent. Hierdoor voelt de lijst minder logisch en kunnen de stappen moeilijker worden begrepen. Visueel is de marker duidelijk, maar de informatie over de marker is niet toegankelijk.

        Het probleem ontstaat omdat de emoji als marker is gebruikt zonder toegankelijke tekst. Voeg een zichtbare of visueel verstopte alternatieve tekst toe of gebruik een standaard lijstmarker, zodat de boodschap voor iedereen duidelijk is.`,
      },
    },
  },
};

// Original: Ordered List met custom marker (Unicode emoji) via CSS `content`
export const OrderedListEmojiAltInCssContent: Story = {
  name: 'Fout: Ordered List met Unicode emoji Custom Marker via CSS-eigenschap content',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Bezoekers zien een emoji als marker, maar screenreadergebruikers krijgen geen duidelijke boodschap over wat die marker betekent. Hierdoor voelt de lijst minder logisch en kunnen de stappen moeilijker worden begrepen. Visueel is de marker duidelijk, maar de informatie over de marker is niet toegankelijk.

        Het probleem ontstaat omdat de marker via de CSS-eigenschap \`content\` is toegevoegd in plaats van als toegankelijke marker in de HTML. Gebruik een standaard lijstmarker, of stel een toegankelijke alternatieve tekst beschikbaar, zodat de boodschap voor iedereen duidelijk is.`,
      },
    },
  },
};

// Original: Ordered List met custom marker via `list-style-image` gecombineerd met `::marker`
export const OrderedListListStyleImage: Story = {
  name: 'Fout: Ordered List met Custom Marker via CSS-eigenschap list-style-image en pseudo-element marker',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Bezoekers zien een afbeelding als marker, maar screenreadergebruikers krijgen geen duidelijke boodschap over wat die marker betekent. Hierdoor voelt de lijst minder logisch en kunnen de stappen moeilijker worden begrepen. Visueel is de marker duidelijk, maar de informatie over de marker is niet toegankelijk.

        Het probleem ontstaat omdat de marker via de CSS-eigenschap \`list-style-image\` is toegevoegd in plaats van als toegankelijke marker in de HTML. Gebruik een standaard lijstmarker, of stel een toegankelijke alternatieve tekst beschikbaar, zodat de boodschap voor iedereen duidelijk is.`,
      },
    },
  },
};

// Original: Ordered List met custom markers via `counter-reset` / `counter-increment` in CSS `content`
export const OrderedListCounterContent: Story = {
  name: 'Fout: Ordered List met Custom Marker via CSS-eigenschappen counter-reset en counter-increment in CSS-eigenschap content',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Bezoekers zien een tekst als marker, maar deze tekst word niet opgelezen voor screenreadergebruikers. Hierdoor voelt de lijst minder logisch en kunnen de stappen moeilijker worden begrepen. Visueel is de marker duidelijk, maar de informatie over de marker is niet toegankelijk.


        Het probleem ontstaat omdat de tekst met de CSS-eigenschappen \`counter-reset\` en \`counter-increment\` via de CSS-eigenschap \`content\` zijn opgebouwd, in plaats van als toegankelijke tekst in de HTML. Gebruik een standaard lijstmarker, of stel een toegankelijke alternatieve tekst beschikbaar, zodat de boodschap voor iedereen duidelijk is.`,
      },
    },
  },
};

// <ol class="nl-ordered-list" role="list">
//   <li class="nl-ordered-list__item">
//     <span class="nl-ordered-list__marker nl-ordered-list__marker--custom">
//       <span aria-hidden="true">
//         <IconOne />
//       </span>
//     </span>
//     Verzamel documenten
//   </li>
//   <li class="nl-ordered-list__item">
//     <span class="nl-ordered-list__marker nl-ordered-list__marker--custom">
//       <span aria-hidden="true">
//         <IconTwo />
//       </span>
//     </span>
//     Maak een afspraak.
//    </li>
// </ol>
// Original: Ordered List met SVG's als bullets zonder toegankelijke implementatie
export const OrderedListSVGNotAccessible: Story = {
  name: "Fout: Ordered List met SVG's als leestekens zonder toegankelijke implementatie",
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Bezoekers zien een afbeelding als marker, maar deze bevat geen alternatieve tekst en word daardoor niet opgelezen voor screenreadergebruikers. Hierdoor voelt de lijst minder logisch en kunnen de stappen moeilijker worden begrepen. Visueel is de marker duidelijk, maar de informatie over de marker is niet toegankelijk.

        Het probleem ontstaat omdat de afbeeldingen, in dit geval een SVG, niet toegankelijk zijn opgebouwd en geen passende alternatieve tekst krijgen. Maak een toegankelijke alternatieve tekst beschikbaar, zodat de boodschap voor iedereen duidelijk is.

       Dit kan via een zichtbare tekst, een visueel verstopte tekst of de WAI-ARIA-attribuut \`aria-labelledby\`.`,
      },
    },
  },
};

// <ol class="nl-ordered-list" role="list">
//   <li class="nl-ordered-list__item">
//     <span class="nl-ordered-list__marker nl-ordered-list__marker--custom">
//       <span aria-hidden="true">
//         <IconBullet />
//       </span>
//     </span>
//     Kinderen jonger dan 12 jaar hebben toestemming nodig bij de aanvraag van een ID-kaart.
//   </li>
//   <li class="nl-ordered-list__item">
//     <span class="nl-ordered-list__marker nl-ordered-list__marker--custom">
//       <span aria-hidden="true">
//         <IconBullet />
//       </span>
//     </span>
//     Kinderen jonger dan 18 jaar hebben toestemming nodig bij de aanvraag van een paspoort.
//    </li>
//   <li class="nl-ordered-list__item">
//     <span class="nl-ordered-list__marker nl-ordered-list__marker--custom">
//       <span aria-hidden="true">
//         <IconBullet />
//       </span>
//     </span>
//     Uw kind komt zelf mee naar de afspraak voor het aanvragen en ophalen.
//    </li>
// </ol>
// Original: Ordered List met Custom Marker met Decoratieve Icon. Voorbeeldcode: <OrderedListItem marker={<Icon />} /> waar de Icon bijvoorbeeld een bullet is (wat betekent dat je eigenlijk UnorderedList moet gebruiken).
export const OrderedListDecorativeIcon: Story = {
  name: 'Fout: Ordered List met Custom Marker met Decoratieve Icon',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Bezoekers zien een lijst met bolletjes voor markers. Bolletjes zijn decoratief en hebben geen echte betekenis voor de stapvolgorde.

        Als een lijst geen leestekens nodig heeft voor nummering, dan is het de bedoeling dat de ongeordende lijst wordt gebruikt in plaats van de geordende lijst.
        Als een lijst wel leestekens nodig heeft voor nummering, dan is het de bedoeling om markers te gebruiken die de nummering aangeven. Doe dit bijvoorbeeld met de standaard lijstmarkers of met iconen die informatief zijn en gekoppeld zijn aan een toegankelijke alternatieve tekst. Zo blijft de volgorde helder.`,
      },
    },
  },
};

// <ol class="nl-ordered-list" role="list">
//   <li class="nl-ordered-list__item">
//     <span class="nl-ordered-list__marker nl-ordered-list__marker--custom">
//       <span>
//         <svg><title>Nummer Eén Icoon</title>...</svg>
//       </span>
//     </span>
//     Verzamel documenten
//   </li>
//   <li class="nl-ordered-list__item">
//     <span class="nl-ordered-list__marker nl-ordered-list__marker--custom">
//       <span aria-hidden="true">
//         <IconTwo title="Nummer Twee Icoon" />
//       </span>
//     </span>
//     Maak een afspraak.
//    </li>
//   <li class="nl-ordered-list__item">
//     <span class="nl-ordered-list__marker nl-ordered-list__marker--custom">
//       <span aria-hidden="true">
//         <IconTwo />
//       </span>
//      <span class="sr-only">Nummer Drie Icoon.{" "}</span>
//     </span>
//     Haal uw nieuwe paspoort op.
//    </li>
// </ol>
// Original: Ordered List met Custom Marker met Informatieve Icon met foutieve alternatieve tekst. Voorbeeldcode: <OrderedListItem marker={<svg><title>Number One Icon</title>...</svg>} />
export const OrderedListInformativeIconBadAlt: Story = {
  name: 'Fout: Ordered List met Custom Marker met informatieve icoon met ontoegankelijke tekst',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Bezoekers zien een informatieve icoon als marker, maar screenreadergebruikers krijgen een ontoegankelijke boodschap over wat die marker betekent. Hierdoor voelt de lijst minder logisch en kunnen de stappen moeilijker worden begrepen. Visueel is de marker duidelijk, maar de informatie over de marker is niet toegankelijk.

        Het probleem ontstaat omdat de alternatieve tekst van de marker de naam van de icoon bevat (bijvoorbeeld "Nummber Drie Icoon."), in plaats van de boodschap van de icoon (bijvoorbeeld "Stap 3.").

        Gebruik een standaard lijstmarker, of stel een toegankelijke alternatieve tekst in welke de boodschap van de marker overbrengt, zodat de boodschap voor iedereen duidelijk is.`,
      },
    },
  },
};
