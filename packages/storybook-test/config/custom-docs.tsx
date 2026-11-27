import { DocsStory, useOf, type DocsStoryProps } from '@storybook/addon-docs/blocks';
import { AcceptanceCriterium, createTestResult, StoryTestReport } from '../src/TestReport';
import { TestResult } from '../src/TestResult';
import { successCriteriaMap as wcagAcceptanceCriteria } from '../src/wcag22';

const createAcceptanceCriteriaMap = (list: AcceptanceCriterium[]): Map<string, AcceptanceCriterium> =>
  new Map(list.map((data) => [data.id, data]));

export interface CustomDocsStoryParameters {
  /**
   * There are two ways to supply data: an `acceptanceCriteriaList` or `acceptanceCriteriaData`.
   * `acceptanceCriteriaList` takes precedence.
   */

  acceptanceCriteriaData?: Map<string, AcceptanceCriterium>;
  acceptanceCriteriaList?: AcceptanceCriterium[];
  testResult?: TestResult;
  acceptanceCriteriaResult?: TestResult;
}

export const CustomDocsStory = (props: DocsStoryProps) => {
  const meta = useOf<'meta'>('meta');
  const story = useOf<'story'>(props.of).story;

  // WCAG test results for every st
  const metaParameters: CustomDocsStoryParameters = meta.csfFile?.meta?.parameters || {};
  const storyParameters: CustomDocsStoryParameters = story?.parameters || {};

  // WCAG test results
  const metaWcagResult: Partial<TestResult> = createTestResult(metaParameters['testResult'] || {});

  const storyWcagResult = storyParameters['testResult'] || {};

  // Acceptance criteria QA test results
  const metaAcceptanceCriteriaResult: Partial<TestResult> = createTestResult(
    metaParameters['acceptanceCriteriaResult'] || {},
  );

  // Acceptance criteria QA requirements
  const metaAcceptanceCriteriaList = metaParameters['acceptanceCriteriaList'] || [];
  const metaAcceptanceCriteriaData = metaAcceptanceCriteriaList
    ? createAcceptanceCriteriaMap(metaAcceptanceCriteriaList)
    : metaParameters['acceptanceCriteriaData'] || new Map();

  const storyAcceptanceCriteriaResult = storyParameters['acceptanceCriteriaResult'] || {};

  return (
    <div style={{ marginBlockEnd: '10em' }}>
      <DocsStory {...props} />
      <StoryTestReport
        story={story}
        acceptanceCriteria={metaAcceptanceCriteriaData}
        baseAudit={metaAcceptanceCriteriaResult}
        partialAudit={storyAcceptanceCriteriaResult}
        heading="Testresultaten van NL Design System acceptatiecriteria"
        headingLevel={4}
      ></StoryTestReport>
      <StoryTestReport
        acceptanceCriteria={wcagAcceptanceCriteria}
        baseAudit={metaWcagResult}
        partialAudit={storyWcagResult}
        story={story}
        heading="Testresultaten van toegankelijkheidsspecialist"
        headingLevel={4}
      />
    </div>
  );
};
