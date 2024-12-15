import { useOf } from '@storybook/blocks';
import uniq from 'lodash-es/uniq';
import without from 'lodash-es/without';
import { successCriteria, versionSort } from './wcag22';
import { isWcagTest, WCAG22_AA_LEVEL, WcagAudit, WcagTest } from './WcagAudit';

interface WcagReference {
  href: string;
  linkText: string;
  sortKey: string;
}

export function WcagAuditReport() {
  const meta = useOf<'meta'>('meta');
  const wcagAudit: WcagAudit = meta.csfFile?.meta?.parameters && meta.csfFile?.meta?.parameters['wcagAudit'];
  const wcagStories = Object.values(meta.csfFile?.stories || {}); //.filter((story) => story.parameters.wcagAudit);

  const baselineVersions = [
    {
      date: '2024-12-01',
      href: 'https://nldesignsystem.nl/baseline/2024-12',
      text: 'NL Design System Baseline: december 2024',
    },
    {
      date: '2025-01-01',
      href: 'https://nldesignsystem.nl/baseline/2025-01',
      text: 'NL Design System Baseline: januari 2025',
    },
  ];

  if (!wcagAudit) {
    return null;
  }

  const createWcagAudit = (parameters: object & Partial<WcagAudit>) => {
    const empty: string[] = [];
    const cannotTell = uniq(parameters.cannotTell || empty).filter(isWcagTest);
    const notApplicable = (parameters.notApplicable || empty).filter(isWcagTest);
    const pass = (parameters.pass || empty).filter(isWcagTest);
    const fail = (parameters.fail || empty).filter(isWcagTest);
    const notTested = (parameters.notTested || empty).filter(isWcagTest);

    const all: WcagTest[] = [...cannotTell, ...fail, ...notApplicable, ...notTested, ...pass];

    return {
      all,
      author: parameters.author,
      cannotTell,
      date: parameters.date,
      fail,
      notApplicable,
      notTested,
      pass,
    };
  };

  const extendAudit = (partialAudit: Partial<WcagAudit>, baseAudit: Partial<WcagAudit>) => {
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

  const baseAudit = createWcagAudit(
    (meta.csfFile?.meta?.parameters && meta.csfFile?.meta?.parameters['wcagAudit']) || {},
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
          <dt>Evaluatiemethode:</dt>
          <dd>WCAG-EM 1.0</dd>
        </div>
        <div>
          <dt>Beoogd conformiteitsniveau:</dt>
          <dd>
            WCAG 2.2 Niveau AA, volgens de <a href="https://nldesignsystem.nl/baseline">NL Design System Baseline</a>
          </dd>
        </div>
        <div>
          <dt>Opdrachtgever:</dt>
          <dd>
            <a href="https://nldesignsystem.nl/project/kernteam">Design System Lead van NL Design System</a>
          </dd>
        </div>
        <div>
          <dt>Reikweidte van het onderzoek:</dt>
          <dd>
            Per story wordt er 1 los WCAG-EM onderzoek gedaan, omdat de stories niet verbonden zijn en geen gedeelde
            context hebben. De <a href="https://www.w3.org/TR/WCAG-EM/#step1a">reikwijdte van dat onderzoek</a> is dus
            alleen 1 losse webpagina. Voor de steekproef moet je de webpagina in een eigen window openen, in plaats van
            als Story bekijken als onderdeel van Storybook.
          </dd>
        </div>
        <div>
          <dt>Gebruikte technologie:</dt>
          <dd>
            <ul>
              <li>CSS</li>
              <li>HTML</li>
              <li>JavaScript</li>
              <li>React</li>
            </ul>
          </dd>
        </div>
      </dl>
      <p>
        Neem contact op met <a href="https://nldesignsystem.nl/colofon">NL Design System</a> voor vragen over deze
        toegankelijkheidsverklaring.
      </p>
    </>
  );

  return (
    <div>
      <h2>Toegankelijkheidsverklaring</h2>
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

        const partialAudit = createWcagAudit((story.parameters && story.parameters['wcagAudit']) || {});
        const wcagAudit = extendAudit(partialAudit, baseAudit);

        const baseline =
          typeof wcagAudit.date === 'string' &&
          baselineVersions.findLast((baseline) => Date.parse(wcagAudit.date || '') >= Date.parse(baseline.date));

        return (
          <div key={story.id}>
            <h3>
              <a href={url} target="wcag_evaluation">
                {story.name}
              </a>
            </h3>
            {fullReport ? CommonData() : null}
            <dl>
              <div>
                <dt>URL van de steekproef:</dt>
                <dd>
                  <code>{url}</code>
                </dd>
              </div>
              {wcagAudit.author ? (
                <div>
                  <dt>Onderzoeker:</dt>
                  <dd>{wcagAudit.author}</dd>
                </div>
              ) : null}
              {wcagAudit.date ? (
                <div>
                  <dt>Datum van het onderzoek:</dt>
                  <dd>
                    {new Intl.DateTimeFormat('nl-NL', {
                      dateStyle: 'full',
                    }).format(new Date(wcagAudit.date))}
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
            <p>
              Getoetst op {wcagAudit.all?.length || 0} van de {WCAG22_AA_LEVEL.length} succescriteria voor WCAG 2.2
              Niveau AA.
            </p>
            <ul>
              <li>
                <Result label="Voldoet" list={wcagAudit.pass} />
              </li>
              <li>
                <Result label="Voldoet niet" list={wcagAudit.fail} />
              </li>
              <li>
                <Result label="Kan niet worden vastgesteld" list={wcagAudit.cannotTell} />
              </li>
              <li>
                <Result label="Niet van toepassing" list={wcagAudit.notApplicable} />
              </li>
              <li>
                <Result label="Niet getest" list={wcagAudit.notTested} />
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}
