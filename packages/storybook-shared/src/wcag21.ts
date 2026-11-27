export interface SuccessCriterium {
  sc: string;
  title: string;
  id: string;
  url?: string;
  conformance: string | 'A' | 'AA' | 'AAA';
  fragment: string;
  nl: {
    title: string;
  };
  since?: string | 'WCAG20' | 'WCAG21' | 'WCAG22';
}

export const successCriteria: SuccessCriterium[] = [
  {
    conformance: 'A',
    nl: {
      title: 'Niet-tekstuele content',
    },
    nldesignsystem: true,
    sc: '1.1.1',
    title: 'Non-text Content',
    id: 'https://www.w3.org/TR/WCAG21/#non-text-content',
  },
  {
    conformance: 'A',
    nl: {
      title: 'Louter-geluid en louter-videobeeld (vooraf opgenomen)',
    },
    nldesignsystem: true,
    sc: '1.2.1',
    title: 'Audio-only and Video-only (Prerecorded)',
    id: 'https://www.w3.org/TR/WCAG21/#audio-only-and-video-only-prerecorded',
  },
  {
    conformance: 'A',
    nl: {
      title: 'Ondertitels voor doven en slechthorenden (vooraf opgenomen)',
    },
    nldesignsystem: true,
    sc: '1.2.2',
    title: 'Captions (Prerecorded)',
    id: 'https://www.w3.org/TR/WCAG21/#captions-prerecorded',
  },
  {
    conformance: 'A',
    nl: {
      title: 'Audiodescriptie of media-alternatief (vooraf opgenomen)',
    },
    nldesignsystem: true,
    sc: '1.2.3',
    title: 'Audio Description or Media Alternative (Prerecorded)',
    id: 'https://www.w3.org/TR/WCAG21/#audio-description-or-media-alternative-prerecorded',
  },
  {
    conformance: 'AA',
    nl: {
      title: 'Ondertitels voor doven en slechthorenden (live)',
    },
    nldesignsystem: true,
    sc: '1.2.4',
    title: 'Captions (Live)',
    id: 'https://www.w3.org/TR/WCAG21/#captions-live',
  },
  {
    conformance: 'AA',
    nl: {
      title: 'Audiodescriptie (vooraf opgenomen)',
    },
    nldesignsystem: true,
    sc: '1.2.5',
    title: 'Audio Description (Prerecorded)',
    id: 'https://www.w3.org/TR/WCAG21/#audio-description-prerecorded',
  },
  {
    conformance: 'AAA',
    nl: {
      title: 'Gebarentaal (vooraf opgenomen)',
    },
    sc: '1.2.6',
    title: 'Sign Language (Prerecorded)',
    id: 'https://www.w3.org/TR/WCAG21/#sign-language-prerecorded',
  },
  {
    conformance: 'AAA',
    nl: {
      title: 'Verlengde audiodescriptie (vooraf opgenomen)',
    },
    sc: '1.2.7',
    title: 'Extended Audio Description (Prerecorded)',
    id: 'https://www.w3.org/TR/WCAG21/#extended-audio-description-prerecorded',
  },
  {
    conformance: 'AAA',
    nl: {
      title: 'Media-alternatief (vooraf opgenomen)',
    },
    sc: '1.2.8',
    title: 'Media Alternative (Prerecorded)',
    id: 'https://www.w3.org/TR/WCAG21/#media-alternative-prerecorded',
  },
  {
    conformance: 'AAA',
    nl: {
      title: 'Louter-geluid (live)',
    },
    sc: '1.2.9',
    title: 'Audio-only (Live)',
    id: 'https://www.w3.org/TR/WCAG21/#audio-only-live',
  },
  {
    conformance: 'A',
    nl: {
      title: 'Info en relaties',
    },
    nldesignsystem: true,
    sc: '1.3.1',
    title: 'Info and Relationships',
    id: 'https://www.w3.org/TR/WCAG21/#info-and-relationships',
  },
  {
    conformance: 'A',
    nl: {
      title: 'Betekenisvolle volgorde',
    },
    nldesignsystem: true,
    sc: '1.3.2',
    title: 'Meaningful Sequence',
    id: 'https://www.w3.org/TR/WCAG21/#meaningful-sequence',
  },
  {
    conformance: 'A',
    nl: {
      title: 'Zintuiglijke eigenschappen',
    },
    nldesignsystem: true,
    sc: '1.3.3',
    title: 'Sensory Characteristics',
    id: 'https://www.w3.org/TR/WCAG21/#sensory-characteristics',
  },
  {
    conformance: 'AA',
    nl: {
      title: 'Weergavestand',
    },
    nldesignsystem: true,
    sc: '1.3.4',
    title: 'Orientation',
    id: 'https://www.w3.org/TR/WCAG21/#orientation',
  },
  {
    conformance: 'AA',
    nl: {
      title: 'Identificeer het doel van de input',
    },
    nldesignsystem: true,
    sc: '1.3.5',
    title: 'Identify Input Purpose',
    id: 'https://www.w3.org/TR/WCAG21/#identify-input-purpose',
  },
  {
    conformance: 'AAA',
    nl: {
      title: 'Identificeer het doel',
    },
    sc: '1.3.6',
    title: 'Identify Purpose',
    id: 'https://www.w3.org/TR/WCAG21/#identify-purpose',
  },
  {
    conformance: 'A',
    nl: {
      title: 'Gebruik van kleur',
    },
    nldesignsystem: true,
    sc: '1.4.1',
    title: 'Use of Color',
    id: 'https://www.w3.org/TR/WCAG21/#use-of-color',
  },
  {
    conformance: 'A',
    nl: {
      title: 'Geluidsbediening',
    },
    nldesignsystem: true,
    sc: '1.4.2',
    title: 'Audio Control',
    id: 'https://www.w3.org/TR/WCAG21/#audio-control',
  },
  {
    conformance: 'AA',
    nl: {
      title: 'Contrast (minimum)',
    },
    nldesignsystem: true,
    sc: '1.4.3',
    title: 'Contrast (Minimum)',
    id: 'https://www.w3.org/TR/WCAG21/#contrast-minimum',
  },
  {
    conformance: 'AA',
    nl: {
      title: 'Herschalen van tekst',
    },
    nldesignsystem: true,
    sc: '1.4.4',
    title: 'Resize text',
    id: 'https://www.w3.org/TR/WCAG21/#resize-text',
  },
  {
    conformance: 'AA',
    nl: {
      title: 'Afbeeldingen van tekst',
    },
    nldesignsystem: true,
    sc: '1.4.5',
    title: 'Images of Text',
    id: 'https://www.w3.org/TR/WCAG21/#images-of-text',
  },
  {
    conformance: 'AAA',
    nl: {
      title: 'Contrast (versterkt)',
    },
    sc: '1.4.6',
    title: 'Contrast (Enhanced)',
    id: 'https://www.w3.org/TR/WCAG21/#contrast-enhanced',
  },
  {
    conformance: 'AAA',
    nl: {
      title: 'Weinig of geen achtergrondgeluid',
    },
    sc: '1.4.7',
    title: 'Low or No Background Audio',
    id: 'https://www.w3.org/TR/WCAG21/#low-or-no-background-audio',
  },
  {
    conformance: 'AAA',
    nl: {
      title: 'Visuele weergave',
    },
    sc: '1.4.8',
    title: 'Visual Presentation',
    id: 'https://www.w3.org/TR/WCAG21/#visual-presentation',
  },
  {
    conformance: 'AAA',
    nl: {
      title: 'Afbeeldingen van tekst (geen uitzondering)',
    },
    sc: '1.4.9',
    title: 'Images of Text (No Exception)',
    id: 'https://www.w3.org/TR/WCAG21/#images-of-text-no-exception',
  },
  {
    conformance: 'AA',
    nl: {
      title: 'Reflow',
    },
    nldesignsystem: true,
    sc: '1.4.10',
    title: 'Reflow',
    id: 'https://www.w3.org/TR/WCAG21/#reflow',
  },
  {
    conformance: 'AA',
    nl: {
      title: 'Contrast van niet-tekstuele content',
    },
    nldesignsystem: true,
    sc: '1.4.11',
    title: 'Non-text Contrast',
    id: 'https://www.w3.org/TR/WCAG21/#non-text-contrast',
  },
  {
    conformance: 'AA',
    nl: {
      title: 'Tekstafstand',
    },
    nldesignsystem: true,
    sc: '1.4.12',
    title: 'Text Spacing',
    id: 'https://www.w3.org/TR/WCAG21/#text-spacing',
  },
  {
    conformance: 'AA',
    nl: {
      title: 'Content bij hover of focus',
    },
    nldesignsystem: true,
    sc: '1.4.13',
    title: 'Content on Hover or Focus',
    id: 'https://www.w3.org/TR/WCAG21/#content-on-hover-or-focus',
  },
  {
    conformance: 'A',
    nl: {
      title: 'Toetsenbord',
    },
    nldesignsystem: true,
    sc: '2.1.1',
    title: 'Keyboard',
    id: 'https://www.w3.org/TR/WCAG21/#keyboard',
  },
  {
    conformance: 'A',
    nl: {
      title: 'Geen toetsenbordval',
    },
    nldesignsystem: true,
    sc: '2.1.2',
    title: 'No Keyboard Trap',
    id: 'https://www.w3.org/TR/WCAG21/#no-keyboard-trap',
  },
  {
    conformance: 'AAA',
    nl: {
      title: 'Toetsenbord (geen uitzondering)',
    },
    sc: '2.1.3',
    title: 'Keyboard (No Exception)',
    id: 'https://www.w3.org/TR/WCAG21/#keyboard-no-exception',
  },
  {
    conformance: 'A',
    nl: {
      title: 'Enkel teken sneltoetsen',
    },
    nldesignsystem: true,
    sc: '2.1.4',
    title: 'Character Key Shortcuts',
    id: 'https://www.w3.org/TR/WCAG21/#character-key-shortcuts',
  },
  {
    conformance: 'A',
    nl: {
      title: 'Timing aanpasbaar',
    },
    nldesignsystem: true,
    sc: '2.2.1',
    title: 'Timing Adjustable',
    id: 'https://www.w3.org/TR/WCAG21/#timing-adjustable',
  },
  {
    conformance: 'A',
    nl: {
      title: 'Pauzeren, stoppen, verbergen',
    },
    nldesignsystem: true,
    sc: '2.2.2',
    title: 'Pause, Stop, Hide',
    id: 'https://www.w3.org/TR/WCAG21/#pause-stop-hide',
  },
  {
    conformance: 'AAA',
    nl: {
      title: 'Geen timing',
    },
    sc: '2.2.3',
    title: 'No Timing',
    id: 'https://www.w3.org/TR/WCAG21/#no-timing',
  },
  {
    conformance: 'AAA',
    nl: {
      title: 'Onderbrekingen',
    },
    sc: '2.2.4',
    title: 'Interruptions',
    id: 'https://www.w3.org/TR/WCAG21/#interruptions',
  },
  {
    conformance: 'AAA',
    nl: {
      title: 'Herauthentisering',
    },
    sc: '2.2.5',
    title: 'Re-authenticating',
    id: 'https://www.w3.org/TR/WCAG21/#re-authenticating',
  },
  {
    conformance: 'AAA',
    nl: {
      title: 'Time-outs',
    },
    sc: '2.2.6',
    title: 'Timeouts',
    id: 'https://www.w3.org/TR/WCAG21/#timeouts',
  },
  {
    conformance: 'A',
    nl: {
      title: 'Drie flitsen of beneden drempelwaarde',
    },
    nldesignsystem: true,
    sc: '2.3.1',
    title: 'Three Flashes or Below Threshold',
    id: 'https://www.w3.org/TR/WCAG21/#three-flashes-or-below-threshold',
  },
  {
    conformance: 'AAA',
    nl: {
      title: 'Drie flitsen',
    },
    sc: '2.3.2',
    title: 'Three Flashes',
    id: 'https://www.w3.org/TR/WCAG21/#three-flashes',
  },
  {
    conformance: 'AAA',
    nl: {
      title: 'Animatie uit interacties',
    },
    sc: '2.3.3',
    title: 'Animation from Interactions',
    id: 'https://www.w3.org/TR/WCAG21/#animation-from-interactions',
  },
  {
    conformance: 'A',
    nl: {
      title: 'Blokken omzeilen',
    },
    nldesignsystem: true,
    sc: '2.4.1',
    title: 'Bypass Blocks',
    id: 'https://www.w3.org/TR/WCAG21/#bypass-blocks',
  },
  {
    conformance: 'A',
    nl: {
      title: 'Paginatitel',
    },
    nldesignsystem: true,
    sc: '2.4.2',
    title: 'Page Titled',
    id: 'https://www.w3.org/TR/WCAG21/#page-titled',
  },
  {
    conformance: 'A',
    nl: {
      title: 'Focus volgorde',
    },
    nldesignsystem: true,
    sc: '2.4.3',
    title: 'Focus Order',
    id: 'https://www.w3.org/TR/WCAG21/#focus-order',
  },
  {
    conformance: 'A',
    nl: {
      title: 'Linkdoel (in context)',
    },
    nldesignsystem: true,
    sc: '2.4.4',
    title: 'Link Purpose (In Context)',
    id: 'https://www.w3.org/TR/WCAG21/#link-purpose-in-context',
  },
  {
    conformance: 'AA',
    nl: {
      title: 'Meerdere manieren',
    },
    nldesignsystem: true,
    sc: '2.4.5',
    title: 'Multiple Ways',
    id: 'https://www.w3.org/TR/WCAG21/#multiple-ways',
  },
  {
    conformance: 'AA',
    nl: {
      title: 'Koppen en labels',
    },
    nldesignsystem: true,
    sc: '2.4.6',
    title: 'Headings and Labels',
    id: 'https://www.w3.org/TR/WCAG21/#headings-and-labels',
  },
  {
    conformance: 'AA',
    nl: {
      title: 'Focus zichtbaar',
    },
    nldesignsystem: true,
    sc: '2.4.7',
    title: 'Focus Visible',
    id: 'https://www.w3.org/TR/WCAG21/#focus-visible',
  },
  {
    conformance: 'AAA',
    nl: {
      title: 'Locatie',
    },
    sc: '2.4.8',
    title: 'Location',
    id: 'https://www.w3.org/TR/WCAG21/#location',
  },
  {
    conformance: 'AAA',
    nl: {
      title: 'Linkdoel (alleen link)',
    },
    sc: '2.4.9',
    title: 'Link Purpose (Link Only)',
    id: 'https://www.w3.org/TR/WCAG21/#link-purpose-link-only',
  },
  {
    conformance: 'AAA',
    nl: {
      title: 'Paragraafkoppen',
    },
    nldesignsystem: true,
    sc: '2.4.10',
    title: 'Section Headings',
    id: 'https://www.w3.org/TR/WCAG21/#section-headings',
  },
  {
    conformance: 'A',
    nl: {
      title: 'Aanwijzergebaren',
    },
    nldesignsystem: true,
    sc: '2.5.1',
    title: 'Pointer Gestures',
    id: 'https://www.w3.org/TR/WCAG21/#pointer-gestures',
  },
  {
    conformance: 'A',
    nl: {
      title: 'Aanwijzerannulering',
    },
    nldesignsystem: true,
    sc: '2.5.2',
    title: 'Pointer Cancellation',
    id: 'https://www.w3.org/TR/WCAG21/#pointer-cancellation',
  },
  {
    conformance: 'A',
    nl: {
      title: 'Label in naam',
    },
    nldesignsystem: true,
    sc: '2.5.3',
    title: 'Label in Name',
    id: 'https://www.w3.org/TR/WCAG21/#label-in-name',
  },
  {
    conformance: 'A',
    nl: {
      title: 'Bewegingsactivering',
    },
    nldesignsystem: true,
    sc: '2.5.4',
    title: 'Motion Actuation',
    id: 'https://www.w3.org/TR/WCAG21/#motion-actuation',
  },
  {
    conformance: 'AAA',
    nl: {
      title: 'Grootte van het aanwijsgebied (uitgebreid)',
    },
    sc: '2.5.5',
    title: 'Target Size',
    id: 'https://www.w3.org/TR/WCAG21/#target-size',
  },
  {
    conformance: 'AAA',
    nl: {
      title: 'Input gelijktijdige invoermechanismen',
    },
    sc: '2.5.6',
    title: 'Concurrent Input Mechanisms',
    id: 'https://www.w3.org/TR/WCAG21/#concurrent-input-mechanisms',
  },
  {
    conformance: 'A',
    nl: {
      title: 'Taal van de pagina',
    },
    nldesignsystem: true,
    sc: '3.1.1',
    title: 'Language of Page',
    id: 'https://www.w3.org/TR/WCAG21/#language-of-page',
  },
  {
    conformance: 'AA',
    nl: {
      title: 'Taal van onderdelen',
    },
    nldesignsystem: true,
    sc: '3.1.2',
    title: 'Language of Parts',
    id: 'https://www.w3.org/TR/WCAG21/#language-of-parts',
  },
  {
    conformance: 'AAA',
    nl: {
      title: 'Ongebruikelijke woorden',
    },
    sc: '3.1.3',
    title: 'Unusual Words',
    id: 'https://www.w3.org/TR/WCAG21/#unusual-words',
  },
  {
    conformance: 'AAA',
    nl: {
      title: 'Afkortingen',
    },
    sc: '3.1.4',
    title: 'Abbreviations',
    id: 'https://www.w3.org/TR/WCAG21/#abbreviations',
  },
  {
    conformance: 'AAA',
    nl: {
      title: 'Leesniveau',
    },
    sc: '3.1.5',
    title: 'Reading Level',
    id: 'https://www.w3.org/TR/WCAG21/#reading-level',
  },
  {
    conformance: 'AAA',
    nl: {
      title: 'Uitspraak',
    },
    sc: '3.1.6',
    title: 'Pronunciation',
    id: 'https://www.w3.org/TR/WCAG21/#pronunciation',
  },
  {
    conformance: 'A',
    nl: {
      title: 'Bij focus',
    },
    nldesignsystem: true,
    sc: '3.2.1',
    title: 'On Focus',
    id: 'https://www.w3.org/TR/WCAG21/#on-focus',
  },
  {
    conformance: 'A',
    nl: {
      title: 'Bij input',
    },
    nldesignsystem: true,
    sc: '3.2.2',
    title: 'On Input',
    id: 'https://www.w3.org/TR/WCAG21/#on-input',
  },
  {
    conformance: 'AA',
    nl: {
      title: 'Consistente navigatie',
    },
    nldesignsystem: true,
    sc: '3.2.3',
    title: 'Consistent Navigation',
    id: 'https://www.w3.org/TR/WCAG21/#consistent-navigation',
  },
  {
    conformance: 'AA',
    nl: {
      title: 'Consistente identificatie',
    },
    nldesignsystem: true,
    sc: '3.2.4',
    title: 'Consistent Identification',
    id: 'https://www.w3.org/TR/WCAG21/#consistent-identification',
  },
  {
    conformance: 'AAA',
    nl: {
      title: 'Verandering op verzoek',
    },
    sc: '3.2.5',
    title: 'Change on Request',
    id: 'https://www.w3.org/TR/WCAG21/#change-on-request',
  },
  {
    conformance: 'A',
    nl: {
      title: 'Foutidentificatie',
    },
    nldesignsystem: true,
    sc: '3.3.1',
    title: 'Error Identification',
    id: 'https://www.w3.org/TR/WCAG21/#error-identification',
  },
  {
    conformance: 'A',
    nl: {
      title: 'Labels of instructies',
    },
    nldesignsystem: true,
    sc: '3.3.2',
    title: 'Labels or Instructions',
    id: 'https://www.w3.org/TR/WCAG21/#labels-or-instructions',
  },
  {
    conformance: 'AA',
    nl: {
      title: 'Foutsuggestie',
    },
    nldesignsystem: true,
    sc: '3.3.3',
    title: 'Error Suggestion',
    id: 'https://www.w3.org/TR/WCAG21/#error-suggestion',
  },
  {
    conformance: 'AA',
    nl: {
      title: 'Foutpreventie (wettelijk, financieel, gegevens)',
    },
    nldesignsystem: true,
    sc: '3.3.4',
    title: 'Error Prevention (Legal, Financial, Data)',
    id: 'https://www.w3.org/TR/WCAG21/#error-prevention-legal-financial-data',
  },
  {
    conformance: 'AAA',
    nl: {
      title: 'Hulp',
    },
    sc: '3.3.5',
    title: 'Help',
    id: 'https://www.w3.org/TR/WCAG21/#help',
  },
  {
    conformance: 'AAA',
    nl: {
      title: 'Foutpreventie (alle)',
    },
    sc: '3.3.6',
    title: 'Error Prevention (All)',
    id: 'https://www.w3.org/TR/WCAG21/#error-prevention-all',
  },
  {
    conformance: 'A',
    nl: {
      title: 'Parsen',
    },
    nldesignsystem: true,
    sc: '4.1.1',
    title: 'Parsing',
    id: 'https://www.w3.org/TR/WCAG21/#parsing',
  },
  {
    conformance: 'A',
    nl: {
      title: 'Naam, rol, waarde',
    },
    nldesignsystem: true,
    sc: '4.1.2',
    title: 'Name, Role, Value',
    id: 'https://www.w3.org/TR/WCAG21/#name-role-value',
  },
  {
    conformance: 'AA',
    nl: {
      title: 'Statusberichten',
    },
    nldesignsystem: true,
    sc: '4.1.3',
    title: 'Status Messages',
    id: 'https://www.w3.org/TR/WCAG21/#status-messages',
  },
].map((sc) => ({
  ...sc,
  url: sc.id,
  fragment: new URL(sc.id).hash.replace(/^#/, ''),
  title: `WCAG-succescriterium ${sc.sc}: ${sc.nl.title}`,
}));

export const successCriteriaMap = new Map(successCriteria.map((data) => [data.id, data]));
