/**
 * Here are our configuration settings for the Storybook status addon.
 * https://github.com/etchteam/storybook-addon-status#readme
 *
 * `wcag-fail` is based on `"earl:Fail"`
 * `wcag-pass` is based on `"earl:Pass"`
 */
export const STATUS = {
  CONFORMS_TO_WCAG: 'Voldoet aan WCAG',
  DOES_NOT_CONFORM_TO_NLDS: 'Voldoet niet aan NL Design System',
  DOES_NOT_CONFORM_TO_WCAG: 'Voldoet niet aan WCAG',
  OUT_OF_SCOPE: 'out-of-scope',
};

export const statuses = {
  [STATUS.CONFORMS_TO_WCAG]: {
    background: '#009D12',
    color: 'white',
    description: 'WCAG 2.2: Voldoet',
  },
  [STATUS.DOES_NOT_CONFORM_TO_NLDS]: {
    background: '#EC003B',
    color: 'white',
    description: 'Voldoet niet aan de richtlijnen of acceptatiecriteria van NL Design System',
  },
  [STATUS.DOES_NOT_CONFORM_TO_WCAG]: {
    background: '#EC003B',
    color: 'white',
    description: 'WCAG 2.2: Voldoet niet',
  },
  [STATUS.OUT_OF_SCOPE]: {
    background: '#d3d3d3',
    color: '#000',
    description: 'Dit scenario is op dit moment out-of-scope voor deze component.',
  },
};
