import type { Meta } from '@storybook/react-vite';

/**
 * @param website - The URL for this component on nldesignsystem.nl
 * @param github - The URL for this component on GitHub
 */
export const getExternalLinks = (website: string, github: string) => {
  const externalLinks = [];

  if (website) {
    externalLinks.push({ name: 'Open op NL Design System', url: website });
  }

  if (github) {
    externalLinks.push({ name: 'Open op Github', url: github });
  }

  return { parameters: { externalLinks } } satisfies Meta<unknown>;
};
