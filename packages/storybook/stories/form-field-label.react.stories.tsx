import type { Meta } from '@storybook/react-vite';
import { merge } from 'lodash-es';
import packageJSON from '../../components-react/form-field-label-react/package.json';
import { FormFieldLabel as FormFieldLabelComponent } from '@nl-design-system-candidate/form-field-label-react';
import formFieldLabelMeta from '@nl-design-system-candidate/form-field-label-docs/stories/form-field-label.react.meta';
import * as Stories from '@nl-design-system-candidate/form-field-label-docs/stories/form-field-label.stories';
import { getExternalLinks } from '../src/helpers/external-links.js';
import description from '@nl-design-system-candidate/form-field-label-docs/docs/description.md?raw';

const externalLinks = getExternalLinks(
  'https://nldesignsystem.nl/form-field-label',
  packageJSON.homepage,
  'https://www.npmjs.com/package/@nl-design-system-candidate/form-field-label-react',
);

const meta = {
  ...merge(formFieldLabelMeta, externalLinks, {
    parameters: {
      docs: {
        subtitle: description,
      },
    },
  }),
  title: 'In Progress/React Componenten/Form Field Label',
  id: 'form-field-label',
} satisfies Meta<typeof FormFieldLabelComponent>;

export default meta;

export const FormFieldLabel = Stories.FormFieldLabel;
export const DisabledFormFieldLabel = Stories.FormFieldLabelDisabled;
export const OptionCheckboxFormFieldLabel = Stories.FormFieldLabelOptionCheckbox;
export const OptionRadioFormFieldLabel = Stories.FormFieldLabelOptionRadio;
export const DisabledOptionFormFieldLabel = Stories.FormFieldLabelOptionDisabled;
export const InheritFormFieldLabel = Stories.FormFieldLabelInherit;
