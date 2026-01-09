import type { Meta } from '@storybook/react-vite';
import { merge } from 'lodash-es';
import packageJSON from '../../components-react/button-react/package.json';
import { Button as ButtonComponent, type ButtonProps } from '@nl-design-system-candidate/button-react';
import buttonMeta from '@nl-design-system-candidate/button-docs/stories/button.react.meta';
import * as Stories from '@nl-design-system-candidate/button-docs/stories/button.stories';
import '../../components-css/button-css/src/test.scss';
import { useArgs } from 'storybook/preview-api';
import { getExternalLinks } from '../src/helpers/external-links';
import description from '@nl-design-system-candidate/button-docs/docs/description.md?raw';

const externalLinks = getExternalLinks(
  'https://nldesignsystem.nl/button',
  packageJSON.homepage,
  'https://www.npmjs.com/package/@nl-design-system-candidate/code-react',
);

const meta = {
  ...merge(buttonMeta, externalLinks, {
    parameters: {
      docs: {
        subtitle: description,
      },
    },
  }),
  title: 'React Componenten/Button',
  id: 'button',
} satisfies Meta<ButtonProps>;

export default meta;

export const Button = Stories.Button;
export const PrimaryButton = Stories.PrimaryButton;
export const SecondaryButton = Stories.SecondaryButton;
export const SubtleButton = Stories.SubtleButton;
export const DisabledButton = Stories.DisabledButton;
export const BusyButton = Stories.BusyButton;
export const AlleenEenIcon = Stories.AlleenEenIcon;
export const IconVoorHetLabel = Stories.IconVoorHetLabel;
export const IconAchterHetLabel = Stories.IconAchterHetLabel;
export const GeformatteerdLabel = Stories.GeformatteerdLabel;
export const GeformatteerdLabelEnEenIcon = Stories.GeformatteerdLabelEnEenIcon;
export const ToggleButton = {
  ...Stories.ToggleButton,
  render: ({ label, children: _children, ...props }: ButtonProps) => {
    const [{ pressed, disabled }, updateArgs] = useArgs();

    function onClick() {
      if (Boolean(disabled) === false) {
        updateArgs({ pressed: !pressed });
      }
    }

    return <ButtonComponent {...props} label={pressed ? label : 'Klik mij!'} pressed={pressed} onClick={onClick} />;
  },
};
export const VolleBreedte = Stories.VolleBreedte;
