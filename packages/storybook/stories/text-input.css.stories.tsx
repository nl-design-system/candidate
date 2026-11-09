import type { Meta } from '@storybook/react-vite';
import packageJSON from '../../components-css/text-input-css/package.json';
import { TextInput as TextInputComponent } from '@nl-design-system-candidate/text-input-react';
import textInputMeta from '@nl-design-system-candidate/text-input-docs/stories/text-input.css.meta';
import * as Stories from '@nl-design-system-candidate/text-input-docs/stories/text-input.stories';
import { mergeCssMeta } from '../src/helpers/merge-css-meta.js';
import { getExternalLinks } from '../src/helpers/external-links.js';
import description from '@nl-design-system-candidate/text-input-docs/docs/description.md?raw';

const externalLinks = getExternalLinks(
  'https://nldesignsystem.nl/text-input',
  packageJSON.homepage,
  'https://www.npmjs.com/package/@nl-design-system-candidate/text-input-css',
);

const meta = {
  ...mergeCssMeta(textInputMeta, externalLinks, {
    parameters: {
      docs: {
        subtitle: description,
      },
    },
  }),
  title: 'CSS Componenten/Text Input',
  id: 'css-text-input',
} satisfies Meta<typeof TextInputComponent>;

export default meta;

export const TextInput = Stories.TextInput;
export const TextInputWithValue = Stories.TextInputWithValue;
export const TextInputWithPlaceholder = Stories.TextInputWithPlaceholder;
export const TextInputType = Stories.TextInputType;
export const TextInputSize = Stories.TextInputSize;
export const TextInputInvalid = Stories.TextInputInvalid;
export const TextInputDisabled = Stories.TextInputDisabled;
export const TextInputReadOnly = Stories.TextInputReadOnly;
export const TextInputRequired = Stories.TextInputRequired;
