/* eslint-disable no-alert */
/* eslint-disable react/no-unescaped-entities */
import type { ComponentType, HTMLAttributes } from 'react';
import clsx from 'clsx';
import { merge } from 'lodash-es';
import type { Decorator, Meta, StoryObj } from '@storybook/react-vite';
import packageJSON from '../../components-react/button-react/package.json';
import {
  IconAccessible,
  IconArrowLeft,
  IconArrowRight,
  IconBold,
  IconBrandFacebook,
  IconCheck,
  IconChevronDown,
  IconChevronUp,
  IconLanguage,
  IconLink,
  IconMultiplier2x,
  IconPdf,
  IconPlus,
  IconQuestionMark,
  IconShoppingCart,
  IconTrash,
} from '@tabler/icons-react';
import { Button as ButtonComponent, type ButtonProps } from '../../components-react/button-react/src/button';
import { Icon } from '../../components-react/icon-react/src/icon';
import acceptanceCriteria from '../../docs/button-docs/docs/acceptance-criteria.md?raw';
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
import '../../components-css/icon-css/src/icon.scss';
import '../../components-css/button-css/src/button.scss';
import '../../components-css/button-css/src/test.scss';
import '@utrecht/icon-css/dist/index.css';

const ButtonDecorator: Decorator = (Story) => (
  <div className="test">
    <Story />
  </div>
);
import { useArgs } from 'storybook/preview-api';

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
        acceptanceCriteria,
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

export const ButtonChildrenLineBreak: Story = {
  name: 'Button met een line break',
  args: {
    label: undefined,
    children: (
      <>
        {'Vorige pagina:'}
        <br />
        {'Hoofdstuk 2'}
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: `De volgende situatie is een button waarin het label een line break bevat, met het \`<br>\` HTML-element.

In dit voorbeeld de tekst met de line break direct in de \`<button>\` geplaatst.

Als de button niet goed geïmplementeerd is, kunnen er twee dingen mis gaan:

1. De button wordt opgedeeld in twee delen, als \`display: inline\` wordt gebruikt in combinatie met een ander element dan \`<button>\`.
2. De line break wordt niet weergegeven. Op de plek van het \`<br>\` element is een wit ruimte ter grootte van de \`column-gap\`.

Test dat de button als één geheel getoond wordt, waarbij "Vorige pagina:" en "Hoofdstuk 2" op eigen regels staan.`,
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
};

export const ButtonLabelLineBreak: Story = {
  name: 'Button met een line break',
  args: {
    label: (
      <>
        {'Vorige pagina:'}
        <br />
        {'Hoofdstuk 2'}
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: `De volgende situatie is een button waarin het label een line break bevat, met het \`<br>\` HTML-element.

In dit voorbeeld de tekst met de line break in de \`<span class="nl-button__label>\` geplaatst.`,
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
};

export const ButtonIconStart: Story = {
  name: 'Button met decoratief icoon aan het begin',
  args: {
    iconStart: (
      <Icon>
        <IconArrowLeft />
      </Icon>
    ),
    label: 'Vorige',
  },
  parameters: {
    docs: {
      description: {
        story: `Een button met een decoratief icon voor de tekst van het label. In _left-to-right_ teksten zoals dit voorbeeld, staat de icon links van de tekst.`,
      },
    },
    testResult: {
      date: '2025-12-23',
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
  name: 'Button met decoratief icoon aan het eind',
  args: {
    iconEnd: (
      <Icon>
        <IconArrowRight />
      </Icon>
    ),
    label: 'Volgende',
  },
  parameters: {
    docs: {
      description: {
        story: `Een button met een decoratief icon na de tekst van het label. In _left-to-right_ teksten zoals dit voorbeeld, staat de icon rechts van de tekst.`,
      },
    },
    testResult: {
      date: '2025-12-23',
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

export const ButtonInformativeIconStart: Story = {
  name: 'Button met informatief icon aan begin',
  args: {
    iconStart: (
      <Icon role="img" aria-label="Facebook">
        <IconBrandFacebook />
      </Icon>
    ),
    label: 'Volg ons',
  },
  parameters: {
    docs: {
      description: {
        story: `Een button met een informatief icon voor de tekst van het label. Het icoon heeft als label "Facebook", en de toegankelijke naam van de Button is daarom "Facebook Volg ons". De combinatie is voldoende duidelijk. Als "Facebook" niet onderdeel was geweest van de toegankelijke naam, dan was het label van de button onvoldoende duidelijk.`,
      },
    },
    testResult: {
      date: '2025-12-23',
      notTested: [
        WCAG22_1411_NON_TEXT_CONTRAST,
        WCAG22_143_CONTRAST_MINIMUM,
        WCAG22_145_IMAGES_OF_TEXT,
        WCAG22_212_NO_KEYBOARD_TRAP,
        WCAG22_2411_FOCUS_NOT_OBSCURED_MINIMUM,
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
        WCAG22_246_HEADINGS_AND_LABELS,
        WCAG22_247_FOCUS_VISIBLE,
        WCAG22_412_NAME_ROLE_VALUE,
      ],
    },
  },
};

export const ButtonInformativeIconEnd: Story = {
  name: 'Button met informatief icon aan het eind',
  args: {
    iconEnd: (
      <Icon role="img" aria-label="Dubbele snelheid">
        <IconMultiplier2x />
      </Icon>
    ),
    label: 'Afspelen',
  },
  parameters: {
    docs: {
      description: {
        story: `Een button met een informatief icon voor de tekst van het label. Het icoon heeft als label "Dubbele snelheid", en de toegankelijke naam van de Button is daarom "Afspelen Dubbele snelheid". De combinatie is voldoende duidelijk. Als "Dubbele snelheid" niet onderdeel was geweest van de toegankelijke naam, dan was het label van de button onvoldoende duidelijk.`,
      },
    },
    testResult: {
      date: '2025-12-23',
      notTested: [
        WCAG22_1411_NON_TEXT_CONTRAST,
        WCAG22_143_CONTRAST_MINIMUM,
        WCAG22_145_IMAGES_OF_TEXT,
        WCAG22_212_NO_KEYBOARD_TRAP,
        WCAG22_2411_FOCUS_NOT_OBSCURED_MINIMUM,
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
        WCAG22_246_HEADINGS_AND_LABELS,
        WCAG22_247_FOCUS_VISIBLE,
        WCAG22_412_NAME_ROLE_VALUE,
      ],
    },
  },
};

export const ButtonIconStartEmoji: Story = {
  name: 'Button met decoratief emoji aan het begin',
  args: {
    iconStart: <span aria-hidden="true">👍</span>,
    label: 'Like',
  },
  parameters: {
    docs: {
      description: {
        story: `...`,
      },
    },
    testResult: {
      date: '2025-12-23',
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

export const ButtonIconEndEmoji: Story = {
  name: 'Button met decoratief emoji aan het begin',
  args: {
    lang: 'en',
    dir: 'ltr',
    iconEnd: <span aria-hidden="true">🚀</span>,
    label: 'Ship it!',
  },
  parameters: {
    docs: {
      description: {
        story: `...`,
      },
    },
    testResult: {
      date: '2025-12-23',
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

export const ButtonInformativeIconStartAndEnd: Story = {
  name: 'Button met informatief iconen aan begin en eind',
  args: {
    iconStart: (
      <Icon role="img" aria-label="Toevoegen">
        <IconPlus />
      </Icon>
    ),
    iconEnd: (
      <Icon role="img" aria-label="Winkelmandje">
        <IconShoppingCart />
      </Icon>
    ),
    label: undefined,
    'aria-pressed': 'false',
  },
  parameters: {
    docs: {
      description: {
        story: `Button met twee informatieve iconen. Na het activeren van de knop krijgt de knop de state "pressed", en verandert de alternatieve tekst van het linkse icoon van "Toevoegen" naar "Toegevoegd". Het rechtse icoon blijft hetzelfde.`,
      },
    },
    testResult: {
      date: '2025-12-23',
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
  render: function Render(args) {
    const [updatedArgs, updateArgs] = useArgs();

    const pressed = args['aria-pressed'] === 'true';

    const onClick = () => {
      updateArgs({
        iconStart: pressed ? (
          <Icon role="img" aria-label="Toevoegen">
            <IconPlus />
          </Icon>
        ) : (
          <Icon role="img" aria-label="Toegevoegd">
            <IconCheck />
          </Icon>
        ),
        'aria-pressed': pressed ? 'false' : 'true',
      });
    };

    return <ButtonComponent {...args} {...updatedArgs} onClick={onClick} />;
  },
};

export const ButtonMultilineIconStart: Story = {
  name: 'Button met iconStart en meerdere regels tekst',
  args: {
    iconStart: (
      <Icon>
        <IconTrash />
      </Icon>
    ),
    label: (
      <>
        {'Verwijder: '}
        <bdi translate="no">
          Overzicht uitvoerbaarheid – Inzicht in effecten van beleid op de uitvoering en de beleidsruimte voor de
          komende jaren.pdf
        </bdi>
        {' (PDF, 403 KB)'}
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: `...`,
      },
    },
    testResult: {
      date: '2025-12-23',
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

export const ButtonMultilineIconEnd: Story = {
  name: 'Button met iconEnd en meerdere regels tekst',
  args: {
    iconEnd: (
      <Icon>
        <IconPdf />
      </Icon>
    ),
    label:
      'Open: Overzicht uitvoerbaarheid – Inzicht in effecten van beleid op de uitvoering en de beleidsruimte voor de komende jaren (PDF, 403 KB)',
  },
  parameters: {
    docs: {
      description: {
        story: `...`,
      },
    },
    testResult: {
      date: '2025-12-23',
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
    label: 'Toegankelijkheid',
  },
  parameters: {
    docs: {
      description: {
        story: `Een button met een utrecht-icon aan de linkerkant van de content`,
      },
    },
    testResult: {
      date: '2025-12-23',
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
    label: 'Toegankelijkheid',
  },
  parameters: {
    docs: {
      description: {
        story: `Een button met een utrecht-icon aan de rechterkant van de content`,
      },
    },
    testResult: {
      date: '2025-12-23',
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
    className: 'nl-button--zoom-200-test',
    label: 'Verzenden',
  },
  parameters: {
    docs: {
      description: {
        story: `Een Button waarvan de content 200% vergroot is. De content loopt niet uit de button`,
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
};

export const ButtonDifferentLanguage: Story = {
  name: 'Button in een andere taal',
  args: {
    label: 'Switch to English',
    lang: 'en',
  },
  parameters: {
    docs: {
      description: {
        story: 'Een knop in een andere taal. De Engelse tekst vertaalt naar: "Wisselen naar Engels".',
      },
    },
    status: { type: [] },
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
};

export const ButtonRTL = {
  name: 'Button in Arabisch',
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  args: {
    dir: 'rtl',
    label: 'التبديل إلى اللغة العربية',
    lang: 'ar',
  },
  parameters: {
    docs: {
      description: {
        story: `Een button in het Arabisch, als onderdeel van een pagina in het Nederlands. De Arabische tekst vertaalt naar: "Wisselen naar Arabisch".

Het moet mogelijk zijn de \`lang\` en \`dir\` attribuut in te stellen.`,
      },
    },
    testResult: {
      date: '2025-12-23',
      notTested: [
        WCAG22_111_NON_TEXT_CONTENT,
        WCAG22_1411_NON_TEXT_CONTRAST,
        WCAG22_1412_TEXT_SPACING,
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
        WCAG22_144_RESIZE_TEXT,
        WCAG22_211_KEYBOARD,
        WCAG22_247_FOCUS_VISIBLE,
        WCAG22_412_NAME_ROLE_VALUE,
      ],
    },
  },
  status: { type: [] },
};

export const ButtonRTLIconStart = {
  name: 'Button in Arabisch met icon start',
  globals: {
    dir: 'rtl',
    lang: 'ar',
  },
  args: {
    label: 'الصفحة السابقة',
    iconStart: (
      <Icon>
        <IconArrowRight />
      </Icon>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: `Een button in het Arabisch, als onderdeel van een pagina in het Arabisch. De Arabische tekst vertaalt naar: "Vorige pagina".

Het moet mogelijk zijn de \`lang\` en \`dir\` attribuut in te stellen.`,
      },
    },
    testResult: {
      date: '2025-12-23',
      notTested: [
        WCAG22_1411_NON_TEXT_CONTRAST,
        WCAG22_1412_TEXT_SPACING,
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
        WCAG22_144_RESIZE_TEXT,
        WCAG22_211_KEYBOARD,
        WCAG22_247_FOCUS_VISIBLE,
        WCAG22_412_NAME_ROLE_VALUE,
      ],
    },
  },
  status: { type: [] },
};

export const ButtonRTLIconEnd = {
  name: 'Button in Arabisch met icon end',
  globals: {
    dir: 'rtl',
    lang: 'ar',
  },
  args: {
    label: 'الصفحة التالية',
    iconEnd: (
      <Icon>
        <IconArrowLeft />
      </Icon>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: `Een button in het Arabisch, als onderdeel van een pagina in het Arabisch. De Arabische tekst vertaalt naar: "Volgende pagina".

Het moet mogelijk zijn de \`lang\` en \`dir\` attribuut in te stellen.`,
      },
    },
    testResult: {
      date: '2025-12-23',
      notTested: [
        WCAG22_111_NON_TEXT_CONTENT,
        WCAG22_1411_NON_TEXT_CONTRAST,
        WCAG22_1412_TEXT_SPACING,
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
        WCAG22_111_NON_TEXT_CONTENT,
        WCAG22_131_INFO_AND_RELATIONSHIPS,
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
    testResult: {
      date: '2025-12-23',
      notTested: [
        WCAG22_111_NON_TEXT_CONTENT,
        WCAG22_1411_NON_TEXT_CONTRAST,
        WCAG22_1412_TEXT_SPACING,
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

export const ButtonIconVerticalWritingMode = {
  name: 'Button met icon in vertical writing mode',
  args: {
    label: 'これはテストテキスト。日本語は楽しいです。',
    style: { writingMode: 'vertical-rl' },
    lang: 'ja',
    iconStart: (
      <Icon>
        <IconArrowLeft />
      </Icon>
    ),
    iconEnd: (
      <Icon>
        <IconArrowLeft />
      </Icon>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: `Een button met een Japans label, waarvan met CSS is ingesteld dat de schrijfrichting van boven naar beneden gaat. Het is een hoge smalle button, waar de karakters boven elkaar staan. Het icon aan het begin staat boven het Japanse label.

Het moet mogelijk zijn het \`lang\` attribute en de \`writing-mode: 'vertical-rl';\` CSS property in te stellen.`,
      },
    },
    testResult: {
      date: '2025-12-23',
      notTested: [
        WCAG22_1411_NON_TEXT_CONTRAST,
        WCAG22_1412_TEXT_SPACING,
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
        WCAG22_111_NON_TEXT_CONTENT,
        WCAG22_131_INFO_AND_RELATIONSHIPS,
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

export const ButtonReset: Story = {
  name: 'Reset Button',
  parameters: {
    docs: {
      description: {
        story: `Een Button die formuliervelden leegt. Vul iets in het tekst veld. Na een klik op de button is het veld weer leeg`,
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
  render: (_props, { component }) => {
    const Button = component as ComponentType<ButtonProps>;
    return (
      <form>
        <p>
          <label htmlFor="button-reset-input">Invoer</label>
        </p>
        <p id="button-reset-desc">Vul iets in en druk dan op de "Reset" knop.</p>
        <p>
          <input type="text" id="button-reset-input" aria-describedby="button-reset-desc" />
        </p>
        <p>
          <Button type="reset">Reset</Button>
        </p>
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
  render: (_props, { component }) => {
    const Button = component as ComponentType<ButtonProps>;
    return (
      <form
        action="/"
        onSubmit={(event) => {
          event.preventDefault();
          // @ts-expect-error: Use alert to give user feedback
          alert('Verzonden');
        }}
      >
        <p>
          <label htmlFor="button-submit-input">Invoer</label>
        </p>
        <p id="button-submit-desc">Vul iets in en druk dan op de "Verzend" knop.</p>
        <p>
          <input type="text" id="button-submit-input" aria-describedby="button-submit-desc" />
        </p>
        <p>
          <Button type="submit">Verzenden</Button>
        </p>
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
        story: `Een Button die disabled is, waarvan het visueel ontwerp ook disabled is.

Deze button is gemaakt met de \`htmlDisabled\` property, waarmee ook het \`disabled\` attribuut wordt ingesteld in plaats van het \`aria-disabled="true"\`.

Als je op de button klikt, dan gebeurt er niets en wordt het formulier niet verstuurd.

De Button is niet focusbaar, omdat dit in HTML niet mogelijk is met \`<button disabled>\`.`,
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
  render: (_props, { component }) => {
    const Button = component as ComponentType<ButtonProps>;
    return (
      <form
        action="/"
        onSubmit={(event) => {
          event.preventDefault();
          // @ts-expect-error: Use alert to give user feedback
          alert('Verzonden');
        }}
      >
        <p>
          <label htmlFor="button-disabled-submit-input">Invoer</label>
        </p>
        <p id="button-disabled-submit-desc">Vul iets in en druk dan op de "Verzend" knop.</p>
        <p>
          <input type="text" id="button-disabled-submit-input" aria-describedby="button-disabled-submit-desc" />
        </p>
        <p>
          <Button type="submit" htmlDisabled>
            Verzenden
          </Button>
        </p>
      </form>
    );
  },
};

export const NoLabel: Story = {
  name: 'Button zonder zichtbaar tekstueel label',
  args: {
    label: undefined,
    iconStart: (
      <span className="utrecht-icon" aria-hidden="true">
        <IconLink />
      </span>
    ),
    'aria-label': 'Link invoegen',
  },
  parameters: {
    docs: {
      description: {
        story: 'Door het "aria-label" attribute blijft de button voor hulptechnologie te beschrijven',
      },
    },
    testResult: {
      date: '2025-12-23',
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
    status: { type: [] },
  },
};

export const NoLabelNotPressed: Story = {
  name: 'Toggle Button met icon in plaats van zichtbaar tekstueel label',
  args: {
    iconStart: (
      <span className="utrecht-icon" aria-hidden="true">
        <IconBold />
      </span>
    ),
    label: undefined,
    pressed: false,
    'aria-label': 'Vet opmaken',
  },
  parameters: {
    docs: {
      description: {
        story: 'Door het "aria-label" attribute blijft de button voor hulptechnologie te beschrijven',
      },
    },
    testResult: {
      date: '2025-12-23',
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
    status: { type: [] },
  },
};
export const NoLabelPressed: Story = {
  name: 'Pressed Toggle Button met icon in plaats van zichtbaar tekstueel label',
  args: {
    iconStart: (
      <span
        className="utrecht-icon"
        aria-hidden="true"
        style={{
          '--utrecht-icon-color': 'var(--nl-icon-color)',
          '--utrecht-icon-size': 'var(--nl-icon-inline-size)',
        }}
      >
        <IconBold />
      </span>
    ),
    label: undefined,
    pressed: true,
    'aria-label': 'Vet opmaken',
    'aria-pressed': 'true',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Ingedrukte toggle button. Door het "aria-label" attribute blijft de button voor hulptechnologie te beschrijven',
      },
    },
    status: { type: [] },
    testResult: {
      date: '2025-12-23',
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
};

export const ButtonRegionExpandable: Story = {
  name: 'Button Expandable Region',
  args: {
    'aria-expanded': 'false',
    'aria-controls': 'button-region-expandable',
    label: 'Koptekst in een accordion',
    iconStart: (
      <span className="nl-icon" aria-hidden="true">
        <IconChevronDown />
      </span>
    ),
  },
  render: function Render({ ...args }: ButtonProps) {
    const [_, updateArgs] = useArgs();

    return (
      <section>
        <h2>
          <ButtonComponent
            style={{
              '--nl-button-padding-inline-end': '0',
              '--nl-button-padding-inline-start': '0',
              '--nl-button-icon-size': '1em',
              '--nl-button-font-family': 'var(--nl-heading-level-2-font-family)',
              '--nl-button-subtle-font-size': 'var(--nl-heading-level-2-font-size)',
              '--nl-button-subtle-font-weight': 'var(--nl-heading-level-2-font-weight)',
              '--nl-button-subtle-line-height': 'var(--nl-heading-level-2-line-height)',
              '--nl-button-min-inline-size': '100%',
            }}
            purpose="subtle"
            onClick={() => {
              updateArgs({
                'aria-expanded': args['aria-expanded'] === 'true' ? 'false' : 'true',
                iconStart: (
                  <span className="nl-icon" aria-hidden="true">
                    {args['aria-expanded'] === 'true' ? <IconChevronUp /> : <IconChevronDown />}
                  </span>
                ),
              });
            }}
            {...args}
          />
        </h2>
        <div id={args['aria-controls']} hidden={args['aria-expanded'] === 'false'}>
          <p>Tekstinhoud van de region die geopend en gesloten kan worden.</p>
        </div>
      </section>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `Het attribute \`aria-expanded="false"\` geeft aan dat de gekoppelde region gesloten is. De region kan geopend worden door op de button te klikken. Daarna is het attribuut aangepast naar \`aria-expanded="true"\`.

Deze aanpak wordt vaak gebruikt voor Accordion componenten.`,
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
      date: '2025-12-23',
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
      date: '2025-12-23',
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
  render: ({ label, ...props }, { component }) => {
    const Button = component as ComponentType<ButtonProps>;
    return (
      <>
        <div style={{ display: 'flex', resize: 'both' }}>
          <Button style={{ flex: 1 }} {...props} label={label} />
        </div>
        <br />
        <div style={{ display: 'flex', resize: 'both' }}>
          <Button style={{ flex: 1 }} {...props}>
            {label}
          </Button>
        </div>
        <br />
        <div style={{ display: 'flex', resize: 'both', inlineSize: '300px' }}>
          <Button style={{ flex: 1 }} {...props} label={label} />
        </div>
        <br />
        <div style={{ display: 'flex', resize: 'both', inlineSize: '300px' }}>
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
      date: '2025-12-23',
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
        <div style={{ display: 'flex', resize: 'both' }}>
          <Button style={{ flex: 1 }} {...props} label={label} />
        </div>
        <br />
        <div style={{ display: 'flex', resize: 'both' }}>
          <Button style={{ flex: 1 }} {...props}>
            {label}
          </Button>
        </div>
        <br />
        <div style={{ display: 'flex', resize: 'both', width: '300px' }}>
          <Button style={{ flex: 1 }} {...props} label={label} />
        </div>
        <br />
        <div style={{ display: 'flex', resize: 'both', width: '300px' }}>
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
  render: (props: ButtonProps, { component }) => {
    const Button = component as ComponentType<ButtonProps>;
    return (
      <div style={{ alignItems: 'center', display: 'flex', height: '100svh' }}>
        <div>
          <Button {...props} style={{ maxInlineSize: '100px', maxBlockSize: '100px' }} />
          <Button style={{ maxInlineSize: '100px', maxBlockSize: '100px' }}>{props.label}</Button>
        </div>
        <div style={{ maxInlineSize: '100px', maxBlockSize: '100px' }}>
          <Button {...props} />
        </div>
        <div style={{ maxInlineSize: '100px', maxBlockSize: '100px' }}>
          <Button className="nl-button">{props.label}</Button>
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
  render: (props, { component }) => {
    const Button = component as ComponentType<ButtonProps>;

    const onClick = () => alert('geklikt');
    return <Button {...props} onClick={onClick} />;
  },
};

export const ButtonHidden: Story = {
  name: 'Button die verborgen is met "hidden" attribuut',
  parameters: {
    docs: {
      description: {
        story: `Hier is geen Button zichtbaar, terwijl de button wel in de code van de pagina staat. De button is verborgen het globale HTML-attribuut \`hidden\`.

De werking van dit attribuut kan verstoord worden wanneer in \`display: inline-flex\` in de CSS van de component de \`display: none\` uit de user agent stylesheet overschrijft.`,
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
  args: {
    hidden: true,
  },
};

export const ButtonValue: Story = {
  name: 'Button met name en value',
  parameters: {
    docs: {
      description: {
        story: `Deze situatie heeft twee submit buttons, waarmee de waarde van de aangeklikte button bepaalt met welke user ingelogd wordt.

De buttons staan in een \`<form>\` dat verstuurd wordt naar \`example.com\`. Door het \`name="username\`" attribuut wordt de waarde van de button met het formulier geassocieerd bij submit.

Controleer of \`name\` en \`value\` werken door het formulier te versturen. Kijk dan of in de adresbalk de gekozen username staat. Bijvoorbeeld:

- \`https://example.com/?username=admin%40example.com\` voor de button met \`name="username" value="admin@example.com"\`.
- \`https://example.com/?username=john%40example.com\` voor de button met \`name="username" value="jane@example.com"\`.`,
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
  render: () => {
    return (
      <form method="get" action="https://example.com/" target="_new">
        <div>
          <ButtonComponent type="submit" purpose="secondary" name="username" value="admin@example.com">
            Verder gaan als admin@example.com
          </ButtonComponent>
        </div>
        <div>
          <ButtonComponent type="submit" purpose="secondary" name="username" value="jane@example.com">
            Verder gaan als jane@example.com
          </ButtonComponent>
        </div>
      </form>
    );
  },
  args: {
    hidden: true,
  },
};

export const ButtonForm: Story = {
  name: 'Button met gekoppeld form',
  parameters: {
    docs: {
      description: {
        story: `Deze situatie heeft twee submit buttons, waarmee de aangeklikte button bepaalt met welke user ingelogd wordt, door de verborgen inhoud van één van de twee gekoppelde formulieren.

Controleer of \`form\`, \`formaction\`, \`formmethod\` en \`formtarget\` werken door het formulier te versturen. Kijk dan een nieuwe browservenster opent, waar in de adresbalk de gekozen username staat. Bijvoorbeeld:

- \`https://example.com/?username=admin%40example.com\` voor de button met \`form="form-1"\`.
- \`https://example.com/?username=john%40example.com\` voor de button met \`form="form-2"\`.`,
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
  render: () => {
    return (
      <>
        <form id="form-1" method="post">
          <input type="hidden" name="username" value="admin@example.com" />
        </form>
        <form id="form-2" method="post">
          <input type="hidden" name="username" value="jane@example.com" />
        </form>
        <div>
          <ButtonComponent
            type="submit"
            purpose="secondary"
            form="form-1"
            formMethod="get"
            formAction="https://example.com/"
            formTarget="_new"
          >
            Verder gaan als admin@example.com
          </ButtonComponent>
        </div>
        <div>
          <ButtonComponent
            type="submit"
            purpose="secondary"
            form="form-2"
            formMethod="get"
            formAction="https://example.com/"
            formTarget="_new"
          >
            Verder gaan als jane@example.com
          </ButtonComponent>
        </div>
      </>
    );
  },
  args: {
    hidden: true,
  },
};

export const ButtonPopover: Story = {
  name: 'Button met popover',
  parameters: {
    docs: {
      description: {
        story: `De volgende situatie is er een Toggle Button die een popover met extra informatie kan tonen, en verbergen.

De button is gemaakt met de HTML-attributen \`popovertarget\` en \`popovertargetaction\`.

Test de werking door op de button te klikken. Als het goed is opent de popover. Klik nog een keer op de button. Als het goed is sluit de popover.`,
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
  render: () => {
    return (
      <>
        <ButtonComponent popoverTarget="popovertarget-panel" popoverTargetAction="toggle" aria-haspopup="dialog">
          Spoilers...
        </ButtonComponent>
        <div
          id="popovertarget-panel"
          popover="manual"
          style={{
            margin: '0',
            inset: 'auto',
            positionArea: 'end',
          }}
        >
          <p>Je kunt deze popover sluiten met dezelfde button!</p>
        </div>
      </>
    );
  },
  args: {
    hidden: true,
  },
};

export const ButtonPopoverDialog: Story = {
  name: 'Button met popover dialog',
  parameters: {
    docs: {
      description: {
        story: ``,
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
  render: () => {
    return (
      <>
        <ButtonComponent popoverTarget="popovertarget-dialog" popoverTargetAction="show" aria-haspopup="dialog">
          Extra informatie
        </ButtonComponent>
        <dialog id="popovertarget-dialog" popover="manual">
          <form>
            <p>Extra informatie in een dialog...</p>
            <input type="text" />
            <ButtonComponent formMethod="dialog">Extra informatie</ButtonComponent>
          </form>
        </dialog>
      </>
    );
  },
  args: {
    hidden: true,
  },
};

export const ButtonFormNovalidate: Story = {
  name: 'Button met formnovalidate attribuut',
  parameters: {
    docs: {
      description: {
        story: `De volgende situatie heeft twee submit buttons. Met de tweede button is het mogelijk het formulier zelf te verzenden wanneer het formulier niet volledig is ingevuld.

Door het attribute \`formnovalidate\` op de \`<button>\` wordt de HTML-formuliervalidatie overgeslagen.

Test deze functionaliteit door het formulier met de eerste button te verzenden. Als het goed is krijg je een melding dat het URL niet valide is. Gebruik dan de tweede button om het formulier te verzenden. Als het goed is, dan opent een nieuw browservenster met het adres: \`https://example.com/?url=https%3A%2F%2F\`.`,
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
  args: {
    formNovalidate: '',
    label: 'Opslaan en later verdergaan',
    children: undefined,
  },
  render: ({ ...args }) => {
    return (
      <form action="https://example.com/" target="_new">
        <div>
          <label htmlFor="invalid-url">Website:</label>
        </div>
        <div>
          <input id="invalid-url" type="url" name="url" value="https://" autoComplete="url" />
        </div>
        <div>
          <ButtonComponent type="submit">Volgende</ButtonComponent>
        </div>
        <div>
          <ButtonComponent type="submit" {...args} />
        </div>
      </form>
    );
  },
};

const DivButton = ({
  label,
  iconStart,
  iconEnd,
  children,
  pressed,
  purpose,
  disabled,
  hint,
  className,
  ...args
}: ButtonProps) => {
  return (
    <div
      role="button"
      tabIndex={0}
      className={clsx('nl-button', className, {
        'nl-button--pressed': pressed,
        'nl-button--disabled': disabled,
        'nl-button--primary': purpose === 'primary',
        'nl-button--secondary': purpose === 'secondary',
        'nl-button--subtle': purpose === 'subtle',
        'nl-button--positive': Boolean(purpose) && hint === 'positive',
        'nl-button--negative': Boolean(purpose) && hint === 'negative',
      })}
      {...args}
    >
      {iconStart && <span className="nl-button__icon-start">{iconStart}</span>}
      {label && <span className="nl-button__label">{label}</span>}
      {children}
      {iconEnd && <span className="nl-button__icon-end">{iconEnd}</span>}
    </div>
  );
};

export const ButtonDiv: Story = {
  name: 'De Button kan gemaakt worden met een div element',
  args: {
    label: 'Ik ben een button met een hele lange tekst',
    iconStart: (
      <Icon>
        <IconAccessible />
      </Icon>
    ),
    onClick: () => {
      alert('geklikt');
    },
    onKeyPress: (evt: KeyboardEvent) => {
      console.log(evt);
      if (evt.target && evt.key === 'Enter') {
        evt.target.click();
      }
    },
    onKeyUp: (evt: KeyboardEvent) => {
      console.log(evt);
      if (evt.target && evt.key === ' ') {
        evt.target.click();
      }
    },
  },
  parameters: {
    docs: {
      description: {
        story: `Het volgende voorbeeld is een Button die gemaakt is met een \`div\` element, in plaats van met een \`button\` element.

Deze tests tonen aan dat de CSS implementatie van de button niet afhankelijk is van het \`button\` HTML element. Het visueel ontwerp van de Button kan hiermee ook toegepast worden in situaties waarin bestaande code met een \`div\` element niet aangepast kan worden, bijvoorbeeld wanneer alleen class names ingesteld kunnen worden.

Een \`div\` is standaard niet bedienbaar met het toetsenbord. Om te beginnen moet de \`div\` focus kunnen krijgen, daarvoor is \`tabindex="0"\` toegevoegd. Om hetzelfde gedrag te hebben als een \`button\` element, moet de \`click\` event veroorzaakt worden bij de \`keypress\` event van de <kbd>Enter</kbd>-toets, en bij de de \`keyup\` event van de <kbd>Space</kbd>-toets.`,
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
  render: DivButton,
};

export const DecorativeButtonContentEditable: Story = {
  name: 'De Button label kan bewerkt met contentEditable',
  args: {
    role: undefined,
    label: <span contentEditable="true">De tekst van deze button kan aangepast worden.</span>,
    tabIndex: undefined,
  },
  parameters: {
    docs: {
      description: {
        story: `Het volgende voorbeeld is een element dat er uit ziet Button, waarvan de tekst bewerkt kan worden, zoals in een UI editor.

De Button is niet interactief, de button is decoratief.

De Button moet door hulpsoftware niet herkend worden als button, omdat deze Button alleen decoratief is. De button heeft niet de toegankelijke rol van "button", doordat geen \`role="button"\` is gebruikt.

De Button zelf moet niet focusbaar zijn, omdat dit element niet interactief is, en de logische tabvolgorde is dat alleen relevante elementen in de tabvolgorde voorkomen.`,
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
  render: DivButton,
};

export const DecorativeButtonDisabled: Story = {
  name: 'Decoratieve Disabled Button',
  args: {
    disabled: true,
    role: undefined,
    label: <span contentEditable="true">De tekst van deze button kan aangepast worden.</span>,
    tabIndex: undefined,
  },
  parameters: {
    docs: {
      description: {
        story: `Het volgende voorbeeld is een element dat er uit ziet Disabled Button.

De Button is niet interactief, de button is decoratief.`,
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
  render: DivButton,
};

export const DecorativeButtonPressed: Story = {
  name: 'Decoratieve Pressed Button',
  args: {
    pressed: true,
    role: undefined,
    label: <span contentEditable="true">De tekst van deze button kan aangepast worden.</span>,
    tabIndex: undefined,
  },
  parameters: {
    docs: {
      description: {
        story: `Het volgende voorbeeld is een element dat er uit ziet Pressed Button.

De Button is niet interactief, de button is decoratief.`,
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
  render: DivButton,
};

const EditIconButton = ({ ...args }: ButtonProps) => {
  return (
    <ButtonComponent
      purpose="subtle"
      iconOnly
      style={{
        '--utrecht-icon-size': 'var(--nl-icon-inline-size)',
        '--nl-button-min-block-size': '24px',
        '--nl-button-min-inline-size': '24px',
        '--nl-icon-inline-size': '24px',
        '--nl-icon-block-size': '24px',
        '--nl-button-padding-block-end': '0',
      }}
      {...args}
    />
  );
};

export const ButtonIconEditable: Story = {
  name: 'Decoratieve Button waarvan de icons kunnen bewerkt worden via Buttons',
  args: {
    role: undefined,
    label: <span contentEditable="true">De icons en de tekst van deze button kan aangepast worden.</span>,
    tabIndex: undefined,
    iconStart: <IconQuestionMark />,
    iconEnd: <IconQuestionMark />,
    style: {
      '--nl-button-padding-inline-start': 0,
      '--nl-button-padding-inline-end': 0,
      '--nl-button-padding-block-start': 0,
      '--nl-button-padding-block-end': 0,
    },
  },
  render: function Render({ iconStart, iconEnd, ...args }: ButtonProps) {
    const [updatedArgs, updateArgs] = useArgs();

    const iconOptions = [
      { IconComponent: IconAccessible, label: 'accessible' },
      { IconComponent: IconArrowLeft, label: 'arrow left' },
      { IconComponent: IconArrowRight, label: 'arrow right' },
      { IconComponent: IconBold, label: 'bold' },
      { IconComponent: IconBrandFacebook, label: 'Facebook' },
      { IconComponent: IconCheck, label: 'check' },
      { IconComponent: IconLanguage, label: 'language' },
      { IconComponent: IconLink, label: 'link' },
      { IconComponent: IconMultiplier2x, label: '2x multiplier' },
      { IconComponent: IconPdf, label: 'PDF' },
      { IconComponent: IconPlus, label: 'plus' },
      { IconComponent: IconQuestionMark, label: 'question mark' },
      { IconComponent: IconShoppingCart, label: 'shopping cart' },
      { IconComponent: IconTrash, label: 'trash' },
    ];

    const ButtonPopover = ({
      onIconChange,
      ...args
    }: HTMLAttributes<HTMLElement> & { id: string; onIconChange: (IconComponent: unknown) => void }) => {
      return (
        <dialog
          popover=""
          style={{
            margin: '0',
            inset: 'auto',
            positionArea: 'end',
          }}
          {...args}
        >
          <p id={`${args.id}-dialog-label`}>Kies een icon:</p>
          <menu lang="en" style={{ display: 'flex', flexWrap: 'wrap', listStyle: 'none', padding: 0 }}>
            {iconOptions.map(({ IconComponent, label }, index) => {
              return (
                <li key={index}>
                  <ButtonComponent
                    purpose="subtle"
                    iconOnly
                    iconStart={<IconComponent />}
                    label={label}
                    aria-haspopup="dialog"
                    formMethod="dialog"
                    onClick={() => onIconChange(IconComponent)}
                  />
                </li>
              );
            })}
          </menu>
        </dialog>
      );
    };

    return (
      <>
        <DivButton
          {...args}
          {...updatedArgs}
          iconStart={
            <EditIconButton label="Icon Start bewerken" popoverTarget="icon-start-popover" iconStart={iconStart} />
          }
          iconEnd={<EditIconButton label="Icon End bewerken" popoverTarget="icon-end-popover" iconStart={iconEnd} />}
        />
        <ButtonPopover
          id="icon-start-popover"
          onIconChange={(IconComponent) => {
            updateArgs({
              iconStart: <IconComponent />,
            });
          }}
        />
        <ButtonPopover
          id="icon-end-popover"
          onIconChange={(IconComponent) => {
            updateArgs({
              iconEnd: <IconComponent />,
            });
          }}
        />
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `Deze situatie is een decoratieve Button waarvan de icon bewerkt kan worden, zoals in een UI editor.

De icon is in dit voorbeeld vervangen door een Button die de icon kan instellen op een random icon. Dit is een versimpeld voorbeeld omdat het makkelijker is om te maken en onderhouden. Een realistisch voorbeeld zou zijn dat de button een popup opent, waar je een ander Icon kan zoeken en kiezen.

De Button moet door hulpsoftware niet herkend worden als button, omdat deze Button alleen decoratief is. Daarnaast moet een \`button\` rol niet genest zijn in een andere \`button\`. De button heeft niet de toegankelijke rol van "button", doordat geen \`role="button"\` is gebruikt.

De Button zelf moet niet focusbaar zijn, omdat dit element niet interactief is, en de logische tabvolgorde is dat alleen relevante elementen in de tabvolgorde voorkomen.`,
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
};

export const LinkAsButton: Story = {
  name: 'Link als button',
  parameters: {
    docs: {
      description: {
        story:
          'Wanneer een `<a>` element (een link) gebruikt wordt als button element, dan moet dat element er als een button uitzien in High Contrast Mode',
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
  render: (props: ButtonProps) => (
    <>
      <ButtonComponent {...props} />
      <a href="#" role="button" className="nl-button" aria-disabled={props.disabled}>
        {props.label}
      </a>
    </>
  ),
};

export const LinkAsButtonDisabled: Story = {
  name: 'Link als button disabled',
  args: {
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Wanneer een `<a>` element (een link) gebruikt wordt als button element, dan moet dat element er als een button uitzien in High Contrast Mode',
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
  render: (props: ButtonProps) => (
    <>
      <ButtonComponent {...props} />
      <a href="#" role="button" className="nl-button nl-button--disabled" aria-disabled={props.disabled}>
        {props.label}
      </a>
    </>
  ),
};

export const ButtonLabelledBy: Story = {
  name: 'Button met extern label',
  args: {
    label: 'Bewerken',
  },
  parameters: {
    docs: {
      description: {
        story: `Deze situatie heeft een tabel, waarbij elke rij een "Bewerken" Button heeft. Op het \`<button>\` element is het \`aria-labelledby="row-1-button row-1-heading"\` toegevoegd, waardoor de toegankelijke naam is samengesteld. De toegankelijke naam begint met het zichtbare label, en bevat daarna de tekst van de Table Row Heading: "Bewerken admin@exmaple.com".`,
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
  render: (props: ButtonProps) => (
    <table>
      <thead>
        <tr>
          <th scope="column">E-mail</th>
          <th scope="column">Actions</th>
        </tr>
      </thead>
      <tbody>
        {[
          {
            user: 'admin@example.com',
          },
          {
            user: 'jane@example.com',
          },
        ].map(({ user }, index) => (
          <tr key={index}>
            <th scope="row" id={`row-${index}-heading`}>
              {user}
            </th>
            <td>
              <ButtonComponent
                id={`row-${index}-button`}
                aria-labelledby={`row-${index}-button row-${index}-heading`}
                {...props}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  ),
};

export const ButtonMetLigiatures: Story = {
  args: {
    label: '==> !==',
    style: { fontFamily: 'Fira Code' },
  },

  parameters: {
    docs: {
      description: {
        story: `Het font (Fira Code) ondersteunt ligiaturen. In het eerste voorbeeld zijn die uitgeschakeld waardoor er steeds drie glyfs getoond worden, zowel in de tekst, als in de button. In het tweede button zijn deze vervangen met een pijl en een streep door een tripple equals teken`,
      },
    },
  },

  render: (props: ButtonProps) => (
    <>
      <p
        style={{
          display: 'flex',
          gap: '1rem',
          alignItems: 'center',
          fontFamily: 'Fira Code',
          fontFeatureSettings: '"liga" 0, "calt" 0',
        }}
      >
        <span>{props.label}</span>
        <ButtonComponent {...props} />
      </p>
      <p style={{ display: 'flex', gap: '1rem', alignItems: 'center', fontFamily: 'Fira Code' }}>
        <span>{props.label}</span>
        <ButtonComponent {...props} />
      </p>
    </>
  ),
};

export const ButtonKlein: Story = {
  name: 'Button klein',
  args: {
    iconOnly: true,
    iconStart: (
      <Icon role="img" aria-label="Dubbele snelheid">
        <IconMultiplier2x />
      </Icon>
    ),
    label: 'Afspelen',
    style: {
      '--nl-button-border-radius': '9999px',
      '--nl-button-min-block-size': '24px',
      '--nl-button-min-inline-size': '24px',
      '--nl-button-icon-size': '16px',
      '--nl-button-icon-only-padding-inline-start': '0',
      '--nl-button-icon-only-padding-inline-end': '0',
      '--nl-button-icon-only-padding-block-end': '0',
      '--nl-button-icon-only-padding-block-start': '0',
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          'De button is 24 pixels hoog en breed, maar doordat met `border-radius` de button rond is gemaakt is het zichtbare oppervlakte minder dan 24 x 24 = 576 pixels. Het aanwijzergebied is wel vierkant en 24 x 24 pixels groot, dus je kunt de button aanklikken net buiten zichtbare button naast het afgeronde hoekje.',
      },
    },
  },
};
