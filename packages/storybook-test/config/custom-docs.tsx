import { DocsStory, useOf, type DocsStoryProps } from '@storybook/addon-docs/blocks';
import { createTestResult, StoryTestReport } from '../src/TestReport';
import { TestResult } from '../src/TestResult';

export const CustomDocsStory = (props: DocsStoryProps) => {
  const meta = useOf<'meta'>('meta');
  const story = useOf<'story'>('story').story;

  const baseAudit: Partial<TestResult> = createTestResult(
    (meta.csfFile?.meta?.parameters && meta.csfFile?.meta?.parameters['testResult']) || {},
  );

  return (
    <div style={{ marginBlockEnd: '10em' }}>
      <DocsStory {...props} />
      <StoryTestReport
        baseAudit={baseAudit}
        story={story}
        heading="Testresultaten van toegankelijkheidsspecialist"
        headingLevel={4}
      />
    </div>
  );
};
