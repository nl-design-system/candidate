import type { Meta } from '@storybook/react-vite';
import packageJSON from '../../components-react/form-field-error-message-react/package.json';
import { FormFieldErrorMessage as FormFieldErrorMessageComponent } from '@nl-design-system-candidate/form-field-error-message-react';
import formFieldErrorMessageMeta from '@nl-design-system-candidate/form-field-error-message-docs/stories/form-field-error-message.react.meta';
// import * as Stories from '@nl-design-system-candidate/form-field-error-message-docs/stories/form-field-error-message.stories';
import { getExternalLinks } from '../src/helpers/external-links.js';

const externalLinks = getExternalLinks('https://nldesignsystem.nl/form-field-error-message', packageJSON.homepage);

const meta = {
  ...formFieldErrorMessageMeta,
  ...externalLinks,
  title: 'React Componenten/Form Field Error Message',
  id: 'form-field-error-message',
} satisfies Meta<typeof FormFieldErrorMessageComponent>;

export default meta;

// export const SomeStory = Stories.SomeStory;
