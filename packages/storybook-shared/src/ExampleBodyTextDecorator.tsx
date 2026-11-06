import type { Decorator } from '@storybook/react-vite';
import './ExampleBodyText.css';

export const ExampleBodyTextDecorator: Decorator = (Story) => (
  <div className="example-body-text" lang="en">
    <p>Test Render</p>
    <p>Pneumonoultramicroscopicsilicovolcanoconiosis</p>
    <div style={{ width: '100px' }}>
      <p>Pneumonoultramicroscopicsilicovolcanoconiosis</p>
    </div>
    <div lang="nl">
      <Story />
    </div>
  </div>
);
