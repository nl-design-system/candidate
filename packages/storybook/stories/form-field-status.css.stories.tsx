import type { Meta } from '@storybook/react-vite';
import packageJSON from '../../components-css/form-field-status-css/package.json';
import { FormFieldStatus as FormFieldStatusComponent } from '@nl-design-system-candidate/form-field-status-react';
import formFieldStatusMeta from '@nl-design-system-candidate/form-field-status-docs/stories/form-field-status.css.meta';
import '../../components-css/form-field-status-css/src/test.scss';
import { mergeCssMeta } from '../src/helpers/merge-css-meta';
import { getExternalLinks } from '../src/helpers/external-links';
import description from '@nl-design-system-candidate/form-field-status-docs/docs/description.md?raw';

const externalLinks = getExternalLinks(
  'https://nldesignsystem.nl/form-field-status',
  packageJSON.homepage,
  'https://www.npmjs.com/package/@nl-design-system-candidate/form-field-status-css',
);

const meta = {
  ...mergeCssMeta(formFieldStatusMeta, externalLinks, {
    parameters: {
      docs: {
        subtitle: description,
      },
    },
  }),
  title: 'CSS Componenten/Form Field Status',
  id: 'css-form-field-status',
} satisfies Meta<typeof FormFieldStatusComponent>;

export default meta;

// export const FormFieldStatus = Stories.FormFieldStatus;
