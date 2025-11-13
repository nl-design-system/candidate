import type { Meta, StoryContext } from '@storybook/react-vite';
import { merge } from 'lodash-es';
import componentMarkdown from '../../docs/button-docs/docs/component.md?raw';
import cssStoriesMeta from '../../docs/button-docs/stories/button.css.meta';
import * as Stories from '../../docs/button-docs/stories/button.stories';
import * as ReactDOMServer from 'react-dom/server';
import '../../components-css/button-css/dist/button.css';
import { Button, type ButtonProps } from '../../components-react/button-react/src/button';
import prettier from 'prettier/standalone';
import prettierPluginBabel from 'prettier/plugins/babel';
import prettierPluginEstree from 'prettier/plugins/estree';

const CssButton = ({ label, children, ...props }: ButtonProps) => <Button {...props}>{children || label}</Button>;

export default {
  ...merge({}, cssStoriesMeta, {
    component: CssButton,
    argTypes: {
      label: {
        table: { disable: true },
      },
    },
    parameters: {
      docs: {
        description: {
          component: componentMarkdown,
        },
        codePanel: false,
        canvas: {
          sourceState: 'shown',
        },
        source: {
          language: 'html',
          // transform the react code to formatted html
          transform: async (code: string, storyContext: StoryContext) => {
            const render = storyContext.originalStoryFn;
            let result;

            if (render) {
              const element = render(storyContext.args, storyContext);
              const html = ReactDOMServer.renderToStaticMarkup(element);
              result = html;
            }

            return await prettier.format(result || code, {
              parser: 'babel',
              plugins: [prettierPluginBabel, prettierPluginEstree],
            });
          },
        },
      },
    },
  }),
  title: 'Css Components/Button',
} satisfies Meta<typeof CssButton>;

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
export const FullWidth = merge({}, Stories.FullWidth, { parameters: { docs: { canvas: { sourceState: 'hidden' } } } });
