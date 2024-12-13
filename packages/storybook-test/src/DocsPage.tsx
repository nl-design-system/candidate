import { DocsHeader } from '@nl-design-system-candidate/storybook-shared/src/DocsHeader';
import { Description, Stories } from '@storybook/blocks';
import { DesignTokens } from './DesignTokens';
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
