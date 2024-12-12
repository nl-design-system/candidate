import { useOf } from '@storybook/blocks';
import uniq from 'lodash-es/uniq';
import { isWcagTest, WCAG22_AA_LEVEL, WcagAudit, WcagTest } from './WcagAudit';

export function WcagAuditReport() {
  const resolvedOf = useOf<'story'>('story');
  const wcagAudit: WcagAudit = resolvedOf.story.parameters['wcagAudit'];

  if (!wcagAudit) {
    return null;
  }

  const empty: string[] = [];
  const cannotTell = uniq(wcagAudit.cannotTell || empty).filter(isWcagTest);
  const notApplicable = (wcagAudit.notApplicable || empty).filter(isWcagTest);
  const pass = (wcagAudit.pass || empty).filter(isWcagTest);
  const fail = (wcagAudit.fail || empty).filter(isWcagTest);
  const notTested = (wcagAudit.notTested || empty).filter(isWcagTest);

  const all: WcagTest[] = [...cannotTell, ...fail, ...notApplicable, ...notTested, ...pass];

  const Result = ({ label, list }: { label: string; list: WcagTest[] }) =>
    list.length >= 1 ? (
      <details>
        <summary>
          {label}: {list.length}
        </summary>
        <ul>
          {list.map((test) => (
            <li key={test}>
              <a href={test}>{test}</a>
            </li>
          ))}
        </ul>
      </details>
    ) : (
      <p>
        {label}: {list.length}
      </p>
    );

  return (
    <div>
      <h2>WCAG evaluatie</h2>
      <p>
        Evaluatie op{' '}
        {new Intl.DateTimeFormat('nl-NL', {
          dateStyle: 'full',
        }).format(new Date(wcagAudit.date))}{' '}
        van {all.length} van de {WCAG22_AA_LEVEL.length} succescriteria voor WCAG 2.2 Niveau AA.
      </p>
      <p>De steekproef bestaat uit de stories van deze component.</p>
      <ul>
        <li>
          <Result label="Voldoet" list={pass} />
        </li>
        <li>
          <Result label="Voldoet niet" list={fail} />
        </li>
        <li>
          <Result label="Kan niet worden vastgesteld" list={cannotTell} />
        </li>
        <li>
          <Result label="Niet van toepassing" list={notApplicable} />
        </li>
        <li>
          <Result label="Niet getest" list={notTested} />
        </li>
      </ul>
    </div>
  );
}
