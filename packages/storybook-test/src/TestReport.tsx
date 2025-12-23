import { useOf } from '@storybook/addon-docs/blocks';
import uniq from 'lodash-es/uniq';
import without from 'lodash-es/without';
import { TestResult } from './TestResult';
import { successCriteria, versionSort } from './wcag22';
import { isWcagTest, WcagTest } from './WcagTests';

export const isNlDesginSystemTest = (testId: string) => testId === 'https://example.com/';

export const isTestId = (testId: string) => isWcagTest(testId) || isNlDesginSystemTest(testId);

interface WcagReference {
  href: string;
  linkText: string;
  sortKey: string;
}

export function TestReport() {
  const meta = useOf<'meta'>('meta');
  const testResult: TestResult = meta.csfFile?.meta?.parameters && meta.csfFile?.meta?.parameters['testResult'];
  const wcagStories = Object.values(meta.csfFile?.stories || {}); //.filter((story) => story.parameters.testResult);

  const baselineVersions = [
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
  ];

  if (!testResult) {
    return null;
  }

  const createTestResult = (parameters: object & Partial<TestResult>) => {
    const empty: string[] = [];
    const cannotTell = uniq(parameters.cannotTell || empty).filter(isTestId);
    const notApplicable = (parameters.notApplicable || empty).filter(isTestId);
    const pass = (parameters.pass || empty).filter(isTestId);
    const fail = (parameters.fail || empty).filter(isTestId);
    const notTested = (parameters.notTested || empty).filter(isTestId);

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
    let cannotTell = uniq([...(baseAudit.cannotTell || []), ...(partialAudit.cannotTell || [])]);
    const fail = uniq([...(baseAudit.fail || []), ...(partialAudit.fail || [])]);
    let notApplicable = uniq([...(baseAudit.notApplicable || []), ...(partialAudit.notApplicable || [])]);
    let notTested = uniq([...(baseAudit.notTested || []), ...(partialAudit.notTested || [])]);
    let pass = uniq([...(baseAudit.pass || []), ...(partialAudit.pass || [])]);

    notApplicable = without(notApplicable, ...[...fail, ...cannotTell, ...pass, ...notTested]);
    notTested = without(notTested, ...[...fail, ...cannotTell, ...pass]);
    cannotTell = without(cannotTell, ...[...fail, ...pass]);
    pass = without(pass, ...fail);

    const all: WcagTest[] = [...cannotTell, ...fail, ...notApplicable, ...notTested, ...pass];

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

  const baseAudit = createTestResult(
    (meta.csfFile?.meta?.parameters && meta.csfFile?.meta?.parameters['testResult']) || {},
  );

  const createWcagReferences = (list: WcagTest[]): WcagReference[] =>
    list
      .map((test: WcagTest) => {
        const successCriteriumData = successCriteria.find(({ url }) => url === test);
        const href = successCriteriumData ? `https://nldesignsystem.nl/wcag/${successCriteriumData.sc}` : test;
        const linkText = successCriteriumData
          ? `WCAG-succescriterium ${successCriteriumData.sc} ${successCriteriumData.nl.title}`
          : test;
        const sortKey = successCriteriumData ? successCriteriumData.sc : '';
        return {
          href,
          linkText,
          sortKey,
        };
      })
      .sort((a, b) => versionSort(a.sortKey, b.sortKey));

  const Result = ({ label, list }: { label: string; list: WcagTest[] }) =>
    list.length >= 1 ? (
      <details>
        <summary>
          {label}: {list.length}
        </summary>
        <ul>
          {createWcagReferences(list).map(({ href, linkText }) => {
            return (
              <li key={href}>
                {'Test gebaseerd op: '}
                <a href={href}>{linkText}</a>
              </li>
            );
          })}
        </ul>
      </details>
    ) : (
      <p>
        {label}: {list.length}
      </p>
    );

  const CommonData = () => (
    <>
      <dl>
        <div>
          <dt>Beoogde kwaliteit:</dt>
          <dd>
            <ul>
              <li>Acceptatiecriteria van NL Design System</li>
              <li>
                WCAG 2.2 Niveau AA, volgens de{' '}
                <a href="https://nldesignsystem.nl/baseline">NL Design System Baseline</a>
              </li>
            </ul>
          </dd>
        </div>
      </dl>
    </>
  );

  return (
    <div>
      <h2>Testresultaten voor acceptatiecriteria</h2>
      {CommonData()}
      {wcagStories.map((story) => {
        const fullReport = false;
        const baseUrl = typeof location !== 'undefined' ? location.href : '';
        const relativeUrl = `./iframe.html?${new URLSearchParams({
          id: story.id,
          args: '',
          globals: '',
          viewMode: 'story',
        }).toString()}`;
        const url = baseUrl ? new URL(relativeUrl, baseUrl).toString() : relativeUrl;

        const partialAudit = createTestResult((story.parameters && story.parameters['testResult']) || {});
        const testResult = extendAudit(partialAudit, baseAudit);

        const baseline =
          typeof testResult.date === 'string' &&
          baselineVersions.findLast((baseline) => Date.parse(testResult.date || '') >= Date.parse(baseline.date));

        return (
          <div key={story.id}>
            <h3>{story.name}</h3>
            {fullReport ? CommonData() : null}
            <dl>
              <div>
                <dt>URL die getest is:</dt>
                <dd>
                  <a
                    href={url}
                    target="wcag_evaluation"
                    aria-label={`${
                      (story.parameters && story.parameters['globals'] && story.parameters['globals'].title) ||
                      story.name
                    } (opent in nieuw venster)`}
                  >
                    <code>{url}</code> (opent in nieuw venster)
                  </a>
                </dd>
              </div>
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
            <ul>
              <li>
                <Result label="Voldoet" list={testResult.pass} />
              </li>
              <li>
                <Result label="Voldoet niet" list={testResult.fail} />
              </li>
              <li>
                <Result label="Kan niet worden vastgesteld" list={testResult.cannotTell} />
              </li>
              <li>
                <Result label="Niet van toepassing" list={testResult.notApplicable} />
              </li>
              <li>
                <Result label="Niet getest" list={testResult.notTested} />
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}
