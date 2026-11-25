export interface AcceptanceCriterium {
  id: string;
  context: string[];
  sc: string;
  status: string;
  tags: string[];
  title: string;
}

// TODO: Import these from the `@nl-design-system-unstable/documentation` package
// This list is copied from https://github.com/nl-design-system/documentatie/blob/main/docs/componenten/button/_acceptatiecriteria.tsx
// For every entry the `component` property was removed, and the `id` was added
// And instead of two lists, for usage and component, they now have a `context` property that determines that info
const data: AcceptanceCriterium[] = [
  {
    id: '377816a3-3bd8-4973-ba0a-85a3a9a1fca0',
    context: ['usage'],
    sc: '1.3.1',
    status: '',
    tags: ['developer'],
    title: 'De Form Field Description is gekoppeld aan het bijbehorende element voor formulierinvoer.',
  },
  {
    id: '1a9edae4-c716-41ae-a456-7eb94d6c9e83',
    context: ['usage'],
    sc: '1.3.2',
    status: '',
    tags: ['designer', 'developer'],
    title: 'De Form Field Description staat op een logische plek.',
  },
  {
    id: '5c004bbb-66c4-46ea-932d-d1a568f2d872',
    context: ['usage'],
    sc: '1.3.3',
    status: '',
    tags: ['designer', 'contentmaker'],
    title: 'Instructies in de Form Field Description zijn op een inclusieve manier beschreven.',
  },
  {
    id: '970e2771-8e8c-455d-b7d3-dba2136b58a6',
    context: ['usage'],
    sc: '1.4.1',
    status: '',
    tags: ['designer', 'contentmaker'],
    title:
      'De kleur van de Form Field Description geeft geen informatie die niet ook op minimaal 1 andere manier wordt gegeven.',
  },
  {
    id: 'afdf1dad-b5d6-4ceb-a8e0-4625b5d9ddd2',
    context: ['usage'],
    sc: '1.4.3',
    status: '',
    tags: ['designer'],
    title: 'De tekst in de Form Field Description heeft een contrastratio van minimaal 4,5:1 met de achtergrondkleur.',
  },
  {
    id: '5538d899-4b37-4994-9a58-e879bc2f4d96',
    context: ['usage'],
    sc: '1.4.4',
    status: '',
    tags: ['developer'],
    title: 'Als je de tekst van de Form Field Description vergroot tot 200% blijft deze in zijn geheel zichtbaar.',
  },
  {
    id: '501a29fa-6f26-4ba6-9f65-fd2805056a3e',
    context: ['usage'],
    sc: '1.4.10',
    status: '',
    tags: ['developer', 'designer'],
    title:
      'De bezoeker kan de Form Field Description tot 400% vergroten zonder verlies van functionaliteit of informatie.',
  },
  {
    id: 'b443377e-8391-47e8-93e3-1609edb5a5a4',
    context: ['usage'],
    sc: '2.1.1',
    status: '',
    tags: ['developer'],
    title: 'De Form Field Description is niet bereikbaar en bedienbaar met het toetsenbord.',
  },
  {
    id: '714ae310-075a-4bfc-a849-15336ed21b05',
    context: ['usage'],
    sc: '2.4.3',
    status: '',
    tags: ['developer'],
    title: 'De Form Field Description komt niet voor in de normale focusvolgorde van de pagina.',
  },
  {
    id: '8cceca7c-6dbe-4295-8bf2-27f6a1158741',
    context: ['usage'],
    sc: '3.1.2',
    status: '',
    tags: ['developer'],
    title:
      'Als de Form Field Description in een andere taal is dan de taal van de pagina, dan heeft het een lang-attribuut met de juiste taalcode.',
  },
  {
    id: '98f9decb-51e8-4603-a42d-b3373d56d28f',
    context: ['component'],
    sc: '1.3.1',
    status: '',
    tags: ['developer'],
    title: 'De Form Field Description kan aan een element voor formulierinvoer gekoppeld worden.',
  },
  {
    id: '9f34c100-05a5-4424-a902-99c16d04eec4',
    context: ['component'],
    sc: '1.4.12',
    status: '',
    tags: ['developer'],
    title: 'Tekst in de Form Field Description blijft leesbaar wanneer de tekstafstand vergroot wordt. ',
  },
  {
    id: '972859ae-1f02-4ba1-9240-cc5e4d88b009',
    context: ['component'],
    sc: '2.1.1',
    status: '',
    tags: ['developer'],
    title: 'De Form Field Description is standaard niet bereikbaar en bedienbaar met het toetsenbord.',
  },
  {
    id: '4638bcd8-8a55-4549-96a8-eb0da762d629',
    context: ['component'],
    sc: '2.4.3',
    status: '',
    tags: ['developer'],
    title: 'De Form Field Description komt standaard niet voor in de focusvolgorde van de pagina.',
  },
];

export default data;
