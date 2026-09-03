import { Paragraph } from '@nl-design-system-candidate/paragraph-react/css';
import { ExampleBodyTextDecorator } from '@nl-design-system-candidate/storybook-shared/src/ExampleBodyTextDecorator';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconAlertCircle } from '@tabler/icons-react';
import { Code } from '../../components-react/code-react/src/code';
import '../../components-css/code-css/src/code.scss';
import '../../components-css/form-field-error-message-css/src/form-field-error-message.scss';
import '../../components-css/icon-css/src/icon.scss';
import packageJSON from '../../components-react/form-field-error-message-react/package.json';
import { FormFieldErrorMessage } from '../../components-react/form-field-error-message-react/src/form-field-error-message';
import { Icon } from '../../components-react/icon-react/src/icon';
import componentMarkdown from '../../docs/form-field-error-message-docs/docs/component.md?raw';
import tokens from '../../tokens/form-field-error-message-tokens/tokens.json';
// import { } from '../src/WcagTests'; // Vul aan door toegankelijkheidsexpert

const meta = {
  argTypes: {
    id: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
      },
      type: { name: 'string', required: false },
    },
    children: {
      control: { type: 'text' },
      table: {
        type: { summary: 'ReactNode' },
      },
      type: { name: 'string', required: false },
    },
    icon: {
      control: { type: 'text' },
      table: {
        type: { summary: 'ReactNode' },
      },
      type: { name: 'string', required: false },
    },
    role: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
      },
      type: { name: 'string', required: false },
    },
  },
  component: FormFieldErrorMessage,
  decorators: ExampleBodyTextDecorator,
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
    testResult: {
      notApplicable: [
        // Vul aan door toegankelijkheidsexpert
      ],
      notTested: [
        // Vul aan door toegankelijkheidsexpert
      ],
      pass: [],
    },
    tokens,
  },
  title: 'Componenten/Form Field Error Message',
  globals: { dir: 'ltr', lang: 'nl' },
} satisfies Meta<typeof FormFieldErrorMessage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const FormFieldErrorMessageShort: Story = {
  name: 'Form Field Error Message met een korte foutmelding bij een niet-ingevuld veld',
  render: () => {
    const INPUT_ID = '12c0d13c-80f3-4744-8ba1-dbf1d0c003c0';
    const ERROR_ID = `${INPUT_ID}-error`;
    return (
      <>
        <div>
          <label htmlFor={INPUT_ID}>Naam</label>
        </div>
        <FormFieldErrorMessage id={ERROR_ID}>
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
          'Een korte foutmelding is gekoppeld aan het invoerveld via het WAI-ARIA-attribuut `aria-describedby`. Een screenreader leest de foutmelding voor bij focus op het invoerveld.',
      },
    },
    status: { type: [] },
  },
};

export const FormFieldErrorMessageLong: Story = {
  name: 'Form Field Error Message met een lange foutmelding bij een niet-ingevuld veld',
  render: () => {
    const INPUT_ID = '9d61ec7c-71da-4087-8eaf-dd48eb08dd41';
    const ERROR_ID = `${INPUT_ID}-error`;
    return (
      <>
        <div>
          <label htmlFor={INPUT_ID}>Naam</label>
        </div>
        <FormFieldErrorMessage id={ERROR_ID}>
          Er is een probleem opgetreden bij het verwerken van uw gegevens. Het veld Naam is verplicht en mag niet leeg
          blijven. Vul het veld Naam in met uw volledige voor- en achternaam (bijv. Jan de Vries). Controleer of er geen
          onbedoelde spaties of leestekens in het veld staan.
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
          'Een lange foutmelding is gekoppeld aan het invoerveld via het WAI-ARIA-attribuut `aria-describedby`. De tekst loopt over meerdere regels en blijft leesbaar. Een screenreader leest de foutmelding voor bij focus op het invoerveld.',
      },
    },
    status: { type: [] },
  },
};

export const FormFieldErrorMessageMultiple: Story = {
  name: 'Form Field Error Message met een foutmelding van meerdere paragrafen bij een niet-ingevuld veld',
  render: () => {
    const INPUT_ID = 'b52407e5-cab3-4a91-8f50-907ddf6f43dd';
    const ERROR_ID = `${INPUT_ID}-error`;
    return (
      <>
        <div>
          <label htmlFor={INPUT_ID}>Naam</label>
        </div>
        <FormFieldErrorMessage id={ERROR_ID}>
          <p>
            Er is een probleem opgetreden bij het verwerken van uw gegevens. Het veld Naam is verplicht en mag niet leeg
            blijven. Dit veld wordt gebruikt om uw identiteit te verifiëren.
          </p>
          <p>
            Vul het veld Naam in met uw volledige voor- en achternaam (bijv. Jan de Vries). Controleer of er geen
            onbedoelde spaties of leestekens in het veld staan.
          </p>
          <p>Wilt u hulp? Neem dan contact op met onze klantenservice.</p>
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
          "Een foutmelding bestaande uit meerdere alinea's is gekoppeld aan het invoerveld. De alinea's zijn visueel van elkaar gescheiden.",
      },
    },
    status: { type: [] },
  },
};

export const FormFieldErrorMessageWithParagraphComponent: Story = {
  name: 'Form Field Error Message met een NL Paragraph-component',
  render: () => {
    const INPUT_ID = '835bd650-04bf-41e8-b1f6-0ad5d2d3bdfd';
    const ERROR_ID = `${INPUT_ID}-error`;
    return (
      <>
        <div>
          <label htmlFor={INPUT_ID}>Postcode</label>
        </div>
        <FormFieldErrorMessage id={ERROR_ID}>
          <Paragraph>
            Het veld Postcode is niet ingevuld. Vul je postcode in. Een postcode bestaat uit 4 cijfers en 2 letters.
          </Paragraph>
        </FormFieldErrorMessage>
        <div>
          <input id={INPUT_ID} aria-describedby={ERROR_ID} type="text" autoComplete="postal-code" />
        </div>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'De foutmelding bestaat uit één alinea. De foutmelding heeft dezelfde kleur en typografie als de standaard tekst in het ontwerp. De style van de tekst in de NL Paragraph-component word overgenomen van de NL Form Field Error Message-component.',
      },
    },
    status: { type: [] },
  },
};

export const FormFieldErrorMessageWithTwoParagraphComponent: Story = {
  name: 'Form Field Error Message met twee NL Paragraph-componenten',
  render: () => {
    const INPUT_ID = '80483e44-a765-4871-bba8-6c504afdf67f';
    const ERROR_ID = `${INPUT_ID}-error`;
    return (
      <>
        <div>
          <label htmlFor={INPUT_ID}>Postcode</label>
        </div>
        <FormFieldErrorMessage id={ERROR_ID}>
          <Paragraph>Het veld Postcode is niet ingevuld.</Paragraph>
          <Paragraph>Een postcode bestaat uit 4 cijfers, een spatie en 2 letters. Bijvoorbeeld: 1234 AB.</Paragraph>
        </FormFieldErrorMessage>
        <div>
          <input id={INPUT_ID} aria-describedby={ERROR_ID} type="text" autoComplete="postal-code" />
        </div>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "De foutmelding bestaat uit twee alinea's met duidelijke ruimte ertussen. De foutmelding heeft dezelfde kleur en typografie als de standaard tekst in het ontwerp. De style van de tekst in de NL Paragraph-componenten word overgenomen van de NL Form Field Error Message-component.',",
      },
    },
    status: { type: [] },
  },
};

export const FormFieldErrorMessageLangLTR: Story = {
  name: 'Form Field Error Message in het Engels',
  globals: { dir: 'ltr', lang: 'en' },
  render: () => {
    const INPUT_ID = '2b86a101-cfd0-4542-8bff-c84f17718b08';
    const ERROR_ID = `${INPUT_ID}-error`;
    return (
      <>
        <div>
          <label htmlFor={INPUT_ID}>Postcode</label>
        </div>
        <FormFieldErrorMessage id={ERROR_ID} lang="en">
          The postal code is not valid. A valid postal code consists of four digits, a space and two letters, for
          example: 1234 AB.
        </FormFieldErrorMessage>
        <div>
          <input id={INPUT_ID} aria-describedby={ERROR_ID} type="text" autoComplete="postal-code" />
        </div>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'De foutmelding staat in het Engels, terwijl de rest van de pagina in het Nederlands is. De afwijkende taal is expliciet aangegeven, zodat de tekst correct wordt uitgesproken door een screenreader. De afwijkende taal is aangegeven met het HTML-attribuut `lang`.',
      },
    },
    status: { type: [] },
  },
};

export const FormFieldErrorMessageLangRTL: Story = {
  name: 'Form Field Error Message in het Arabisch',
  globals: { dir: 'ltr', lang: 'ar' },
  render: () => {
    const INPUT_ID = 'f8e978bc-c230-430c-80ea-9d86c6189a85';
    const ERROR_ID = `${INPUT_ID}-error`;
    return (
      <>
        <div lang="ar" dir="rtl">
          <label htmlFor={INPUT_ID}>الرمز البريدي</label>
        </div>
        <FormFieldErrorMessage id={ERROR_ID} lang="ar" dir="rtl">
          حقل الرمز البريدي غير مملوء في هذا الحقل لا يمكن أن يكون فارغا.
        </FormFieldErrorMessage>
        <div lang="ar" dir="rtl">
          <input id={INPUT_ID} aria-describedby={ERROR_ID} type="text" autoComplete="postal-code" />
        </div>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'De foutmelding is in het Arabisch, een taal met een andere schrijf- en leesrichting. De richting van de tekst past bij de de taal. De taal is aangegeven met het HTML-attribuut `lang`. De richting is aangegeven met het HTML-attribuut `dir`, zodat de tekst van rechts naar links wordt weergegeven.',
      },
    },
    status: { type: [] },
  },
};

export const FormFieldErrorMessageVerticalText: Story = {
  name: 'Form Field Error Message in het Japans',
  globals: { dir: 'ltr', lang: 'ja', writingMode: 'vertical-rl' },
  render: () => {
    const INPUT_ID = 'df11119a-1b3d-4b64-b4fc-d36cf74c93db';
    const ERROR_ID = `${INPUT_ID}-error`;
    return (
      <>
        <div>
          <label htmlFor={INPUT_ID}>郵便番号</label>
        </div>
        <FormFieldErrorMessage id={ERROR_ID} lang="ja">
          郵便番号フィールドは入力されていません。このフィールドは空にはなりません。
        </FormFieldErrorMessage>
        <div>
          <input id={INPUT_ID} aria-describedby={ERROR_ID} type="text" autoComplete="postal-code" />
        </div>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'De hele pagina staat in verticale tekstrichting, aangezet via de CSS-eigenschap `writingMode`. Het label, de foutmelding en het invoerveld passen zich allemaal aan de verticale richting aan. De taal is aangegeven met het HTML-attribuut `lang`.',
      },
    },
    status: { type: [] },
  },
};

export const FormFieldErrorMessageVerticalTextWithIcon: Story = {
  name: 'Form Field Error Message in het Japans met een icoon',
  globals: { dir: 'ltr', lang: 'ja', writingMode: 'vertical-rl' },
  render: () => {
    const INPUT_ID = '4a80808e-7b27-4f47-aeea-58bd430f06d3';
    const ERROR_ID = `${INPUT_ID}-error`;
    return (
      <>
        <div>
          <label htmlFor={INPUT_ID}>郵便番号</label>
        </div>
        <FormFieldErrorMessage
          id={ERROR_ID}
          lang="ja"
          icon={
            <Icon>
              <IconAlertCircle />
            </Icon>
          }
        >
          郵便番号フィールドは入力されていません。このフィールドは空にはなりません。
        </FormFieldErrorMessage>
        <div>
          <input id={INPUT_ID} aria-describedby={ERROR_ID} type="text" autoComplete="postal-code" />
        </div>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'De hele pagina staat in verticale tekstrichting. Het icoon blijft correct gepositioneerd naast de tekst wanneer de foutmelding verticaal wordt weergegeven.',
      },
    },
    status: { type: [] },
  },
};

export const FormFieldErrorMessageLargeText: Story = {
  name: 'Form Field Error Message met 200% zoom',
  render: () => {
    const INPUT_ID = 'a6017b2a-3491-4c16-983f-e50f226c7624';
    const ERROR_ID = `${INPUT_ID}-error`;
    return (
      <>
        <div>
          <label htmlFor={INPUT_ID}>Postcode</label>
        </div>
        <FormFieldErrorMessage id={ERROR_ID}>
          Een postcode bestaat uit 4 cijfers, een spatie en 2 letters. Bijvoorbeeld: 1234 AB.
        </FormFieldErrorMessage>
        <div>
          <input id={INPUT_ID} aria-describedby={ERROR_ID} type="text" autoComplete="postal-code" />
        </div>
      </>
    );
  },
  globals: { zoom: 2 },
  parameters: {
    docs: {
      description: {
        story:
          'De tekst is vergroot tot 200% zoom. De foutmelding blijft goed leesbaar en loopt niet buiten de ruimte van het element.',
      },
    },
    status: { type: [] },
  },
};

export const FormFieldErrorMessageAboveTextInput: Story = {
  name: 'Form Field Error Message boven het invoerveld in de Form Field',
  render: () => {
    const INPUT_ID = 'ddad9b21-b4c7-4a91-bfef-6d8a9e52a37f';
    const ERROR_ID = `${INPUT_ID}-error`;
    return (
      <>
        <div>
          <label htmlFor={INPUT_ID}>Postcode</label>
        </div>
        <FormFieldErrorMessage id={ERROR_ID}>
          Het veld Postcode is niet ingevuld. Dit veld mag niet leeg zijn.
        </FormFieldErrorMessage>
        <div>
          <input id={INPUT_ID} aria-describedby={ERROR_ID} type="text" autoComplete="postal-code" />
        </div>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'De foutmelding staat direct boven het invoerveld, tussen het label en het veld. Zo ziet de bezoeker meteen welke invoer fout is en wordt de melding ook goed voorgelezen bij focus op het invoerveld.',
      },
    },
    status: { type: [] },
  },
};

export const FormFieldErrorMessageBelowTextInputViaStyling: Story = {
  name: 'Form Field Error Message door styling onder het invoerveld (niet aangeraden)',
  render: () => {
    const INPUT_ID = 'fe64277e-ad96-4bdb-ad91-a6fa8c284456';
    const ERROR_ID = `${INPUT_ID}-error`;
    return (
      <div className="utrecht-form-field" style={{ display: 'flex', flexDirection: 'column' }}>
        <div>
          <label htmlFor={INPUT_ID}>Postcode</label>
        </div>
        <FormFieldErrorMessage id={ERROR_ID} style={{ order: 2 }}>
          Het veld Postcode is niet ingevuld. Dit veld mag niet leeg zijn.
        </FormFieldErrorMessage>
        <div style={{ order: 1 }}>
          <input id={INPUT_ID} aria-describedby={ERROR_ID} type="text" autoComplete="postal-code" />
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'De foutmelding staat visueel onder het invoerveld, terwijl deze in de code boven het veld staat. Voor schermlezergebruikers kan dat verwarrend zijn omdat de melding niet in de logische volgorde wordt gelezen. De oplossing is om de foutmelding in de juiste plaats in de DOM te houden en niet alleen door styling te verschuiven.',
      },
    },
    status: { type: [] },
  },
};

export const FormFieldErrorMessageWordBreak: Story = {
  name: 'Form Field Error Message met woorden die niet op 1 regel passen',
  render: () => {
    const INPUT_ID = 'f2e172a1-f073-49bd-98e0-d72ff5e8229d';
    const ERROR_ID = `${INPUT_ID}-error`;
    return (
      <>
        <div>
          <label htmlFor={INPUT_ID}>Naam</label>
        </div>
        <FormFieldErrorMessage id={ERROR_ID}>
          De onvolledigheidscontrolemechanismevalidatieprocedure heeft geconstateerd dat het veld Naam niet is ingevuld.
          Dit resulteert in een onacceptabele gegevensverwerkingsfoutmelding binnen ons geïntegreerde
          automatiseringsplatform voor klantgegevensbeheer.
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
          'De foutmelding bevat buitengewoon lange woorden. Woorden worden afgebroken aan het einde van de regel en vervolgd op de volgende regel.  Tekst valt niet buiten beeld.',
      },
    },
    status: { type: [] },
  },
};

export const FormFieldErrorMessageSmallViewport: Story = {
  name: 'Form Field Error Message in een kleine viewport',
  globals: { viewport: { value: 'wcag400' } },
  render: () => {
    const INPUT_ID = 'a9f05006-7dad-4ceb-ac68-414fce9483b2';
    const ERROR_ID = `${INPUT_ID}-error`;
    return (
      <>
        <div>
          <label htmlFor={INPUT_ID}>Naam</label>
        </div>
        <FormFieldErrorMessage id={ERROR_ID}>
          Er is een probleem opgetreden bij het verwerken van uw gegevens. Het veld Naam is verplicht en mag niet leeg
          blijven. Vul het veld Naam in met uw volledige voor- en achternaam (bijv. Jan de Vries). Controleer of er geen
          onbedoelde spaties of leestekens in het veld staan.
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
          'De lange foutmelding is in een kleine viewport te zien zonder dat er tekst buiten het beeld valt. De boodschap blijft leesbaar omdat deze over meerdere regels wordt verdeeld. De kleine viewport is vergelijkbaar met 400% zoom. Er valt geen tekst buiten beeld aan de rechterkant, en aan de onderkant is scrollen mogelijk.',
      },
    },
    status: { type: [] },
  },
};

export const FormFieldErrorMessageList: Story = {
  name: 'Form Field Error Message met een lijst met punten',
  render: () => {
    const INPUT_ID = 'd5345e10-9c05-41c7-9db7-abc5a8b6afac';
    const ERROR_ID = `${INPUT_ID}-error`;
    return (
      <>
        <div>
          <label htmlFor={INPUT_ID}>Wachtwoord</label>
        </div>
        <FormFieldErrorMessage id={ERROR_ID}>
          Het ingevulde wachtwoord voldoet niet aan de eisen. Een wachtwoord moet voldoen aan de volgende eisen:
          <ul>
            <li>Minimaal 8 karakters.</li>
            <li>Minimaal 1 hoofdletter.</li>
            <li>Minimaal 1 nummer.</li>
          </ul>
        </FormFieldErrorMessage>
        <div>
          <input
            id={INPUT_ID}
            aria-describedby={ERROR_ID}
            type="password"
            autoComplete="new-password"
            aria-required="true"
          />
        </div>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'De foutmelding bevat een lijst waarvan elke item eindigt met een punt. De foutmelding is gekoppeld aan het invoerveld via het WAI-ARIA-attribuut `aria-describedby`. De screenreader leest de foutmelding voor bij focus op het invoerveld en leest elk item als een aparte zin voor. Wanneer de items niet eindigen met een punt worden de items als een doorlopende zin voorgelezen, waardoor de boodschap minder duidelijk is.',
      },
    },
    status: { type: [] },
  },
};

export const FormFieldErrorMessageForcedColorsMode: Story = {
  name: 'Form Field Error Message in Forced Colors mode',
  globals: { forcedColors: 'active' },
  render: () => {
    const INPUT_ID = 'd3b795be-4989-4c6c-b248-ff0543fb0ea4';
    const ERROR_ID = `${INPUT_ID}-error`;
    return (
      <>
        <div>
          <label htmlFor={INPUT_ID}>Naam</label>
        </div>
        <FormFieldErrorMessage
          id={ERROR_ID}
          icon={
            <Icon>
              <IconAlertCircle />
            </Icon>
          }
        >
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
          'De foutmelding blijft goed leesbaar in de modus voor hoge contrastkleurinstellingen. De tekstkleur past zich aan de systeemkleuren aan, zodat de boodschap ook in deze weergave duidelijk te zien is. Dit is een gesimuleerde weergave binnen Storybook (via de toolbar-knop "Forced Colors"), controleer voor definitieve verificatie ook de echte Forced Colors mode via de browser DevTools of het besturingssysteem.',
      },
    },
    status: { type: [] },
  },
};

export const FormFieldErrorMessageWithCode: Story = {
  name: 'Form Field Error Message met een code fragment',
  globals: { dir: 'ltr', lang: 'en' },
  render: () => {
    const INPUT_ID = '0ff8ae30-03e1-46d8-a55c-864b730a66da';
    const ERROR_ID = `${INPUT_ID}-error`;
    return (
      <>
        <div>
          <label htmlFor={INPUT_ID}>JSON invoer</label>
        </div>
        <FormFieldErrorMessage id={ERROR_ID}>
          <Paragraph>
            <Code>SyntaxError: JSON.parse: unexpected end of data at line 1 column 1 of the JSON data</Code>
          </Paragraph>
        </FormFieldErrorMessage>
        <div>
          <textarea id={INPUT_ID} aria-describedby={ERROR_ID} />
        </div>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'De foutmelding bevat een code fragment binnen een paragraaf. De tekst kan wrappen over meerdere regels en de regelafstand is voldoende. De foutmelding bevat een HTML-element `code` binnen een HTML-element `p` in de tekst.',
      },
    },
    status: { type: [] },
  },
};

export const FormFieldErrorMessageWithIcon: Story = {
  name: 'Form Field Error Message met een icoon',
  render: () => {
    const INPUT_ID = 'c53ddae8-5165-46e6-8e5c-868e5da59503';
    const ERROR_ID = `${INPUT_ID}-error`;
    return (
      <>
        <div>
          <label htmlFor={INPUT_ID}>Naam</label>
        </div>
        <FormFieldErrorMessage
          id={ERROR_ID}
          icon={
            <Icon>
              <IconAlertCircle />
            </Icon>
          }
        >
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
          'De foutmelding heeft een icoon naast de tekst. Het icoon is decoratief en wordt niet voorgelezen voor schermlezergebruikers, omdat de tekst zelf al de volledige boodschap overbrengt. De icoon is verborgen middels de WAI-ARIA-attribuut `aria-hidden="true"`.',
      },
    },
    status: { type: [] },
  },
};
