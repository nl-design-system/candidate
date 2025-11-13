import { merge } from 'lodash-es';
import reactStoriesMeta from '../../docs/button-docs/stories/button.react.meta';
import componentMarkdown from '../../docs/button-docs/docs/component.md?raw';
import * as Stories from '../../docs/button-docs/stories/button.stories';

export default {
  ...merge({}, reactStoriesMeta, {
    parameters: {
      docs: {
        description: {
          component: componentMarkdown,
        },
        canvas: {
          sourceState: 'shown',
        },
      },
    },
  }),
  title: 'Button',
};

export const Default = Stories.Default;
export const Primary = Stories.Primary;
export const Secondary = Stories.Secondary;
export const Subtle = Stories.Subtle;
export const Disabled = Stories.Disabled;
export const IconStart = Stories.IconStart;
export const IconEnd = Stories.IconEnd;
export const FormattedLabel = Stories.FormattedLabel;
export const FormattedLabelWithIcon = Stories.FormattedLabelWithIcon;
export const ToggleButton = Stories.ToggleButton;
export const FullWidth = Stories.FullWidth;
