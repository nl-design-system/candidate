import type { Decorator } from '@storybook/react-vite';
import './ExampleBodyText.css';

export const ExampleBodyTextDecorator: Decorator = (Story) => (
  <div className="example-body-text">
    <Story />
  </div>
);
