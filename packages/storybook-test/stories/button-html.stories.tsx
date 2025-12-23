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
import {
  WCAG22_111_NON_TEXT_CONTENT,
  WCAG22_121_AUDIO_ONLY_AND_VIDEO_ONLY_PRERECORDED,
  WCAG22_122_CAPTIONS_PRERECORDED,
  WCAG22_123_AUDIO_DESCRIPTION_OR_MEDIA_ALTERNATIVE_PRERECORDED,
  WCAG22_124_CAPTIONS_LIVE,
  WCAG22_125_AUDIO_DESCRIPTION_PRERECORDED,
  WCAG22_131_INFO_AND_RELATIONSHIPS,
  WCAG22_132_MEANINGFUL_SEQUENCE,
  WCAG22_133_SENSORY_CHARACTERISTICS,
  WCAG22_134_ORIENTATION,
  WCAG22_135_IDENTIFY_INPUT_PURPOSE,
  WCAG22_1410_REFLOW,
  WCAG22_1411_NON_TEXT_CONTRAST,
  WCAG22_1412_TEXT_SPACING,
  WCAG22_1413_CONTENT_ON_HOVER_OR_FOCUS,
  WCAG22_141_USE_OF_COLOR,
  WCAG22_142_AUDIO_CONTROL,
  WCAG22_143_CONTRAST_MINIMUM,
  WCAG22_144_RESIZE_TEXT,
  WCAG22_145_IMAGES_OF_TEXT,
  WCAG22_211_KEYBOARD,
  WCAG22_212_NO_KEYBOARD_TRAP,
  WCAG22_214_CHARACTER_KEY_SHORTCUTS,
  WCAG22_221_TIMING_ADJUSTABLE,
  WCAG22_222_PAUSE_STOP_HIDE,
  WCAG22_231_THREE_FLASHES_OR_BELOW_THRESHOLD,
  WCAG22_2411_FOCUS_NOT_OBSCURED_MINIMUM,
  WCAG22_241_BYPASS_BLOCKS,
  WCAG22_242_PAGE_TITLED,
  WCAG22_243_FOCUS_ORDER,
  WCAG22_244_LINK_PURPOSE_IN_CONTEXT,
  WCAG22_245_MULTIPLE_WAYS,
  WCAG22_246_HEADINGS_AND_LABELS,
  WCAG22_247_FOCUS_VISIBLE,
  WCAG22_251_POINTER_GESTURES,
  WCAG22_252_POINTER_CANCELLATION,
  WCAG22_253_LABEL_IN_NAME,
  WCAG22_254_MOTION_ACTUATION,
  WCAG22_257_DRAGGING_MOVEMENTS,
  WCAG22_258_TARGET_SIZE_MINIMUM,
  WCAG22_311_LANGUAGE_OF_PAGE,
  WCAG22_312_LANGUAGE_OF_PARTS,
  WCAG22_321_ON_FOCUS,
  WCAG22_322_ON_INPUT,
  WCAG22_323_CONSISTENT_NAVIGATION,
  WCAG22_324_CONSISTENT_IDENTIFICATION,
  WCAG22_326_CONSISTENT_HELP,
  WCAG22_331_ERROR_IDENTIFICATION,
  WCAG22_332_LABELS_OR_INSTRUCTIONS,
  WCAG22_333_ERROR_SUGGESTION,
  WCAG22_334_ERROR_PREVENTION_LEGAL_FINANCIAL_DATA,
  WCAG22_337_REDUNDANT_ENTRY,
  WCAG22_338_ACCESSIBLE_AUTHENTICATION_MINIMUM,
  WCAG22_412_NAME_ROLE_VALUE,
  WCAG22_413_STATUS_MESSAGES,
} from '../src/WcagTests';

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
        testResult: {
          notApplicable: [
            WCAG22_121_AUDIO_ONLY_AND_VIDEO_ONLY_PRERECORDED,
            WCAG22_122_CAPTIONS_PRERECORDED,
            WCAG22_123_AUDIO_DESCRIPTION_OR_MEDIA_ALTERNATIVE_PRERECORDED,
            WCAG22_124_CAPTIONS_LIVE,
            WCAG22_125_AUDIO_DESCRIPTION_PRERECORDED,
            WCAG22_132_MEANINGFUL_SEQUENCE,
            WCAG22_133_SENSORY_CHARACTERISTICS,
            WCAG22_134_ORIENTATION,
            WCAG22_135_IDENTIFY_INPUT_PURPOSE,
            WCAG22_1410_REFLOW,
            WCAG22_1413_CONTENT_ON_HOVER_OR_FOCUS,
            WCAG22_141_USE_OF_COLOR,
            WCAG22_142_AUDIO_CONTROL,
            WCAG22_214_CHARACTER_KEY_SHORTCUTS,
            WCAG22_221_TIMING_ADJUSTABLE,
            WCAG22_222_PAUSE_STOP_HIDE,
            WCAG22_231_THREE_FLASHES_OR_BELOW_THRESHOLD,
            WCAG22_241_BYPASS_BLOCKS,
            WCAG22_242_PAGE_TITLED,
            WCAG22_243_FOCUS_ORDER,
            WCAG22_244_LINK_PURPOSE_IN_CONTEXT,
            WCAG22_245_MULTIPLE_WAYS,
            WCAG22_251_POINTER_GESTURES,
            WCAG22_254_MOTION_ACTUATION,
            WCAG22_257_DRAGGING_MOVEMENTS,
            WCAG22_311_LANGUAGE_OF_PAGE,
            WCAG22_322_ON_INPUT,
            WCAG22_323_CONSISTENT_NAVIGATION,
            WCAG22_326_CONSISTENT_HELP,
            WCAG22_331_ERROR_IDENTIFICATION,
            WCAG22_332_LABELS_OR_INSTRUCTIONS,
            WCAG22_333_ERROR_SUGGESTION,
            WCAG22_334_ERROR_PREVENTION_LEGAL_FINANCIAL_DATA,
            WCAG22_337_REDUNDANT_ENTRY,
            WCAG22_338_ACCESSIBLE_AUTHENTICATION_MINIMUM,
            WCAG22_413_STATUS_MESSAGES,
          ],
          notTested: [
            WCAG22_111_NON_TEXT_CONTENT,
            WCAG22_1411_NON_TEXT_CONTRAST,
            WCAG22_143_CONTRAST_MINIMUM,
            WCAG22_145_IMAGES_OF_TEXT,
            WCAG22_212_NO_KEYBOARD_TRAP,
            WCAG22_2411_FOCUS_NOT_OBSCURED_MINIMUM,
            WCAG22_246_HEADINGS_AND_LABELS,
            WCAG22_253_LABEL_IN_NAME,
            WCAG22_258_TARGET_SIZE_MINIMUM,
            WCAG22_312_LANGUAGE_OF_PARTS,
            WCAG22_321_ON_FOCUS,
            WCAG22_324_CONSISTENT_IDENTIFICATION,
          ],
        },
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
    testResult: {
      date: '2025-12-23',
      notTested: [
        WCAG22_111_NON_TEXT_CONTENT,
        WCAG22_1411_NON_TEXT_CONTRAST,
        WCAG22_1412_TEXT_SPACING,
        WCAG22_143_CONTRAST_MINIMUM,
        WCAG22_144_RESIZE_TEXT,
        WCAG22_145_IMAGES_OF_TEXT,
        WCAG22_212_NO_KEYBOARD_TRAP,
        WCAG22_2411_FOCUS_NOT_OBSCURED_MINIMUM,
        WCAG22_246_HEADINGS_AND_LABELS,
        WCAG22_247_FOCUS_VISIBLE,
        WCAG22_252_POINTER_CANCELLATION,
        WCAG22_253_LABEL_IN_NAME,
        WCAG22_258_TARGET_SIZE_MINIMUM,
        WCAG22_312_LANGUAGE_OF_PARTS,
        WCAG22_321_ON_FOCUS,
        WCAG22_324_CONSISTENT_IDENTIFICATION,
      ],
      pass: [WCAG22_131_INFO_AND_RELATIONSHIPS, WCAG22_211_KEYBOARD, WCAG22_412_NAME_ROLE_VALUE],
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
    testResult: {
      date: '2025-12-23',
      notTested: [
        WCAG22_111_NON_TEXT_CONTENT,
        WCAG22_1411_NON_TEXT_CONTRAST,
        WCAG22_143_CONTRAST_MINIMUM,
        WCAG22_145_IMAGES_OF_TEXT,
        WCAG22_212_NO_KEYBOARD_TRAP,
        WCAG22_2411_FOCUS_NOT_OBSCURED_MINIMUM,
        WCAG22_246_HEADINGS_AND_LABELS,
        WCAG22_252_POINTER_CANCELLATION,
        WCAG22_253_LABEL_IN_NAME,
        WCAG22_258_TARGET_SIZE_MINIMUM,
        WCAG22_312_LANGUAGE_OF_PARTS,
        WCAG22_321_ON_FOCUS,
        WCAG22_324_CONSISTENT_IDENTIFICATION,
      ],
      pass: [
        WCAG22_131_INFO_AND_RELATIONSHIPS,
        WCAG22_1412_TEXT_SPACING,
        WCAG22_144_RESIZE_TEXT,
        WCAG22_211_KEYBOARD,
        WCAG22_247_FOCUS_VISIBLE,
        WCAG22_412_NAME_ROLE_VALUE,
      ],
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
    testResult: {
      date: '2025-12-23',
      notTested: [
        WCAG22_111_NON_TEXT_CONTENT,
        WCAG22_1411_NON_TEXT_CONTRAST,
        WCAG22_143_CONTRAST_MINIMUM,
        WCAG22_145_IMAGES_OF_TEXT,
        WCAG22_212_NO_KEYBOARD_TRAP,
        WCAG22_2411_FOCUS_NOT_OBSCURED_MINIMUM,
        WCAG22_246_HEADINGS_AND_LABELS,
        WCAG22_252_POINTER_CANCELLATION,
        WCAG22_253_LABEL_IN_NAME,
        WCAG22_258_TARGET_SIZE_MINIMUM,
        WCAG22_312_LANGUAGE_OF_PARTS,
        WCAG22_321_ON_FOCUS,
        WCAG22_324_CONSISTENT_IDENTIFICATION,
      ],
      pass: [
        WCAG22_131_INFO_AND_RELATIONSHIPS,
        WCAG22_1412_TEXT_SPACING,
        WCAG22_144_RESIZE_TEXT,
        WCAG22_211_KEYBOARD,
        WCAG22_247_FOCUS_VISIBLE,
        WCAG22_412_NAME_ROLE_VALUE,
      ],
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
    testResult: {
      date: '2025-12-23',
      notTested: [
        WCAG22_111_NON_TEXT_CONTENT,
        WCAG22_1411_NON_TEXT_CONTRAST,
        WCAG22_143_CONTRAST_MINIMUM,
        WCAG22_145_IMAGES_OF_TEXT,
        WCAG22_212_NO_KEYBOARD_TRAP,
        WCAG22_2411_FOCUS_NOT_OBSCURED_MINIMUM,
        WCAG22_246_HEADINGS_AND_LABELS,
        WCAG22_252_POINTER_CANCELLATION,
        WCAG22_253_LABEL_IN_NAME,
        WCAG22_258_TARGET_SIZE_MINIMUM,
        WCAG22_312_LANGUAGE_OF_PARTS,
        WCAG22_321_ON_FOCUS,
        WCAG22_324_CONSISTENT_IDENTIFICATION,
      ],
      pass: [
        WCAG22_131_INFO_AND_RELATIONSHIPS,
        WCAG22_1412_TEXT_SPACING,
        WCAG22_144_RESIZE_TEXT,
        WCAG22_211_KEYBOARD,
        WCAG22_247_FOCUS_VISIBLE,
        WCAG22_412_NAME_ROLE_VALUE,
      ],
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
        story: `Een \`<input type="submit">\` element, die er uit ziet als Disabled Button door het \`disabled"\` attribute.`,
      },
    },
    testResult: {
      date: '2025-12-23',
      notTested: [
        WCAG22_111_NON_TEXT_CONTENT,
        WCAG22_1411_NON_TEXT_CONTRAST,
        WCAG22_143_CONTRAST_MINIMUM,
        WCAG22_145_IMAGES_OF_TEXT,
        WCAG22_212_NO_KEYBOARD_TRAP,
        WCAG22_2411_FOCUS_NOT_OBSCURED_MINIMUM,
        WCAG22_246_HEADINGS_AND_LABELS,
        WCAG22_252_POINTER_CANCELLATION,
        WCAG22_253_LABEL_IN_NAME,
        WCAG22_258_TARGET_SIZE_MINIMUM,
        WCAG22_312_LANGUAGE_OF_PARTS,
        WCAG22_321_ON_FOCUS,
        WCAG22_324_CONSISTENT_IDENTIFICATION,
      ],
      pass: [
        WCAG22_131_INFO_AND_RELATIONSHIPS,
        WCAG22_1412_TEXT_SPACING,
        WCAG22_144_RESIZE_TEXT,
        WCAG22_211_KEYBOARD,
        WCAG22_247_FOCUS_VISIBLE,
        WCAG22_412_NAME_ROLE_VALUE,
      ],
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
    testResult: {
      date: '2025-12-23',
      notTested: [
        WCAG22_111_NON_TEXT_CONTENT,
        WCAG22_1411_NON_TEXT_CONTRAST,
        WCAG22_143_CONTRAST_MINIMUM,
        WCAG22_145_IMAGES_OF_TEXT,
        WCAG22_212_NO_KEYBOARD_TRAP,
        WCAG22_2411_FOCUS_NOT_OBSCURED_MINIMUM,
        WCAG22_246_HEADINGS_AND_LABELS,
        WCAG22_252_POINTER_CANCELLATION,
        WCAG22_253_LABEL_IN_NAME,
        WCAG22_258_TARGET_SIZE_MINIMUM,
        WCAG22_312_LANGUAGE_OF_PARTS,
        WCAG22_321_ON_FOCUS,
        WCAG22_324_CONSISTENT_IDENTIFICATION,
      ],
      pass: [
        WCAG22_131_INFO_AND_RELATIONSHIPS,
        WCAG22_1412_TEXT_SPACING,
        WCAG22_144_RESIZE_TEXT,
        WCAG22_211_KEYBOARD,
        WCAG22_247_FOCUS_VISIBLE,
        WCAG22_412_NAME_ROLE_VALUE,
      ],
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
    testResult: {
      date: '2025-12-23',
      notTested: [
        WCAG22_111_NON_TEXT_CONTENT,
        WCAG22_1411_NON_TEXT_CONTRAST,
        WCAG22_143_CONTRAST_MINIMUM,
        WCAG22_145_IMAGES_OF_TEXT,
        WCAG22_212_NO_KEYBOARD_TRAP,
        WCAG22_2411_FOCUS_NOT_OBSCURED_MINIMUM,
        WCAG22_246_HEADINGS_AND_LABELS,
        WCAG22_252_POINTER_CANCELLATION,
        WCAG22_253_LABEL_IN_NAME,
        WCAG22_258_TARGET_SIZE_MINIMUM,
        WCAG22_312_LANGUAGE_OF_PARTS,
        WCAG22_321_ON_FOCUS,
        WCAG22_324_CONSISTENT_IDENTIFICATION,
      ],
      pass: [
        WCAG22_131_INFO_AND_RELATIONSHIPS,
        WCAG22_1412_TEXT_SPACING,
        WCAG22_144_RESIZE_TEXT,
        WCAG22_211_KEYBOARD,
        WCAG22_247_FOCUS_VISIBLE,
        WCAG22_412_NAME_ROLE_VALUE,
      ],
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
    testResult: {
      date: '2025-12-23',
      notTested: [
        WCAG22_111_NON_TEXT_CONTENT,
        WCAG22_1411_NON_TEXT_CONTRAST,
        WCAG22_143_CONTRAST_MINIMUM,
        WCAG22_145_IMAGES_OF_TEXT,
        WCAG22_212_NO_KEYBOARD_TRAP,
        WCAG22_2411_FOCUS_NOT_OBSCURED_MINIMUM,
        WCAG22_246_HEADINGS_AND_LABELS,
        WCAG22_252_POINTER_CANCELLATION,
        WCAG22_253_LABEL_IN_NAME,
        WCAG22_258_TARGET_SIZE_MINIMUM,
        WCAG22_312_LANGUAGE_OF_PARTS,
        WCAG22_321_ON_FOCUS,
        WCAG22_324_CONSISTENT_IDENTIFICATION,
      ],
      pass: [
        WCAG22_131_INFO_AND_RELATIONSHIPS,
        WCAG22_1412_TEXT_SPACING,
        WCAG22_144_RESIZE_TEXT,
        WCAG22_211_KEYBOARD,
        WCAG22_247_FOCUS_VISIBLE,
        WCAG22_412_NAME_ROLE_VALUE,
      ],
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
    testResult: {
      date: '2025-12-23',
      notTested: [
        WCAG22_111_NON_TEXT_CONTENT,
        WCAG22_1411_NON_TEXT_CONTRAST,
        WCAG22_143_CONTRAST_MINIMUM,
        WCAG22_145_IMAGES_OF_TEXT,
        WCAG22_212_NO_KEYBOARD_TRAP,
        WCAG22_2411_FOCUS_NOT_OBSCURED_MINIMUM,
        WCAG22_246_HEADINGS_AND_LABELS,
        WCAG22_252_POINTER_CANCELLATION,
        WCAG22_253_LABEL_IN_NAME,
        WCAG22_258_TARGET_SIZE_MINIMUM,
        WCAG22_312_LANGUAGE_OF_PARTS,
        WCAG22_321_ON_FOCUS,
        WCAG22_324_CONSISTENT_IDENTIFICATION,
      ],
      pass: [
        WCAG22_131_INFO_AND_RELATIONSHIPS,
        WCAG22_1412_TEXT_SPACING,
        WCAG22_144_RESIZE_TEXT,
        WCAG22_211_KEYBOARD,
        WCAG22_247_FOCUS_VISIBLE,
        WCAG22_412_NAME_ROLE_VALUE,
      ],
    },
  },
  render: () => <input type="file" aria-disabled="true" />,
};
