import { Decorator } from '@storybook/react-vite';

/* eslint-disable react/display-name */

export const LargeLetterSpacingDecorator: Decorator = (Story) => (
  <div
    style={{
      letterSpacing: '0.12em',
    }}
  >
    {Story()}
  </div>
);

export const LargeWordSpacingDecorator: Decorator = (Story) => (
  <div
    style={{
      wordSpacing: '0.16em',
    }}
  >
    {Story()}
  </div>
);

const createRootFontSizeDecorator =
  ({ fontSize, lineHeight }: { fontSize?: string; lineHeight?: string }): Decorator =>
  (Story) => (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: [
            ':root {',
            fontSize ? `font-size: ${fontSize};` : '',
            lineHeight ? `line-height: ${lineHeight};` : '',
            '}',
          ].join(' '),
        }}
      ></style>
      {Story()}
    </>
  );

export const LargeLineHeightDecorator = createRootFontSizeDecorator({ lineHeight: '48px' });

export const UserPreference2rem = createRootFontSizeDecorator({ fontSize: '32px' });

export const UserPreference4rem = createRootFontSizeDecorator({ fontSize: '64px' });
