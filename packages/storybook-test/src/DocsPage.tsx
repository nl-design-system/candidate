import { Description, Stories } from '@storybook/blocks';
import { DesignTokens } from './DesignTokens';
import { DocsHeader } from './DocsHeader';

export const DocsPage = () => (
  <>
    <DocsHeader />
    <Description />
    <Stories />
    <DesignTokens />
  </>
);
