import type { Meta, StoryObj } from '@storybook/react-vite';
import componentMarkdown from '../../docs/form-field-error-message-docs/docs/component.md?raw';
import { IconAlertCircle } from '@tabler/icons-react';
import '../../components-css/form-field-error-message-css/src/form-field-error-message.scss';
import packageJSON from '../../components-react/form-field-error-message-react/package.json';
import { FormFieldErrorMessage } from '../../components-react/form-field-error-message-react/src/form-field-error-message';
import { CandidateDisableCssDecorator } from '@nl-design-system-candidate/storybook-shared/src/CandidateDisableCssDecorator';
import { Icon } from '../../components-react/icon-react/src/icon';
import { useEffect, useRef, useState } from 'react';
import type { AriaRole, ChangeEvent, PropsWithChildren, ReactNode } from 'react';

const AlternativeHTMLFormFieldErrorMessage = ({
  Component = 'div',
  IconComponent = 'div',
  ContentComponent = 'div',
  icon,
  children,
  contentId,
  contentRole,
}: PropsWithChildren<{
  Component?: keyof JSX.IntrinsicElements;
  IconComponent?: keyof JSX.IntrinsicElements;
  ContentComponent?: keyof JSX.IntrinsicElements;
  icon?: ReactNode;
  contentId?: string;
  contentRole?: AriaRole;
}>) => (
  <Component className="nl-form-field-error-message">
    {icon && <IconComponent className="nl-form-field-error-message__icon">{icon}</IconComponent>}
    <ContentComponent id={contentId} role={contentRole} className="nl-form-field-error-message__content">
      {children}
    </ContentComponent>
  </Component>
);
AlternativeHTMLFormFieldErrorMessage.displayName = 'AlternativeHTMLFormFieldErrorMessage';

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
        <FormFieldErrorMessage contentId={ERROR_ID}>
          Het veld Voorwaarden is niet aangevinkt. Dit is een verplicht veld.{' '}
          <a href="https://example.com/voorwaarden">Lees de voorwaarden.</a>
        </FormFieldErrorMessage>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'De bezoeker krijgt een foutmelding met een link, terwijl een foutmelding alleen bedoeld is om informatie over een fout bij het invoerveld te geven. Interactieve inhoud in een foutmelding kan de bezoeker afleiden van het herstellen van de fout. Dit is vooral onduidelijk voor screenreadergebruikers, omdat de foutmelding niet alleen informatie bevat maar ook een actie aanbiedt. Plaats interactieve inhoud daarom buiten de foutmelding.',
      },
    },
    status: { type: [] },
  },
};

export const FormFieldErrorMessageAsParagraphs: Story = {
  name: 'Fout: Form Field Error Message bestaande uit de HTML-elementen p',
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  render: () => {
    const INPUT_ID = 'FormFieldErrorMessageAsParagraphs';
    const ERROR_ID = `${INPUT_ID}-error`;
    return (
      <>
        <div>
          <label htmlFor={INPUT_ID}>Probleem</label>
        </div>
        <AlternativeHTMLFormFieldErrorMessage
          Component="p"
          IconComponent="span"
          ContentComponent="p"
          contentId={ERROR_ID}
          icon={
            <Icon>
              <IconAlertCircle />
            </Icon>
          }
        >
          Het veld Probleem is niet ingevuld. Dit is een verplicht veld.
        </AlternativeHTMLFormFieldErrorMessage>
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
          'De component behoudt zijn styling wanneer de foutmelding wordt opgebouwd uit de HTML-elementen `p`. Dit is echter semantisch onjuist, omdat een HTML-element `p` geen ander HTML-element `p` mag bevatten. Hierdoor kan de HTML-structuur ongeldig en onvoorspelbaar worden, wat de werking van de pagina voor gebruikers van hulptechnologie kan beïnvloeden. Gebruik een HTML-element dat geschikt is voor de foutmelding en dat zonder problemen binnen verschillende componenten kan worden gebruikt. Doe dit bijvoorbeeld door de foutmelding op te bouwen uit een HTML-element `div` met alleen een HTML-element `p` voor de inhoud.',
      },
    },
    status: { type: [] },
  },
};

export const FormFieldErrorMessageAsSpans: Story = {
  name: 'Fout: Form Field Error Message bestaande uit de HTML-elementen span',
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  decorators: CandidateDisableCssDecorator,
  render: () => {
    const INPUT_ID = 'FormFieldErrorMessageAsSpans';
    const ERROR_ID = `${INPUT_ID}-error`;
    return (
      <>
        <label htmlFor={INPUT_ID}>Probleem</label>
        <AlternativeHTMLFormFieldErrorMessage
          Component="span"
          IconComponent="span"
          ContentComponent="span"
          contentId={ERROR_ID}
          icon={
            <Icon>
              <IconAlertCircle />
            </Icon>
          }
        >
          Het veld Probleem is niet ingevuld. Dit is een verplicht veld.
        </AlternativeHTMLFormFieldErrorMessage>
        <div>
          <textarea id={INPUT_ID} aria-describedby={ERROR_ID} aria-invalid="true" aria-required="true" />
        </div>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'De component behoudt zijn styling wanneer de foutmelding wordt opgebouwd uit de HTML-elementen `span`. Echter wanneer de CSS niet wordt ingeladen, verschijnt de foutmelding direct achter de andere content op dezelfde regel. Hierdoor is voor gebruikers minder duidelijk dat de tekst een foutmelding bij het invoerveld is. Zorg ervoor dat de foutmelding ook zonder CSS op een eigen regel wordt weergegeven, zodat deze duidelijk herkenbaar blijft als foutmelding bij het invoerveld. Maak hiervoor gebruik van een HTML block-level element, zoals een HTML-element `p` of `div`.',
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
    const MAX_LENGTH = 250;
    const INPUT_ID = 'f7a0b878-8414-4d62-91ea-7dc894d222eb';
    const ERROR_ID = `${INPUT_ID}-error`;
    const [length, setLength] = useState(0);
    const over = length - MAX_LENGTH;

    return (
      <>
        <div>
          <label htmlFor={INPUT_ID}>Uw idee</label>
        </div>
        <FormFieldErrorMessage contentId={ERROR_ID} contentRole="alert">
          {over > 0
            ? `Het bericht is te lang. Maak het bericht ${over} tekens korter.`
            : `Nog ${MAX_LENGTH - length} tekens over.`}
        </FormFieldErrorMessage>
        <div>
          <textarea
            id={INPUT_ID}
            aria-describedby={ERROR_ID}
            rows={4}
            cols={50}
            aria-invalid={over > 0 ? 'true' : 'false'}
            onChange={(event: ChangeEvent<HTMLTextAreaElement>) => setLength(event.target.value.length)}
          />
        </div>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'De foutmelding wordt gebruikt als statusmelding voor een tekenrestant, en werkt mee terwijl je typt. Een foutmelding onderbreekt een screenreadergebruiker om de melding voor te lezen: bij elke toetsaanslag wordt de volledige melding opnieuw voorgelezen. Gebruik in plaats daarvan een statusmelding met `aria-live="polite"`, die pas voorleest zodra je stopt met typen.',
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
          <input
            id={INPUT_ID}
            aria-describedby={ERROR_ID}
            type="text"
            aria-invalid="true"
            aria-required="true"
            autoComplete="postal-code"
          />
          <FormFieldErrorMessage contentId={ERROR_ID} style={{ order: -1 }}>
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
          'De foutmelding staat visueel boven het invoerveld, maar in de documentvolgorde staat deze eronder. Voor screenreadergebruikers klinkt de melding op een onlogische plek in de pagina, omdat de tekst niet in de juiste volgorde verschijnt. De melding is met CSS verplaatst via de visuele volgorde, terwijl het invoerveld eerst in de DOM staat. Plaats de foutmelding tussen het label en het invoerveld in de juiste documentvolgorde.',
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
          <input
            id={INPUT_ID}
            aria-describedby={ERROR_ID}
            aria-required="true"
            aria-invalid="true"
            type="text"
            autoComplete="postal-code"
          />
        </div>
        <FormFieldErrorMessage contentId={ERROR_ID}>
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
        <FormFieldErrorMessage contentId={ERROR_ID}>
          <details>
            <summary>Foutmelding</summary>
            Het veld Naam is niet ingevuld. Dit is een verplicht veld.
          </details>
        </FormFieldErrorMessage>
        <div>
          <input
            id={INPUT_ID}
            aria-describedby={ERROR_ID}
            aria-invalid="true"
            aria-required="true"
            type="text"
            autoComplete="name"
          />
        </div>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'De foutmelding is verborgen achter een `details`-`summary` HTML-element combinatie. Voor screenreadergebruikers wordt de tekst niet op een duidelijke manier voorgelezen bij het bijbehorende invoerveld. Gebruik een foutmelding zonder inklapbare content.',
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
        <FormFieldErrorMessage contentId={ERROR_ID} contentRole="alert">
          Het veld Naam is niet ingevuld. Dit is een verplicht veld.
        </FormFieldErrorMessage>
        <div>
          <input
            id={INPUT_ID}
            aria-describedby={ERROR_ID}
            type="text"
            aria-invalid="true"
            aria-required="true"
            autoComplete="name"
          />
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
        <FormFieldErrorMessage contentId={ERROR_ID}>
          <p>Het wachtwoord voldoet niet aan alle eisen:</p>
          <table>
            <thead>
              <tr>
                <th scope="col">Eis</th>
                <th scope="col">Aantal</th>
                <th scope="col">Voldoet</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Minimaal aantal karakters</td>
                <td>8</td>
                <td>Nee</td>
              </tr>
              <tr>
                <td>Minimaal aantal hoofdletters</td>
                <td>1</td>
                <td>Nee</td>
              </tr>
              <tr>
                <td>Minimaal aantal cijfers</td>
                <td>1</td>
                <td>Nee</td>
              </tr>
            </tbody>
          </table>
        </FormFieldErrorMessage>
        <div>
          <input
            id={INPUT_ID}
            aria-describedby={ERROR_ID}
            aria-invalid="true"
            aria-required="true"
            type="password"
            autoComplete="new-password"
          />
        </div>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'De foutmelding bevat een tabel met de eisen waaraan het wachtwoord moet voldoen. Omdat de tabel via aria-describedby aan het invoerveld is gekoppeld, gaat de tabelstructuur verloren: een screenreader leest alleen de platte tekst van alle cellen achter elkaar voor, bijvoorbeeld "Eis Aantal Voldoet Minimaal aantal karakters 8 Nee Minimaal aantal hoofdletters 1 Nee Minimaal aantal cijfers 1 Nee". Hierdoor is niet meer te herleiden welk aantal en welke status bij welke eis hoort. Gebruik voor een opsomming van wachtwoordvereisten bij voorkeur tekst of een lijst in plaats van een tabel.',
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
        <FormFieldErrorMessage contentId={ERROR_ID}>
          Het ingevulde wachtwoord voldoet niet aan de eisen. Een wachtwoord moet voldoen aan de volgende eisen:
          <ul>
            <li>Minimaal 8 karakters</li>
            <li>Minimaal 1 hoofdletter</li>
            <li>Minimaal 1 nummer</li>
          </ul>
        </FormFieldErrorMessage>
        <div>
          <input
            id={INPUT_ID}
            aria-invalid="true"
            aria-required="true"
            aria-describedby={ERROR_ID}
            type="password"
            autoComplete="new-password"
          />
        </div>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'De lijstitems in de foutmelding eindigen niet met een punt. Voor screenreadergebruikers worden deze items achter elkaar als één lange zin voorgelezen, wat de foutmelding minder duidelijk maakt. Laat elk item eindigen met een punt zodat de items als aparte zinnen worden uitgesproken.',
      },
    },
    status: { type: [] },
  },
};

export const FormFieldErrorMessageWithRedundantRole: Story = {
  name: 'Fout: Form Field Error Message met overbodig HTML-attribuut role',
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
        <FormFieldErrorMessage contentId={ERROR_ID} contentRole="status">
          Het veld Naam is niet ingevuld. Dit is een verplicht veld.
        </FormFieldErrorMessage>
        <div>
          <input
            id={INPUT_ID}
            aria-invalid="true"
            aria-required="true"
            aria-describedby={ERROR_ID}
            type="text"
            autoComplete="name"
          />
        </div>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'De Form Field Error Message heeft een HTML-attribuut `role` met de waarde `status`, terwijl de melding alleen informatieve tekst is die via WAI-ARIA-attribuut `aria-describedby` aan het invoerveld is gekoppeld. Dit is onnodig en voegt geen waarde toe. Voeg geen role toe wanneer de foutmelding niet dynamisch wordt bijgewerkt.',
      },
    },
    status: { type: [] },
  },
};

export const FormFieldErrorMessageWithRedundantAriaLive: Story = {
  name: 'Fout: Form Field Error Message met overbodig WAI-ARIA-attribuut aria-live',
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  render: () => {
    const INPUT_ID = 'a1e29f3c-6b47-4e2a-9c31-7d5f2b8e4a10';
    const ERROR_ID = `${INPUT_ID}-error`;
    return (
      <>
        <div>
          <label htmlFor={INPUT_ID}>Naam</label>
        </div>
        <FormFieldErrorMessage contentId={ERROR_ID} aria-live="polite">
          Het veld Naam is niet ingevuld. Dit is een verplicht veld.
        </FormFieldErrorMessage>
        <div>
          <input
            id={INPUT_ID}
            aria-invalid="true"
            aria-required="true"
            aria-describedby={ERROR_ID}
            type="text"
            autoComplete="name"
          />
        </div>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'De Form Field Error Message heeft het WAI-ARIA-attribuut `aria-live="polite"`, terwijl de melding alleen informatieve tekst is die via WAI-ARIA-attribuut `aria-describedby` aan het invoerveld is gekoppeld. Dit is onnodig en voegt geen waarde toe. Voeg geen live region toe wanneer de foutmelding niet dynamisch wordt bijgewerkt.',
      },
    },
    status: { type: [] },
  },
};

export const FormFieldErrorMessageFocusable: Story = {
  name: 'Fout: Form Field Error Message met tabindex="0"',
  globals: { dir: 'ltr', lang: 'nl' },
  render: () => {
    const INPUT_ID = 'f9456de1-9202-420e-a18b-ebcbd85d1fa2';
    const ERROR_ID = `${INPUT_ID}-error`;
    return (
      <>
        <div>
          <label htmlFor={INPUT_ID}>Naam</label>
        </div>
        <FormFieldErrorMessage contentId={ERROR_ID} tabIndex={0}>
          Het veld Naam is niet ingevuld. Dit is een verplicht veld.
        </FormFieldErrorMessage>
        <div>
          <input id={INPUT_ID} aria-invalid="true" aria-required="true" type="text" autoComplete="name" />
        </div>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'De foutmelding krijgt met `tabindex="0"` een plek in de tabvolgorde, in de veronderstelling dat een screenreadergebruiker de melding zo te horen krijgt. Dit lost het probleem niet op: het invoerveld zelf is niet gekoppeld aan de foutmelding, dus bij focus op het invoerveld wordt er niets voorgelezen. Bovendien komt de foutmelding hierdoor onnodig in de tabvolgorde terecht voor toetsenbordgebruikers, terwijl deze alleen informatief is en niet interactief. Maak geen gebruik van het HTML-attribuut `tabindex` op de foutmelding. Koppel de foutmelding in plaats daarvan met het WAI-ARIA-attribuut `aria-describedby` aan het invoerveld, zodat deze wordt voorgelezen zodra het invoerveld focus krijgt.',
      },
    },
    status: { type: [] },
  },
};

export const FormFieldErrorMessageProgrammaticFocus: Story = {
  name: 'Fout: Form Field Error Message krijgt programmatisch focus na validatie',
  globals: { dir: 'ltr', lang: 'nl' },
  render: () => {
    const INPUT_ID = 'a3f6c8e2-9d14-4b7a-8e2f-1c5d9a6b3f47';
    const ERROR_ID = `${INPUT_ID}-error`;
    const errorRef = useRef<HTMLDivElement>(null);
    const [showError, setShowError] = useState(false);
    const [submitCount, setSubmitCount] = useState(0);

    const handleSubmit = () => {
      setShowError(true);
      setSubmitCount((count) => count + 1);
    };

    useEffect(() => {
      if (submitCount === 0) {
        return;
      }
      const error = errorRef.current;
      if (!error) {
        return;
      }
      if (document.activeElement === error) {
        error.blur();
      }
      error.focus();
    }, [submitCount]);

    return (
      <>
        <div>
          <label htmlFor={INPUT_ID}>Naam</label>
        </div>
        {showError && (
          <FormFieldErrorMessage ref={errorRef} contentId={ERROR_ID} tabIndex={-1}>
            Het veld Naam is niet ingevuld. Dit is een verplicht veld.
          </FormFieldErrorMessage>
        )}
        <div>
          <input
            id={INPUT_ID}
            aria-describedby={showError ? ERROR_ID : undefined}
            aria-invalid={showError ? 'true' : 'false'}
            aria-required="true"
            type="text"
            autoComplete="name"
          />
        </div>
        <div>
          <button type="button" onClick={handleSubmit}>
            Verzenden
          </button>
        </div>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Na het klikken op "Verzenden" verplaatst de focus zich programmatisch naar de foutmelding, met `tabindex="-1"`, om de ervaring van het focussen van een Alert-component na te bootsen. Dit wordt afgeraden: het is beter om het invoerveld zelf te focussen. Het invoerveld is via `aria-describedby` aan de foutmelding gekoppeld en heeft `aria-invalid="true"`, waardoor een screenreader bij focus zowel de foutmelding voorleest als het veld als ongeldig aankondigt. Door in plaats daarvan de foutmelding zelf te focussen, mist een screenreadergebruiker deze aankondiging van het invoerveld.',
      },
    },
    status: { type: [] },
  },
};

export const FormFieldErrorMessageWithoutRelationWithInput: Story = {
  name: 'Fout: Form Field Error Message niet gekoppeld aan het invoerveld',
  globals: { dir: 'ltr', lang: 'nl' },
  render: () => {
    const INPUT_ID = 'f9456de1-9202-420e-a18b-ebcbd85d1fa3';
    return (
      <>
        <div>
          <label htmlFor={INPUT_ID}>Naam</label>
        </div>
        <FormFieldErrorMessage>Het veld Naam is niet ingevuld. Dit is een verplicht veld.</FormFieldErrorMessage>
        <div>
          <input id={INPUT_ID} aria-invalid="true" aria-required="true" type="text" autoComplete="name" />
        </div>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Een Form Field Error Message is niet gekoppeld aan het bijbehorende invoerveld met het WAI-ARIA-attribuut `aria-describedby`. De Form Field Error Message wordt daardoor niet voorgelezen door een screenreader bij focus op het invoerveld.',
      },
    },
    status: { type: [] },
  },
};

export const FormFieldErrorMessageAriaLabelledBy: Story = {
  name: 'Fout: Form Field Error Message gekoppeld met aria-labelledby',
  globals: { dir: 'ltr', lang: 'nl' },
  render: () => {
    const INPUT_ID = 'f9456de1-9202-420e-a18b-ebcbd85d1fa4';
    const ERROR_ID = `${INPUT_ID}-error`;
    return (
      <>
        <div>
          <label htmlFor={INPUT_ID}>Naam</label>
        </div>
        <FormFieldErrorMessage contentId={ERROR_ID}>
          Het veld Naam is niet ingevuld. Dit is een verplicht veld.
        </FormFieldErrorMessage>
        <div>
          <input
            id={INPUT_ID}
            aria-labelledby={ERROR_ID}
            aria-invalid="true"
            aria-required="true"
            type="text"
            autoComplete="name"
          />
        </div>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Een Form Field Error Message die is gekoppeld aan het bijbehorende invoerveld met `aria-labelledby` in plaats van `aria-describedby`. Hierdoor komt de toegankelijke naam van het invoerveld niet meer van het Form Field Label maar van de Form Field Error Message. Gebruik in plaats daarvan `aria-describedby`.',
      },
    },
    status: { type: [] },
  },
};
