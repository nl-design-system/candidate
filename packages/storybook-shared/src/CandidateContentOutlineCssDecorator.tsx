import type { Decorator } from '@storybook/react-vite';
import './candidate-content-outline.css';

export const CandidateContentOutlineCssDecorator: Decorator = (Story) => (
  <div className="candidate-content-outline">
    <Story />
  </div>
);
