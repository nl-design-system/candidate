import type { Meta } from '@storybook/react-vite';
import { merge } from 'lodash-es';
import packageJSON from '../../components-react/form-field-status-react/package.json';
import { FormFieldStatus as FormFieldStatusComponent } from '@nl-design-system-candidate/form-field-status-react';
import formFieldStatusMeta from '@nl-design-system-candidate/form-field-status-docs/stories/form-field-status.react.meta';
import '../../components-css/form-field-status-css/src/test.scss';
import { getExternalLinks } from '../src/helpers/external-links';
import description from '@nl-design-system-candidate/form-field-status-docs/docs/description.md?raw';

const externalLinks = getExternalLinks(
  'https://nldesignsystem.nl/form-field-status',
  packageJSON.homepage,
  'https://www.npmjs.com/package/@nl-design-system-candidate/form-field-status-react',
);

const meta = {
  ...merge(formFieldStatusMeta, externalLinks, {
    parameters: {
      docs: {
        subtitle: description,
      },
    },
  }),
  title: 'React Componenten/Form Field Status',
  id: 'form-field-status',
} satisfies Meta<typeof FormFieldStatusComponent>;

export default meta;

// export const FormFieldStatus = Stories.FormFieldStatus;
