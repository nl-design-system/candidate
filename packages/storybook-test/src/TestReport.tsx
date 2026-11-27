import { useOf } from '@storybook/addon-docs/blocks';
import without from 'lodash-es/without';
import { TestResult } from './TestResult';
import { WcagTest } from './WcagTests';

interface Baseline {
  date: string;
  href: string;
  text: string;
}

const baselineVersions: Baseline[] = [
  {
    date: '2024-12-01',
    href: 'https://nldesignsystem.nl/baseline/2024-12',
    text: 'NL Design System Baseline: december 2024',
  },
  {
    date: '2025-07-01',
    href: 'https://nldesignsystem.nl/baseline/2025-07/',
    text: 'NL Design System Baseline: juli 2025',
  },
  {
    date: '2025-11-21',
    href: 'https://nldesignsystem.nl/baseline/2025-11/',
    text: 'NL Design System Baseline: november 2025',
  },
  {
    date: '2025-12-15',
    href: 'https://nldesignsystem.nl/baseline/2025-12/',
    text: 'NL Design System Baseline: december 2025',
  },
  {
    date: '2026-09-06',
    href: 'https://nldesignsystem.nl/baseline/2026-09/',
    text: 'NL Design System Baseline: september 2026',
  },
];

export const isNlDesginSystemTest = (testId: string) => testId === 'https://example.com/';

interface TestReference<T = string> {
  href?: string;
  label: T;
  sortKey?: string;
}

export interface AcceptanceCriterium {
  id: string;
  title: string;
}

const createAcceptanceCriteriaReferences = (
  data: Map<string, AcceptanceCriterium>,
  list: TestReference[],
): TestReference[] =>
  list.map(({ label: id }: TestReference) => {
    const ac = data.get(id);
    const href = ac ? `https://nldesignsystem.nl/wcag/${ac.id}` : id;
    const label = ac ? ac.title : id;
    return {
      href,
      label,
    };
  });

export const createTestResult = (parameters: object & Partial<TestResult>) => {
  const empty: string[] = [];
  const cannotTell = [...new Set(parameters.cannotTell || empty)];
  const notApplicable = parameters.notApplicable || empty;
  const pass = parameters.pass || empty;
  const fail = parameters.fail || empty;
  const notTested = parameters.notTested || empty;

  const all: WcagTest[] = [...cannotTell, ...fail, ...notApplicable, ...notTested, ...pass];

  return {
    all,
    cannotTell,
    date: parameters.date,
    fail,
    notApplicable,
    notTested,
    pass,
  };
};

const extendAudit = (partialAudit: Partial<TestResult>, baseAudit: Partial<TestResult>) => {
  let cannotTell = [...new Set([...(baseAudit.cannotTell || []), ...(partialAudit.cannotTell || [])])];
  const fail = [...new Set([...(baseAudit.fail || []), ...(partialAudit.fail || [])])];
  let notApplicable = [...new Set([...(baseAudit.notApplicable || []), ...(partialAudit.notApplicable || [])])];
  let notTested = [...new Set([...(baseAudit.notTested || []), ...(partialAudit.notTested || [])])];
  let pass = [...new Set([...(baseAudit.pass || []), ...(partialAudit.pass || [])])];

  notApplicable = without(notApplicable, ...fail, ...cannotTell, ...pass, ...notTested);
  notTested = without(notTested, ...fail, ...cannotTell, ...pass);
  cannotTell = without(cannotTell, ...fail, ...pass);
  pass = without(pass, ...fail);

  const all: string[] = [...cannotTell, ...fail, ...notApplicable, ...notTested, ...pass];

  return {
    ...baseAudit,
    ...partialAudit,
    all,
    cannotTell,
    fail,
    notApplicable,
    notTested,
    pass,
  };
};
const CommonData = () => (
  <>
    <dl>
      <div>
        <dt>Beoogde kwaliteit:</dt>
        <dd>
          <ul>
            <li>Acceptatiecriteria van NL Design System</li>
            <li>
              WCAG 2.2 Niveau AA, volgens de <a href="https://nldesignsystem.nl/baseline">NL Design System Baseline</a>
            </li>
          </ul>
        </dd>
      </div>
    </dl>
  </>
);

const Result = ({ label, list, open }: { label: string; list: { href?: string; label: string }[]; open?: boolean }) =>
  list.length > 0 ? (
    <details open={open}>
      <summary>
        {label}: {list.length}
      </summary>
      <ul>
        {list.map(({ href, label }) => {
          return <li key={href}>{href ? <a href={href}>{label}</a> : label}</li>;
        })}
      </ul>
    </details>
  ) : (
    <p>
      {label}: {list.length}
    </p>
  );

interface SimpleTestReportProps {
  acceptanceCriteria?: Map<string, AcceptanceCriterium>;
  isFullReport: boolean;
  story: Story;
  testResult: TestResult;
  url?: string;
  baseline?: Baseline;
  heading?: string;
  headingLevel?: number;
}
const createReference = (str: string): TestReference => ({ label: str });
const createReferences = (strings: string[]): TestReference[] => strings.map((x) => createReference(x));

export const SimpleTestReport = ({
  acceptanceCriteria = new Map(),
  story,
  url,
  isFullReport,
  testResult,
  baseline,
  heading,
  headingLevel,
}: SimpleTestReportProps) => {
  const Heading = `h${headingLevel ?? 3}`;

  return (
    <div>
      <Heading>{heading || story.name}</Heading>
      {isFullReport ? CommonData() : null}
      <ul>
        <li>
          <Result
            label="Voldoet"
            list={createAcceptanceCriteriaReferences(acceptanceCriteria, createReferences(testResult.pass))}
            open
          />
        </li>
        <li>
          <Result
            label="Voldoet niet"
            list={createAcceptanceCriteriaReferences(acceptanceCriteria, createReferences(testResult.fail))}
            open
          />
        </li>
        <li>
          <Result
            label="Kan niet worden vastgesteld"
            list={createAcceptanceCriteriaReferences(acceptanceCriteria, createReferences(testResult.cannotTell))}
          />
        </li>
        <li>
          <Result
            label="Niet van toepassing"
            list={createAcceptanceCriteriaReferences(acceptanceCriteria, createReferences(testResult.notApplicable))}
          />
        </li>
        <li>
          <Result
            label="Niet getest"
            list={createAcceptanceCriteriaReferences(acceptanceCriteria, createReferences(testResult.notTested))}
          />
        </li>
      </ul>
      <dl>
        {url && (
          <div>
            <dt>URL voor de test:</dt>
            <dd>
              <a
                href={url}
                target="wcag_evaluation"
                aria-label={`${
                  (story.parameters && story.parameters['globals'] && story.parameters['globals'].title) || story.name
                } (opent in nieuw venster)`}
              >
                <code>{url}</code> (opent in nieuw venster)
              </a>
            </dd>
          </div>
        )}
        {testResult.date ? (
          <div>
            <dt>Datum van de test:</dt>
            <dd>
              {new Intl.DateTimeFormat('nl-NL', {
                dateStyle: 'full',
              }).format(new Date(testResult.date))}
            </dd>
          </div>
        ) : null}
        {baseline ? (
          <div>
            <dt>Gebruikte software:</dt>
            <dd>
              Softwareversies van de <a href={baseline.href}>{baseline.text}</a>
            </dd>
          </div>
        ) : null}
      </dl>
    </div>
  );
};

interface StoryTestReportProps {
  acceptanceCriteria?: Map<string, AcceptanceCriterium>;
  story: Story;
  baseAudit: Partial<TestResult>;
  partialAudit: Partial<TestResult>;
  heading?: string;
  headingLevel?: number;
}

export const StoryTestReport = ({
  acceptanceCriteria,
  story,
  baseAudit,
  heading,
  headingLevel,
  partialAudit,
}: StoryTestReportProps) => {
  const isFullReport = false;
  const baseUrl = typeof location === 'undefined' ? '' : location.href;
  const relativeUrl = story
    ? `./iframe.html?${new URLSearchParams({
        id: story.id,
        args: '',
        globals: '',
        viewMode: 'story',
      }).toString()}`
    : undefined;
  const url = baseUrl && relativeUrl ? new URL(relativeUrl, baseUrl).href : relativeUrl;

  const testResult = baseAudit ? extendAudit(partialAudit, baseAudit) : partialAudit;

  const baseline =
    typeof testResult.date === 'string'
      ? baselineVersions.findLast((baseline) => Date.parse(testResult.date || '') >= Date.parse(baseline.date))
      : undefined;

  return (
    <SimpleTestReport
      story={story}
      acceptanceCriteria={acceptanceCriteria}
      testResult={testResult}
      baseline={baseline}
      url={url}
      isFullReport={isFullReport}
      heading={heading}
      headingLevel={headingLevel}
    />
  );
};

export function TestReport() {
  const meta = useOf<'meta'>('meta');
  const testResult: TestResult = meta.csfFile?.meta?.parameters && meta.csfFile?.meta?.parameters['testResult'];

  if (!testResult) {
    return null;
  }

  const wcagStories = Object.values(meta.csfFile?.stories || {}); // .filter((story) => story.parameters.testResult);

  const baseAudit: Partial<TestResult> = createTestResult(
    (meta.csfFile?.meta?.parameters && meta.csfFile?.meta?.parameters['testResult']) || {},
  );

  return (
    <div>
      <h2>Testresultaten voor acceptatiecriteria</h2>
      {CommonData()}
      {wcagStories.map((story) => {
        return <StoryTestReport key={story.id} story={story} baseAudit={baseAudit} />;
      })}
    </div>
  );
}
