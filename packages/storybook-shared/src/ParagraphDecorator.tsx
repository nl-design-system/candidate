import type { Decorator } from '@storybook/react';
import { Paragraph } from '@nl-design-system-candidate/paragraph-react';

export const ParagraphDecorator: Decorator = (Story) => (
  <Paragraph>
    <Story />
  </Paragraph>
);
