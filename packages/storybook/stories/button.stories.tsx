import type { Meta } from '@storybook/react-vite';
import { useArgs } from 'storybook/preview-api';
import '../../components-css/button-css/src/test.scss';
import packageJSON from '../../components-react/button-react/package.json';
import buttonMeta from '@nl-design-system-candidate/button-docs/stories/button.react.meta';
import { Button as ButtonComponent, type ButtonProps } from '@nl-design-system-candidate/button-react';
import * as Stories from '@nl-design-system-candidate/button-docs/stories/button.stories';

const meta = {
  ...buttonMeta,
  parameters: {
    externalLinks: [
      {
        name: 'Open op NL Design System',
        url: 'https://nldesignsystem.nl/button',
      },
      {
        name: 'Open op GitHub',
        url: packageJSON.homepage,
      },
    ],
  },
  title: 'Button',
} satisfies Meta<ButtonProps>;

export default meta;

export const Button = Stories.Button;
export const PrimaryButton = Stories.PrimaryButton;
export const SecondaryButton = Stories.SecondaryButton;
export const SubtleButton = Stories.SubtleButton;
export const DisabledButton = Stories.DisabledButton;
export const IconVoorHetLabel = Stories.IconVoorHetLabel;
export const IconAchterHetLabel = Stories.IconAchterHetLabel;
export const GeformatteerdLabel = Stories.GeformatteerdLabel;
export const GeformatteerdLabelEnEenIcon = Stories.GeformatteerdLabel;
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
