import type { Meta, StoryObj } from '@storybook/react-vite';
import componentMarkdown from '../../docs/form-field-error-message-docs/docs/component.md?raw';
import '../../components-css/form-field-error-message-css/src/form-field-error-message.scss';
import packageJSON from '../../components-react/form-field-error-message-react/package.json';
import { FormFieldErrorMessage } from '../../components-react/form-field-error-message-react/src/form-field-error-message';
import { CandidateDisableCssDecorator } from '@nl-design-system-candidate/storybook-shared/src/CandidateDisableCssDecorator';

const meta = {
  argTypes: {},
  component: FormFieldErrorMessage,
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
        url: 'https://nldesignsystem.nl/form-field-error-message',
      },
      {
        name: 'Open op GitHub',
        url: packageJSON.homepage,
      },
    ],
  },
  title: 'Componenten/Form Field Error Message',
} satisfies Meta<typeof FormFieldErrorMessage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const FormFieldErrorMessageWithInteractiveContent: Story = {
  name: 'Fout: Form Field Error Message met interactieve content',
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  render: () => {
    const INPUT_ID = '1A2B3C4D-0001-0001-0001-000000000001';
    const ERROR_ID = `${INPUT_ID}-error`;
    return (
      <>
        <input id={INPUT_ID} aria-describedby={ERROR_ID} type="checkbox" />
        <label htmlFor={INPUT_ID}>Voorwaarden</label>
        <FormFieldErrorMessage id={ERROR_ID}>
          Het veld Voorwaarden is niet aangevinkt. Dit is een verplicht veld.{' '}
          <a href="/voorwaarden">Lees de voorwaarden.</a>
        </FormFieldErrorMessage>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Fout: De Form Field Error Message bevat een link. Interactieve content in een foutmelding is niet toegestaan, omdat de foutmelding informatief is en niet interactief.',
      },
    },
    status: { type: [] },
  },
};

export const FormFieldErrorMessageAsSpan: Story = {
  name: 'Fout: Form Field Error Message als HTML span element',
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  decorators: CandidateDisableCssDecorator,
  render: () => {
    const INPUT_ID = '1A2B3C4D-0001-0001-0001-000000000002';
    const ERROR_ID = `${INPUT_ID}-error`;
    return (
      <>
        <label htmlFor={INPUT_ID}>Probleem</label>
        <span id={ERROR_ID} className="nl-form-field-error-message">
          <span className="nl-form-field-error-message__content">
            Het veld Probleem is niet ingevuld. Dit is een verplicht veld.
          </span>
        </span>
        <textarea id={INPUT_ID} aria-describedby={ERROR_ID} />
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Fout: De Form Field Error Message is opgemaakt als een HTML `span` element in plaats van een HTML `div` element. De standaardwaarde van de CSS-eigenschap `display` van een `span` element is `inline`, voor een `div` element is dit `block`. Wanneer de CSS niet wordt ingeladen, wordt de foutmelding inline weergegeven naast andere elementen.',
      },
    },
    status: { type: [] },
  },
};

export const FormFieldErrorMessageAsStatus: Story = {
  name: 'Fout: Form input met Form Field Error Message als Form Field Status',
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  render: () => {
    const INPUT_ID = '1A2B3C4D-0001-0001-0001-000000000004';
    const ERROR_ID = `${INPUT_ID}-error`;
    return (
      <>
        <label htmlFor={INPUT_ID}>Uw idee</label>
        <FormFieldErrorMessage id={ERROR_ID} role="alert">
          Nog 250 karakters over.
        </FormFieldErrorMessage>
        <div>
          <textarea id={INPUT_ID} aria-describedby={ERROR_ID} rows={4} cols={50} />
        </div>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Fout: Een Form Field Error Message wordt gebruikt als statusmelding voor een tekenrestant. Een Form Field Error Message onderbreekt een bezoeker om de melding voor te lezen. Gebruik in plaats daarvan een Form Field Status.',
      },
    },
    status: { type: [] },
  },
};

export const FormFieldErrorMessageAboveTextInputViaVisualOrder: Story = {
  name: 'Fout: Form Field Error Message boven het invoerveld in de Form Field via visual order',
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  render: () => {
    const INPUT_ID = '1A2B3C4D-0001-0001-0001-000000000005';
    const ERROR_ID = `${INPUT_ID}-error`;
    return (
      <>
        <label htmlFor={INPUT_ID}>Postcode</label>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <input id={INPUT_ID} aria-describedby={ERROR_ID} type="text" autoComplete="postal-code" />
          <FormFieldErrorMessage id={ERROR_ID} style={{ order: -1 }}>
            Het veld Postcode is niet ingevuld. Dit veld mag niet leeg zijn.
          </FormFieldErrorMessage>
        </div>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Fout: De Form Field Error Message staat visueel boven het invoerveld door middel van visuele volgorde (visual order) in plaats van document order. Voor een bezoeker die gebruik maakt van een screenreader staat de melding nog steeds ónder het veld.',
      },
    },
    status: { type: [] },
  },
};

export const FormFieldErrorMessageBelowTextInput: Story = {
  name: 'Fout: Form Field Error Message onder het invoerveld in de Form Field',
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  render: () => {
    const INPUT_ID = '1A2B3C4D-0001-0001-0001-000000000005C';
    const ERROR_ID = `${INPUT_ID}-error`;
    return (
      <>
        <label htmlFor={INPUT_ID}>Postcode</label>
        <div>
          <input id={INPUT_ID} aria-describedby={ERROR_ID} type="text" autoComplete="postal-code" />
        </div>
        <FormFieldErrorMessage id={ERROR_ID}>
          Het veld Postcode is niet ingevuld. Dit veld mag niet leeg zijn.
        </FormFieldErrorMessage>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Fout: De Form Field Error Message staat onder het invoerveld in de Form Field. Een bezoeker ziet de foutmelding pas nadat het invoerveld al gepasseerd is.',
      },
    },
    status: { type: [] },
  },
};

export const FormFieldErrorMessageWithDetailsAndSummary: Story = {
  name: 'Fout: Form Field Error Message met HTML details element en HTML summary element',
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  render: () => {
    const INPUT_ID = '1A2B3C4D-0001-0001-0001-000000000006';
    const ERROR_ID = `${INPUT_ID}-error`;
    return (
      <>
        <label htmlFor={INPUT_ID}>Naam</label>
        <FormFieldErrorMessage id={ERROR_ID}>
          <details>
            <summary>Foutmelding</summary>
            Het veld Naam is niet ingevuld. Dit is een verplicht veld.
          </details>
        </FormFieldErrorMessage>
        <div>
          <input id={INPUT_ID} aria-describedby={ERROR_ID} type="text" autoComplete="name" />
        </div>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Fout: De Form Field Error Message bevat een HTML `details` element en een HTML `summary` element. Een foutmelding in een `details`-`summary` combinatie wordt niet goed voorgelezen door screenreaders wanneer een bezoeker met het toetsenbord focust op het bijbehorende invoerveld.',
      },
    },
    status: { type: [] },
  },
};

export const FormFieldErrorMessageLate: Story = {
  name: 'Fout: Form Field Error Message die te laat verschijnt',
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  render: () => {
    const NAME_INPUT_ID = '1A2B3C4D-0001-0001-0001-000000000007';
    const NAME_ERROR_ID = `${NAME_INPUT_ID}-error`;
    const POSTCODE_INPUT_ID = '1A2B3C4D-0001-0001-0001-000000000008';
    return (
      <>
        <label htmlFor={NAME_INPUT_ID}>Naam</label>
        <FormFieldErrorMessage id={NAME_ERROR_ID} role="alert">
          Het veld Naam is niet ingevuld. Dit is een verplicht veld.
        </FormFieldErrorMessage>
        <div>
          <input id={NAME_INPUT_ID} aria-describedby={NAME_ERROR_ID} type="text" autoComplete="name" />
        </div>
        <label htmlFor={POSTCODE_INPUT_ID}>Postcode</label>
        <div>
          <input id={POSTCODE_INPUT_ID} type="text" autoComplete="postal-code" />
        </div>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Fout: De Form Field Error Message is gekoppeld aan het eerste invoerveld, maar het tweede invoerveld heeft geen foutmelding. In een dynamisch formulier kan deze opzet ertoe leiden dat de foutmelding te laat wordt voorgelezen, pas wanneer de bezoeker focus verplaatst naar het volgende invoerveld.',
      },
    },
    status: { type: [] },
  },
};

export const FormFieldErrorMessageWithAlertComponent: Story = {
  name: 'Fout: Form Field Error Message die tegelijkertijd met Alert verschijnt.',
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  render: () => {
    const INPUT_ID = '1A2B3C4D-0001-0001-0001-000000000009';
    const ERROR_ID = `${INPUT_ID}-error`;
    return (
      <>
        <div role="alert">
          <p>Formulier is niet correct ingevuld. Controleer dit veld: Naam.</p>
        </div>
        <label htmlFor={INPUT_ID}>Naam</label>
        <FormFieldErrorMessage id={ERROR_ID} role="alert">
          Het veld Naam is niet ingevuld. Dit is een verplicht veld.
        </FormFieldErrorMessage>
        <div>
          <input id={INPUT_ID} aria-describedby={ERROR_ID} type="text" autoComplete="name" />
        </div>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Fout: De Form Field Error Message verschijnt tegelijkertijd met een Alert. Omdat beiden een live-region zijn, worden beide meldingen voorgelezen aan de bezoeker, wat verwarrend kan zijn.',
      },
    },
    status: { type: [] },
  },
};

export const FormFieldErrorMessageTable: Story = {
  name: 'Fout: Form Field Error Message met een table',
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  render: () => {
    const INPUT_ID = '1A2B3C4D-0001-0001-0001-000000000010';
    const ERROR_ID = `${INPUT_ID}-error`;
    return (
      <>
        <label htmlFor={INPUT_ID}>Wachtwoord</label>
        <FormFieldErrorMessage id={ERROR_ID}>
          <table>
            <thead>
              <tr>
                <th colSpan={1}>
                  Het ingevulde wachtwoord voldoet niet aan de eisen. Een wachtwoord moet voldoen aan de volgende eisen:
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Minimaal 8 karakters.</td>
              </tr>
              <tr>
                <td>Minimaal 1 hoofdletter.</td>
              </tr>
              <tr>
                <td>Minimaal 1 nummer.</td>
              </tr>
            </tbody>
          </table>
        </FormFieldErrorMessage>
        <div>
          <input id={INPUT_ID} aria-describedby={ERROR_ID} type="password" autoComplete="new-password" />
        </div>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Fout: De Form Field Error Message bevat een HTML `table` element. Een screenreader leest alle tabelinformatie op, wat niet gebruiksvriendelijk is voor een foutmelding.',
      },
    },
    status: { type: [] },
  },
};

export const FormFieldErrorMessageListItemWithoutPeriods: Story = {
  name: 'Fout: Form Field Error Message met een lijst zonder punten',
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  render: () => {
    const INPUT_ID = '1A2B3C4D-0001-0001-0001-000000000011';
    const ERROR_ID = `${INPUT_ID}-error`;
    return (
      <>
        <label htmlFor={INPUT_ID}>Wachtwoord</label>
        <FormFieldErrorMessage id={ERROR_ID}>
          Het ingevulde wachtwoord voldoet niet aan de eisen. Een wachtwoord moet voldoen aan de volgende eisen:
          <ul>
            <li>Minimaal 8 karakters</li>
            <li>Minimaal 1 hoofdletter</li>
            <li>Minimaal 1 nummer</li>
          </ul>
        </FormFieldErrorMessage>
        <div>
          <input id={INPUT_ID} aria-describedby={ERROR_ID} type="password" autoComplete="new-password" />
        </div>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Fout: De lijstitems in de Form Field Error Message eindigen niet met een punt. Een screenreader leest alle items achter elkaar op in één zin, wat niet gebruiksvriendelijk is.',
      },
    },
    status: { type: [] },
  },
};

export const FormFieldErrorMessageWithRedundantRole: Story = {
  name: 'Fout: Form Field Error Message met onnodige role en aria-live',
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  render: () => {
    const INPUT_ID = '1A2B3C4D-0001-0001-0001-000000000012';
    const ERROR_ID = `${INPUT_ID}-error`;
    return (
      <>
        <label htmlFor={INPUT_ID}>Naam</label>
        <FormFieldErrorMessage id={ERROR_ID} role="status" aria-live="polite">
          Het veld Naam is niet ingevuld. Dit is een verplicht veld.
        </FormFieldErrorMessage>
        <div>
          <input id={INPUT_ID} aria-describedby={ERROR_ID} type="text" autoComplete="name" />
        </div>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Fout: De Form Field Error Message heeft zowel een `role` attribuut als `aria-live="polite"`, terwijl de melding alleen informatieve tekst is die via `aria-describedby` aan het invoerveld is gekoppeld. Voeg geen live region of role toe wanneer de foutmelding niet dynamisch wordt bijgewerkt.',
      },
    },
    status: { type: [] },
  },
};
