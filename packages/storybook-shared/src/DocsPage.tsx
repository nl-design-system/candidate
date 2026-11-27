import { DocsHeader } from './DocsHeader';
import { Description, Stories } from '@storybook/addon-docs/blocks';
import { AcceptanceCriteria } from './AcceptanceCriteria';
import { DesignTokens } from './DesignTokens';
import { AcceptanceCriteriaOverviewChecklist } from './AcceptanceCriteriaChecklist';

export const DocsPage = () => (
  <>
    <DocsHeader />
    <Description />
    <Stories />
    <DesignTokens />
    <AcceptanceCriteria />
    <AcceptanceCriteriaOverviewChecklist />
  </>
);
