import { merge } from 'lodash-es';
import type { Meta, StoryObj } from '@storybook/react-vite';
import '../../components-css/icon-css/src/icon.scss';
import '../../components-css/button-css/src/button.scss';
import '../../components-css/button-css/src/test.scss';
import packageJSON from '../../components-react/button-react/package.json';
import { Button as ButtonComponent } from './button-html';
import reactMeta from '../../docs/button-docs/stories/button.react.meta';
import componentMarkdown from '../../docs/button-docs/docs/component.md?raw';
import allTokens from '../../tokens/button-tokens/tokens.json';
import * as buttonStories from './button.stories';
import * as defaultButtonStories from './button-default.stories';

const { primary, secondary, subtle, default: defaultTokens, ...tokens } = allTokens.nl.button;

const meta = {
  ...merge({
    ...reactMeta,
    ...{
      args: {
        label: 'Klik mij nu!',
      },
      globals: {
        dir: 'ltr',
        lang: 'nl',
        title: 'Button van de dag',
      },
      component: ButtonComponent,
      decorators: [
        (Story) => (
          <div className="nl-html--button">
            <Story />
          </div>
        ),
      ],
      parameters: {
        docs: {
          description: {
            component: componentMarkdown,
          },
        },
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
        tokens: { nl: { button: { ...tokens } } },
      },
    },
  }),
  title: 'Componenten/Button/HTML',
} satisfies Meta<typeof ButtonComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = defaultButtonStories.Default;
export const Disabled = defaultButtonStories.Disabled;
export const Pressed = defaultButtonStories.Pressed;
export const ButtonIconStart = buttonStories.ButtonIconStart;
export const ButtonIconEnd = buttonStories.ButtonIconEnd;
export const ButtonDifferentLanguage = buttonStories.ButtonDifferentLanguage;
export const ButtonVeryLongName = buttonStories.ButtonVeryLongName;
export const ButtonRTL = buttonStories.ButtonRTL;
export const ButtonVerticalRL = buttonStories.ButtonVerticalRL;
export const ButtonReset = buttonStories.ButtonReset;
export const ButtonSubmit = buttonStories.ButtonSubmit;
export const ButtonSubmitDisabled = buttonStories.ButtonSubmitDisabled;
export const NoLabel = buttonStories.NoLabel;
export const ButtonMenuClosed = buttonStories.ButtonMenuClosed;
export const ButtonMenuExpanded = buttonStories.ButtonMenuExpanded;
export const ButtonDialogClosed = buttonStories.ButtonDialogClosed;
export const ButtonDialogExpanded = buttonStories.ButtonDialogExpanded;
export const FullWidth = buttonStories.FullWidth;
export const FullWidthWithIcon = buttonStories.FullWidthWithIcon;
export const NotEnoughSpace = buttonStories.NotEnoughSpace;

export const ButtonHidden: Story = {
  name: 'Hidden Button',
  args: {
    hidden: true,
  },
  parameters: {
    docs: {
      description: {
        story: `Een \`<button>\` element, die niet zichtbaar is door het \`hidden\` attribuut.`,
      },
    },
  },
};

export const InputButton: Story = {
  name: 'Input Button',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Een \`<input type="button">\` element, die er uit ziet als Default Button`,
      },
    },
  },
  render: () => <input type="button" value="Klik mij" />,
};

export const InputReset: Story = {
  name: 'Reset Button',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Een \`<input type="reset">\` element, die er uit ziet als Default Button`,
      },
    },
  },
  render: () => <input type="reset" value="Reset mij" />,
};

export const InputSubmit: Story = {
  name: 'Verzend Button',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Een \`<input type="submit">\` element, die er uit ziet als Default Button`,
      },
    },
  },
  render: () => <input type="submit" value="Verzend mij" />,
};

export const InputSubmitDisabled: Story = {
  name: 'Verzend Button Disabled',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Een \`<input type="submit">\` element, die er uit ziet als Disabled Button door het \`disabled"\` attribuute.`,
      },
    },
  },
  render: () => <input type="submit" value="Verzend mij" disabled />,
};

export const InputSubmitAriaDisabled: Story = {
  name: 'Verzend Button Disabled',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Een \`<input type="submit">\` element, die er uit ziet als Disabled Button door het \`aria-disabled"true"\` attribuut.`,
      },
    },
  },
  render: () => <input type="submit" value="Verzend mij" aria-disabled="true" />,
};

export const InputFile: Story = {
  name: 'File Upload Button',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Een File Input gemaakt met \`<input type="file">\` waarvan de "Browse" button is gestyled als een Button.

Bij interactie is er een aangepast visueel ontwerp bij hover, active en focus.`,
      },
    },
  },
  render: () => <input type="file" />,
};

export const InputFileDisabled: Story = {
  name: 'File Upload Button Disabled',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Een File Input waarvan de "Browse" button is gestyled als een Button, waarvan het visueel ontwerp "disabled" uitstraalt vanwege het \`disabled\` attribuut.

Bij interactie is er geen zichtbaar effect bij hover, active en focus.`,
      },
    },
  },
  render: () => <input type="file" disabled />,
};

export const InputFileAriaDisabled: Story = {
  name: 'File Upload Button Disabled',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Een File Input waarvan de "Browse" button is gestyled als een Button, waarvan het visueel ontwerp "disabled" uitstraalt vanwege \`aria-disabled="true"\`.`,
      },
    },
  },
  render: () => <input type="file" aria-disabled="true" />,
};
