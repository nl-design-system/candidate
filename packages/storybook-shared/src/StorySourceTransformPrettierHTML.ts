import React from 'react';
import type { StoryContext } from 'storybook/internal/types';
import * as ReactDOMServer from 'react-dom/server';

import * as prettier from 'prettier/standalone';
import * as prettierPluginHtml from 'prettier/plugins/html';

export const sourceTransformPrettierHTML = (code: string, storyContext: StoryContext<any>): string => {
  const render = storyContext.component;

  if (render) {
    const element = React.isValidElement(render)
      ? render
      : React.createElement(render as React.ComponentType<any>, storyContext.args);

    const html = ReactDOMServer.renderToStaticMarkup(element);

    return prettier.format(html, {
      parser: 'html',
      plugins: [prettierPluginHtml],
    });
  }

  return code;
};
