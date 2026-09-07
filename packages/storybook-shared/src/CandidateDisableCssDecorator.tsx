import type { Decorator } from '@storybook/react-vite';
import './candidate-disable-css.css';

export const CandidateDisableCssDecorator: Decorator = (Story) => (
  <div className="candidate-disable-css">
    <Story />
  </div>
);
