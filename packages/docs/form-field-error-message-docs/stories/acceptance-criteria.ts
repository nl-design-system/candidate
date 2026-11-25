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
    id: 'df6b87a1-a564-41c1-9de2-5ec21b360e4c',
    // component: Wcag111Error,
    context: ['usage'],
    sc: '1.1.1',
    status: '',
    tags: ['developer'],
    title:
      'De Form Field Error Message bevat geen informatieve icons en decoratieve icons zijn verborgen voor hulpsoftware.',
  },
  {
    id: 'fc238498-2c3e-4187-bbbb-999d53fd5f19',
    // component: Wcag131FormFieldError,
    context: ['usage'],
    sc: '1.3.1',
    status: '',
    tags: ['developer'],
    title: 'De Form Field Error Message is gekoppeld aan het bijbehorende element voor formulierinvoer',
  },
  {
    id: '130fe27f-7630-40db-a479-963c86298b88',
    // component: Wcag132FormFieldError,
    context: ['usage'],
    sc: '1.3.2',
    status: '',
    tags: ['designer', 'developer'],
    title: 'De Form Field Error Message staat tussen het label en het element voor formulierinvoer.',
  },
  {
    id: '207f2245-6163-41ee-9d99-571d63305259',
    // component: Wcag133,
    context: ['usage'],
    sc: '1.3.3',
    status: '',
    tags: ['designer', 'contentmaker'],
    title: 'Instructies in de Form Field Error Message zijn op een inclusieve manier beschreven.',
  },
  {
    id: 'c7844d4e-a2fc-4dbe-a138-e0f6a6cd1b49',
    // component: Wcag141,
    context: ['usage'],
    sc: '1.4.1',
    status: '',
    tags: ['designer'],
    title:
      'Als kleuren worden gebruikt om aan te geven dat er een fout gemaakt is, dan is er ook ten minste één andere manier om de foutmelding te herkennen.',
  },
  {
    id: 'c0a1405a-43fc-4abf-a742-dc20b58f3eb7',
    // component: Wcag143,
    context: ['usage'],
    sc: '1.4.3',
    status: '',
    tags: ['designer'],
    title:
      'De tekst in de Form Field Error Message heeft een contrastratio van minimaal 4,5:1 met de achtergrondkleur.',
  },
  {
    id: '651fc175-1d61-4fa6-ac95-32cba79a72a9',
    // component: Wcag144,
    context: ['usage'],
    sc: '1.4.4',
    status: '',
    tags: ['developer'],
    title: 'Als je de tekst van de Form Field Error Message vergroot tot 200% blijft deze in zijn geheel zichtbaar.',
  },
  {
    id: '0fb6490a-169a-43f5-92e5-c0e6575bc893',
    // component: Wcag1410,
    context: ['usage'],
    sc: '1.4.10',
    status: '',
    tags: ['developer', 'designer'],
    title:
      'De bezoeker kan de Form Field Error Message tot 400% vergroten zonder verlies van functionaliteit of informatie.',
  },
  {
    id: 'c6dc7a97-a1ab-467a-a60c-e42dc089c141',
    // component: Wcag211NI,
    context: ['usage'],
    sc: '2.1.1',
    status: '',
    tags: ['developer'],
    title: 'De Form Field Error Message is niet bereikbaar en bedienbaar met het toetsenbord.',
  },
  {
    id: 'e786e707-6c44-4d86-996b-f804983171e9',
    // component: Wcag243NI,
    context: ['usage'],
    sc: '2.4.3',
    status: '',
    tags: ['developer'],
    title: 'De Form Field Error Message komt niet voor in de normale focusvolgorde van de pagina.',
  },
  {
    id: 'd4605c1b-bd63-492b-9da4-8bf8a468bfb9',
    // component: Wcag312,
    context: ['usage'],
    sc: '3.1.2',
    status: '',
    tags: ['developer'],
    title:
      'Als de Form Field Error Message in een andere taal is dan de taal van de pagina, dan heeft het een lang-attribuut met de juiste taalcode.',
  },
  {
    id: '0d27fb23-e119-4547-93a0-d230661880d7',
    // component: Wcag413Error,
    context: ['usage'],
    sc: '4.1.3',
    status: '',
    tags: ['developer'],
    // TODO: Klopt deze uberhuapt wel? De tekst lijkt te bedoelen dat je `role="alert"` gebruikt
    title:
      'Foutmeldingen over fouten die de bezoeker heeft gemaakt worden meteen voorgelezen aan bezoekers die een screenreader gebruiken.',
  },
  {
    id: 'b690ee59-cc33-4f93-a71b-a6ab10a89e07',
    // component: Wcag131NLDSFormFieldError,
    context: ['component'],
    sc: '1.3.1',
    status: '',
    tags: ['developer'],
    title: 'De Form Field Error Message kan aan een element voor formulierinvoer gekoppeld worden',
  },
  {
    id: '5f7e6c55-d689-45c8-8be7-1edce9e99be4',
    // component: Wcag1412,
    context: ['component'],
    sc: '1.4.12',
    status: '',
    tags: ['developer'],
    title: 'Tekst in de Form Field Error Message blijft leesbaar wanneer de tekstafstand vergroot wordt. ',
  },
  {
    id: '99f56c88-a693-4841-83f8-f41618c8d734',
    // component: Wcag211NLDSNI,
    context: ['component'],
    sc: '2.1.1',
    status: '',
    tags: ['developer'],
    title: 'De Form Field Error Message is standaard niet bereikbaar en bedienbaar met het toetsenbord. ',
  },
  {
    id: 'e5c4ef36-5555-49e4-967f-f7b9e6d89b70',
    // component: Wcag243NLDSNI,
    context: ['component'],
    sc: '2.4.3',
    status: '',
    tags: ['developer'],
    title: 'De Form Field Error Message komt standaard niet voor in de focusvolgorde van de pagina. ',
  },
  {
    id: '76e84bfc-8101-4ab8-b7f9-655d3a2aa3b0',
    // component: Wcag413NLDS,
    context: ['component'],
    sc: '4.1.3',
    status: '',
    tags: ['developer'],
    title: 'Het is mogelijk om de Form Field Error Message de rol `alert` te geven.',
  },
];

export default data;
