/**
 * Here are our configuration settings for the Storybook status addon.
 * https://github.com/etchteam/storybook-addon-status#readme
 *
 * `wcag-fail` is based on `"earl:Fail"`
 * `wcag-pass` is based on `"earl:Pass"`
 */

export const statuses = {
  'out-of-scope': {
    background: '#d3d3d3',
    color: '#000',
    description: 'Dit scenario is op dit moment out-of-scope voor deze component.',
  },
  'Voldoet aan WCAG': {
    background: '#009D12',
    color: 'white',
    description: 'WCAG 2.2: Voldoet',
  },
  'Voldoet niet aan NL Design System': {
    background: '#EC003B',
    color: 'white',
    description: 'Voldoet niet aan de richtlijnen of acceptatiecriteria van NL Design System',
  },
  'Voldoet niet aan WCAG': {
    background: '#EC003B',
    color: 'white',
    description: 'WCAG 2.2: Voldoet niet',
  },
};
