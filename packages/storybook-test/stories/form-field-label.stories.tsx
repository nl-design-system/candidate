import type { Meta } from '@storybook/react-vite';
import '../../components-css/form-field-label-css/src/form-field-label.scss';
import packageJSON from '../../components-react/form-field-label-react/package.json';
import { FormFieldLabel } from '../../components-react/form-field-label-react/src/form-field-label';
import componentMarkdown from '../../docs/form-field-label-docs/docs/component.md?raw';
import tokens from '../../tokens/form-field-label-tokens/tokens.json';
import { CustomDocsStory } from '@nl-design-system-candidate/storybook-shared/src/custom-docs';
import { WCAG22_AA_LEVEL } from '@nl-design-system-candidate/storybook-shared/src/WcagTests';
// import { } from '@nl-design-system-candidate/storybook-shared/src/WcagTests'; // Vul aan door toegankelijkheidsexpert

const meta = {
  argTypes: {
    // Vul aan door developer
  },
  component: FormFieldLabel,
  parameters: {
    // TODO: When component is implemented, enable Chromatic
    chromatic: { disableSnapshot: true },
    docs: {
      components: {
        DocsStory: CustomDocsStory,
      },
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
        // TODO: Configure `notTested` with WCAG SC's that must explicitly be marked as "tested" for each story
        ...WCAG22_AA_LEVEL,
      ],
      pass: [],
    },
    tokens,
  },
  title: 'Componenten/Form Field Label',
} satisfies Meta<typeof FormFieldLabel>;

export default meta;
