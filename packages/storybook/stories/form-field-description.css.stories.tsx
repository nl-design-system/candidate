import type { Meta } from '@storybook/react-vite';
import packageJSON from '../../components-css/form-field-description-css/package.json';
import { FormFieldDescription as FormFieldDescriptionComponent } from '@nl-design-system-candidate/form-field-description-react';
import formFieldDescriptionMeta from '@nl-design-system-candidate/form-field-description-docs/stories/form-field-description.css.meta';
// import * as Stories from '@nl-design-system-candidate/form-field-description-docs/stories/form-field-description.stories';
import { mergeCssMeta } from '../src/helpers/merge-css-meta.js';
import { getExternalLinks } from '../src/helpers/external-links.js';

const externalLinks = getExternalLinks('https://nldesignsystem.nl/form-field-description', packageJSON.homepage);

const meta = {
  ...mergeCssMeta(formFieldDescriptionMeta, externalLinks),
  title: 'CSS Componenten/Form Field Description',
  id: 'css-form-field-description',
} satisfies Meta<typeof FormFieldDescriptionComponent>;

export default meta;

// export const SomeStory = Stories.SomeStory;
