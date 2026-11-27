export interface AcceptanceCriterium {
  id: string;
  context: string[];
  sc: string;
  status: string;
  tags: string[];
  title: string;
}

// TODO: Import these from the `@nl-design-system-unstable/documentation` package
// This list is copied from https://github.com/nl-design-system/documentatie/blob/main/docs/componenten/text-input/_acceptatiecriteria.tsx
// For every entry the `component` property was removed, and the `id` was added
// And instead of two lists, for usage and component, they now have a `context` property that determines that info
const data: AcceptanceCriterium[] = [
  {
    id: 'c9f4644e-ca78-4286-bae8-23a423a94ea1',
    context: ['usage'],
    sc: '1.3.1',
    status: '',
    tags: ['developer'],
    title:
      'Het label van de Text Input is gekoppeld aan de Text Input en het is duidelijk of de Text Input verplicht ingevuld moet worden.',
  },
  {
    id: '1ca589c8-ea22-4581-8eb8-599a1017cc7c',
    context: ['usage'],
    sc: '1.3.2',
    status: '',
    tags: ['developer', 'designer', 'contentmaker'],
    title: 'Instructies bij de Text Input staan op een logische plek',
  },
  {
    id: '4edefbc9-af2b-4274-a929-99a33493141e',
    context: ['usage'],
    sc: '1.3.5',
    status: '',
    tags: ['developer'],
    title: 'Een Text Input die om persoonlijke gegevens vraagt heeft het juiste autocomplete-attribuut.',
  },
  {
    id: 'cfd5fd90-1f39-4fba-9541-dd749a9a315a',
    context: ['usage'],
    sc: '1.4.1',
    status: '',
    tags: ['designer'],
    title: 'Kleur is niet de enige manier om informatie over een Text Input weer te geven.',
  },
  {
    id: '23e369bd-7689-497a-956f-2c101bdf6498',
    context: ['usage'],
    sc: '1.4.3',
    status: '',
    tags: ['designer'],
    title: 'Placeholderteksten hebben een contrastratio van minimaal 4,5:1 met de achtergrond. ',
  },
  {
    id: '90c30b05-f4b9-48fd-850a-fbedd8821990',
    context: ['usage'],
    sc: '1.4.10',
    status: '',
    tags: ['developer'],
    title: 'De bezoeker kan de Text Input tot 400% vergroten zonder verlies van functionaliteit of informatie.',
  },
  {
    id: 'd7533593-b25d-417a-9f0a-0dc4a4d7e047',
    context: ['usage'],
    sc: '1.4.11',
    status: '',
    tags: ['designer'],
    title: 'Niet-tekstuele informatie heeft een contrastratio van minimaal 3:1 met de achtergrond.',
  },
  {
    id: '765b0ae9-34b9-4ecc-bdb6-db81751e53bc',
    context: ['usage'],
    sc: '2.1.2',
    status: '',
    tags: ['developer'],
    title: 'De Text Input veroorzaakt geen toetsenbordval.',
  },
  {
    id: 'b7bb9cc0-83dc-452a-9d79-ad60070f10be',
    context: ['usage'],
    sc: '2.4.3',
    status: '',
    tags: ['developer'],
    title: 'De Text Input staat op een logische plek in de focusvolgorde.',
  },
  {
    id: '39ceeffa-b838-4d0d-968c-15724abb797c',
    context: ['usage'],
    sc: '2.4.6',
    status: '',
    tags: ['designer', 'contentmaker'],
    title: 'De Text Input heeft een beschrijvend label en toegankelijke naam.',
  },
  {
    id: 'c9549067-ada3-43b0-b22d-5443faa26f8d',
    context: ['usage'],
    sc: '2.4.11',
    status: '',
    tags: ['developer'],
    title: 'Als de Text Input de toetsenbordfocus krijgt, is het niet volledig bedekt door andere inhoud.',
  },
  {
    id: '41f37384-d644-4071-a2e3-e79880eb67c3',
    context: ['usage'],
    sc: '2.5.3',
    status: '',
    tags: ['developer'],
    title: 'De zichtbare naam van de Text Input is gelijk aan de toegankelijke naam.',
  },
  {
    id: 'b643bbf7-b54a-458c-af1b-e69d2f5963f7',
    context: ['usage'],
    sc: '2.5.8',
    status: '',
    tags: ['developer', 'designer'],
    title: 'De Text Input heeft een minimale grootte van 24 bij 24 pixels.',
  },
  {
    id: 'a16f3cf7-a582-4796-8231-5418694f2d1e',
    context: ['usage'],
    sc: '3.1.2',
    status: '',
    tags: ['developer'],
    title:
      'Als de placeholdertekst en invoertekst in een andere taal is dan de taal van de pagina, dan heeft het `input`-element een lang-attribuut met de juiste taalcode.',
  },
  {
    id: '45744e54-bfca-4b67-804b-613a87b1b5d2',
    context: ['usage'],
    sc: '3.2.1',
    status: '',
    tags: ['developer'],
    title: 'Als de Text Input focus krijgt, gebeurt er niets onverwachts.',
  },
  {
    id: '45d12c8a-4d88-46bf-ac7f-5ac461026123',
    context: ['usage'],
    sc: '3.2.2',
    status: '',
    tags: ['developer', 'designer'],
    title: 'Bij het invullen van de Text Input gebeurt er niets onverwachts.',
  },
  {
    id: 'e7acfd25-f12e-4e20-a03e-a66876851f07',
    context: ['usage'],
    sc: '3.2.4',
    status: '',
    tags: ['developer', 'designer'],
    title: 'Text Inputs met gelijke functies hebben hetzelfde uiterlijk en hetzelfde label.',
  },
  {
    id: '251665bb-8225-4f6c-b7c4-e2d861fb356c',
    context: ['usage'],
    sc: '3.3.2',
    status: '',
    tags: ['developer', 'designer'],
    title: 'De naam en instructies over het invullen van de Text Input staan niet alleen in de placeholder',
  },
  {
    id: '832f5ad7-760b-471e-9c97-05c279c9d793',
    context: ['usage'],
    sc: '3.3.7',
    status: '',
    tags: ['designer', 'contentmaker'],
    title:
      'Gebruikers hoeven dezelfde gegevens niet opnieuw in te voeren als deze al eerder in hetzelfde proces zijn ingevuld of beschikbaar zijn in het systeem.',
  },
  {
    id: '078978cd-5d08-4084-a5cd-28368328f68a',
    context: ['usage'],
    sc: '4.1.2',
    status: '',
    tags: ['designer', 'contentmaker'],
    title:
      'De Text Input heeft een toegankelijke naam en rol, en de eigenschappen en waarde zijn beschikbaar voor hulpsoftware. ',
  },
  {
    id: 'fed55325-988c-4827-800e-fbd5f04026b6',
    context: ['component'],
    sc: '1.3.5',
    status: '',
    tags: ['developer'],
    title: 'Het is mogelijk om autocomplete in te stellen bij de Text Input.',
  },
  {
    id: 'c011e938-7310-4a88-90c0-dce1dad4949f',
    context: ['component'],
    sc: '1.4.12',
    status: '',
    tags: ['developer'],
    title: 'Placeholderteksten blijven leesbaar wanneer de tekstafstand vergroot wordt.',
  },
  {
    id: '728af1d1-f34e-45d3-a958-5ea388a6267b',
    context: ['component'],
    sc: '1.4.4',
    status: '',
    tags: ['developer'],
    title: 'Als je de tekst van placeholders vergroot tot 200% blijft deze in zijn geheel zichtbaar.',
  },
  {
    id: 'db46ef6f-cd85-491e-9ba1-7a830368a914',
    context: ['component'],
    sc: '2.1.1',
    status: '',
    tags: ['developer'],
    title: 'Je kunt de Text Input bereiken en bedienen met het toetsenbord.',
  },
  {
    id: '0d12e30a-a443-4764-ae30-15524ad2a583',
    context: ['component'],
    sc: '2.4.7',
    status: '',
    tags: ['developer'],
    title: 'Als de Text Input de toetsenbordfocus krijgt is de focus zichtbaar.',
  },
  {
    id: '44ae52ea-9572-48fa-baec-40ec5d1ea3cc',
    context: ['component'],
    sc: '4.1.2',
    status: '',
    tags: ['developer'],
    title:
      'Het is mogelijk de Text Input een toegankelijke naam en de juiste rol te geven en het `value`-attribuut is aanwezig en instelbaar.',
  },
];

export default data;
