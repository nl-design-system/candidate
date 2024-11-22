import { Controls, Description, Stories, Subtitle, Title } from '@storybook/blocks';
import { DocsHeader } from './DocsHeader';

export const DocsPage = () => (
  <>
    <DocsHeader />
    <Title />
    <Subtitle />
    <Description />
    <Controls />
    <Stories />
  </>
);
