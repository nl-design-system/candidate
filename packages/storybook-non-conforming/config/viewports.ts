import type { ViewportMap } from '@storybook/addon-viewport';

export const viewports: ViewportMap = {
  wcag100: {
    name: 'WCAG 100%',
    styles: {
      height: '1024px',
      width: '1280px',
    },
    type: 'other',
  },
  wcag200: {
    name: 'WCAG 200%',
    styles: {
      height: '512px',
      width: '640px',
    },
    type: 'other',
  },
  wcag400: {
    name: 'WCAG 400%',
    styles: {
      height: '256px',
      width: '320px',
    },
    type: 'other',
  },
};
