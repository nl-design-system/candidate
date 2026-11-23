import { Heading } from '@nl-design-system-candidate/heading-react/css';
import { merge } from 'lodash-es';
import { ExampleBodyTextDecorator } from '@nl-design-system-candidate/storybook-shared/src/ExampleBodyTextDecorator';
import type { Meta, StoryObj } from '@storybook/react-vite';
import '../../components-css/form-field-description-css/src/form-field-description.scss';
import '../../components-css/form-field-label-css/src/form-field-label.scss';
import '../../components-css/form-field-label-css/src/html/form-field-label.scss';
import '../../components-css/form-field-label-css/src/test.scss';
import { FormFieldDescription } from '../../components-react/form-field-description-react/src/form-field-description';
import packageJSON from '../../components-react/form-field-label-react/package.json';
import { FormFieldLabel as FormFieldLabelComponent } from '../../components-react/form-field-label-react/src/form-field-label';
import acceptanceCriteria from '../../docs/form-field-label-docs/docs/acceptance-criteria.md?raw';
import componentMarkdown from '../../docs/form-field-label-docs/docs/component.md?raw';
import reactMeta from '../../docs/form-field-label-docs/stories/form-field-label.react.meta';
import tokens from '../../tokens/form-field-label-tokens/tokens.json';
import { LargeLetterSpacingDecorator, LargeLineHeightDecorator, LargeWordSpacingDecorator } from '../src/TextDecorator';
import type { PropsWithChildren } from 'react';
import { FormToggleStory } from './FormToggle';
// import { } from '../src/WcagTests'; // Vul aan door toegankelijkheidsexpert

const AlternativeHTMLFormFieldLabel = ({
  children,
  Component = 'div',
  ...restProps
}: PropsWithChildren<{ Component: keyof JSX.IntrinsicElements; id?: string }>) => (
  <Component className="nl-form-field-label" {...restProps}>
    {children}
  </Component>
);
AlternativeHTMLFormFieldLabel.displayName = 'AlternativeHTMLFormFieldLabel';

const OptionCheckboxExample = () => (
  <FormFieldLabelComponent type="option" input={<input type="checkbox" name="subscribe" />}>
    Ik wil de nieuwsbrief ontvangen
  </FormFieldLabelComponent>
);

const meta = {
  ...merge({
    ...reactMeta,
    decorators: [ExampleBodyTextDecorator],
    globals: {
      dir: 'ltr',
      lang: 'nl',
    },
    parameters: {
      acceptanceCriteria,
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
          url: 'https://nldesignsystem.nl/form-field-label',
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
  }),
  title: 'Componenten/Form Field Label',
} satisfies Meta<typeof FormFieldLabelComponent>;

export default meta;

type Story = StoryObj<typeof FormFieldLabelComponent>;

const DEFAULT_INPUT_ID = '5193A68B-F6C3-4D46-B45F-29AF0BA64D47';

export const FormFieldLabel: Story = {
  name: 'Form Field Label gekoppeld aan een HTML input element via label en for',
  args: {
    children: 'Postcode',
    htmlFor: DEFAULT_INPUT_ID,
  },
  render: (args) => (
    <>
      <FormFieldLabelComponent {...args} />
      <div>
        <input id={DEFAULT_INPUT_ID} type="text" autoComplete="postal-code" />
      </div>
    </>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'De Form Field Label is gekoppeld aan het invoerveld via het HTML-element `label` met het attribuut `for`. De tekst van het label is de toegankelijke naam van het invoerveld. Een screenreader leest het label voor bij focus op het invoerveld. Een klik op het label zet de focus op het invoerveld.',
      },
    },
    status: { type: [] },
  },
};

const PHRASING_CONTENT_INPUT_ID = '5B602EFB-089B-48B8-962B-E52AC4342F31';

export const FormFieldLabelWithPhrasingContent: Story = {
  name: 'Form Field Label met phrasing content',
  args: {
    htmlFor: PHRASING_CONTENT_INPUT_ID,
  },
  render: (args) => (
    <>
      <FormFieldLabelComponent {...args}>
        E-mailadres <small>(niet verplicht)</small>
      </FormFieldLabelComponent>
      <div>
        <input id={PHRASING_CONTENT_INPUT_ID} type="email" autoComplete="email" />
      </div>
    </>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Het label bevat een extra tekst "(niet verplicht)" in het HTML-element `small`. De tekst in het HTML-element `small` krijgt de kleur en typografie van de Form Field Label en wordt inline weergegeven, maar dan kleiner. De spatie tussen de tekst en het HTML-element `small` blijft behouden.',
      },
    },
    status: { type: [] },
  },
};

const DISABLED_INPUT_ID = '8AE5F9EC-E286-4D31-B017-CBF9385E2EAF';

export const FormFieldLabelDisabled: Story = {
  name: 'Form Field Label disabled',
  args: {
    children: 'Postcode',
    disabled: true,
    htmlFor: DISABLED_INPUT_ID,
  },
  render: (args) => (
    <>
      <FormFieldLabelComponent {...args} />
      <div>
        <input id={DISABLED_INPUT_ID} type="text" autoComplete="postal-code" disabled />
      </div>
    </>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Het label heeft de kleur van een disabled Form Field Label. Het invoerveld heeft zelf ook het HTML-attribuut `disabled`, omdat de `disabled` styling met lagere contrasteisen alleen is toegestaan voor inactieve invoervelden.',
      },
    },
    status: { type: [] },
  },
};

export const FormFieldLabelOptionCheckbox: Story = {
  name: 'Form Field Label option met een checkbox',
  args: {
    children: 'Ik wil de nieuwsbrief ontvangen',
    input: <input type="checkbox" name="subscribe" />,
    type: 'option',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Het label bevat een checkbox, die vóór de tekst staat. Omdat de checkbox binnen het HTML-element `label` staat, is het HTML-attribuut `for` niet nodig. Een screenreader leest het label voor bij focus op de checkbox. Een klik op de tekst zet de checkbox aan of uit.',
      },
    },
    status: { type: [] },
  },
};

export const FormFieldLabelOptionRadio: Story = {
  name: 'Form Field Label option met radio buttons',
  args: {
    children: 'Per e-mail',
    input: <input type="radio" name="contact" value="email" />,
    type: 'option',
  },
  render: (args) => (
    <fieldset role="radiogroup">
      <legend>Hoe wilt u contact?</legend>
      <div>
        <FormFieldLabelComponent {...args} />
      </div>
      <div>
        <FormFieldLabelComponent type="option" input={<input type="radio" name="contact" value="telefoon" />}>
          Per telefoon
        </FormFieldLabelComponent>
      </div>
    </fieldset>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Een groep radio buttons, elk met een eigen Form Field Label. De radio button staat vóór de tekst. Een screenreader leest het label voor bij focus op de radio button. Een klik op de tekst selecteert de radio button.',
      },
    },
    status: { type: [] },
  },
};

export const FormFieldLabelOptionSwitch: Story = {
  name: 'Form Field Label option met een switch',
  args: {
    children: 'Meldingen ontvangen',
    // React does not know the `switch` attribute yet: pass it as a string, so React renders it and TypeScript accepts it
    input: <input type="checkbox" {...{ switch: '' }} name="notifications" />,
    type: 'option',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Het label bevat een native switch, die vóór de tekst staat. De switch is een HTML-element `input` met het HTML-attribuut `type` met de waarde `checkbox` en het HTML-attribuut `switch`. Een screenreader leest het label voor bij focus op de switch. Op het moment van testen wordt de native switch alleen ondersteund in Safari, in andere browsers wordt een checkbox getoond. Zie [Can I use: HTML switch](https://caniuse.com/wf-switch-control) voor de actuele ondersteuning.',
      },
    },
    status: { type: [] },
  },
};

export const FormFieldLabelOptionDisabledWithCheckbox: Story = {
  name: 'Form Field Label option disabled met een checkbox',
  args: {
    children: 'Ik wil de nieuwsbrief ontvangen',
    disabled: true,
    input: <input type="checkbox" name="subscribe" disabled />,
    type: 'option',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Het label heeft de kleur van een disabled Form Field Label. De checkbox heeft zelf ook het HTML-attribuut `disabled`, omdat de `disabled` prop alleen de stijl van het label verandert.',
      },
    },
    status: { type: [] },
  },
};

const OPTION_DESCRIPTION_ID = 'AA184799-73E7-45F9-8831-85E924EC1772-description';

export const FormFieldLabelOptionWithDescription: Story = {
  name: 'Form Field Label option met een Form Field Description',
  args: {
    children: 'Ik ga akkoord met de voorwaarden',
    input: <input type="checkbox" name="voorwaarden" aria-describedby={OPTION_DESCRIPTION_ID} />,
    type: 'option',
  },
  render: (args) => (
    <>
      <FormFieldLabelComponent {...args} />
      <FormFieldDescription id={OPTION_DESCRIPTION_ID}>
        U kunt de voorwaarden altijd teruglezen in uw account.
      </FormFieldDescription>
    </>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'De Form Field Description staat altijd buiten de Form Field Label, ook bij checkboxes, radio buttons en switches. De Form Field Label bevat alleen een korte, duidelijke labeltekst. De description geeft aanvullende informatie en wordt afzonderlijk voorgelezen door screenreaders.',
      },
    },
    status: { type: [] },
  },
};

const INHERIT_INPUT_ID = 'F9EB00D5-A830-4B53-AAFF-C8B26D4AE447';

export const FormFieldLabelInherit: Story = {
  name: 'Form Field Label inherit binnen een NL Heading',
  args: {
    children: 'Wat is uw naam?',
    htmlFor: INHERIT_INPUT_ID,
    type: 'inherit',
  },
  render: (args) => (
    <>
      <Heading level={1}>
        <FormFieldLabelComponent {...args} />
      </Heading>
      <div>
        <input id={INHERIT_INPUT_ID} type="text" autoComplete="name" />
      </div>
    </>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'De Form Field Label staat binnen een NL Heading, omdat de vraag ook de kop van de pagina is. Het label neemt de kleur en typografie van de heading over. Een screenreader leest het label voor bij focus op het invoerveld.',
      },
    },
    status: { type: [] },
  },
};

export const FormFieldLabelAsDiv: Story = {
  name: 'Form Field Label als een HTML-element div in plaats van label',
  render: () => {
    const INPUT_ID = 'B7AAD9E1-0727-4784-9A01-7A31C9E22210';
    const LABEL_ID = `${INPUT_ID}-label`;
    return (
      <>
        <AlternativeHTMLFormFieldLabel Component="div" id={LABEL_ID}>
          Postcode
        </AlternativeHTMLFormFieldLabel>
        <div>
          <input id={INPUT_ID} aria-labelledby={LABEL_ID} type="text" autoComplete="postal-code" />
        </div>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'De kleur en typografie van de component komen overeen met het design van de Form Field Label. Het label is opgemaakt met het HTML-element `div`. Een HTML-element `div` heeft geen HTML-attribuut `for`, daarom is het invoerveld gekoppeld via het WAI-ARIA-attribuut `aria-labelledby`. Een klik op het label zet de focus op het invoerveld. Dit gedrag werkt alleen wanneer de JavaScript beschikbaar is. De witruimte rechts van de Form Field Label is niet interactief, wanneer je naast de label klikt verplaatst de focus niet naar het invoerveld.',
      },
    },
    status: { type: [] },
  },
};

export const FormFieldLabelAsSpan: Story = {
  name: 'Form Field Label als een HTML-element span in plaats van label',
  render: () => {
    const INPUT_ID = 'D16A6D50-474E-4850-BEC9-4AD865982A9B';
    const LABEL_ID = `${INPUT_ID}-label`;
    return (
      <>
        <div>
          <AlternativeHTMLFormFieldLabel Component="span" id={LABEL_ID}>
            Postcode
          </AlternativeHTMLFormFieldLabel>
        </div>
        <div>
          <input id={INPUT_ID} aria-labelledby={LABEL_ID} type="text" autoComplete="postal-code" />
        </div>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'De kleur en typografie van de component komen overeen met het design van de Form Field Label. Het label is opgemaakt met het HTML-element `span`. Een HTML-element `span` heeft geen HTML-attribuut `for`, daarom is het invoerveld gekoppeld via het WAI-ARIA-attribuut `aria-labelledby`. Een klik op het label zet de focus niet op het invoerveld. Dit gedrag werkt alleen wanneer de JavaScript beschikbaar is. De witruimte rechts van de Form Field Label is niet interactief, wanneer je naast de label klikt verplaatst de focus niet naar  het invoerveld.',
      },
    },
    status: { type: [] },
  },
};

export const FormFieldLabelNLHTMLAll: Story = {
  name: 'Form Field Label binnen `nl-html--all`',
  render: () => {
    const INPUT_ID = '120F5DB0-24C7-40A0-911F-E9717C1B9BC0';
    return (
      <div className="nl-html nl-html--all">
        <label htmlFor={`${INPUT_ID}-postcode`}>Postcode</label>
        <div>
          <input id={`${INPUT_ID}-postcode`} type="text" autoComplete="postal-code" />
        </div>
        <h1>
          <label htmlFor={`${INPUT_ID}-name`}>Wat is uw naam?</label>
        </h1>
        <div>
          <input id={`${INPUT_ID}-name`} type="text" autoComplete="name" />
        </div>
        <fieldset>
          <legend>Communicatievoorkeuren</legend>
          <div>
            <label>
              <input type="checkbox" name="voorwaarden" /> Ik ga akkoord met de voorwaarden
            </label>
          </div>
          <div>
            <label>
              <input type="checkbox" {...{ switch: '' }} name="subscribe" /> Ik wil de nieuwsbrief ontvangen
            </label>
          </div>
          <div>
            <label>
              <input type="checkbox" {...{ switch: '' }} name="sms" disabled /> Ik wil een sms ontvangen
            </label>
          </div>
        </fieldset>
        <fieldset>
          <legend>Hoe wilt u contact?</legend>
          <div>
            <label>
              <input type="radio" name="contact-all" value="email" /> Per e-mail
            </label>
          </div>
          <div>
            <label>
              <input type="radio" name="contact-all" value="telefoon" /> Per telefoon
            </label>
          </div>
        </fieldset>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'De labels zijn opgemaakt met het HTML-element `label` zonder classes, binnen een element met de class `nl-html--all`. De styling van de Form Field Label wordt automatisch toegepast. Een label binnen een HTML-element `h1` krijgt de styling van de `inherit` variant en neemt de typografie van de heading over. Een label met een checkbox, switch of radio button krijgt de styling van de `option` variant. Een label met een disabled switch krijgt de styling van de `disabled` variant. De switch is een HTML-element `input` met het HTML-attribuut `type` met de waarde `checkbox` en het HTML-attribuut `switch`. Op het moment van testen wordt de native switch alleen ondersteund in Safari, in andere browsers wordt een checkbox getoond. Zie [Can I use: HTML switch](https://caniuse.com/wf-switch-control) voor de actuele ondersteuning.',
      },
    },
    status: { type: [] },
  },
};

export const FormFieldLabelNLHTMLFormFieldLabel: Story = {
  name: 'Form Field Label binnen `nl-html--form-field-label`',
  render: () => {
    const INPUT_ID = 'DBBE33D2-7A11-4408-9291-BC16B20B1F1F';
    return (
      <div className="nl-html nl-html--form-field-label">
        <label htmlFor={`${INPUT_ID}-postcode`}>Postcode</label>
        <div>
          <input id={`${INPUT_ID}-postcode`} type="text" autoComplete="postal-code" />
        </div>
        <h1>
          <label htmlFor={`${INPUT_ID}-name`}>Wat is uw naam?</label>
        </h1>
        <div>
          <input id={`${INPUT_ID}-name`} type="text" autoComplete="name" />
        </div>
        <fieldset>
          <legend>Communicatievoorkeuren</legend>
          <div>
            <label>
              <input type="checkbox" name="voorwaarden" /> Ik ga akkoord met de voorwaarden
            </label>
          </div>
          <div>
            <label>
              <input type="checkbox" {...{ switch: '' }} name="subscribe" /> Ik wil de nieuwsbrief ontvangen
            </label>
          </div>
          <div>
            <label>
              <input type="checkbox" {...{ switch: '' }} name="sms" disabled /> Ik wil een sms ontvangen
            </label>
          </div>
        </fieldset>
        <fieldset>
          <legend>Hoe wilt u contact?</legend>
          <div>
            <label>
              <input type="radio" name="contact-form-field-label" value="email" /> Per e-mail
            </label>
          </div>
          <div>
            <label>
              <input type="radio" name="contact-form-field-label" value="telefoon" /> Per telefoon
            </label>
          </div>
        </fieldset>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'De labels zijn opgemaakt met het HTML-element `label` zonder classes, binnen een element met de class `nl-html--form-field-label`. De styling van de Form Field Label wordt automatisch toegepast. Een label binnen een HTML-element `h1` krijgt de styling van de `inherit` variant en neemt de typografie van de heading over. Een label met een checkbox, switch of radio button krijgt de styling van de `option` variant. Een label met een disabled switch krijgt de styling van de `disabled` variant. De switch is een HTML-element `input` met het HTML-attribuut `type` met de waarde `checkbox` en het HTML-attribuut `switch`. Op het moment van testen wordt de native switch alleen ondersteund in Safari, in andere browsers wordt een checkbox getoond. Zie [Can I use: HTML switch](https://caniuse.com/wf-switch-control) voor de actuele ondersteuning.',
      },
    },
    status: { type: [] },
  },
};

export const FormFieldLabelNLHTMLHeadingLevels: Story = {
  name: 'Form Field Label binnen de HTML-elementen `h1` tot en met `h6` in `nl-html--form-field-label`',
  render: () => {
    const INPUT_ID = '43964965-79F8-4F78-B699-0BEF1270B594';
    return (
      <div className="nl-html nl-html--form-field-label">
        <h1>
          <label htmlFor={`${INPUT_ID}-h1`}>Wat is uw naam? (h1)</label>
        </h1>
        <div>
          <input id={`${INPUT_ID}-h1`} type="text" />
        </div>
        <h2>
          <label htmlFor={`${INPUT_ID}-h2`}>Wat is uw naam? (h2)</label>
        </h2>
        <div>
          <input id={`${INPUT_ID}-h2`} type="text" />
        </div>
        <h3>
          <label htmlFor={`${INPUT_ID}-h3`}>Wat is uw naam? (h3)</label>
        </h3>
        <div>
          <input id={`${INPUT_ID}-h3`} type="text" />
        </div>
        <h4>
          <label htmlFor={`${INPUT_ID}-h4`}>Wat is uw naam? (h4)</label>
        </h4>
        <div>
          <input id={`${INPUT_ID}-h4`} type="text" />
        </div>
        <h5>
          <label htmlFor={`${INPUT_ID}-h5`}>Wat is uw naam? (h5)</label>
        </h5>
        <div>
          <input id={`${INPUT_ID}-h5`} type="text" />
        </div>
        <h6>
          <label htmlFor={`${INPUT_ID}-h6`}>Wat is uw naam? (h6)</label>
        </h6>
        <div>
          <input id={`${INPUT_ID}-h6`} type="text" />
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'De labels zijn opgemaakt met het HTML-element `label` zonder classes, binnen de HTML-elementen `h1`, `h2`, `h3`, `h4`, `h5` en `h6` in een element met de class `nl-html--form-field-label`. Een label binnen elk van deze headings krijgt de styling van de `inherit` variant en neemt de typografie van de heading over.',
      },
    },
    status: { type: [] },
  },
};

const TEXT_SPACING_INPUT_ID = 'D5ED20F4-1F40-4257-8C34-2117A55B91C6';

export const FormFieldLabelTextSpacing: Story = {
  name: 'Form Field Label met vergrootte tekstafstand',
  args: {
    children: 'Beschrijf het probleem zo specifiek mogelijk en vermeld de foutcode',
    htmlFor: TEXT_SPACING_INPUT_ID,
  },
  render: (args) => (
    <>
      <FormFieldLabelComponent {...args} />
      <div>
        <textarea id={TEXT_SPACING_INPUT_ID} />
      </div>
      <Heading level={1}>
        <FormFieldLabelComponent htmlFor={`${TEXT_SPACING_INPUT_ID}-heading`} type="inherit">
          Wat is het adres waar u de afgelopen vijf jaar het langst heeft gewoond?
        </FormFieldLabelComponent>
      </Heading>
      <div>
        <input id={`${TEXT_SPACING_INPUT_ID}-heading`} type="text" autoComplete="street-address" />
      </div>
      <FormFieldLabelComponent type="option" input={<input type="checkbox" name="contact" />}>
        Ik wil contact opnemen met een medewerker over dit probleem
      </FormFieldLabelComponent>
    </>
  ),
  decorators: [LargeLetterSpacingDecorator, LargeWordSpacingDecorator, LargeLineHeightDecorator],
  parameters: {
    docs: {
      description: {
        story: `Een Form Field Label met vergrootte tekstafstand, als gewoon label, binnen een NL Heading en bij een checkbox. Het label binnen de heading neemt de typografie van de heading over, ook de vergrootte tekstafstand. De tekst overlapt niet met andere onderdelen van de content of componenten.

De tekstafstand is vergroot volgens [WCAG Succescriterium 1.4.12 Tekstafstand](https://nldesignsystem.nl/wcag/1.4.12/):

- Regelafstand: minimaal 150% van de lettergrootte
- Letterafstand: minimaal 12% van de lettergrootte
- Woordafstand: minimaal 16% van de lettergrootte`,
      },
    },
    status: { type: [] },
  },
};

const LANG_LTR_INPUT_ID = '2C896144-4DC0-4880-8B9A-E6CFDE5F7137';

export const FormFieldLabelLangLTR: Story = {
  name: 'Form Field Label in het Engels',
  globals: {
    dir: 'ltr',
    lang: 'en',
  },
  args: {
    children: 'Postal code',
    htmlFor: LANG_LTR_INPUT_ID,
    lang: 'en',
  },
  render: (args) => (
    <>
      <FormFieldLabelComponent {...args} />
      <div>
        <input id={LANG_LTR_INPUT_ID} type="text" autoComplete="postal-code" />
      </div>
    </>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Het label staat in het Engels, terwijl de rest van de pagina in het Nederlands is. De afwijkende taal is expliciet aangegeven, zodat de tekst correct wordt uitgesproken door een screenreader. De afwijkende taal is aangegeven met het HTML-attribuut `lang`.',
      },
    },
    status: { type: [] },
  },
};

const LANG_RTL_INPUT_ID = '09AF8E41-DDB7-4CF7-A066-22AC98155B27';

export const FormFieldLabelLangRTL: Story = {
  name: 'Form Field Label in het Arabisch',
  globals: {
    dir: 'ltr',
    lang: 'ar',
  },
  args: {
    children: 'رمز بريدي',
    htmlFor: LANG_RTL_INPUT_ID,
  },
  render: (args) => (
    <div lang="ar" dir="rtl">
      <FormFieldLabelComponent {...args} />
      <div>
        <input id={LANG_RTL_INPUT_ID} type="text" autoComplete="postal-code" />
      </div>
      <FormFieldLabelComponent type="option" input={<input type="checkbox" name="subscribe" />}>
        أرغب في تلقي النشرة الإخبارية
      </FormFieldLabelComponent>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Het label is in het Arabisch, een taal met een andere schrijf- en leesrichting. De richting van de tekst past bij de taal. Bij de `option` variant staat de checkbox aan de rechterkant, vóór de tekst. De taal is aangegeven met het HTML-attribuut `lang`. De richting is aangegeven met het HTML-attribuut `dir`, zodat de tekst van rechts naar links wordt weergegeven.',
      },
    },
    status: { type: [] },
  },
};

const VERTICAL_TEXT_INPUT_ID = '10190FD2-C837-4524-82C7-3825BE298839';

export const FormFieldLabelVerticalText: Story = {
  name: 'Form Field Label in het Japans',
  globals: {
    dir: 'ltr',
    lang: 'ja',
    writingMode: 'vertical-rl',
  },
  args: {
    children: '郵便番号',
    htmlFor: VERTICAL_TEXT_INPUT_ID,
    lang: 'ja',
  },
  render: (args) => (
    <>
      <FormFieldLabelComponent {...args} />
      <div>
        <input id={VERTICAL_TEXT_INPUT_ID} type="text" autoComplete="postal-code" />
      </div>
      <FormFieldLabelComponent type="option" lang="ja" input={<input type="checkbox" name="subscribe" />}>
        ニュースレターを受け取る
      </FormFieldLabelComponent>
    </>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'De hele pagina staat in verticale tekstrichting, aangezet via de CSS-eigenschap `writingMode`. Het label, de checkbox en het invoerveld passen zich allemaal aan de verticale richting aan. De taal is aangegeven met het HTML-attribuut `lang`.',
      },
    },
    status: { type: [] },
  },
};

const LARGE_TEXT_INPUT_ID = '9458E0FA-78BC-4A11-8A6D-1449C95D02B9';

export const FormFieldLabelLargeText: Story = {
  name: 'Form Field Label met 200% pagina-zoom',
  globals: { zoom: 2 },
  args: {
    children: 'Postcode',
    htmlFor: LARGE_TEXT_INPUT_ID,
  },
  render: (args) => (
    <>
      <FormFieldLabelComponent {...args} />
      <div>
        <input id={LARGE_TEXT_INPUT_ID} type="text" autoComplete="postal-code" />
      </div>
      <OptionCheckboxExample />
    </>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'De pagina is gezoomd naar 200% via de browser (paginazoom), waardoor zowel de tekst als het invoerveld twee keer zo groot worden. Het label blijft in zijn geheel zichtbaar, blijft goed leesbaar en loopt niet buiten de ruimte van het element.',
      },
    },
    status: { type: [] },
  },
};

const TEXT_ZOOM_INPUT_ID = '43B85DBE-3597-4FFC-BFBC-399198A01A6D';

export const FormFieldLabelTextZoom: Story = {
  name: 'Form Field Label met 200% tekstgrootte',
  globals: { fontSize: '32px' },
  args: {
    children: 'Postcode',
    htmlFor: TEXT_ZOOM_INPUT_ID,
  },
  render: (args) => (
    <>
      <FormFieldLabelComponent {...args} />
      <div>
        <input id={TEXT_ZOOM_INPUT_ID} type="text" autoComplete="postal-code" />
      </div>
      <OptionCheckboxExample />
    </>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'De standaard tekstgrootte van de pagina is vergroot van 16px naar 32px, zoals bij een gebruikersvoorkeur voor grotere tekst ([WCAG-criterium 1.4.4 Herschalen van tekst](https://nldesignsystem.nl/wcag/1.4.4/)). Alleen de tekst, die in `rem` is opgegeven, wordt hierdoor groter; het invoerveld en de checkbox schalen niet automatisch mee. Het label blijft in zijn geheel zichtbaar, blijft goed leesbaar en loopt niet buiten de ruimte van het element. Deze story is alleen los te bekijken, niet op de documentatiepagina, omdat de tekstgrootte op paginaniveau wordt ingesteld.',
      },
    },
    status: { type: [] },
  },
};

const WORD_BREAK_INPUT_ID = '124FF4FA-619E-4348-9D57-305A09D0E1F6';

export const FormFieldLabelWordBreak: Story = {
  name: 'Form Field Label met woorden die niet op 1 regel passen',
  args: {
    children: 'Arbeidsongeschiktheidsverzekeringsmaatschappijpolisnummer',
    htmlFor: WORD_BREAK_INPUT_ID,
  },
  render: (args) => (
    <>
      <FormFieldLabelComponent {...args} />
      <div>
        <input id={WORD_BREAK_INPUT_ID} type="text" />
      </div>
      <FormFieldLabelComponent type="option" input={<input type="checkbox" name="permission" />}>
        Ik geef toestemming voor de gegevensuitwisselingsovereenkomstvoorwaarden
      </FormFieldLabelComponent>
    </>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Het label bevat buitengewoon lange woorden. Woorden worden afgebroken aan het einde van de regel en vervolgd op de volgende regel. Tekst valt niet buiten beeld. Het afbreken van woorden regelt de component niet zelf: gebruik de component in een context waarin woordafbreking goed is ingesteld.',
      },
    },
    status: { type: [] },
  },
};

const SMALL_VIEWPORT_INPUT_ID = '1C1227CB-EAE3-4FAA-8A05-489795E5682A';

export const FormFieldLabelSmallViewport: Story = {
  name: 'Form Field Label in een kleine viewport',
  globals: { viewport: { value: 'wcag400' } },
  args: {
    children: 'Wat is het adres waar u de afgelopen vijf jaar het langst heeft gewoond?',
    htmlFor: SMALL_VIEWPORT_INPUT_ID,
  },
  render: (args) => (
    <>
      <FormFieldLabelComponent {...args} />
      <div>
        <input id={SMALL_VIEWPORT_INPUT_ID} type="text" autoComplete="street-address" />
      </div>
      <FormFieldLabelComponent type="option" input={<input type="checkbox" name="terms-and-conditions" />}>
        Ik heb de voorwaarden gelezen en ga ermee akkoord dat mijn gegevens worden gebruikt voor deze aanvraag
      </FormFieldLabelComponent>
    </>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Het lange label is in een kleine viewport te zien zonder dat er tekst buiten het beeld valt. Het label blijft leesbaar omdat het over meerdere regels wordt verdeeld. De kleine viewport is vergelijkbaar met 400% zoom. Er valt geen tekst buiten beeld aan de rechterkant, en aan de onderkant is scrollen mogelijk.',
      },
    },
    status: { type: [] },
  },
};

const FORCED_COLORS_INPUT_ID = 'EC13B56E-FE3C-4018-A090-D7D897D9C2E5';

export const FormFieldLabelForcedColorsMode: Story = {
  name: 'Form Field Label in Forced Colors mode',
  globals: { forcedColors: 'active' },
  args: {
    children: 'Postcode',
    className: 'nl-form-field-label--forced-colors-test',
    htmlFor: FORCED_COLORS_INPUT_ID,
  },
  render: (args) => (
    <>
      <FormFieldLabelComponent {...args} />
      <div>
        <input id={FORCED_COLORS_INPUT_ID} type="text" autoComplete="postal-code" />
      </div>
      <FormFieldLabelComponent
        className="nl-form-field-label--forced-colors-test"
        type="option"
        input={<input type="checkbox" name="nieuwsbrief" />}
      >
        Ik wil de nieuwsbrief ontvangen
      </FormFieldLabelComponent>
    </>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Het label blijft goed leesbaar in de modus voor hoge contrastkleurinstellingen. De tekstkleur van de standaard en `option` variant is `currentColor`, zodat deze zich aanpast aan de systeemkleuren. Dit is een gesimuleerde weergave binnen Storybook (via de toolbar-knop "Forced Colors"), controleer voor definitieve verificatie ook de echte Forced Colors mode via de browser DevTools of het besturingssysteem.',
      },
    },
    status: { type: [] },
  },
};

const DISABLED_FORCED_COLORS_INPUT_ID = 'D0C84A47-F3AF-4804-84E9-EB14DA4409A3';

export const FormFieldLabelDisabledForcedColorsMode: Story = {
  name: 'Form Field Label disabled in Forced Colors mode',
  globals: { forcedColors: 'active' },
  args: {
    children: 'Postcode',
    className: 'nl-form-field-label--forced-colors-test',
    disabled: true,
    htmlFor: DISABLED_FORCED_COLORS_INPUT_ID,
  },
  render: (args) => (
    <>
      <FormFieldLabelComponent {...args} />
      <div>
        <input id={DISABLED_FORCED_COLORS_INPUT_ID} type="text" autoComplete="postal-code" disabled />
      </div>
      <FormFieldLabelComponent
        className="nl-form-field-label--forced-colors-test"
        type="option"
        disabled
        input={<input type="checkbox" name="subscribe" disabled />}
      >
        Ik wil de nieuwsbrief ontvangen
      </FormFieldLabelComponent>
    </>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Het disabled label blijft goed leesbaar in de modus voor hoge contrastkleurinstellingen. De tekstkleur is de systeemkleur `GrayText`, net als bij disabled invoervelden. Dit is een gesimuleerde weergave binnen Storybook (via de toolbar-knop "Forced Colors"), controleer voor definitieve verificatie ook de echte Forced Colors mode via de browser DevTools of het besturingssysteem.',
      },
    },
    status: { type: [] },
  },
};

const FORM_TOGGLE_INPUT_ID = 'C3E2A1B4-9F7D-4E6C-8A5B-1D2E3F4A5B6C';

export const FormFieldLabelWithFormToggle: Story = {
  name: 'Form Field Label option met een Form Toggle',
  args: {
    children: 'Meldingen ontvangen',
    input: <FormToggleStory id={FORM_TOGGLE_INPUT_ID} />,
    type: 'option',
  },
  render: (args) => (
    <div className="utrecht-theme">
      <FormFieldLabelComponent {...args} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Het label bevat een Form Toggle, die vóór de tekst staat. Een screenreader leest het label voor bij focus op de toggle.',
      },
    },
    status: { type: [] },
  },
};
