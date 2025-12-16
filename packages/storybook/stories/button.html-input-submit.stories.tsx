import type { Meta } from '@storybook/react-vite';
import packageJSON from '../../components-css/button-css/package.json';
import { type ButtonProps } from '@nl-design-system-candidate/button-react';
import buttonMeta from '@nl-design-system-candidate/button-docs/stories/button.css.meta';
import * as Stories from '@nl-design-system-candidate/button-docs/stories/button.stories';
import '../../components-css/button-css/src/test.scss';
import { mergeCssMeta } from '../src/helpers/merge-css-meta';
import { getExternalLinks } from '../src/helpers/external-links';

const externalLinks = getExternalLinks('https://nldesignsystem.nl/button', packageJSON.homepage);

const meta = {
  ...mergeCssMeta(buttonMeta, externalLinks),
  title: 'CSS Componenten/Button/HTML Input Submit',
  id: 'css-button-html-input-submit',
  decorators: [
    (StoryComponent) => (
      <div className="nl-button--html">
        <StoryComponent />
      </div>
    ),
  ],
  render: (args: ButtonProps) => {
    return <input type="submit" {...args} />;
  },
} satisfies Meta<ButtonProps>;

export default meta;

export const Button = Stories.Button;
export const DisabledButton = Stories.DisabledButton;
