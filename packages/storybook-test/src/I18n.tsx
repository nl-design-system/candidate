import type { Decorator } from '@storybook/react';
import { useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import { i18n } from './i18n';

i18n.on('languageChanged', function changeDocumentDirection(locale) {
  document.dir = i18n.dir(locale);
  document.documentElement.lang = locale;
});

export const I18n: Decorator = (Story, context) => {
  const { locale } = context.globals;

  useEffect(() => {
    i18n.changeLanguage(locale);

    return () => {
      document.dir = 'ltr';
      document.documentElement.lang = 'nl';
    };
  }, [locale]);

  return (
    <I18nextProvider i18n={i18n}>
      <Story />
    </I18nextProvider>
  );
};
