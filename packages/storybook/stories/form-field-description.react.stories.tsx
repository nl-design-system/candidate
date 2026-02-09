import type { Meta } from '@storybook/react-vite';
import packageJSON from '../../components-react/form-field-description-react/package.json';
import { FormFieldDescription as FormFieldDescriptionComponent } from '@nl-design-system-candidate/form-field-description-react';
import formFieldDescriptionMeta from '@nl-design-system-candidate/form-field-description-docs/stories/form-field-description.react.meta';
// import * as Stories from '@nl-design-system-candidate/form-field-description-docs/stories/form-field-description.stories';
import { getExternalLinks } from '../src/helpers/external-links.js';

const externalLinks = getExternalLinks('https://nldesignsystem.nl/form-field-description', packageJSON.homepage);

const meta = {
  ...formFieldDescriptionMeta,
  ...externalLinks,
  title: 'React Componenten/Form Field Description',
  id: 'form-field-description',
} satisfies Meta<typeof FormFieldDescriptionComponent>;

export default meta;

// export const SomeStory = Stories.SomeStory;
