import { Controls, Description, Stories, Subtitle } from '@storybook/blocks';
import { DocsHeader } from './DocsHeader';

export const DocsPage = () => (
  <>
    <DocsHeader />
    <Subtitle />
    <Description />
    <Controls />
    <Stories />
  </>
);
