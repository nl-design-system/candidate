import type { Meta } from '@storybook/react-vite';
import packageJSON from '../../components-react/form-field-label-react/package.json';
import { FormFieldLabel as FormFieldLabelComponent } from '@nl-design-system-candidate/form-field-label-react';
import formFieldLabelMeta from '@nl-design-system-candidate/form-field-label-docs/stories/form-field-label.react.meta';
// import * as Stories from '@nl-design-system-candidate/form-field-label-docs/stories/form-field-label.stories';
import { getExternalLinks } from '../src/helpers/external-links.js';

const externalLinks = getExternalLinks('https://nldesignsystem.nl/form-field-label', packageJSON.homepage);

const meta = {
  ...formFieldLabelMeta,
  ...externalLinks,
  title: 'React Componenten/Form Field Label',
  id: 'form-field-label',
} satisfies Meta<typeof FormFieldLabelComponent>;

export default meta;

// export const SomeStory = Stories.SomeStory;
