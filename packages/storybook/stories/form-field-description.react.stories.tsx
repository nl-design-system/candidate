import type { Meta } from '@storybook/react-vite';
import { merge } from 'lodash-es';
import packageJSON from '../../components-react/form-field-description-react/package.json';
import { FormFieldDescription as FormFieldDescriptionComponent } from '@nl-design-system-candidate/form-field-description-react';
import formFieldDescriptionMeta from '@nl-design-system-candidate/form-field-description-docs/stories/form-field-description.react.meta';
import * as Stories from '@nl-design-system-candidate/form-field-description-docs/stories/form-field-description.stories';
import { getExternalLinks } from '../src/helpers/external-links.js';
import description from '@nl-design-system-candidate/form-field-description-docs/docs/description.md?raw';

const externalLinks = getExternalLinks(
  'https://nldesignsystem.nl/form-field-description',
  packageJSON.homepage,
  'https://www.npmjs.com/package/@nl-design-system-candidate/form-field-description-react',
);

const meta = {
  ...merge(formFieldDescriptionMeta, externalLinks, {
    parameters: {
      docs: {
        subtitle: description,
      },
    },
  }),
  title: 'React Componenten/Form Field Description',
  id: 'form-field-description',
} satisfies Meta<typeof FormFieldDescriptionComponent>;

export default meta;

export const FormFieldDescription = Stories.FormFieldDescription;
export const DisabledFormFieldDescription = Stories.FormFieldDescriptionDisabled;
