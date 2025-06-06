import type { ViewportMap } from 'storybook/viewport';

export const viewports: ViewportMap = {
  wcag100: {
    name: 'WCAG 100%',
    styles: {
      width: '1280px',
      height: '1024px',
    },
    type: 'other',
  },
  wcag200: {
    name: 'WCAG 200%',
    styles: {
      width: '640px',
      height: '512px',
    },
    type: 'other',
  },
  wcag400: {
    name: 'WCAG 400%',
    styles: {
      width: '320px',
      height: '256px',
    },
    type: 'other',
  },
};
