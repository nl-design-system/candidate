import type { Decorator } from '@storybook/react-vite';
import './ExampleBodyText.css';

export const ExampleBodyTextDecorator: Decorator = (Story) => (
  <div className="example-body-text" lang="nl">
    <p>Test Render</p>
    <p>gegevensverwerkingsfout&shy;melding</p>
    <div style={{ width: '100px' }}>
      <p>gegevensverwerkingsfout&shy;melding</p>
    </div>
    <Story />
  </div>
);
