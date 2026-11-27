import { useOf } from '@storybook/addon-docs/blocks';

export interface AcceptanceCriterium {
  id: string;
  context: string[];
  sc: string;
  status: string;
  tags: string[];
  title: string;
}

export function AcceptanceCriteriaOverviewChecklist() {
  const meta = useOf<'meta'>('meta');
  const acceptanceCriteriaData: Map<string, AcceptanceCriterium> =
    (meta.csfFile?.meta?.parameters && meta.csfFile?.meta?.parameters['acceptanceCriteriaData']) || new Map();

  if (acceptanceCriteriaData.size === 0) {
    return null;
  }
  const stories = Object.values(meta.csfFile?.stories || {});

  const storyAcceptanceCriteria = new Set(
    stories.flatMap((story) => (story.parameters && story.parameters['acceptanceCriteriaList']) || []),
  );

  return (
    <div>
      <h2>Acceptatiecriteria ({acceptanceCriteriaData.size})</h2>
      <ul>
        {acceptanceCriteriaData.values().map(({ id, title }) => {
          const isSuccess = storyAcceptanceCriteria.has(id);
          return (
            <li key={id}>
              {isSuccess ? '✅' : '☑️'}{' '}
              <a href={`https://nldesignsystem.nl/button#${id}`} target="_new">
                {title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export interface AcceptanceCriteriaStoryChecklistProps {
  acceptanceCriteriaData: Map<string, AcceptanceCriterium>;
  storyAcceptanceCriteria: string[];
  headingLevel: number;
}

export const AcceptanceCriteriaStoryChecklist = ({
  acceptanceCriteriaData,
  storyAcceptanceCriteria,
  headingLevel,
}: AcceptanceCriteriaStoryChecklistProps) => {
  const Heading = `h${headingLevel}`;
  return (
    <div>
      <Heading>Acceptatiecriteria</Heading>
      {acceptanceCriteriaData.size > 0 ? (
        <ul>
          {storyAcceptanceCriteria.map((id) => {
            const data = acceptanceCriteriaData.get(id);
            return (
              <li key={id}>
                {data ? (
                  <a href={`https://nldesignsystem.nl/button#${id}`} target="_new">
                    {data.title}
                  </a>
                ) : (
                  `Onbekend criterium: ${id}`
                )}
              </li>
            );
          })}
        </ul>
      ) : (
        <p>Geen acceptatiecriteria bekend.</p>
      )}
    </div>
  );
};
