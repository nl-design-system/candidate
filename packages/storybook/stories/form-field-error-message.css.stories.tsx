import type { Meta } from '@storybook/react-vite';
import packageJSON from '../../components-css/form-field-error-message-css/package.json';
import { FormFieldErrorMessage as FormFieldErrorMessageComponent } from '@nl-design-system-candidate/form-field-error-message-react';
import formFieldErrorMessageMeta from '@nl-design-system-candidate/form-field-error-message-docs/stories/form-field-error-message.css.meta';
// import * as Stories from '@nl-design-system-candidate/form-field-error-message-docs/stories/form-field-error-message.stories';
import { mergeCssMeta } from '../src/helpers/merge-css-meta.js';
import { getExternalLinks } from '../src/helpers/external-links.js';

const externalLinks = getExternalLinks('https://nldesignsystem.nl/form-field-error-message', packageJSON.homepage);

const meta = {
  ...mergeCssMeta(formFieldErrorMessageMeta, externalLinks),
  title: 'CSS Componenten/Form Field Error Message',
  id: 'css-form-field-error-message',
} satisfies Meta<typeof FormFieldErrorMessageComponent>;

export default meta;

// export const SomeStory = Stories.SomeStory;
