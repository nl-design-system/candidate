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
};
