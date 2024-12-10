import type { ViewportMap } from '@storybook/addon-viewport';

export const viewports: ViewportMap = {
  desktop: {
    name: 'Desktop',
    styles: {
      height: '1080px',
      width: '1920px',
    },
    type: 'desktop',
  },
  phone: {
    name: 'Mobiel',
    styles: {
      height: '667px',
      width: '375px',
    },
    type: 'mobile',
  },
  tablet: {
    name: 'Tablet',
    styles: {
      height: '1024px',
      width: '768px',
    },
    type: 'tablet',
  },
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
