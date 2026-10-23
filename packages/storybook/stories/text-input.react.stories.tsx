import type { Meta } from '@storybook/react-vite';
import { merge } from 'lodash-es';
import packageJSON from '../../components-react/text-input-react/package.json';
import { TextInput as TextInputComponent } from '@nl-design-system-candidate/text-input-react';
import textInputMeta from '@nl-design-system-candidate/text-input-docs/stories/text-input.react.meta';
import * as Stories from '@nl-design-system-candidate/text-input-docs/stories/text-input.stories';
import { getExternalLinks } from '../src/helpers/external-links.js';
import description from '@nl-design-system-candidate/text-input-docs/docs/description.md?raw';

const externalLinks = getExternalLinks(
  'https://nldesignsystem.nl/text-input',
  packageJSON.homepage,
  'https://www.npmjs.com/package/@nl-design-system-candidate/text-input-react',
);

const meta = {
  ...merge(textInputMeta, externalLinks, {
    parameters: {
      docs: {
        subtitle: description,
      },
    },
  }),
  title: 'React Componenten/Text Input',
  id: 'text-input',
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
