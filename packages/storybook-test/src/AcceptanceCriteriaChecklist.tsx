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
  const acceptanceCriteriaData =
    (meta.csfFile?.meta?.parameters && meta.csfFile?.meta?.parameters['acceptanceCriteriaData']) || [];

  if (acceptanceCriteriaData.length === 0) {
    return null;
  }

  const stories = Object.values(meta.csfFile?.stories || {});

  const storyAcceptanceCriteria = new Set(
    stories.flatMap((story) => (story.parameters && story.parameters['acceptanceCriteriaList']) || []),
  );

  return (
    <div>
      <h2>Acceptatiecriteria</h2>
      <ul>
        {acceptanceCriteriaData.map(({ id, title }) => {
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
  acceptanceCriteriaData: AcceptanceCriterium[];
  storyAcceptanceCriteria: string[];
}

export const AcceptanceCriteriaStoryChecklist = ({
  acceptanceCriteriaData,
  storyAcceptanceCriteria,
}: AcceptanceCriteriaStoryChecklistProps) => {
  return (
    <div>
      <h4>Acceptatiecriteria</h4>
      <ul>
        {storyAcceptanceCriteria.map((id) => {
          const data = acceptanceCriteriaData.find(({ id: uuid }) => id === uuid);
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
    </div>
  );
};
