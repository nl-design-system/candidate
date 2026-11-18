import { DocsStory, useOf, type DocsStoryProps } from '@storybook/addon-docs/blocks';
import { createTestResult, StoryTestReport } from '../src/TestReport';
import { TestResult } from '../src/TestResult';
import { AcceptanceCriteriaStoryChecklist } from '../src/AcceptanceCriteriaChecklist';

export const CustomDocsStory = (props: DocsStoryProps) => {
  const meta = useOf<'meta'>('meta');
  const story = useOf<'story'>(props.of).story;

  const baseAudit: Partial<TestResult> = createTestResult(
    (meta.csfFile?.meta?.parameters && meta.csfFile?.meta?.parameters['testResult']) || {},
  );

  const acceptanceCriteriaData =
    (meta.csfFile?.meta?.parameters && meta.csfFile?.meta?.parameters['acceptanceCriteriaData']) || [];
  const storyAcceptanceCriteria = (story.parameters && story.parameters['acceptanceCriteriaList']) || [];

  return (
    <div style={{ marginBlockEnd: '10em' }}>
      <DocsStory {...props} />
      <StoryTestReport
        baseAudit={baseAudit}
        story={story}
        heading="Testresultaten van toegankelijkheidsspecialist"
        headingLevel={4}
      />
      {storyAcceptanceCriteria.length > 0 ? (
        <AcceptanceCriteriaStoryChecklist
          storyAcceptanceCriteria={storyAcceptanceCriteria}
          acceptanceCriteriaData={acceptanceCriteriaData}
        />
      ) : null}
    </div>
  );
};
