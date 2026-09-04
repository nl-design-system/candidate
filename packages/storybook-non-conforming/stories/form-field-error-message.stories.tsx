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
    const INPUT_ID = 'f4fea1ac-3e4d-42dc-93b7-03eb80c6ddf3';
    const ERROR_ID = `${INPUT_ID}-error`;
    return (
      <>
        <div>
          <input id={INPUT_ID} aria-describedby={ERROR_ID} type="checkbox" />
          <label htmlFor={INPUT_ID}>Voorwaarden</label>
        </div>
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
          'De bezoeker krijgt een foutmelding met een link, terwijl een foutmelding alleen bedoeld is om informatie over een fout bij het invoerveld te geven. Interactieve inhoud in een foutmelding kan de bezoeker afleiden van het herstellen van de fout. Dit is vooral onduidelijk voor schermlezergebruikers, omdat de foutmelding niet alleen informatie bevat maar ook een actie aanbiedt. Plaats interactieve inhoud daarom buiten de foutmelding.',
      },
    },
    status: { type: [] },
  },
};

export const FormFieldErrorMessageAsSpan: Story = {
  name: 'Fout: Form Field Error Message als HTML-element span',
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  decorators: CandidateDisableCssDecorator,
  render: () => {
    const INPUT_ID = 'b4a76e12-9e01-4c70-a472-05fcf9066668';
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
          'De foutmelding wordt zonder de bijbehorende opmaak direct naast andere content weergegeven. Daardoor is de melding minder duidelijk herkenbaar als foutmelding bij het invoerveld. Dit gebeurt wanneer de CSS niet wordt ingeladen: het HTML-element `span` wordt standaard als inline-element weergegeven, waardoor de foutmelding niet op een eigen regel staat. Gebruik een blokelement voor de foutmelding, zodat deze ook zonder CSS als afzonderlijke tekst wordt weergegeven.',
      },
    },
    status: { type: [] },
  },
};

export const FormFieldErrorMessageAsStatus: Story = {
  name: 'Fout: Form Field Error Message gebruikt als statusmelding',
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  render: () => {
    const INPUT_ID = 'f7a0b878-8414-4d62-91ea-7dc894d222eb';
    const ERROR_ID = `${INPUT_ID}-error`;
    return (
      <>
        <div>
          <label htmlFor={INPUT_ID}>Uw idee</label>
        </div>
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
          'De foutmelding wordt gebruikt als statusmelding voor een tekenrestant. Een foutmelding onderbreekt een schermlezergebruiker om de melding voor te lezen. Gebruik in plaats daarvan een statusmelding.',
      },
    },
    status: { type: [] },
  },
};

export const FormFieldErrorMessageAboveTextInputViaVisualOrder: Story = {
  name: 'Fout: Form Field Error Message boven het invoerveld via visuele volgorde',
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  render: () => {
    const INPUT_ID = 'bc234966-e61c-48c3-8b7f-5cb4e9cc86e0';
    const ERROR_ID = `${INPUT_ID}-error`;
    return (
      <>
        <div>
          <label htmlFor={INPUT_ID}>Postcode</label>
        </div>
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
          'De foutmelding staat visueel boven het invoerveld, maar in de documentvolgorde staat deze eronder. Voor schermlezergebruikers klinkt de melding op een onlogische plek in de pagina, omdat de tekst niet in de juiste volgorde verschijnt. De melding is met CSS verplaatst via de visuele volgorde, terwijl het invoerveld eerst in de DOM staat. Plaats de foutmelding tussen het label en het invoerveld in de juiste documentvolgorde.',
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
    const INPUT_ID = 'f3784393-7cd9-4cb3-a5de-3e8dc8a8a344';
    const ERROR_ID = `${INPUT_ID}-error`;
    return (
      <>
        <div>
          <label htmlFor={INPUT_ID}>Postcode</label>
        </div>
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
          'De foutmelding staat onder het invoerveld in plaats van tussen het label en het invoerveld. Bezoekers zien de melding pas nadat ze al voorbij het veld zijn. Plaats de foutmelding direct boven het invoerveld.',
      },
    },
    status: { type: [] },
  },
};

export const FormFieldErrorMessageWithDetailsAndSummary: Story = {
  name: 'Fout: Form Field Error Message met het HTML-element details en summary',
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  render: () => {
    const INPUT_ID = 'eaf45a0c-cdcf-4ad5-b4cc-dea92a5bf0ed';
    const ERROR_ID = `${INPUT_ID}-error`;
    return (
      <>
        <div>
          <label htmlFor={INPUT_ID}>Naam</label>
        </div>
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
          'De foutmelding is verborgen achter een `details`-`summary` HTML-element combinatie. Voor schermlezergebruikers wordt de tekst niet op een duidelijke manier voorgelezen bij het bijbehorende invoerveld. Gebruik een foutmelding zonder inklapbare content.',
      },
    },
    status: { type: [] },
  },
};

export const FormFieldErrorMessageLate: Story = {
  name: 'Fout: Form Field Error Message verschijnt te laat',
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  render: () => {
    const NAME_INPUT_ID = 'd7c0f997-3dd2-4ea3-b346-3d326dc4e9af';
    const NAME_ERROR_ID = `${NAME_INPUT_ID}-error`;
    const POSTCODE_INPUT_ID = 'dacc4838-d81f-410b-bf9c-7087d38326bd';
    return (
      <>
        <div>
          <label htmlFor={NAME_INPUT_ID}>Naam</label>
        </div>
        <FormFieldErrorMessage id={NAME_ERROR_ID} role="alert">
          Het veld Naam is niet ingevuld. Dit is een verplicht veld.
        </FormFieldErrorMessage>
        <div>
          <input id={NAME_INPUT_ID} aria-describedby={NAME_ERROR_ID} type="text" autoComplete="name" />
        </div>
        <div>
          <label htmlFor={POSTCODE_INPUT_ID}>Postcode</label>
        </div>
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
          'De Form Field Error Message is gekoppeld aan het eerste invoerveld, maar het tweede invoerveld heeft geen foutmelding. In een dynamisch formulier kan deze opzet ertoe leiden dat de foutmelding te laat wordt voorgelezen, pas wanneer de schermlezergebruiker de focus verplaatst naar het volgende invoerveld.',
      },
    },
    status: { type: [] },
  },
};

export const FormFieldErrorMessageWithAlertComponent: Story = {
  name: 'Fout: Form Field Error Message verschijnt tegelijkertijd met Alert',
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  render: () => {
    const INPUT_ID = 'c4b14e44-b1b6-45c0-8576-ce64bffb97b3';
    const ERROR_ID = `${INPUT_ID}-error`;
    return (
      <>
        <div role="alert">
          <p>Formulier is niet correct ingevuld. Controleer dit veld: Naam.</p>
        </div>
        <div>
          <label htmlFor={INPUT_ID}>Naam</label>
        </div>
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
          'De foutmelding en de algemene waarschuwing worden tegelijkertijd voorgelezen. Beide elementen zijn live regions, waardoor hun inhoud tegelijk wordt aangekondigd. Bezoekers krijgen dan twee meldingen op hetzelfde moment, wat verwarrend en onduidelijk is.',
      },
    },
    status: { type: [] },
  },
};

export const FormFieldErrorMessageTable: Story = {
  name: 'Fout: Form Field Error Message met tabel',
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  render: () => {
    const INPUT_ID = '8905fe00-db4b-4294-93e8-aa3cc9f1a832';
    const ERROR_ID = `${INPUT_ID}-error`;
    return (
      <>
        <div>
          <label htmlFor={INPUT_ID}>Wachtwoord</label>
        </div>
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
          'De foutmelding bevat een tabel met alle eisen. Voor schermlezergebruikers wordt die informatie volledig voorgelezen, waardoor de boodschap niet meer als één duidelijke waarschuwing werkt. De melding is opgebouwd uit een HTML-element `table` in plaats van normale tekst of een lijst. Gebruik tekst of een eenvoudige lijst, zodat de foutmelding beter te volgen is.',
      },
    },
    status: { type: [] },
  },
};

export const FormFieldErrorMessageListItemWithoutPeriods: Story = {
  name: 'Fout: Form Field Error Message met lijst zonder punten',
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  render: () => {
    const INPUT_ID = 'fc91c621-64bc-44ea-afd1-eee35fa0a5e4';
    const ERROR_ID = `${INPUT_ID}-error`;
    return (
      <>
        <div>
          <label htmlFor={INPUT_ID}>Wachtwoord</label>
        </div>
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
          'De lijstitems in de foutmelding eindigen niet met een punt. Voor schermlezergebruikers worden deze items achter elkaar als één lange zin voorgelezen, wat de foutmelding minder duidelijk maakt. Laat elk item eindigen met een punt zodat de items als aparte zinnen worden uitgesproken.',
      },
    },
    status: { type: [] },
  },
};

export const FormFieldErrorMessageWithRedundantRole: Story = {
  name: 'Fout: Form Field Error Message met overbodige HTML-elementen role en aria-live',
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  render: () => {
    const INPUT_ID = 'f3b7ae8e-40a1-406d-8202-7462d601e43b';
    const ERROR_ID = `${INPUT_ID}-error`;
    return (
      <>
        <div>
          <label htmlFor={INPUT_ID}>Naam</label>
        </div>
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
          'De Form Field Error Message heeft zowel een HTML-attribuut `role` als WAI-ARIA-attribuut `aria-live="polite"`, terwijl de melding alleen informatieve tekst is die via WAI-ARIA-attribuut `aria-describedby` aan het invoerveld is gekoppeld. Dit is onnodig en voegt geen waarde toe. Voeg geen live region of role toe wanneer de foutmelding niet dynamisch wordt bijgewerkt.',
      },
    },
    status: { type: [] },
  },
};

export const FormFieldErrorMessageProgrammaticFocus: Story = {
  name: 'Fout: Form Field Error Message met tabindex="-1" voor programmatische focus',
  globals: { dir: 'ltr', lang: 'nl' },
  render: () => {
    const INPUT_ID = 'f9456de1-9202-420e-a18b-ebcbd85d1fa2';
    const ERROR_ID = `${INPUT_ID}-error`;
    return (
      <>
        <div>
          <label htmlFor={INPUT_ID}>Naam</label>
        </div>
        <FormFieldErrorMessage id={ERROR_ID} tabIndex={-1}>
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
          'De foutmelding komt in de focus-volgorde voor, hoewel deze alleen informatief is en niet interactief. Gebruikers die met het toetsenbord navigeren, kunnen hierdoor onnodig op de melding terechtkomen. De oplossing is om de foutmelding niet via focus in de tabvolgorde te zetten en deze in plaats daarvan alleen aan het invoerveld te koppelen. Maak geen gebruik van het HTML-attribuut `tabindex` op de foutmelding, zodat deze niet in de tabvolgorde voorkomt. Maak gebruik van de WAI-ARIA-attribuut `aria-describedby` op het invoerveld, zodat de foutmelding wordt voorgelezen bij focus op het veld.',
      },
    },
    status: { type: [] },
  },
};
