import type { Decorator } from '@storybook/react-vite';
import './ExampleBodyText.css';

export const ExampleBodyTextDecorator: Decorator = (Story) => (
  <div className="example-body-text" lang="nl">
    <div style={{ width: '100px' }} lang="en">
      <p>Uncharacteristically Interdisciplinary Overintellectualization Incomprehensibilities</p>
    </div>
    <div style={{ width: '100px' }} lang="nl">
      <p>verantwoordelijkheid arbeidsongeschiktheidsverzekering verzekeringsmaatschappij</p>
    </div>
    <Story />
  </div>
);
