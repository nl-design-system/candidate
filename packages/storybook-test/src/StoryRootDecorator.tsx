import type { Decorator } from '@storybook/react';
import type { CSSProperties } from 'react';

export const StoryRootDecorator: Decorator = (Story, context) => {
  const { lang, storyRootClassname, zoom } = context.globals;
  const style: CSSProperties = zoom ? { zoom } : {};
  const dir = lang === 'ar' ? 'rtl' : undefined;

  return (
    <div className={storyRootClassname} lang={lang} dir={dir} style={style}>
      <Story />
    </div>
  );
};
