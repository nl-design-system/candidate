export const zoomGlobalType = {
  description: 'Bepaalt het zoom niveau voor een story',
  toolbar: {
    dynamicTitle: true,
    icon: 'zoom',
    items: [
      { title: '50%', value: 0.5 },
      { title: '100%', value: undefined },
      { title: '200%', value: 2 },
      { title: '400%', value: 4 },
    ],
  },
};
