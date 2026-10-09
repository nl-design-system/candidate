import type { Decorator } from '@storybook/react-vite';
import './candidate-centered.css';

export const CandidateCenteredDecorator: Decorator = (Story) => (
  <div className="candidate-centered">
    <Story />
  </div>
);
