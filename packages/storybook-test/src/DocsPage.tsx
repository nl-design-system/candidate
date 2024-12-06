import { Controls, Description, Stories, Subtitle } from '@storybook/blocks';
import { DesignTokens } from './DesignTokens';
import { DocsHeader } from './DocsHeader';

export const DocsPage = () => (
  <>
    <DocsHeader />
    <Subtitle />
    <Description />
    <Controls />
    <Stories />
    <DesignTokens />
  </>
);
