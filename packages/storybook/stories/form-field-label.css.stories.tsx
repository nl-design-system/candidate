import type { Meta } from '@storybook/react-vite';
import packageJSON from '../../components-css/form-field-label-css/package.json';
import { FormFieldLabel as FormFieldLabelComponent } from '@nl-design-system-candidate/form-field-label-react';
import formFieldLabelMeta from '@nl-design-system-candidate/form-field-label-docs/stories/form-field-label.css.meta';
import * as Stories from '@nl-design-system-candidate/form-field-label-docs/stories/form-field-label.stories';
import { mergeCssMeta } from '../src/helpers/merge-css-meta.js';
import { getExternalLinks } from '../src/helpers/external-links.js';
import description from '@nl-design-system-candidate/form-field-label-docs/docs/description.md?raw';

const externalLinks = getExternalLinks(
  'https://nldesignsystem.nl/form-field-label',
  packageJSON.homepage,
  'https://www.npmjs.com/package/@nl-design-system-candidate/form-field-label-css',
);

const meta = {
  ...mergeCssMeta(formFieldLabelMeta, externalLinks, {
    parameters: {
      docs: {
        subtitle: description,
      },
    },
  }),
  title: 'In Progress/CSS Componenten/Form Field Label',
  id: 'css-form-field-label',
} satisfies Meta<typeof FormFieldLabelComponent>;

export default meta;

export const FormFieldLabel = Stories.FormFieldLabel;
export const DisabledFormFieldLabel = Stories.FormFieldLabelDisabled;
export const OptionCheckboxFormFieldLabel = Stories.FormFieldLabelOptionCheckbox;
export const OptionRadioFormFieldLabel = Stories.FormFieldLabelOptionRadio;
export const DisabledOptionFormFieldLabel = Stories.FormFieldLabelOptionDisabled;
export const InheritFormFieldLabel = Stories.FormFieldLabelInherit;
