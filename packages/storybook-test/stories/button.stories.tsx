import type { ComponentType } from 'react';
import '../../components-css/button-css/src/button.scss';
import '../../components-css/icon-css/src/icon.scss';
import '../../components-css/button-css/src/test.scss';
import '@utrecht/icon-css/dist/index.css';
import type { Decorator, Meta, StoryObj } from '@storybook/react-vite';
import { IconAccessible } from '@tabler/icons-react';
import { merge } from 'lodash-es';
import packageJSON from '../../components-react/button-react/package.json';
import { Button as ButtonComponent, type ButtonProps } from '../../components-react/button-react/src/button';
import { Icon } from '../../components-react/icon-react/src/icon';
import componentMarkdown from '../../docs/button-docs/docs/component.md?raw';
import reactMeta from '../../docs/button-docs/stories/button.react.meta';
import tokens from '../../tokens/button-tokens/tokens.json';
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

const ButtonDecorator: Decorator = (Story) => (
  <div className="test">
    <Story />
  </div>
);

const meta = {
  ...merge({
    ...reactMeta,
    ...{
      args: {
        label: 'Klik mij nu!',
      },
      component: ButtonComponent,
      decorators: [ButtonDecorator],
      globals: {
        dir: 'ltr',
        lang: 'nl',
        title: 'Button van de dag',
      },
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
        tokens,
      },
    },
  }),
  title: 'Componenten/Button',
} satisfies Meta<typeof ButtonComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ButtonIconStart: Story = {
  name: 'Button met iconStart',
  args: {
    iconStart: (
      <Icon>
        <IconAccessible />
      </Icon>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: `Een button met een icon aan de linkerkant van de content`,
      },
    },
    testResult: {
      date: '2025-12-12',
      notTested: [
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
        WCAG22_111_NON_TEXT_CONTENT,
        WCAG22_131_INFO_AND_RELATIONSHIPS,
        WCAG22_1412_TEXT_SPACING,
        WCAG22_144_RESIZE_TEXT,
        WCAG22_211_KEYBOARD,
        WCAG22_247_FOCUS_VISIBLE,
        WCAG22_412_NAME_ROLE_VALUE,
      ],
    },
  },
};

export const ButtonIconEnd: Story = {
  name: 'Button met iconEnd',
  args: {
    iconEnd: (
      <Icon>
        <IconAccessible />
      </Icon>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: `Een button met een icon aan de rechterkant van de content`,
      },
    },
    testResult: {
      date: '2025-12-12',
      notTested: [
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
        WCAG22_111_NON_TEXT_CONTENT,
        WCAG22_131_INFO_AND_RELATIONSHIPS,
        WCAG22_1412_TEXT_SPACING,
        WCAG22_144_RESIZE_TEXT,
        WCAG22_211_KEYBOARD,
        WCAG22_247_FOCUS_VISIBLE,
        WCAG22_412_NAME_ROLE_VALUE,
      ],
    },
  },
};

export const ButtonUtrechtIconStart: Story = {
  name: 'Button met Utrecht iconStart',
  args: {
    iconStart: (
      <span className="utrecht-icon" aria-hidden="true">
        <IconAccessible />
      </span>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: `Een button met een utrecht-icon aan de linkerkant van de content`,
      },
    },
    testResult: {
      date: '2025-12-12',
      notTested: [
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
        WCAG22_111_NON_TEXT_CONTENT,
        WCAG22_131_INFO_AND_RELATIONSHIPS,
        WCAG22_1412_TEXT_SPACING,
        WCAG22_144_RESIZE_TEXT,
        WCAG22_211_KEYBOARD,
        WCAG22_247_FOCUS_VISIBLE,
        WCAG22_412_NAME_ROLE_VALUE,
      ],
    },
  },
};

export const ButtonUtrechtIconEnd: Story = {
  name: 'Button met Utrecht iconEnd',
  args: {
    iconEnd: (
      <span className="utrecht-icon" aria-hidden="true">
        <IconAccessible />
      </span>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: `Een button met een utrecht-icon aan de rechterkant van de content`,
      },
    },
    testResult: {
      date: '2025-12-12',
      notTested: [
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
        WCAG22_111_NON_TEXT_CONTENT,
        WCAG22_131_INFO_AND_RELATIONSHIPS,
        WCAG22_1412_TEXT_SPACING,
        WCAG22_144_RESIZE_TEXT,
        WCAG22_211_KEYBOARD,
        WCAG22_247_FOCUS_VISIBLE,
        WCAG22_412_NAME_ROLE_VALUE,
      ],
    },
  },
};

export const ButtonLargeText: Story = {
  name: 'Button 200% zoom',
  args: {
    className: 'nl-button--zoom-200',
  },
  parameters: {
    docs: {
      description: {
        story: `Een Button waarvan de content 200% vergroot is. De content loopt niet uit de button`,
      },
    },
    testResult: {
      date: '2025-12-12',
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
};

export const ButtonDifferentLanguage: Story = {
  name: 'Button in een andere taal',
  args: {
    label: 'Confirm',
    lang: 'en',
  },
  parameters: {
    docs: {
      description: {
        story: 'Een knop in een andere taal',
      },
    },
    status: { type: [] },
    testResult: {
      date: '2025-12-12',
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
        WCAG22_321_ON_FOCUS,
        WCAG22_324_CONSISTENT_IDENTIFICATION,
      ],
      pass: [
        WCAG22_131_INFO_AND_RELATIONSHIPS,
        WCAG22_1412_TEXT_SPACING,
        WCAG22_144_RESIZE_TEXT,
        WCAG22_211_KEYBOARD,
        WCAG22_247_FOCUS_VISIBLE,
        WCAG22_312_LANGUAGE_OF_PARTS,
        WCAG22_412_NAME_ROLE_VALUE,
      ],
    },
  },
};

export const ButtonVeryLongName = {
  name: 'Button met een erg lange titel',
  args: {
    label: 'Klik nu hier en win de prijs die je anders nooit zou winnen',
  },
  parameters: {
    docs: {
      description: {
        story: 'Een knop met erg lange content, de button groeit mee met de content',
      },
    },
    status: { type: [] },
    testResult: {
      date: '2025-12-12',
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
};

export const ButtonRTL = {
  name: 'Button in Arabisch',
  args: {
    dir: 'rtl',
    label: 'مثال على المجال',
    lang: 'ar',
  },
  parameters: {
    docs: {
      description: {
        story: `Een button in het Arabisch.

Het moet mogelijk zijn de \`lang\` en \`dir\` attribuut in te stellen.`,
      },
    },
    testResult: {
      date: '2025-12-12',
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
        WCAG22_321_ON_FOCUS,
        WCAG22_324_CONSISTENT_IDENTIFICATION,
      ],
      pass: [
        WCAG22_131_INFO_AND_RELATIONSHIPS,
        WCAG22_1412_TEXT_SPACING,
        WCAG22_144_RESIZE_TEXT,
        WCAG22_211_KEYBOARD,
        WCAG22_247_FOCUS_VISIBLE,
        WCAG22_312_LANGUAGE_OF_PARTS,
        WCAG22_412_NAME_ROLE_VALUE,
      ],
    },
  },
  status: { type: [] },
};

export const ButtonVerticalRL = {
  name: 'Button in Japans',
  args: {
    label: 'これはテストテキスト。日本語は楽しいです。',
    lang: 'ja',
    style: { writingMode: 'vertical-rl' },
  },
  parameters: {
    docs: {
      description: {
        story: `Een button in het Japans.

Het moet mogelijk zijn het \`lang\` attribute en de \`writing-mode: 'vertical-rl';\` css rule in te stellen.`,
      },
    },
  },
  status: { type: [] },
  testResult: {
    date: '2025-12-12',
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
      WCAG22_321_ON_FOCUS,
      WCAG22_324_CONSISTENT_IDENTIFICATION,
    ],
    pass: [
      WCAG22_131_INFO_AND_RELATIONSHIPS,
      WCAG22_1412_TEXT_SPACING,
      WCAG22_144_RESIZE_TEXT,
      WCAG22_211_KEYBOARD,
      WCAG22_247_FOCUS_VISIBLE,
      WCAG22_312_LANGUAGE_OF_PARTS,
      WCAG22_412_NAME_ROLE_VALUE,
    ],
  },
};

export const ButtonReset: Story = {
  name: 'Reset Button',
  parameters: {
    docs: {
      description: {
        story: `Een Button die formuliervelden leegt. Vul iets in het tekst veld. Na een klik op de button is het veld weer leeg`,
      },
    },
    testResult: {
      date: '2025-12-12',
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
  render: (_props, { component }) => {
    const Button = component as ComponentType<ButtonProps>;
    return (
      <form>
        <input type="text" />
        <br />
        <Button type="reset">Reset</Button>
      </form>
    );
  },
};

export const ButtonSubmit: Story = {
  name: 'Verzend Button',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Een Button die een formulier verstuurt. Vul iets in en klik op de button. Er verschijnt een melding`,
      },
    },
    testResult: {
      date: '2025-12-12',
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
  render: (_props, { component }) => {
    const Button = component as ComponentType<ButtonProps>;
    return (
      <form
        action="/"
        onSubmit={(event) => {
          event.preventDefault();
          // @ts-expect-error: Use alert to give user feedback
          alert('Verzonden'); // eslint-disable-line
        }}
      >
        <input type="text" placeholder="Vul iets in en druk dan op de verzend knop" />
        <br />
        <Button type="submit">Verzenden</Button>
      </form>
    );
  },
};

export const ButtonSubmitDisabled: Story = {
  name: 'Verzend Button Disabled',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Een Button die een formulier niet verstuurt omdat deze disabled is. Vul iets in en klik op de button. Er verschijnt geen melding`,
      },
    },
  },
  render: (_props, { component }) => {
    const Button = component as ComponentType<ButtonProps>;
    return (
      <form
        action="/"
        onSubmit={(event) => {
          event.preventDefault();
          // @ts-expect-error: Use alert to give user feedback
          alert('Verzonden'); // eslint-disable-line
        }}
      >
        <input type="text" placeholder="Vul iets in en druk dan op de verzend knop" />
        <br />
        <Button type="submit" disabled>
          Verzenden
        </Button>
      </form>
    );
  },
};

export const NoLabel: Story = {
  name: 'Button zonder label',
  args: {
    'aria-label': 'Button zonder content',
    label: undefined,
  },
  parameters: {
    docs: {
      description: {
        story: 'Door het "aria-label" attribute blijft de button voor hulptechnologie te beschrijven',
      },
    },
    status: { type: [] },
    testResult: {
      date: '2025-12-12',
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
};

export const SmallLabel: Story = {
  name: 'Button met weinig content',
  args: {
    label: 'a',
  },
  parameters: {
    docs: {
      description: {
        story: 'De styling van de button blijft bij weinig content netjes',
      },
    },
    status: { type: [] },
    testResult: {
      date: '2025-12-12',
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
};

export const ButtonMenuClosed: Story = {
  name: 'Button Menu Closed',
  args: {
    'aria-expanded': 'false',
    'aria-haspopup': 'menu',
    label: 'Menu',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Het attribute `aria-expanded="false"` geeft aan dat het menu gesloten is. Het attribute `aria-haspopup="menu"` geeft aan dat er een menu geopend of gesloten kan worden',
      },
    },
    status: { type: [] },
    testResult: {
      date: '2025-12-12',
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
};

export const ButtonMenuExpanded: Story = {
  name: 'Button Menu Expanded',
  args: {
    'aria-expanded': 'true',
    'aria-haspopup': 'menu',
    label: 'Menu',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Het attribute `aria-expanded="true"` geeft aan dat het menu geopend is. Het attribute `aria-haspopup="menu"` geeft aan dat er een menu geopend of gesloten kan worden',
      },
    },
    status: { type: [] },
    testResult: {
      date: '2025-12-12',
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
};

export const ButtonDialogClosed: Story = {
  name: 'Button Dialog Closed',
  args: {
    'aria-expanded': 'false',
    'aria-haspopup': 'dialog',
    label: 'Afsluiten',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Het attribute `aria-expanded="true"` geeft aan dat de dialog gesloten is. Het attribute `aria-haspopup="dialog"` geeft aan dat er een dialog geopend of gesloten kan worden',
      },
    },
    status: { type: [] },
    testResult: {
      date: '2025-12-12',
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
};

export const ButtonDialogExpanded: Story = {
  name: 'Button Dialog Expanded',
  args: {
    'aria-expanded': 'true',
    'aria-haspopup': 'dialog',
    label: 'Afsluiten',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Het attribute `aria-expanded="true"` geeft aan dat de dialog geopend is. Het attribute `aria-haspopup="dialog"` geeft aan dat er een dialog geopend of gesloten kan worden',
      },
    },
    status: { type: [] },
    testResult: {
      date: '2025-12-12',
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
};

export const WithChildren: Story = {
  name: 'Children in plaats van label',
  args: {
    label: undefined,
    style: { '--nl-button-column-gap': '3em' },
  },
  parameters: {
    docs: {
      description: {
        story: 'Een knop die de content via children plaatst in plaats van de `label` property.',
      },
    },
    status: { type: [] },
    testResult: {
      date: '2025-12-12',
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
  render: (props, { component }) => {
    const Button = component as ComponentType<ButtonProps>;
    return <Button {...props}>Klik mij!</Button>;
  },
};

export const WithChildrenIcon: Story = {
  name: 'Children in plaats van label met een icon',
  args: {
    iconEnd: (
      <Icon>
        <IconAccessible />
      </Icon>
    ),
    label: undefined,
    style: { '--nl-button-column-gap': '3em' },
  },
  parameters: {
    docs: {
      description: {
        story: 'Een knop die children gebruikt ipv de label prop inclusief icon',
      },
    },
    status: { type: [] },
    testResult: {
      date: '2025-12-12',
      notTested: [
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
        WCAG22_111_NON_TEXT_CONTENT,
        WCAG22_131_INFO_AND_RELATIONSHIPS,
        WCAG22_1412_TEXT_SPACING,
        WCAG22_144_RESIZE_TEXT,
        WCAG22_211_KEYBOARD,
        WCAG22_247_FOCUS_VISIBLE,
        WCAG22_412_NAME_ROLE_VALUE,
      ],
    },
  },
  render: (props, { component }) => {
    const Button = component as ComponentType<ButtonProps>;
    return <Button {...props}>Klik mij!</Button>;
  },
};

export const WithFormattedChildren: Story = {
  name: 'Children formatted in plaats van label',
  args: {
    label: undefined,
    style: { '--nl-button-column-gap': '3em' },
  },
  parameters: {
    docs: {
      description: {
        story:
          'De content is via children geplaatst en bevat HTML markup. Merk op dat de ruimte tussen het icon en de content is ingesteld, maar omdat het icon ontbreekt geen invloed heeft op de HTML elementen in de content',
      },
    },
    status: { type: [] },
    testResult: {
      date: '2025-12-12',
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
  render: (props, { component }) => {
    const Button = component as ComponentType<ButtonProps>;
    return (
      <Button {...props}>
        Klik <u>mij</u> nu!
      </Button>
    );
  },
};

export const WithFormattedChildrenAndIcon: Story = {
  name: 'Children formatted in plaats van label met een icon',
  args: {
    iconEnd: (
      <Icon>
        <IconAccessible />
      </Icon>
    ),
    label: undefined,
    style: { '--nl-button-column-gap': '3em' },
  },
  parameters: {
    docs: {
      description: {
        story:
          'Een knop die children gebruikt in plaats van de label prop inclusief icon. De ruimte tussen het icon en de content is instelbaar via een CSS property',
      },
    },
    status: { type: [] },
    testResult: {
      date: '2025-12-12',
      notTested: [
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
        WCAG22_111_NON_TEXT_CONTENT,
        WCAG22_131_INFO_AND_RELATIONSHIPS,
        WCAG22_1412_TEXT_SPACING,
        WCAG22_144_RESIZE_TEXT,
        WCAG22_211_KEYBOARD,
        WCAG22_247_FOCUS_VISIBLE,
        WCAG22_412_NAME_ROLE_VALUE,
      ],
    },
  },
  render: (props, { component }) => {
    const Button = component as ComponentType<ButtonProps>;
    return (
      <Button {...props}>
        Klik <u>mij</u> nu!
      </Button>
    );
  },
};

export const FullWidth: Story = {
  name: 'Volle breedte',
  args: {
    label: 'Ik ben een button met een hele lange tekst',
  },
  parameters: {
    docs: {
      description: {
        story: `De parent van een button kan de breedte van de button bepalen.`,
      },
    },
    testResult: {
      date: '2025-12-12',
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
  render: ({ label, ...props }, { component }) => {
    const Button = component as ComponentType<ButtonProps>;
    return (
      <>
        <div style={{ display: 'flex', overflow: 'auto', resize: 'both' }}>
          <Button style={{ flex: 1 }} {...props} label={label} />
        </div>
        <br />
        <div style={{ display: 'flex', overflow: 'auto', resize: 'both' }}>
          <Button style={{ flex: 1 }} {...props}>
            {label}
          </Button>
        </div>
        <br />
        <div style={{ display: 'flex', overflow: 'auto', resize: 'both', width: '300px' }}>
          <Button style={{ flex: 1 }} {...props} label={label} />
        </div>
        <br />
        <div style={{ display: 'flex', overflow: 'auto', resize: 'both', width: '300px' }}>
          <Button style={{ flex: 1 }} {...props}>
            {label}
          </Button>
        </div>
      </>
    );
  },
};
export const FullWidthWithIcon: Story = {
  name: 'Volle breedte met icon',
  args: {
    iconStart: (
      <Icon>
        <IconAccessible />
      </Icon>
    ),
    label: 'Ik ben een button met een hele lange tekst',
  },
  parameters: {
    docs: {
      description: {
        story: `De parent van een button kan de breedte van de button bepalen. Het icon blijft juist uitgelijnd`,
      },
    },
    testResult: {
      date: '2025-12-12',
      notTested: [
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
        WCAG22_111_NON_TEXT_CONTENT,
        WCAG22_131_INFO_AND_RELATIONSHIPS,
        WCAG22_1412_TEXT_SPACING,
        WCAG22_144_RESIZE_TEXT,
        WCAG22_211_KEYBOARD,
        WCAG22_247_FOCUS_VISIBLE,
        WCAG22_412_NAME_ROLE_VALUE,
      ],
    },
  },
  render: ({ label, ...props }, { component }) => {
    const Button = component as ComponentType<ButtonProps>;
    return (
      <>
        <div style={{ display: 'flex', overflow: 'auto', resize: 'both' }}>
          <Button style={{ flex: 1 }} {...props} label={label} />
        </div>
        <br />
        <div style={{ display: 'flex', overflow: 'auto', resize: 'both' }}>
          <Button style={{ flex: 1 }} {...props}>
            {label}
          </Button>
        </div>
        <br />
        <div style={{ display: 'flex', overflow: 'auto', resize: 'both', width: '300px' }}>
          <Button style={{ flex: 1 }} {...props} label={label} />
        </div>
        <br />
        <div style={{ display: 'flex', overflow: 'auto', resize: 'both', width: '300px' }}>
          <Button style={{ flex: 1 }} {...props}>
            {label}
          </Button>
        </div>
      </>
    );
  },
};

export const NotEnoughSpace: Story = {
  name: 'Content loopt uit tekst',
  args: {
    label: 'Ik ben een button met een heel erg lange tekst en ik pas niet in de ruimte, owja, css is awesome',
  },
  parameters: {
    docs: {
      description: {
        story:
          'De tekst van de button is te lang voor de ruimte die beschikbaar is. Daarom loopt de tekst uit de button. Om toch genoeg contrast te hebben, moet de achtergrond van de button achter de button door blijven lopen',
      },
    },
    testResult: {
      date: '2025-12-12',
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
  render: (props, { component }) => {
    const Button = component as ComponentType<ButtonProps>;
    return (
      <div style={{ alignItems: 'center', display: 'flex', height: '100svh' }}>
        <div>
          <Button {...props} style={{ maxHeight: '100px', maxWidth: '100px' }} />
          <button className="nl-button" style={{ maxHeight: '100px', maxWidth: '100px' }}>
            {props.label}
          </button>
        </div>
        <div style={{ maxHeight: '100px', maxWidth: '100px' }}>
          <Button {...props} />
        </div>
        <div style={{ maxHeight: '100px', maxWidth: '100px' }}>
          <button className="nl-button">{props.label}</button>
        </div>
      </div>
    );
  },
};

export const CancelClick: Story = {
  name: 'Cancel een klik door te slepen',
  parameters: {
    docs: {
      description: {
        story: `Een klik kan gecanceld worden door op de button de klikken, de klik ingedrukt te houden en van de button af te slepen en dan los te laten. `,
      },
    },
  },
  render: (props, { component }) => {
    const Button = component as ComponentType<ButtonProps>;
    // eslint-disable-next-line no-alert
    const onClick = () => alert('geklikt');
    return <Button {...props} onClick={onClick} />;
  },
};
