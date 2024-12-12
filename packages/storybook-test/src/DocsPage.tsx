import { Description, Stories } from '@storybook/blocks';
import { DesignTokens } from './DesignTokens';
import { DocsHeader } from './DocsHeader';
import { WcagAuditReport } from './WcagAuditReport';

export const DocsPage = () => (
  <>
    <DocsHeader />
    <Description />
    <Stories />
    <DesignTokens />
    <WcagAuditReport />
  </>
);
