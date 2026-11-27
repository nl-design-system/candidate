import { type AcceptanceCriterium } from './AcceptanceCriteriaChecklist';

const data: AcceptanceCriterium[] = [
  {
    /* TODO: Deze op een manier opnemen in de lijst van officiele acceptaticriteria,
     * zonder dat dit verwarring oplevert. Bijvoorbeeld door 'm op de website standaard niet te tonen.
     *
     * Dit acceptatiecriteria staat niet in de lijst van nldesignsystem.nl,
     * omdat we liever Level AAA willen, dus 44x44px.
     * Maar deze eis geldt nog steeds als absoluut minimum.
     */
    id: 'a897be30-519a-4df5-8541-f95d714a5721',
    context: ['component'],
    sc: '2.5.8',
    status: '',
    tags: ['designer', 'developer'],
    title: 'De interactieve component heeft een minimale grootte van 24 bij 24 pixels.',
  },
  {
    // TODO: Uitzoeken: hoe gaan we om met acceptatiecriteria uit de Definition of Done?
    id: 'a32bdb00-7770-4407-95cc-bf3d88e24e36',
    context: ['component'],
    sc: '',
    status: '',
    tags: ['developer'],
    // TODO: Dit is nog geen goede titel
    title: 'De component werkt met korte tekst.',
  },
  {
    // TODO: Uitzoeken: hoe gaan we om met acceptatiecriteria uit de Definition of Done?
    id: '982229f0-d889-472b-acb4-4e61961405ba',
    context: ['component'],
    sc: '',
    status: '',
    tags: ['developer'],
    // TODO: Dit is nog geen goede titel
    title: 'De component werkt met lange tekst.',
  },
  {
    // TODO: Uitzoeken: hoe gaan we om met acceptatiecriteria uit de Definition of Done?
    id: '09025312-2f1a-4f30-8f06-8a8ff8d3dc86',
    context: ['component'],
    sc: '',
    status: '',
    tags: ['developer'],
    // TODO: Dit is nog geen goede titel
    title: 'De component werkt met lange tekst die niet op 1 regel past.',
  },
  {
    // TODO: Uitzoeken: hoe gaan we om met acceptatiecriteria uit de Definition of Done?
    id: 'e7c5e770-08ab-4882-a3ce-6b5da83e0c5f',
    context: ['component'],
    sc: '',
    status: '',
    tags: ['developer'],
    // TODO: Dit is nog geen goede titel
    title: 'De component werkt met left-to-right tekst.',
  },
  {
    // TODO: Uitzoeken: hoe gaan we om met acceptatiecriteria uit de Definition of Done?
    id: 'db46b84e-c927-4fe4-9129-6581d369aceb',
    context: ['component'],
    sc: '',
    status: '',
    tags: ['developer'],
    // TODO: Dit is nog geen goede titel
    title: 'De component werkt met right-to-left tekst.',
  },
  {
    // TODO: Uitzoeken: hoe gaan we om met acceptatiecriteria uit de Definition of Done?
    id: 'ef625a00-8dd7-402d-bedd-acfad6311a8e',
    context: ['component'],
    sc: '',
    status: '',
    tags: ['developer'],
    // TODO: Dit is nog geen goede titel
    title: 'De component werkt met vertical writing mode.',
  },
  {
    // TODO: Uitzoeken: hoe gaan we om met acceptatiecriteria uit de Definition of Done?
    id: 'd0f97da6-9c70-45fb-b825-b71d651942da',
    context: ['component'],
    sc: '',
    status: '',
    tags: ['developer'],
    // TODO: Dit is nog geen goede titel
    title: 'De component gebruikt in forced colors mode de juiste systeemkleuren.',
  },
  {
    // TODO: Uitzoeken: hoe gaan we om met acceptatiecriteria uit de Definition of Done?
    id: '333cbdb6-d00b-4355-a941-2562a0a4d421',
    context: ['component'],
    sc: '',
    status: '',
    tags: ['developer'],
    // TODO: Dit is nog geen goede titel
    title: 'De component is ook functioneel wanneer er geen CSS is ingeladen.',
  },
  {
    // TODO: Uitzoeken: hoe gaan we om met acceptatiecriteria uit de Definition of Done?
    id: '010391a6-90e2-4ebb-90a8-3f6b2ac1c599',
    context: ['component'],
    sc: '',
    status: '',
    tags: ['developer'],
    // TODO: Dit is nog geen goede titel
    title: 'De component is ook functioneel wanneer er geen CSS variables zijn ingeladen.',
  },
  {
    // TODO: Uitzoeken: hoe gaan we om met acceptatiecriteria uit de Definition of Done?
    id: '7eb4a112-4a17-45d1-a178-7ab973cb3a5d',
    context: ['component'],
    sc: '',
    status: '',
    tags: ['developer'],
    // TODO: Dit is nog geen goede titel
    title:
      'De component klopt visueel wanneer alternatieve HTML-elementen worden gebruikt, zoals `div`, `span` en custom elements.',
  },
  {
    id: 'b459074a-2b78-4f0a-9c7f-dad68f1afafa',
    context: ['component'],
    sc: '',
    status: '',
    tags: ['developer'],
    title: 'De component werkt ook met een Content-Security-Policy waar inline CSS niet is toegestaan.',
  },
  {
    id: 'b5dc4cd8-3461-471d-8d70-37f4da0ab55e',
    context: ['component'],
    sc: '',
    status: '',
    tags: ['developer'],
    title: 'De component werkt ook zonder JavaScript.',
  },
  {
    id: '1f655eaf-ddd4-4fea-9652-2d95155370ae',
    context: ['component'],
    sc: '',
    status: '',
    tags: ['developer'],
    title: 'De component kan met dezelfde slots ook gemaakt worden als Web Component.',
  },
  {
    id: 'fa9cd3f7-17e1-4cfb-8593-315a080af636',
    context: ['component'],
    sc: '',
    status: '',
    tags: ['developer'],
    title: 'De component heeft API namen die niet conflicteren met globale HTML attributen.',
  },
  {
    id: '936ca0fa-5c08-4aaa-a30a-ab8056c12404',
    sc: '',
    context: ['component'],
    status: '',
    tags: ['developer'],
    title: 'De design tokens van het Voorbeeld thema voldoen aan alle eisen.',
  },
  {
    id: 'ff8df8c2-e4d2-44b2-a2c2-a29ff9c02c50',
    sc: '',
    context: ['component'],
    status: '',
    tags: ['developer'],
    title: 'De design tokens hebben metadata in `tokens.json`',
  },
];

export default data;
