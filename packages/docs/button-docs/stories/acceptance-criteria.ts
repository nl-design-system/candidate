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
    id: 'fc6d4ad0-d3a1-4382-99c6-a2fed6ca0bdf',
    context: ['usage'],
    sc: '1.1.1',
    status: '',
    tags: ['designer', 'contentmaker'],
    title: 'Als het label van een button uit alléén een icoon bestaat, dan heeft deze een goed tekstalternatief.',
  },
  {
    id: '539cbbf8-7e4e-4808-960b-e32a6043774f',
    context: ['usage'],
    sc: '1.3.1',
    status: '',
    tags: ['developer'],
    title: 'Het is duidelijk of een button in- of uitgeklapt is en/of een relatie heeft met andere componenten.',
  },
  {
    id: '5ed2f8c9-89f4-43e0-a3c1-f5be0f5c8eb3',
    context: ['usage'],
    sc: '1.4.3',
    status: '',
    tags: ['designer', 'contentmaker'],
    title: 'De contrastverhouding van de tekstkleur in de button met de achtergrondkleur is hoog genoeg.',
  },
  {
    id: 'ee0e3426-3f9f-47ce-8a86-1a136bbe5f4d',
    context: ['usage'],
    sc: '1.4.5',
    status: '',
    tags: ['designer', 'contentmaker'],
    title: 'Het label van de button bestaat uit gewone tekst, niet uit een afbeelding van tekst.',
  },
  {
    id: 'e4080dec-f225-4f44-8738-00a9f6938da5',
    context: ['usage'],
    sc: '1.4.11',
    status: '',
    tags: ['designer', 'contentmaker'],
    title:
      'Als het zichtbare label van de button een afbeelding of icoon is, dan is het contrast tussen de afbeelding en de achtergrond minimaal 3:1.',
  },
  {
    id: 'b2507207-3f6a-4684-9122-e1ff5167c3e5',
    context: ['usage'],
    sc: '2.1.2',
    status: '',
    tags: ['developer'],
    title: 'De functionaliteit van de button veroorzaakt geen toetsenbordval.',
  },
  {
    id: 'babcf858-ab57-4e15-b9d6-1d3d85d91bae',
    context: ['usage'],
    sc: '2.4.3',
    status: '',
    tags: ['developer'],
    title:
      'De focusvolgorde om bij de button te komen, en de focusvolgorde na het activeren van de button is logisch en voorspelbaar.',
  },
  {
    id: '540cc225-65ac-4a7a-bc3f-894ce4196678',
    context: ['usage'],
    sc: '2.4.6',
    status: '',
    tags: ['designer', 'contentmaker'],
    title: 'Het label van de button maakt kort en bondig duidelijk waar de button voor dient.',
  },
  {
    id: '0a0406cd-057a-45ec-8937-1ccdc5345d27',
    context: ['usage'],
    sc: '2.4.11',
    status: '',
    tags: ['designer', 'developer'],
    title: 'Als de button de toetsenbordfocus krijgt, is het element niet volledig bedekt door andere inhoud.',
  },
  {
    id: '50561498-aa9e-4dd5-befe-43f8fc9e5778',
    context: ['usage'],
    sc: '2.4.12',
    status: '',
    tags: ['designer', 'developer'],
    title: 'Als de button de toetsenbordfocus krijgt, is het element helemaal niet bedekt door andere inhoud.',
  },
  {
    id: '87635588-42fa-4b25-ad77-c7e5b5fc021f',
    context: ['usage'],
    sc: '2.4.13',
    status: '',
    tags: ['designer', 'developer'],
    title: 'De button heeft een goed zichtbare focusindicator.',
  },
  {
    id: 'dc5466a8-c76b-4efa-9687-0c2d3e170249',
    context: ['usage'],
    sc: '2.5.3',
    status: '',
    tags: ['developer'],
    title: 'De zichtbare naam van de button is gelijk aan de toegankelijke naam.',
  },
  {
    id: 'a06b1ec5-1560-401f-bcb5-0bc9e56d7c87',
    context: ['usage'],
    sc: '2.5.5',
    status: '',
    tags: ['designer', 'developer'],
    title: 'De button heeft een minimale grootte van 44 bij 44 pixels.',
  },
  {
    id: '60494573-ec1d-4db3-a2db-1c05564c8919',
    context: ['usage'],
    sc: '3.1.2',
    status: '',
    tags: ['developer', 'contentmaker'],
    title:
      'Als een buttontekst in een andere taal is dan de taal van de pagina, dan heeft het element een lang-attribuut met de juiste taalcode.',
  },
  {
    id: 'b673262c-4550-44ac-875d-2f45489338c7',
    context: ['usage'],
    sc: '3.2.1',
    status: '',
    tags: ['developer'],
    title: 'De button activeert niet al bij toetsenbordfocus.',
  },
  {
    id: 'e5fe5771-ea17-4ef7-9864-b17244f12871',
    context: ['usage'],
    sc: '3.2.4',
    status: '',
    tags: ['designer', 'developer'],
    title: 'Buttons met gelijke functies hebben hetzelfde uiterlijk en hetzelfde label.',
  },
  {
    id: '20769217-c203-4cd7-92cc-5e6ec2235a0a',
    context: ['usage'],
    sc: '4.1.2',
    status: '',
    tags: ['designer', 'contentmaker'],
    title:
      'De button heeft een toegankelijke naam die duidelijk maakt waar de button voor dient en de staat van de button is beschikbaar.',
  },
  {
    id: '17b82acd-3f2d-4867-8d9c-cacfb819024a',
    context: ['component'],
    sc: '1.3.1',
    status: '',
    tags: ['developer'],
    title: 'Het is mogelijk om relaties met andere componenten aan te geven.',
  },
  {
    id: '370382cc-f103-4a66-9334-bc3af0eef2ce',
    context: ['component'],
    sc: '1.4.4',
    status: '',
    tags: ['developer'],
    title: 'Als je de tekst vergroot tot 200% blijft deze in zijn geheel zichtbaar.',
  },
  {
    id: 'f6b4989a-f5fd-4ee7-ab7c-2c94452da8db',
    context: ['component'],
    sc: '1.4.12',
    status: '',
    tags: ['developer'],
    title: 'Als je de tekstafstand vergroot blijft de tekst in zijn geheel zichtbaar.',
  },
  {
    id: '55f7ca9a-c327-4bd4-bff6-e4141de1fec3',
    context: ['component'],
    sc: '2.1.1',
    status: '',
    tags: ['developer'],
    title: 'Je kunt de button focussen met de tabtoets en activeren met de spatiebalk en de entertoets.',
  },
  {
    id: '6806e2ee-adb1-452e-a894-6d0199118fc2',
    context: ['component'],
    sc: '2.4.7',
    status: '',
    tags: ['developer'],
    title: 'Wanneer een button de toetsenbordfocus krijgt is de focus zichtbaar.',
  },
  {
    id: '8b6855f6-554e-4330-9885-c461a32f5559',
    context: ['component'],
    sc: '2.5.2',
    status: '',
    tags: ['developer'],
    title:
      'Als de gebruiker een button indrukt met een aanwijzer zoals een muis of vinger, is er de mogelijkheid om de actie te voorkomen of ongedaan te maken.',
  },
  {
    id: '5fa89091-52d3-4874-b061-3f2edfbcf36f',
    context: ['component'],
    sc: '4.1.2',
    status: '',
    tags: ['developer'],
    title: 'De button heeft een rol van button en het type is instelbaar.',
  },
];

export default data;
