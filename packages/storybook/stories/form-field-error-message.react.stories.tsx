import type { Meta } from '@storybook/react-vite';
import { merge } from 'lodash-es';
import packageJSON from '../../components-react/form-field-error-message-react/package.json';
import { FormFieldErrorMessage as FormFieldErrorMessageComponent } from '@nl-design-system-candidate/form-field-error-message-react';
import formFieldErrorMessageMeta from '@nl-design-system-candidate/form-field-error-message-docs/stories/form-field-error-message.react.meta';
import * as Stories from '@nl-design-system-candidate/form-field-error-message-docs/stories/form-field-error-message.stories';
import { getExternalLinks } from '../src/helpers/external-links.js';
import description from '@nl-design-system-candidate/form-field-error-message-docs/docs/description.md?raw';

const externalLinks = getExternalLinks(
  'https://nldesignsystem.nl/form-field-error-message',
  packageJSON.homepage,
  'https://www.npmjs.com/package/@nl-design-system-candidate/form-field-error-message-react',
);

const meta = {
  ...merge(formFieldErrorMessageMeta, externalLinks, {
    parameters: {
      docs: {
        subtitle: description,
      },
    },
  }),
  title: 'React Componenten/Form Field Error Message',
  id: 'form-field-error-message',
} satisfies Meta<typeof FormFieldErrorMessageComponent>;

export default meta;

export const FormFieldErrorMessage = Stories.FormFieldErrorMessage;
