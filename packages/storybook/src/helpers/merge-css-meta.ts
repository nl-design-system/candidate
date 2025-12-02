import type { Meta, StoryContext } from '@storybook/react-vite';
import * as ReactDOMServer from 'react-dom/server';
import { merge } from 'lodash-es';
import { formatHtml } from '@rijkshuisstijl-community/storybook-tooling/formatHtml';

type Base = Meta<unknown>;
type Overwrite = Meta<unknown>;

/**
 * This is a clone of the mergeCssMeta file found in the Rijkshuisstijl Community.
 * When that package is publically released by the Rijkshuisstijl Community, this file is no longer needed
 * @see {@link https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/storybook/src/helpers/helpers/merge-css-meta.ts}
 *
 * Merges React component metadata with CSS-specific overrides.
 * @param reactMeta The original React component metadata.
 * @param ...overwriteMeta Optional metadata to overwrite the original.
 * @returns The merged metadata.
 */
export const mergeCssMeta = (reactMeta: Base, ...overwriteMeta: Overwrite[]) => {
  // configure generic metadata overwrite for CSS components
  const genericMeta: Meta<unknown> = {
    parameters: {
      chromatic: { disableSnapshot: true }, // as these are reexports of react components
      docs: {
        codePanel: false, // hide the react code panel by default
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

            return formatHtml(result || code);
          },
        },
      },
    },
  };

  return merge({}, reactMeta, genericMeta, ...overwriteMeta);
};
